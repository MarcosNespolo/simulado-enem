"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Check,
  ChevronDown,
  Home,
  Loader2,
  Minus,
  RotateCcw,
  Timer as TimerIcon,
  Trophy,
  X,
} from "lucide-react";
import type { Letter, Simulado, SimuladoQuestion, SimuladoResult } from "@/lib/types";
import { AREAS, SECONDS_PER_QUESTION, formatDuration } from "@/lib/areas";
import { loadLastResult, saveCurrent } from "@/lib/storage";
import { Markdown } from "@/components/Markdown";

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter((c) => typeof c === "string" && c !== "").join(" ");
}

function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

type QuestionStatus = "correct" | "wrong" | "blank";

function statusOf(q: SimuladoQuestion, answers: Record<number, Letter>): QuestionStatus {
  const answer = answers[q.number];
  if (!answer) return "blank";
  return answer === q.correctAlternative ? "correct" : "wrong";
}

/* ------------------------------------------------------------------ */
/* Anel de pontuação                                                   */
/* ------------------------------------------------------------------ */

function ScoreRing({ pct }: { pct: number }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const color =
    pct >= 70 ? "text-emerald-500" : pct >= 50 ? "text-amber-500" : "text-red-500";
  return (
    <div className="relative h-36 w-36">
      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          strokeWidth="11"
          className="stroke-zinc-100"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          strokeWidth="11"
          strokeLinecap="round"
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct / 100)}
          className={cx(color, "transition-all duration-700")}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold tabular-nums text-zinc-900">{pct}%</span>
        <span className="text-xs text-zinc-500">de acerto</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Revisão de uma questão                                              */
/* ------------------------------------------------------------------ */

