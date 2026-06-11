/**
 * Baixa questões oficiais do ENEM da API pública enem.dev e salva em
 * src/data/questions/{ano}.json (+ manifest.json com metadados).
 *
 * Uso:
 *   node scripts/fetch-questions.mjs           # 5 anos mais recentes disponíveis
 *   node scripts/fetch-questions.mjs 2019 2023 # intervalo explícito
 *
 * Questões sem enunciado (context nulo), sem gabarito ou com alternativas
 * incompletas são descartadas — a fonte tem falhas de parsing pontuais e
 * exibir uma questão irrespondível quebraria a experiência do simulado.
 */

import fs from "node:fs/promises";
import path from "node:path";

const API = "https://api.enem.dev/v1";
const OUT_DIR = path.join(process.cwd(), "src", "data", "questions");
const PAGE_SIZE = 50;
const DELAY_MS = 400;
const DEFAULT_YEARS_COUNT = 5;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url, attempt = 1) {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (res.status === 429 || res.status >= 500) {
    if (attempt > 5) throw new Error(`Falha após 5 tentativas: ${url} (${res.status})`);
    const wait = attempt * 2000;
    console.log(`  HTTP ${res.status}, aguardando ${wait}ms para tentar de novo...`);
    await sleep(wait);
    return fetchJson(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} em ${url}`);
  return res.json();
}

function isUsable(q) {
  if (!q.correctAlternative || !/^[A-E]$/.test(q.correctAlternative)) return false;
  const context = (q.context ?? "").trim();
  if (context.length < 10) return false;
  if (!Array.isArray(q.alternatives) || q.alternatives.length !== 5) return false;
  const lettersOk = q.alternatives.every(
    (a) => /^[A-E]$/.test(a.letter) && ((a.text ?? "").trim() !== "" || (a.file ?? "") !== "")
  );
  if (!lettersOk) return false;
  const hasCorrect = q.alternatives.some((a) => a.letter === q.correctAlternative);
  return hasCorrect;
}

function normalize(q) {
  return {
    id: `${q.year}-${q.index}-${q.language ?? "pt"}`,
    year: q.year,
    index: q.index,
    discipline: q.discipline,
    language: q.language ?? null,
    context: q.context.trim(),
    files: q.files ?? [],
    alternativesIntroduction: (q.alternativesIntroduction ?? "").trim(),
    correctAlternative: q.correctAlternative,
    alternatives: q.alternatives.map((a) => ({
      letter: a.letter,
      text: a.text ?? null,
      file: a.file ?? null,
    })),
  };
}

async function fetchYear(year) {
  const all = [];
  let offset = 0;
  let total = Infinity;
  while (offset < total) {
    const url = `${API}/exams/${year}/questions?limit=${PAGE_SIZE}&offset=${offset}`;
    const page = await fetchJson(url);
    total = page.metadata.total;
    all.push(...page.questions);
    offset += PAGE_SIZE;
    await sleep(DELAY_MS);
  }

  // A listagem padrão traz apenas a variante em espanhol das questões de
  // língua estrangeira (1-5). Busca a primeira página com language=ingles
  // para incluir também as variantes em inglês.
  const en = await fetchJson(`${API}/exams/${year}/questions?limit=${PAGE_SIZE}&offset=0&language=ingles`);
  const seen = new Set(all.map((q) => `${q.index}-${q.language ?? "pt"}`));
  for (const q of en.questions) {
    if (q.language === "ingles" && !seen.has(`${q.index}-ingles`)) all.push(q);
  }
  await sleep(DELAY_MS);

  return all;
}

async function main() {
  const args = process.argv.slice(2).map(Number);
  let years;
  if (args.length === 2 && args.every((n) => Number.isInteger(n))) {
    const [from, to] = args;
    years = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  } else {
    const exams = await fetchJson(`${API}/exams`);
    years = exams
      .map((e) => e.year)
      .sort((a, b) => b - a)
      .slice(0, DEFAULT_YEARS_COUNT)
      .sort((a, b) => a - b);
  }

  console.log(`Baixando ENEM: ${years.join(", ")}\n`);
  await fs.mkdir(OUT_DIR, { recursive: true });

  const manifest = { generatedAt: new Date().toISOString(), source: "https://enem.dev", years: [], counts: {} };

  for (const year of years) {
    console.log(`ENEM ${year}...`);
    const raw = await fetchYear(year);
    const kept = raw.filter(isUsable).map(normalize);
    const dropped = raw.length - kept.length;

    const byDiscipline = {};
    for (const q of kept) byDiscipline[q.discipline] = (byDiscipline[q.discipline] ?? 0) + 1;

    await fs.writeFile(path.join(OUT_DIR, `${year}.json`), JSON.stringify(kept), "utf8");
    manifest.years.push(year);
    manifest.counts[year] = { total: raw.length, kept: kept.length, dropped, byDiscipline };
    console.log(`  ${kept.length} questões válidas (${dropped} descartadas)`);
  }

  await fs.writeFile(path.join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log("\nManifesto salvo. Concluído.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
