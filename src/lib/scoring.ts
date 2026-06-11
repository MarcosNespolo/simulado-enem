import type { AreaResult, HistoryEntry, Simulado, SimuladoResult } from "./types";
import { AREA_ORDER } from "./areas";
import { buildRecommendations } from "./topics";

export function computeResult(simulado: Simulado, timedOut: boolean): SimuladoResult {
  const perArea: AreaResult[] = [];

  for (const area of AREA_ORDER) {
    const questions = simulado.questions.filter((q) => q.discipline === area);
    if (questions.length === 0) continue;

    let correct = 0;
    let blank = 0;
    for (const q of questions) {
      const answer = simulado.answers[q.number];
      if (!answer) blank += 1;
      else if (answer === q.correctAlternative) correct += 1;
    }
    perArea.push({
      discipline: area,
      total: questions.length,
      correct,
      blank,
      wrong: questions.length - correct - blank,
    });
  }

  const total = simulado.questions.length;
  const correct = perArea.reduce((acc, a) => acc + a.correct, 0);
  const blank = perArea.reduce((acc, a) => acc + a.blank, 0);

  const hints = simulado.hints ?? {};

  return {
    id: simulado.id,
    finishedAt: new Date().toISOString(),
    durationSeconds: simulado.elapsedSeconds,
    timedOut,
    config: simulado.config,
    total,
    correct,
    blank,
    wrong: total - correct - blank,
    perArea,
    recommendations: buildRecommendations(simulado.questions, simulado.answers, hints),
    questions: simulado.questions,
    answers: simulado.answers,
    hints,
  };
}

export function toHistoryEntry(result: SimuladoResult): HistoryEntry {
  return {
    id: result.id,
    finishedAt: result.finishedAt,
    total: result.total,
    correct: result.correct,
    durationSeconds: result.durationSeconds,
    perArea: result.perArea.map((a) => ({
      discipline: a.discipline,
      total: a.total,
      correct: a.correct,
    })),
  };
}
