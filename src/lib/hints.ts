import type { Letter, SimuladoQuestion } from "./types";
import { tagQuestion } from "./topics";
import { CONTEUDOS } from "@/data/conteudos";

/**
 * Dicas progressivas por questão (até 3 níveis):
 *  1. Estratégia: como atacar questões desse conteúdo.
 *  2. Eliminação: descarta 2 alternativas erradas.
 *  3. Quase resposta: descarta mais uma, deixando a correta e uma errada.
 *
 * As alternativas eliminadas são escolhidas de forma determinística a partir
 * do id da questão, para não mudarem ao navegar entre questões.
 */

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

/** Dicas reveladas até o nível informado, na ordem. */
export function hintsFor(question: SimuladoQuestion, level: number): HintInfo[] {
  const revealed: HintInfo[] = [];
  if (level >= 1) {
    const estrategia = CONTEUDOS[tagQuestion(question)]?.estrategia;
    revealed.push({
      level: 1,
      titulo: "Como atacar",
      texto:
        estrategia ??
        "Releia o comando da questão e sublinhe o que ele pede; depois volte ao enunciado procurando apenas essa informação.",
    });
  }
  if (level >= 2) {
    const eliminated = eliminatedFor(question, 2);
    revealed.push({
      level: 2,
      titulo: "Eliminando alternativas",
      texto: `Descarte as alternativas ${listLetters(eliminated)}: elas não respondem ao que o comando pede.`,
    });
  }
  if (level >= 3) {
    const eliminated = eliminatedFor(question, 3);
    const remaining = question.alternatives
      .map((a) => a.letter)
      .filter((letter) => !eliminated.includes(letter));
    revealed.push({
      level: 3,
      titulo: "Quase lá",
      texto: `Ficou entre ${listLetters(remaining)}. Volte ao trecho do enunciado que trata diretamente da pergunta: uma das duas o contradiz.`,
    });
  }
  return revealed;
}

export const MAX_HINTS = 3;