function ReviewItem({
  question,
  answer,
  status,
}: {
  question: SimuladoQuestion;
  answer: Letter | undefined;
  status: QuestionStatus;
}) {
  const [open, setOpen] = useState(false);
  const style = AREAS[question.discipline];

  const statusInfo = {
    correct: { label: "Você acertou", className: "bg-emerald-50 text-emerald-700", Icon: Check },
    wrong: { label: "Você errou", className: "bg-red-50 text-red-600", Icon: X },
    blank: { label: "Em branco", className: "bg-zinc-100 text-zinc-500", Icon: Minus },
  }[status];

  return (
    <li className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-zinc-50"
      >
        <span className="w-8 shrink-0 text-sm font-bold tabular-nums text-zinc-400">
          {question.number}
        </span>
        <span className={cx("h-2 w-2 shrink-0 rounded-full", style.dot)} aria-hidden />
        <span className="min-w-0 flex-1 truncate text-sm text-zinc-600">
          {style.short} · ENEM {question.year}
        </span>
        <span
          className={cx(
            "flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold",
            statusInfo.className
          )}
        >
          <statusInfo.Icon className="h-3 w-3" aria-hidden />
          {statusInfo.label}
        </span>
        <ChevronDown
          className={cx("h-4 w-4 shrink-0 text-zinc-400 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div className="animate-fade-in border-t border-zinc-100 p-4 sm:p-6">
          <Markdown>{question.context}</Markdown>
          {question.alternativesIntroduction !== "" && (
            <p className="mt-4 font-semibold leading-relaxed text-zinc-900">
              {question.alternativesIntroduction}
            </p>
          )}
          <div className="mt-3 space-y-2">
            {question.alternatives.map((alt) => {
              const isCorrect = alt.letter === question.correctAlternative;
              const isChosen = answer === alt.letter;
              return (
                <div
                  key={alt.letter}
                  className={cx(
                    "flex items-center gap-3 rounded-xl border p-3",
                    isCorrect
                      ? "border-emerald-400 bg-emerald-50/70"
                      : isChosen
                        ? "border-red-300 bg-red-50/70"
                        : "border-zinc-200 bg-white"
                  )}
                >
                  <span
                    className={cx(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                      isCorrect
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isChosen
                          ? "border-red-400 bg-red-400 text-white"
                          : "border-zinc-300 bg-white text-zinc-500"
                    )}
                  >
                    {alt.letter}
                  </span>
                  {alt.text !== null && alt.text !== "" ? (
                    <span className="min-w-0 flex-1 text-sm leading-relaxed text-zinc-700">
                      {alt.text}
                    </span>
                  ) : alt.file ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={alt.file}
                      alt={`Alternativa ${alt.letter}`}
                      loading="lazy"
                      className="max-h-20 rounded-md bg-white object-contain"
                    />
                  ) : (
                    <span className="flex-1" />
                  )}
                  {isCorrect && (
                    <span className="shrink-0 text-xs font-semibold text-emerald-600">
                      Gabarito
                    </span>
                  )}
                  {isChosen && !isCorrect && (
                    <span className="shrink-0 text-xs font-semibold text-red-500">
                      Sua resposta
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Resultado                                                           */
/* ------------------------------------------------------------------ */

type Filter = "todas" | "erradas" | "branco" | "acertadas";

export default function ResultClient() {
  const router = useRouter();
  const [result, setResult] = useState<SimuladoResult | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<Filter>("todas");
  const [retrying, setRetrying] = useState(false);

  useEffect(() => {
    const saved = loadLastResult();
    if (!saved) {
      router.replace("/");
      return;
    }
    setResult(saved);
    setLoaded(true);
  }, [router]);

  const filtered = useMemo(() => {
    if (!result) return [];
    return result.questions.filter((q) => {
      const status = statusOf(q, result.answers);
      if (filter === "todas") return true;
      if (filter === "erradas") return status === "wrong";
      if (filter === "branco") return status === "blank";
      return status === "correct";
    });
  }, [result, filter]);

  if (!loaded || !result) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-zinc-50">
        <div className="w-full max-w-3xl space-y-4 px-4">
          <div className="h-40 animate-pulse rounded-2xl bg-zinc-200" />
          <div className="h-64 animate-pulse rounded-2xl bg-zinc-200" />
        </div>
      </div>
    );
  }

  const pct = Math.round((result.correct / result.total) * 100);

  async function retrySameConfig() {
    if (retrying || !result) return;
    setRetrying(true);
    try {
      const res = await fetch("/api/simulado", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(result.config),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as { questions: SimuladoQuestion[] };
      const simulado: Simulado = {
        id: makeId(),
        createdAt: new Date().toISOString(),
        config: result.config,
        questions: data.questions,
        answers: {},
        flagged: [],
        currentIndex: 0,
        elapsedSeconds: 0,
        totalSeconds: result.config.timerEnabled
          ? data.questions.length * SECONDS_PER_QUESTION
          : 0,
        status: "in-progress",
      };
      saveCurrent(simulado);
      router.push("/simulado");
    } catch {
      setRetrying(false);
    }
  }

  const counts = {
    todas: result.questions.length,
    erradas: result.wrong,
    branco: result.blank,
    acertadas: result.correct,
  };

  return (
    <div className="min-h-dvh bg-zinc-50">
      <header className="border-b border-zinc-200/80 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
          <span className="font-semibold tracking-tight">Resultado</span>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700"
          >
            <Home className="h-4 w-4" aria-hidden />
            Início
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 pb-16">
        {/* Pontuação */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            <ScoreRing pct={pct} />
            <div className="w-full flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                {pct >= 70 ? "Mandou bem!" : pct >= 50 ? "Bom treino!" : "Continue treinando!"}
              </h1>
              <p className="mt-1 text-zinc-600">
                Você acertou <strong>{result.correct}</strong> de{" "}
                <strong>{result.total}</strong> questões
                {result.timedOut ? " (o tempo esgotou)" : ""}.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-sm font-medium text-emerald-700">
                  <Check className="h-4 w-4" aria-hidden />
                  {result.correct} acertos
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-1.5 text-sm font-medium text-red-600">
                  <X className="h-4 w-4" aria-hidden />
                  {result.wrong} erros
                </span>
                {result.blank > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-2.5 py-1.5 text-sm font-medium text-zinc-600">
                    <Minus className="h-4 w-4" aria-hidden />
                    {result.blank} em branco
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-2.5 py-1.5 text-sm font-medium text-zinc-600">
                  <TimerIcon className="h-4 w-4" aria-hidden />
                  {formatDuration(result.durationSeconds)}
                </span>
              </div>
            </div>
          </div>

          {/* Por área */}
          <div className="mt-8 space-y-3">
            {result.perArea.map((area) => {
              const style = AREAS[area.discipline];
              const areaPct = Math.round((area.correct / area.total) * 100);
              return (
                <div key={area.discipline} className="flex items-center gap-3">
                  <span className={cx("h-2.5 w-2.5 shrink-0 rounded-full", style.dot)} aria-hidden />
                  <span className="w-24 shrink-0 text-sm font-medium text-zinc-700 sm:w-28">
                    {style.short}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className={cx("h-full rounded-full transition-all duration-700", style.bar)}
                      style={{ width: `${areaPct}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right text-sm tabular-nums text-zinc-600">
                    {area.correct}/{area.total}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Novo simulado
            </Link>
            <button
              type="button"
              onClick={retrySameConfig}
              disabled={retrying}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-60"
            >
              {retrying ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <RotateCcw className="h-4 w-4" aria-hidden />
              )}
              Refazer com a mesma configuração
            </button>
          </div>
        </section>

        {/* O que estudar */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
            <BookOpen className="h-5 w-5 text-indigo-600" aria-hidden />
            O que estudar agora
          </h2>
          {result.recommendations.length === 0 ? (
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-800">
              <Trophy className="h-6 w-6 shrink-0" aria-hidden />
              <p className="text-sm leading-relaxed">
                Você não errou nenhuma questão — gabaritou! Aumente o número de
                questões ou inclua mais áreas no próximo simulado.
              </p>
            </div>
          ) : (
            <>
              <p className="mt-1 text-sm text-zinc-600">
                Com base nas questões que você errou ou deixou em branco, estes
                são os assuntos que merecem atenção primeiro:
              </p>
              <ol className="mt-4 space-y-3">
                {result.recommendations.map((rec, i) => {
                  const style = AREAS[rec.discipline];
                  return (
                    <li
                      key={`${rec.discipline}-${rec.topic}`}
                      className="flex gap-3.5 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-500 shadow-sm">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-zinc-900">{rec.topic}</h3>
                          <span
                            className={cx(
                              "rounded-md px-1.5 py-0.5 text-[11px] font-semibold",
                              style.chipBg,
                              style.chipText
                            )}
                          >
                            {style.short}
                          </span>
                          <span className="text-xs text-zinc-500">
                            {rec.missed} de {rec.total}{" "}
                            {rec.total === 1 ? "questão perdida" : "questões perdidas"}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-600">{rec.hint}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </>
          )}
        </section>

        {/* Revisão */}
        <section>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-zinc-900">Revisão das questões</h2>
            <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Filtrar questões">
              {(
                [
                  ["todas", "Todas"],
                  ["erradas", "Erradas"],
                  ["branco", "Em branco"],
                  ["acertadas", "Acertadas"],
                ] as [Filter, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={filter === value}
                  onClick={() => setFilter(value)}
                  className={cx(
                    "h-8 rounded-lg border px-3 text-xs font-medium transition",
                    filter === value
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                      : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300"
                  )}
                >
                  {label} ({counts[value]})
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-zinc-200 bg-white p-8 text-center text-sm text-zinc-500">
              Nenhuma questão neste filtro.
            </p>
          ) : (
            <ul className="space-y-2">
              {filtered.map((q) => (
                <ReviewItem
                  key={q.number}
                  question={q}
                  answer={result.answers[q.number]}
                  status={statusOf(q, result.answers)}
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
