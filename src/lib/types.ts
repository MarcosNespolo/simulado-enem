export type Discipline =
  | "linguagens"
  | "ciencias-humanas"
  | "ciencias-natureza"
  | "matematica";

export type Language = "ingles" | "espanhol";

export type Letter = "A" | "B" | "C" | "D" | "E";

export interface Alternative {
  letter: Letter;
  text: string | null;
  file: string | null;
}

export interface Question {
  id: string;
  year: number;
  index: number;
  discipline: Discipline;
  language: Language | null;
  context: string;
  files: string[];
  alternativesIntroduction: string;
  correctAlternative: Letter;
  alternatives: Alternative[];
}

/** Questão dentro de um simulado, com numeração sequencial própria. */
export interface SimuladoQuestion extends Question {
  number: number;
}

export interface SimuladoConfig {
  counts: Record<Discipline, number>;
  language: Language;
  timerEnabled: boolean;
  /** Filtro do modo avançado: tópicos selecionados por área (ausente/vazio = todos). */
  topics?: Partial<Record<Discipline, string[]>>;
}

export type SimuladoStatus = "in-progress" | "finished";

export interface Simulado {
  id: string;
  createdAt: string;
  config: SimuladoConfig;
  questions: SimuladoQuestion[];
  answers: Record<number, Letter>;
  flagged: number[];
  /** Níveis de dica usados por questão (number → 0 a 3). */
  hints: Record<number, number>;
  currentIndex: number;
  elapsedSeconds: number;
  totalSeconds: number; // limite quando config.timerEnabled
  status: SimuladoStatus;
}

export interface AreaResult {
  discipline: Discipline;
  total: number;
  correct: number;
  wrong: number;
  blank: number;
}

export interface Recommendation {
  discipline: Discipline;
  topic: string;
  /** Questões erradas ou em branco. */
  missed: number;
  /** Questões acertadas com ajuda de dicas. */
  hintedCorrect: number;
  total: number;
  /** Peso de revisão: erro vale mais que dica (usado para ordenar). */
  weight: number;
  hint: string;
}

export interface SimuladoResult {
  id: string;
  finishedAt: string;
  durationSeconds: number;
  timedOut: boolean;
  config: SimuladoConfig;
  total: number;
  correct: number;
  wrong: number;
  blank: number;
  perArea: AreaResult[];
  recommendations: Recommendation[];
  questions: SimuladoQuestion[];
  answers: Record<number, Letter>;
  hints: Record<number, number>;
}

export interface HistoryEntry {
  id: string;
  finishedAt: string;
  total: number;
  correct: number;
  durationSeconds: number;
  perArea: { discipline: Discipline; total: number; correct: number }[];
}
