/**
 * Gera 3 dicas progressivas por questão usando a API da Anthropic e salva em
 * src/data/question-hints.json (usado por src/lib/hints.ts no lugar das dicas
 * heurísticas).
 *
 * As 3 dicas formam uma RESOLUÇÃO guiada (passo a passo até a resposta), em
 * Markdown + LaTeX. O site renderiza LaTeX via KaTeX (ver src/components/Markdown.tsx).
 *
 * Uso:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs           # todas
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs 2023      # um ano
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs --limit 50
 *   HINTS_MODEL=claude-haiku-4-5 ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs
 *
 * - Retoma de onde parou (pula ids já presentes no JSON) e salva a cada lote.
 * - Modelo padrão: claude-sonnet-4-6 (cálculos de matemática mais confiáveis).
 *   Override via HINTS_MODEL. Custo estimado p/ ~850 questões: ~US$ 9 no sonnet,
 *   ~US$ 3 no haiku.
 */

import fs from "node:fs/promises";
import path from "node:path";

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.HINTS_MODEL || "claude-sonnet-4-6";
const DATA_DIR = path.join(process.cwd(), "src", "data", "questions");
const OUT_FILE = path.join(process.cwd(), "src", "data", "question-hints.json");
const SAVE_EVERY = 20;
const DELAY_MS = 300;

const SYSTEM = String.raw`Você é um professor paciente. Para cada questão do ENEM (enunciado, alternativas e gabarito), crie uma RESOLUÇÃO guiada dividida em EXATAMENTE 3 dicas progressivas. Juntas, as 3 dicas formam o passo a passo que leva o aluno até a resposta correta, como um professor resolvendo no quadro.

Quem vai ler são alunos do ensino médio. Escreva de forma MUITO clara, simples e direta.

As 3 dicas, nesta ordem:
1) POR ONDE COMEÇAR: explique com suas palavras o que a questão pede e qual é a ideia, fórmula ou raciocínio para começar. Em matemática, mostre a fórmula ou a relação principal. Em interpretação/humanas, diga exatamente o que procurar no texto.
2) MONTANDO A SOLUÇÃO: dê o próximo passo concreto. Em matemática, identifique os valores e monte a conta (substitua na fórmula). Em interpretação, cite o trecho-chave e explique o que ele mostra.
3) CHEGANDO NA RESPOSTA: termine o cálculo ou o raciocínio até o resultado final, de um jeito que o aluno consiga identificar sozinho a alternativa correta. Pode reescrever com outras palavras o conteúdo da resposta certa.

REGRAS:
- RESOLVA a questão de verdade, com os números e o raciocínio reais. NÃO dê conselhos genéricos como "releia o enunciado", "preste atenção" ou "elimine alternativas".
- NUNCA mencione letras de alternativas (A, B, C, D ou E).
- Cada dica tem de 1 a 4 frases. Em matemática, inclua as contas.

FORMATAÇÃO (o site renderiza Markdown + LaTeX):
- Escreva as expressões matemáticas em LaTeX. Use $...$ para fórmulas no meio da frase e $$...$$ (em uma linha só, separada) para fórmulas em destaque.
  Exemplo: $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
- Use \frac{}{} para fração, ^{} para potência, \sqrt{} para raiz, \times para multiplicação, \% para porcentagem.
- Para dinheiro, escreva o cifrão SEMPRE escapado como R\$ (com a barra invertida). Exemplo: R\$ 2.000,00. Nunca escreva R$ sem a barra, porque quebra a renderização.
- Pode usar **negrito** para destacar o resultado final.

Responda EXATAMENTE neste formato, sem mais nada antes ou depois:
===DICA1===
(texto da dica 1)
===DICA2===
(texto da dica 2)
===DICA3===
(texto da dica 3)`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function buildPrompt(q) {
  const alternativas = q.alternatives
    .map((a) => `${a.letter}) ${a.text ?? "[imagem]"}`)
    .join("\n");
  return `QUESTÃO (ENEM ${q.year}, ${q.discipline}):

${q.context}

COMANDO: ${q.alternativesIntroduction || "(sem comando separado)"}

ALTERNATIVAS:
${alternativas}

GABARITO: ${q.correctAlternative}

Gere as 3 dicas progressivas no formato pedido.`;
}

function parseHints(text) {
  const m = text.match(
    /===\s*DICA\s*1\s*===([\s\S]*?)===\s*DICA\s*2\s*===([\s\S]*?)===\s*DICA\s*3\s*===([\s\S]*)/i
  );
  if (!m) throw new Error(`Resposta fora do formato: ${text.slice(0, 120)}`);
  const dicas = [m[1].trim(), m[2].trim(), m[3].trim()];
  if (dicas.some((d) => !d)) throw new Error("Dica vazia");
  return dicas;
}

async function generateFor(q, attempt = 1) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1500,
      system: SYSTEM,
      messages: [{ role: "user", content: buildPrompt(q) }],
    }),
  });

  if (res.status === 429 || res.status >= 500) {
    if (attempt > 5) throw new Error(`Falha após 5 tentativas (${res.status})`);
    await sleep(attempt * 3000);
    return generateFor(q, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);

  const data = await res.json();
  const text = data.content?.[0]?.text ?? "";
  return parseHints(text);
}

async function main() {
  if (!API_KEY) {
    console.error("Defina ANTHROPIC_API_KEY no ambiente.");
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const limitIdx = args.indexOf("--limit");
  const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity;
  const yearFilter = args.find((a) => /^\d{4}$/.test(a));

  const files = (await fs.readdir(DATA_DIR)).filter(
    (f) => f.endsWith(".json") && f !== "manifest.json" && (!yearFilter || f === `${yearFilter}.json`)
  );

  const questions = [];
  for (const file of files) {
    questions.push(...JSON.parse(await fs.readFile(path.join(DATA_DIR, file), "utf8")));
  }

  let hints = {};
  try {
    hints = JSON.parse(await fs.readFile(OUT_FILE, "utf8"));
  } catch {
    // arquivo ainda não existe ou vazio
  }

  const pending = questions.filter((q) => !hints[q.id]).slice(0, limit);
  console.log(`Modelo: ${MODEL}`);
  console.log(`Total: ${questions.length} questões; já geradas: ${questions.length - pending.length}; pendentes nesta execução: ${pending.length}\n`);

  let done = 0;
  for (const q of pending) {
    try {
      hints[q.id] = await generateFor(q);
      done += 1;
      if (done % SAVE_EVERY === 0) {
        await fs.writeFile(OUT_FILE, JSON.stringify(hints, null, 1), "utf8");
        console.log(`  ${done}/${pending.length} salvas...`);
      }
    } catch (err) {
      console.error(`  ERRO em ${q.id}: ${err.message}`);
    }
    await sleep(DELAY_MS);
  }

  await fs.writeFile(OUT_FILE, JSON.stringify(hints, null, 1), "utf8");
  console.log(`\nConcluído: ${done} dicas geradas nesta execução. Total no arquivo: ${Object.keys(hints).length}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
