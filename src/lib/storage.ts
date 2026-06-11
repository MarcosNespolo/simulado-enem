import type { HistoryEntry, Simulado, SimuladoResult } from "./types";

/**
 * Persistência local (sem login): o simulado em andamento, o último resultado
 * completo (para a revisão) e um histórico enxuto dos resultados anteriores.
 */
const KEY_CURRENT = "simulado-enem:current";
const KEY_LAST_RESULT = "simulado-enem:last-result";
const KEY_HISTORY = "simulado-enem:history";

const HISTORY_LIMIT = 20;

function read<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage cheio ou indisponível: a sessão continua funcionando em memória
  }
}

function remove(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignora
  }
}

export const loadCurrent = () => read<Simulado>(KEY_CURRENT);
export const saveCurrent = (simulado: Simulado) => write(KEY_CURRENT, simulado);
export const clearCurrent = () => remove(KEY_CURRENT);

export const loadLastResult = () => read<SimuladoResult>(KEY_LAST_RESULT);
export const saveLastResult = (result: SimuladoResult) => write(KEY_LAST_RESULT, result);

export const loadHistory = () => read<HistoryEntry[]>(KEY_HISTORY) ?? [];
export const clearHistory = () => remove(KEY_HISTORY);

export function pushHistory(entry: HistoryEntry): void {
  const history = [entry, ...loadHistory()].slice(0, HISTORY_LIMIT);
  write(KEY_HISTORY, history);
}
