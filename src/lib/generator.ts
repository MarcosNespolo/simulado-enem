import type { Question, SimuladoConfig, SimuladoQuestion } from "./types";
import { AREA_ORDER } from "./areas";
import { topicOfCached } from "./topics";

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Monta um simulado sorteando questões da pool, respeitando a quantidade
 * pedida por área e o idioma escolhido para língua estrangeira. As áreas
 * seguem a ordem da prova real; a numeração é sequencial.
 */
export function generateSimulado(config: SimuladoConfig, pool: Question[]): SimuladoQuestion[] {
  const result: SimuladoQuestion[] = [];
  let number = 1;

  for (const area of AREA_ORDER) {
    const count = config.counts[area] ?? 0;
    if (count <= 0) continue;

    let candidates = pool.filter(
      (q) => q.discipline === area && (q.language === null || q.language === config.language)
    );

    const selectedTopics = config.topics?.[area];
    if (selectedTopics && selectedTopics.length > 0) {
      candidates = candidates.filter((q) => selectedTopics.includes(topicOfCached(q)));
    }

    const picked = shuffle(candidates).slice(0, Math.min(count, candidates.length));

    for (const q of picked) {
      result.push({ ...q, number: number++ });
    }
  }

  return result;
}
