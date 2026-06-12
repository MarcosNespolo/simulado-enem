import type { Letter, SimuladoQuestion } from "./types";
import { tagQuestion } from "./topics";
import { CONTEUDOS } from "@/data/conteudos";
import CURATED_RAW from "@/data/question-hints.json";

/**
 * Dicas progressivas por questão (até 3 níveis):
 *  1. Direcionamento: o que o comando desta questão pede + como atacar.
 *  2. Eliminação: descarta 2 alternativas erradas.
 *  3. Quase resposta: descarta mais uma e aponta o trecho-chave do enunciado.
 *
 * Quando existir dica curada para a questão em src/data/question-hints.json
 * (gerada por scripts/generate-hints.mjs), ela substitui o texto heurístico.
 * A eliminação visual de alternativas vale nos dois casos.
 */

const CURATED = CURATED_RAW as Record<string, string[]>;

export interface HintInfo {
  level: 1 | 2 | 3;
  titulo: string;
  texto: string;
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/** Alternativas eliminadas acumuladas até o nível de dica informado. */
export function eliminatedFor(question: SimuladoQuestion, level: number): Letter[] {
  if (level < 2) return [];
  const wrong = question.alternatives
    .map((a) => a.letter)
    .filter((letter) => letter !== question.correctAlternative);
  const start = hashString(question.id) % wrong.length;
  const rotated = [...wrong.slice(start), ...wrong.slice(0, start)];
  return rotated.slice(0, level === 2 ? 2 : 3);
}

function listLetters(letters: Letter[]): string {
  if (letters.length <= 1) return letters.join("");
  return `${letters.slice(0, -1).join(", ")} e ${letters[letters.length - 1]}`;
}

/* ------------------------- heurísticas de texto ------------------------- */

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const STOPWORDS = new Set([
  "que", "para", "com", "uma", "como", "mais", "pelo", "pela", "seus", "suas",
  "esse", "essa", "este", "esta", "isso", "isto", "entre", "sobre", "quando",
  "porque", "pois", "sendo", "foram", "será", "sera", "seria", "deve", "pode",
  "podem", "apenas", "ainda", "também", "tambem", "muito", "qual", "quais",
  "texto", "autor", "forma", "partir", "assim", "então", "entao", "alem",
]);

function contentWords(text: string): string[] {
  return normalizeText(text)
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}...`;
}

/**
 * Frase do enunciado com maior sobreposição de vocabulário com a alternativa
 * correta: aproximação do "trecho-chave" que sustenta o gabarito.
 */
function trechoChave(question: SimuladoQuestion): string | null {
  const correta = question.alternatives.find(
    (a) => a.letter === question.correctAlternative
  );
  if (!correta?.text) return null;

  const alvo = new Set(contentWords(correta.text));
  if (alvo.size === 0) return null;

  const frases = (question.context.match(/[^.!?\n]+[.!?]?/g) ?? [])
    .map((frase) => frase.trim())
    .filter((frase) => frase.length >= 50 && !frase.includes("!["));

  let melhor: string | null = null;
  let melhorScore = 1; // exige pelo menos 2 palavras em comum
  for (const frase of frases) {
    let score = 0;
    for (const word of contentWords(frase)) {
      if (alvo.has(word)) score += 1;
    }
    if (score > melhorScore) {
      melhorScore = score;
      melhor = frase;
    }
  }
  return melhor ? truncate(melhor, 220) : null;
}

/* ------------------------------ as dicas ------------------------------ */

function dica1(question: SimuladoQuestion): string {
  const curated = CURATED[question.id]?.[0];
  if (curated) return curated;

  const estrategia =
    CONTEUDOS[tagQuestion(question)]?.estrategia ??
    "Releia o comando e volte ao enunciado procurando apenas a informação pedida.";
  const comando = question.alternativesIntroduction.trim();
  if (comando !== "") {
    return `O que esta questão realmente pergunta: "${truncate(comando, 180)}". Com isso em mente: ${estrategia}`;
  }
  return estrategia;
}

function dica2(question: SimuladoQuestion): string {
  const eliminated = eliminatedFor(question, 2);
  const base = `Descarte as alternativas ${listLetters(eliminated)}.`;
  const curated = CURATED[question.id]?.[1];
  if (curated) return `${base} ${curated}`;
  return `${base} Compare as restantes com o que o comando pede: alternativa que extrapola o texto ou responde outra pergunta está fora.`;
}

function dica3(question: SimuladoQuestion): string {
  const eliminated = eliminatedFor(question, 3);
  const remaining = question.alternatives
    .map((a) => a.letter)
    .filter((letter) => !eliminated.includes(letter));
  const base = `Ficou entre ${listLetters(remaining)}.`;

  const curated = CURATED[question.id]?.[2];
  if (curated) return `${base} ${curated}`;

  const trecho = trechoChave(question);
  if (trecho) {
    return `${base} A resposta se apoia neste trecho do enunciado: "${trecho}". Uma das duas alternativas diz exatamente isso com outras palavras.`;
  }
  return `${base} Volte ao trecho do enunciado que trata diretamente da pergunta: uma das duas alternativas o contradiz.`;
}

/** Dicas reveladas até o nível informado, na ordem. */
export function hintsFor(question: SimuladoQuestion, level: number): HintInfo[] {
  const revealed: HintInfo[] = [];
  if (level >= 1) revealed.push({ level: 1, titulo: "Por onde começar", texto: dica1(question) });
  if (level >= 2) revealed.push({ level: 2, titulo: "Eliminando alternativas", texto: dica2(question) });
  if (level >= 3) revealed.push({ level: 3, titulo: "Quase lá", texto: dica3(question) });
  return revealed;
}

export const MAX_HINTS = 3;
