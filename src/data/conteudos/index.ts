/**
 * Material de estudo por tópico da taxonomia (src/lib/topics.ts), usado no
 * modo estudo dentro do simulado. Cada tópico traz uma aula em seções,
 * exemplo resolvido no estilo da prova, pontos-chave e a estratégia de
 * abordagem (que também alimenta a primeira dica das questões).
 *
 * As chaves precisam bater exatamente com os nomes dos tópicos.
 */

export interface ConteudoEstudo {
  ideiaCentral: string;
  aula: { titulo: string; texto: string }[];
  exemplo?: { enunciado: string; passos: string[]; resposta: string };
  pontosChave: string[];
  comoCaiNoEnem: string;
  /** Como atacar uma questão desse tópico; usada como Dica 1 no simulado. */
  estrategia: string;
}

import { CONTEUDOS_MATEMATICA } from "./matematica";
import { CONTEUDOS_NATUREZA } from "./natureza";
import { CONTEUDOS_HUMANAS } from "./humanas";
import { CONTEUDOS_LINGUAGENS } from "./linguagens";

export const CONTEUDOS: Record<string, ConteudoEstudo> = {
  ...CONTEUDOS_MATEMATICA,
  ...CONTEUDOS_NATUREZA,
  ...CONTEUDOS_HUMANAS,
  ...CONTEUDOS_LINGUAGENS,
};

/** Prompt para o aluno se aprofundar no conteúdo com a IA que preferir. */
export function promptAprofundar(topico: string, areaLabel: string): string {
  return `Você é um professor experiente preparando um aluno do ensino médio para o ENEM. Explique o conteúdo "${topico}" (área de ${areaLabel}) de forma didática e direta.

Estruture assim:
1. Os conceitos essenciais explicados em linguagem simples.
2. As fórmulas, definições ou datas que eu realmente preciso memorizar (se houver).
3. Dois exemplos resolvidos passo a passo, no estilo das questões contextualizadas do ENEM.
4. As pegadinhas e erros mais comuns que a prova explora nesse assunto.
5. Um mini-exercício para eu resolver agora (com o gabarito comentado no final).

Seja objetivo e foque no que cai na prova.`;
}
