/**
 * Gera 3 dicas específicas por questão usando a API da Anthropic e salva em
 * src/data/question-hints.json (usado por src/lib/hints.ts no lugar das
 * dicas heurísticas).
 *
 * Uso:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs           # todas
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs 2023      # um ano
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-hints.mjs --limit 50
 *
 * - Retoma de onde parou (pula ids já presentes no JSON) e salva a cada lote.
 * - Modelo: claude-haiku-4-5. Custo estimado para as ~850 questões: poucos
 *   dólares (entrada ~1k tokens e saída ~250 tokens por questão).
 */

import fs from "node:fs/promises";
import path from "node:path";

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-haiku-4-5";
const DATA_DIR = path.join(process.cwd(), "src", "data", "questions");
const OUT_FILE = path.join(process.cwd(), "src", "data", "question-hints.json");
const SAVE_EVERY = 20;
const DELAY_MS = 300;

const SYSTEM = `Você cria dicas pedagógicas para questões do ENEM. Para cada questão (enunciado, alternativas e gabarito), escreva EXATAMENTE 3 dicas progressivas e específicas daquela questão, em português:

1. PRIMEIRA dica: reformule o que a questão realmente pede e aponte em que parte do enunciado/figura prestar atenção, ou qual conceito aplicar. NÃO indique nenhuma alternativa.
2. SEGUNDA dica: avance no raciocínio: o caminho de resolução (o cálculo a montar, a relação a perceber, o trecho que sustenta a resposta), sem citar letras de alternativas.
3. TERCEIRA dica: praticamente entregue a resposta: conclua o raciocínio de forma que o aluno consiga identificar a alternativa correta sozinho. NÃO diga a letra (ex.: não escreva "a resposta é a C"), mas pode parafrasear o conteúdo da resposta correta.

Regras:
- Cada dica tem 1 a 3 frases, direta e didática.
- Nunca mencione letras de alternativas (A, B, C, D, E) em nenhuma dica.
- Responda APENAS com JSON válido: {"d1":"...","d2":"...","d3":"..."}`;

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

Gere as 3 dicas progressivas em JSON.`;
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
      max_tokens: 600,
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
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`Resposta sem JSON: ${text.slice(0, 120)}`);
  const parsed = JSON.parse(match[0]);
  if (!parsed.d1 || !parsed.d2 || !parsed.d3) throw new Error("JSON incompleto");
  return [String(parsed.d1), String(parsed.d2), String(parsed.d3)];
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
