/**
 * Verifica todas as URLs de imagem referenciadas nos JSONs de questões e
 * lista as que respondem com erro, com página HTML ou com o placeholder
 * broken-image.svg da enem.dev. Útil após baixar anos novos de questões.
 *
 * Uso: node scripts/audit-images.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "src", "data", "questions");
const CONCURRENCY = 10;

async function collectUrls() {
  const urls = new Set();
  const files = (await fs.readdir(DATA_DIR)).filter(
    (f) => f.endsWith(".json") && f !== "manifest.json"
  );
  for (const file of files) {
    const questions = JSON.parse(await fs.readFile(path.join(DATA_DIR, file), "utf8"));
    for (const q of questions) {
      const text = [q.context ?? "", ...(q.files ?? []), ...q.alternatives.map((a) => a.file ?? "")].join(" ");
      const matches = text.match(/https?:\/\/[^)\s'"]+/g) ?? [];
      for (const url of matches) {
        if (/\.(png|jpe?g|gif|svg|webp)/i.test(url)) urls.add(url);
      }
    }
  }
  return [...urls];
}

async function probe(url) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    const type = res.headers.get("content-type") ?? "";
    const length = res.headers.get("content-length") ?? "";
    return { url, status: res.status, type, length, finalUrl: res.url };
  } catch (err) {
    return { url, status: 0, type: "", length: "", finalUrl: "", error: String(err) };
  }
}

async function main() {
  const urls = await collectUrls();
  console.log(`Verificando ${urls.length} URLs de imagem...\n`);

  const results = [];
  let index = 0;
  async function worker() {
    while (index < urls.length) {
      const i = index++;
      results[i] = await probe(urls[i]);
      if ((i + 1) % 100 === 0) console.log(`  ${i + 1}/${urls.length}...`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const bad = results.filter(
    (r) => r.status !== 200 || r.type.startsWith("text/html") || r.finalUrl.includes("broken-image") || r.url.includes("broken-image")
  );

  console.log(`\n${bad.length} URLs problemáticas de ${urls.length}:`);
  for (const r of bad) {
    console.log(`  [${r.status}] ${r.type} ${r.url}${r.error ? " " + r.error : ""}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
