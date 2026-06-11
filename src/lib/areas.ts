import type { Discipline } from "./types";

/** Ordem das áreas seguindo a aplicação real da prova (dia 1 → dia 2). */
export const AREA_ORDER: Discipline[] = [
  "linguagens",
  "ciencias-humanas",
  "ciencias-natureza",
  "matematica",
];

export interface AreaStyle {
  label: string;
  short: string;
  /** Classes Tailwind estáticas (necessário para o JIT detectar). */
  dot: string;
  bar: string;
  chipBg: string;
  chipText: string;
  softBg: string;
  border: string;
}

export const AREAS: Record<Discipline, AreaStyle> = {
  linguagens: {
    label: "Linguagens, Códigos e suas Tecnologias",
    short: "Linguagens",
    dot: "bg-rose-500",
    bar: "bg-rose-500",
    chipBg: "bg-rose-100",
    chipText: "text-rose-700",
    softBg: "bg-rose-50",
    border: "border-rose-200",
  },
  "ciencias-humanas": {
    label: "Ciências Humanas e suas Tecnologias",
    short: "Humanas",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
    chipBg: "bg-amber-100",
    chipText: "text-amber-700",
    softBg: "bg-amber-50",
    border: "border-amber-200",
  },
  "ciencias-natureza": {
    label: "Ciências da Natureza e suas Tecnologias",
    short: "Natureza",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-700",
    softBg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  matematica: {
    label: "Matemática e suas Tecnologias",
    short: "Matemática",
    dot: "bg-sky-500",
    bar: "bg-sky-500",
    chipBg: "bg-sky-100",
    chipText: "text-sky-700",
    softBg: "bg-sky-50",
    border: "border-sky-200",
  },
};

export const MAX_PER_AREA = 45;
export const SECONDS_PER_QUESTION = 180; // ~3 min por questão, ritmo da prova real

export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}h${String(m).padStart(2, "0")}`;
  if (m > 0) return sec > 0 && m < 10 ? `${m}min ${sec}s` : `${m}min`;
  return `${sec}s`;
}

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
