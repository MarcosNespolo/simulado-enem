"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronDown,
  History,
  Languages,
  ListFilter,
  Loader2,
  Minus,
  PenLine,
  Play,
  Plus,
  Settings2,
  Timer,
  Trash2,
} from "lucide-react";
import type {
  Discipline,
  HistoryEntry,
  Language,
  Simulado,
  SimuladoConfig,
  SimuladoQuestion,
} from "@/lib/types";
import { AREA_ORDER, AREAS, MAX_PER_AREA, SECONDS_PER_QUESTION, formatDuration } from "@/lib/areas";
import { clearCurrent, clearHistory, loadCurrent, loadHistory, saveCurrent } from "@/lib/storage";

export interface TopicCount {
  topic: string;
  count: number;
}

const PRESETS = [20, 40, 90, 180];

const DEFAULT_COUNTS: Record<Discipline, number> = {
  linguagens: 5,
  "ciencias-humanas": 5,
  "ciencias-natureza": 5,
  matematica: 5,
};

const NO_TOPICS: Record<Discipline, string[]> = {
  linguagens: [],
  "ciencias-humanas": [],
  "ciencias-natureza": [],
  matematica: [],
};

function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter((c) => typeof c === "string" && c !== "").join(" ");
}

function distribute(total: number, areas: Discipline[]): Record<Discipline, number> {
  const counts = { ...DEFAULT_COUNTS };
  for (const area of AREA_ORDER) counts[area] = 0;
  if (areas.length === 0) return counts;
  const base = Math.floor(total / areas.length);
  let remainder = total - base * areas.length;
  for (const area of areas) {
    const extra = remainder > 0 ? 1 : 0;
    counts[area] = Math.min(MAX_PER_AREA, base + extra);
    remainder -= extra;
  }
  return counts;
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export default function HomeClient({
  years,
  totalQuestions,
  topicCounts,
}: {
  years: number[];
  totalQuestions: number;
  topicCounts: Record<Discipline, TopicCount[]>;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState<Simulado | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const [enabled, setEnabled] = useState<Record<Discipline, boolean>>({
    linguagens: true,
    "ciencias-humanas": true,
    "ciencias-natureza": true,
    matematica: true,
  });
  const [counts, setCounts] = useState<Record<Discipline, number>>(DEFAULT_COUNTS);
  const [language, setLanguage] = useState<Language>("ingles");
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [topics, setTopics] = useState<Record<Discipline, string[]>>(NO_TOPICS);
  const [topicsOpen, setTopicsOpen] = useState<Record<Discipline, boolean>>({
    linguagens: false,
    "ciencias-humanas": false,
    "ciencias-natureza": false,
    matematica: false,
  });
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /** Máximo de questões da área respeitando o filtro de conteúdo. */
  function maxFor(area: Discipline): number {
    const all = topicCounts[area];
    const selected = topics[area];
    const available =
      selected.length === 0
        ? all.reduce((acc, t) => acc + t.count, 0)
        : all.reduce((acc, t) => acc + (selected.includes(t.topic) ? t.count : 0), 0);
    return Math.min(MAX_PER_AREA, available);
  }

  function toggleTopic(area: Discipline, topic: string) {
    setTopics((prev) => {
      const list = prev[area].includes(topic)
        ? prev[area].filter((t) => t !== topic)
        : [...prev[area], topic];
      const next = { ...prev, [area]: list };

      // Reaproveita o cálculo de maxFor com a seleção nova para não deixar
      // o stepper acima do disponível.
      const all = topicCounts[area];
      const available =
        list.length === 0
          ? all.reduce((acc, t) => acc + t.count, 0)
          : all.reduce((acc, t) => acc + (list.includes(t.topic) ? t.count : 0), 0);
      const cap = Math.max(1, Math.min(MAX_PER_AREA, available));
      setCounts((c) => (c[area] > cap ? { ...c, [area]: cap } : c));

      return next;
    });
  }

  function clearTopics(area: Discipline) {
    setTopics((prev) => ({ ...prev, [area]: [] }));
  }

  useEffect(() => {
    // Carga única do localStorage após a hidratação; o re-render é intencional.
    /* eslint-disable react-hooks/set-state-in-effect */
    setCurrent(loadCurrent());
    setHistory(loadHistory());
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const activeAreas = useMemo(
    () => AREA_ORDER.filter((a) => enabled[a]),
    [enabled]
  );

  const total = useMemo(
    () => activeAreas.reduce((acc, a) => acc + counts[a], 0),
    [activeAreas, counts]
  );

  const estimatedSeconds = total * SECONDS_PER_QUESTION;

  async function generate(config: SimuladoConfig) {
    if (generating) return;
    if (current && current.status === "in-progress") {
      const ok = window.confirm(
        "Você tem um simulado em andamento. Gerar um novo vai descartá-lo. Continuar?"
      );
      if (!ok) return;
    }
    setGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/simulado", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(config),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Não foi possível gerar o simulado.");
      }
      const data = (await res.json()) as { questions: SimuladoQuestion[] };
      const simulado: Simulado = {
        id: makeId(),
        createdAt: new Date().toISOString(),
        config,
        questions: data.questions,
        answers: {},
        flagged: [],
        currentIndex: 0,
        elapsedSeconds: 0,
        totalSeconds: config.timerEnabled
          ? data.questions.length * SECONDS_PER_QUESTION
          : 0,
        status: "in-progress",
      };
      saveCurrent(simulado);
      router.push("/simulado");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado. Tente de novo.");
      setGenerating(false);
    }
  }

  function generateCustom() {
    const effective = { ...counts };
    const selectedTopics: Partial<Record<Discipline, string[]>> = {};
    for (const area of AREA_ORDER) {
      if (!enabled[area]) {
        effective[area] = 0;
        continue;
      }
      if (topics[area].length > 0) selectedTopics[area] = topics[area];
    }
    void generate({
      counts: effective,
      language,
      timerEnabled,
      ...(Object.keys(selectedTopics).length > 0 ? { topics: selectedTopics } : {}),
    });
  }

  function applyPreset(presetTotal: number) {
    const areas = activeAreas.length > 0 ? activeAreas : AREA_ORDER;
    if (activeAreas.length === 0) {
      setEnabled({
        linguagens: true,
        "ciencias-humanas": true,
        "ciencias-natureza": true,
        matematica: true,
      });
    }
    const distributed = distribute(presetTotal, areas);
    for (const area of areas) {
      distributed[area] = Math.max(1, Math.min(distributed[area], maxFor(area)));
    }
    setCounts(distributed);
  }

  function toggleArea(area: Discipline) {
    setEnabled((prev) => ({ ...prev, [area]: !prev[area] }));
  }

  function step(area: Discipline, delta: number) {
    const cap = Math.max(1, maxFor(area));
    setCounts((prev) => ({
      ...prev,
      [area]: Math.min(cap, Math.max(1, prev[area] + delta)),
    }));
  }

  function discardCurrent() {
    const ok = window.confirm("Descartar o simulado em andamento? As respostas serão perdidas.");
    if (!ok) return;
    clearCurrent();
    setCurrent(null);
  }

  function handleClearHistory() {
    const ok = window.confirm("Apagar todo o histórico de resultados?");
    if (!ok) return;
    clearHistory();
    setHistory([]);
  }

  const answeredCount = current ? Object.keys(current.answers).length : 0;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:pt-8">
      {/* Simulado em andamento */}
      {mounted && current && current.status === "in-progress" && (
        <section className="mb-6 animate-fade-in">
          <div className="flex flex-col gap-4 rounded-2xl border border-indigo-200 bg-surface p-5 shadow-sm sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-400">
              <Play className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-zinc-900">Simulado em andamento</h2>
              <p className="mt-0.5 text-sm text-zinc-600">
                {answeredCount} de {current.questions.length} questões respondidas ·
                iniciado em {formatDate(current.createdAt)}
              </p>
              <div className="mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all"
                  style={{ width: `${(answeredCount / current.questions.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={discardCurrent}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
                Descartar
              </button>
              <button
                type="button"
                onClick={() => router.push("/simulado")}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Continuar
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Guia da redação */}
      <section className="mb-6">
        <Link
          href="/redacao"
          className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-surface p-5 transition hover:border-indigo-300"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-400">
            <PenLine className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-zinc-900">Guia da Redação</span>
            <span className="mt-0.5 block text-sm text-zinc-600">
              Como a banca corrige, temas das últimas edições, quiz de regras,
              temas de treino com redações-modelo e correção por IA.
            </span>
          </span>
          <ArrowRight
            className="h-5 w-5 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-400"
            aria-hidden
          />
        </Link>
      </section>

      {/* Configuração do simulado */}
      <section>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-surface shadow-sm">
          <div className="border-b border-zinc-100 p-5 sm:p-6">
            <h1 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
              <Settings2 className="h-5 w-5 text-indigo-400" aria-hidden />
              Monte seu simulado
            </h1>
            <p className="mt-1 max-w-3xl text-sm text-zinc-600">
              {totalQuestions} questões oficiais do ENEM ({years[0]}–
              {years[years.length - 1]}), sorteadas na hora. Responda no ritmo
              da prova e receba um diagnóstico do que estudar. Grátis, sem
              cadastro.
            </p>
          </div>

          <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_280px]">
            <div className="space-y-6">
              {/* Presets */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-zinc-700">Tamanho do simulado</h3>
                <div className="flex flex-wrap gap-2">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => applyPreset(preset)}
                      className={cx(
                        "h-9 rounded-lg border px-4 text-sm font-medium transition",
                        total === preset
                          ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                          : "border-zinc-200 bg-surface text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                      )}
                    >
                      {preset} questões
                    </button>
                  ))}
                </div>
              </div>

              {/* Áreas */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-zinc-700">
                  Áreas de conhecimento
                </h3>
                <div className="space-y-2">
                  {AREA_ORDER.map((area) => {
                    const style = AREAS[area];
                    const isOn = enabled[area];
                    const areaTopics = topicCounts[area];
                    const selectedTopics = topics[area];
                    const isFiltered = selectedTopics.length > 0;
                    const open = topicsOpen[area];
                    const cap = Math.max(1, maxFor(area));
                    return (
                      <div
                        key={area}
                        className={cx(
                          "rounded-xl border transition",
                          isOn ? "border-zinc-200 bg-surface" : "border-zinc-100 bg-zinc-50"
                        )}
                      >
                        <div className="flex items-center gap-3 p-3">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={isOn}
                          aria-label={`Incluir ${style.short}`}
                          onClick={() => toggleArea(area)}
                          className={cx(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition",
                            isOn
                              ? "border-indigo-600 bg-indigo-600 text-white"
                              : "border-zinc-300 bg-surface"
                          )}
                        >
                          {isOn && <Check className="h-3.5 w-3.5" aria-hidden />}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleArea(area)}
                          className="flex min-w-0 flex-1 items-center gap-2 text-left"
                        >
                          <span className={cx("h-2.5 w-2.5 shrink-0 rounded-full", style.dot)} aria-hidden />
                          <span
                            className={cx(
                              "truncate text-sm font-medium",
                              isOn ? "text-zinc-900" : "text-zinc-400"
                            )}
                          >
                            <span className="sm:hidden">{style.short}</span>
                            <span className="hidden sm:inline">{style.label}</span>
                          </span>
                        </button>
                        <div
                          className={cx(
                            "flex items-center gap-1 rounded-lg border border-zinc-200 bg-surface p-0.5",
                            !isOn && "pointer-events-none opacity-40"
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => step(area, -1)}
                            disabled={counts[area] <= 1}
                            aria-label={`Diminuir questões de ${style.short}`}
                            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition hover:bg-zinc-100 disabled:opacity-40"
                          >
                            <Minus className="h-4 w-4" aria-hidden />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold tabular-nums text-zinc-900">
                            {counts[area]}
                          </span>
                          <button
                            type="button"
                            onClick={() => step(area, 1)}
                            disabled={counts[area] >= cap}
                            aria-label={`Aumentar questões de ${style.short}`}
                            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition hover:bg-zinc-100 disabled:opacity-40"
                          >
                            <Plus className="h-4 w-4" aria-hidden />
                          </button>
                        </div>
                        </div>

                        {/* Modo avançado: filtro por conteúdo */}
                        {isOn && (
                          <div className="border-t border-zinc-100 px-3 py-2">
                            <button
                              type="button"
                              onClick={() =>
                                setTopicsOpen((prev) => ({ ...prev, [area]: !prev[area] }))
                              }
                              aria-expanded={open}
                              className="flex w-full items-center gap-1.5 rounded-md py-0.5 text-xs font-medium text-zinc-500 transition hover:text-zinc-700"
                            >
                              <ListFilter className="h-3.5 w-3.5" aria-hidden />
                              {isFiltered
                                ? `${selectedTopics.length} de ${areaTopics.length} conteúdos · máx. ${cap} questões`
                                : "Todos os conteúdos"}
                              <ChevronDown
                                className={cx("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
                                aria-hidden
                              />
                            </button>
                            {open && (
                              <div className="mt-2 flex flex-wrap gap-1.5 pb-1 animate-fade-in">
                                <button
                                  type="button"
                                  onClick={() => clearTopics(area)}
                                  aria-pressed={!isFiltered}
                                  className={cx(
                                    "h-7 rounded-full border px-3 text-xs font-medium transition",
                                    !isFiltered
                                      ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                                      : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
                                  )}
                                >
                                  Todos
                                </button>
                                {areaTopics.map(({ topic, count }) => {
                                  const isSelected = selectedTopics.includes(topic);
                                  return (
                                    <button
                                      key={topic}
                                      type="button"
                                      onClick={() => toggleTopic(area, topic)}
                                      aria-pressed={isSelected}
                                      className={cx(
                                        "h-7 rounded-full border px-3 text-xs font-medium transition",
                                        isSelected
                                          ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                                          : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
                                      )}
                                    >
                                      {topic}
                                      <span className={cx("ml-1", isSelected ? "text-indigo-400" : "text-zinc-400")}>
                                        {count}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-zinc-500">
                  Até {MAX_PER_AREA} questões por área, como na prova real.
                </p>
              </div>

              {/* Idioma */}
              {enabled.linguagens && (
                <div className="animate-fade-in">
                  <h3 className="mb-2 flex items-center gap-1.5 text-sm font-medium text-zinc-700">
                    <Languages className="h-4 w-4 text-zinc-400" aria-hidden />
                    Língua estrangeira
                  </h3>
                  <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5" role="radiogroup" aria-label="Língua estrangeira">
                    {(
                      [
                        ["ingles", "Inglês"],
                        ["espanhol", "Espanhol"],
                      ] as [Language, string][]
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={language === value}
                        onClick={() => setLanguage(value)}
                        className={cx(
                          "h-8 rounded-md px-4 text-sm font-medium transition",
                          language === value
                            ? "bg-surface text-zinc-900 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-700"
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cronômetro */}
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 p-3">
                <div className="flex items-center gap-3">
                  <Timer className="h-5 w-5 text-zinc-400" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Cronômetro da prova</p>
                    <p className="text-xs text-zinc-500">
                      3 minutos por questão · encerra sozinho ao zerar
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={timerEnabled}
                  aria-label="Ativar cronômetro"
                  onClick={() => setTimerEnabled((v) => !v)}
                  className={cx(
                    "relative h-6 w-11 shrink-0 rounded-full transition",
                    timerEnabled ? "bg-indigo-600" : "bg-zinc-200"
                  )}
                >
                  <span
                    className={cx(
                      "absolute top-0.5 h-5 w-5 rounded-full bg-surface shadow transition-all",
                      timerEnabled ? "left-[22px]" : "left-0.5"
                    )}
                  />
                </button>
              </div>
            </div>

            {/* Resumo */}
            <aside className="lg:border-l lg:border-zinc-100 lg:pl-6">
              <div className="sticky top-6 rounded-xl bg-zinc-50 p-4">
                <h3 className="text-sm font-medium text-zinc-700">Resumo</h3>
                <p className="mt-2 text-3xl font-bold tabular-nums tracking-tight text-zinc-900">
                  {total}
                  <span className="ml-1.5 text-base font-medium text-zinc-500">questões</span>
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                  {activeAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className={cx("h-2 w-2 shrink-0 rounded-full", AREAS[area].dot)} aria-hidden />
                      <span className="min-w-0 flex-1 truncate">
                        {AREAS[area].short}
                        {topics[area].length > 0 && (
                          <span className="text-xs text-zinc-400">
                            {" "}
                            · {topics[area].length}{" "}
                            {topics[area].length === 1 ? "conteúdo" : "conteúdos"}
                          </span>
                        )}
                      </span>
                      <span className="font-medium tabular-nums text-zinc-900">{counts[area]}</span>
                    </li>
                  ))}
                  {activeAreas.length === 0 && (
                    <li className="text-zinc-400">Nenhuma área selecionada</li>
                  )}
                </ul>
                <div className="mt-3 border-t border-zinc-200 pt-3 text-sm text-zinc-600">
                  {timerEnabled ? (
                    <span className="flex items-center gap-1.5">
                      <Timer className="h-4 w-4" aria-hidden />~{formatDuration(estimatedSeconds)} de prova
                    </span>
                  ) : (
                    <span>Sem limite de tempo</span>
                  )}
                </div>

                {error && (
                  <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-700" role="alert">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={generateCustom}
                  disabled={generating || total === 0}
                  className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 font-semibold text-white shadow-sm transition hover:bg-indigo-500 active:scale-[0.99] disabled:opacity-50"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Montando…
                    </>
                  ) : (
                    "Gerar simulado"
                  )}
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Histórico */}
      {mounted && history.length > 0 && (
        <section className="mt-10 animate-fade-in">
          <div className="rounded-2xl border border-zinc-200 bg-surface shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 p-5">
              <h2 className="flex items-center gap-2 font-semibold text-zinc-900">
                <History className="h-5 w-5 text-indigo-400" aria-hidden />
                Resultados anteriores
              </h2>
              <button
                type="button"
                onClick={handleClearHistory}
                className="text-xs font-medium text-zinc-400 transition hover:text-red-600"
              >
                Limpar histórico
              </button>
            </div>
            <ul className="divide-y divide-zinc-100">
              {history.map((entry) => {
                const pct = Math.round((entry.correct / entry.total) * 100);
                return (
                  <li key={entry.id} className="flex items-center gap-4 p-4 sm:px-5">
                    <div
                      className={cx(
                        "flex h-11 w-14 shrink-0 flex-col items-center justify-center rounded-lg text-sm font-bold",
                        pct >= 70
                          ? "bg-emerald-50 text-emerald-700"
                          : pct >= 50
                            ? "bg-amber-50 text-amber-700"
                            : "bg-red-50 text-red-600"
                      )}
                    >
                      {pct}%
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-zinc-900">
                        {entry.correct} de {entry.total} acertos
                      </p>
                      <p className="text-xs text-zinc-500">
                        {formatDate(entry.finishedAt)} · {formatDuration(entry.durationSeconds)}
                      </p>
                    </div>
                    <div className="hidden items-center gap-3 sm:flex">
                      {entry.perArea.map((area) => (
                        <div key={area.discipline} className="flex items-center gap-1.5" title={AREAS[area.discipline].short}>
                          <span className={cx("h-2 w-2 rounded-full", AREAS[area.discipline].dot)} aria-hidden />
                          <span className="text-xs tabular-nums text-zinc-500">
                            {area.correct}/{area.total}
                          </span>
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
