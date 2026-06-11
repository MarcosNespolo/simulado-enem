"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Flag,
  LayoutGrid,
  Lightbulb,
  Pause,
  Play,
  Timer as TimerIcon,
  X,
} from "lucide-react";
import type { Letter, Simulado, SimuladoQuestion } from "@/lib/types";
import { AREA_ORDER, AREAS, formatClock } from "@/lib/areas";
import { clearCurrent, loadCurrent, pushHistory, saveCurrent, saveLastResult } from "@/lib/storage";
import { computeResult, toHistoryEntry } from "@/lib/scoring";
import { tagQuestion } from "@/lib/topics";
import { eliminatedFor, hintsFor, MAX_HINTS } from "@/lib/hints";
import { CONTEUDOS, promptAprofundar } from "@/data/conteudos";
import { Markdown } from "@/components/Markdown";

const LETTERS: Letter[] = ["A", "B", "C", "D", "E"];

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter((c) => typeof c === "string" && c !== "").join(" ");
}

/* ------------------------------------------------------------------ */
/* Questão                                                             */
/* ------------------------------------------------------------------ */

const QuestionView = memo(function QuestionView({
  question,
  answer,
  flagged,
  hintLevel,
  onSelect,
  onToggleFlag,
  onStudy,
  onHint,
}: {
  question: SimuladoQuestion;
  answer: Letter | undefined;
  flagged: boolean;
  hintLevel: number;
  onSelect: (letter: Letter) => void;
  onToggleFlag: () => void;
  onStudy: () => void;
  onHint: () => void;
}) {
  const style = AREAS[question.discipline];
  const extraFiles = question.files.filter((f) => !question.context.includes(f));
  const revealedHints = hintsFor(question, hintLevel);
  const eliminated = eliminatedFor(question, hintLevel);

  return (
    <article
      key={question.number}
      className="animate-question-in rounded-2xl border border-zinc-200 bg-surface p-5 shadow-sm sm:p-8"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600">
            ENEM {question.year}
          </span>
          <span
            className={cx(
              "rounded-md px-2 py-1 text-xs font-semibold",
              style.chipBg,
              style.chipText
            )}
          >
            {style.short}
          </span>
          {question.language && (
            <span className="rounded-md bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700">
              {question.language === "ingles" ? "Inglês" : "Espanhol"}
            </span>
          )}
        </div>
        <div className="flex shrink-0 gap-1.5">
          <button
            type="button"
            onClick={onStudy}
            title="Estudar este conteúdo (E)"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-400 transition hover:border-indigo-300 hover:text-indigo-400"
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            <span className="sr-only">Estudar o conteúdo desta questão</span>
          </button>
          <button
            type="button"
            onClick={onToggleFlag}
            aria-pressed={flagged}
            title={flagged ? "Desmarcar questão" : "Marcar para revisão (F)"}
            className={cx(
              "flex h-9 w-9 items-center justify-center rounded-lg border transition",
              flagged
                ? "border-amber-300 bg-amber-50 text-amber-600"
                : "border-zinc-200 text-zinc-400 hover:border-amber-300 hover:text-amber-500"
            )}
          >
            <Flag className={cx("h-4 w-4", flagged && "fill-current")} aria-hidden />
            <span className="sr-only">
              {flagged ? "Desmarcar questão" : "Marcar questão para revisão"}
            </span>
          </button>
        </div>
      </div>

      <Markdown>{question.context}</Markdown>

      {extraFiles.length > 0 && (
        <div className="mt-4 space-y-3">
          {extraFiles.map((file) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={file}
              src={file}
              alt="Material de apoio da questão"
              loading="lazy"
              className="mx-auto max-w-full rounded-xl border border-zinc-200 bg-[#fff] p-2"
            />
          ))}
        </div>
      )}

      {question.alternativesIntroduction !== "" && (
        <p className="mt-6 font-semibold leading-relaxed text-zinc-900">
          {question.alternativesIntroduction}
        </p>
      )}

      <div role="radiogroup" aria-label="Alternativas" className="mt-4 space-y-2.5">
        {question.alternatives.map((alt) => {
          const selected = answer === alt.letter;
          const isEliminated = eliminated.includes(alt.letter);
          return (
            <button
              key={alt.letter}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={isEliminated}
              aria-label={isEliminated ? `Alternativa ${alt.letter} descartada pela dica` : undefined}
              onClick={() => onSelect(alt.letter)}
              className={cx(
                "flex w-full items-center gap-3.5 rounded-xl border p-3.5 text-left transition sm:p-4",
                isEliminated
                  ? "border-zinc-100 bg-surface opacity-40"
                  : selected
                    ? "border-indigo-600 bg-indigo-50/70 ring-1 ring-indigo-600"
                    : "border-zinc-200 bg-surface hover:border-indigo-300 hover:bg-indigo-50/40"
              )}
            >
              <span
                className={cx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition",
                  selected
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-zinc-300 bg-surface text-zinc-600"
                )}
              >
                {alt.letter}
              </span>
              {alt.text !== null && alt.text !== "" ? (
                <span
                  className={cx(
                    "min-w-0 flex-1 leading-relaxed text-zinc-800",
                    isEliminated && "line-through"
                  )}
                >
                  {alt.text}
                </span>
              ) : alt.file ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={alt.file}
                  alt={`Alternativa ${alt.letter}`}
                  loading="lazy"
                  className="max-h-24 rounded-md bg-[#fff] object-contain p-1"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Dicas */}
      <div className="mt-5">
        {revealedHints.map((dica) => (
          <div
            key={dica.level}
            className="mb-2 flex gap-2.5 rounded-xl border border-amber-200 bg-amber-50/60 p-3.5 animate-fade-in"
          >
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wide text-amber-600">
                Dica {dica.level} · {dica.titulo}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-zinc-700">{dica.texto}</p>
            </div>
          </div>
        ))}
        {hintLevel < MAX_HINTS && (
          <button
            type="button"
            onClick={onHint}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200 px-3 text-sm font-medium text-zinc-500 transition hover:border-amber-300 hover:text-amber-600"
          >
            <Lightbulb className="h-4 w-4" aria-hidden />
            {hintLevel === 0 ? "Pedir uma dica" : `Pedir outra dica (${hintLevel}/${MAX_HINTS})`}
          </button>
        )}
        {hintLevel > 0 && (
          <p className="mt-2 text-xs text-zinc-400">
            Dicas usadas entram no diagnóstico do resultado (pesam menos que um erro).
          </p>
        )}
      </div>
    </article>
  );
});

/* ------------------------------------------------------------------ */
/* Mapa de questões                                                    */
/* ------------------------------------------------------------------ */

function QuestionMap({
  simulado,
  onJump,
  onClose,
  onFinishRequest,
}: {
  simulado: Simulado;
  onJump: (index: number) => void;
  onClose: () => void;
  onFinishRequest: () => void;
}) {
  const answered = Object.keys(simulado.answers).length;
  const flaggedCount = simulado.flagged.length;
  const blank = simulado.questions.length - answered;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fechar mapa de questões"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-black/60"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mapa de questões"
        className="absolute inset-x-0 bottom-0 flex max-h-[85dvh] flex-col rounded-t-2xl bg-surface shadow-xl animate-sheet-up sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[400px] sm:rounded-none"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 p-4 sm:p-5">
          <div>
            <h2 className="font-semibold text-zinc-900">Mapa de questões</h2>
            <p className="mt-0.5 text-xs text-zinc-500">
              {answered} respondidas · {blank} em branco
              {flaggedCount > 0 ? ` · ${flaggedCount} marcadas` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-5">
          {AREA_ORDER.map((area) => {
            const questions = simulado.questions.filter((q) => q.discipline === area);
            if (questions.length === 0) return null;
            const style = AREAS[area];
            return (
              <div key={area}>
                <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <span className={cx("h-2 w-2 rounded-full", style.dot)} aria-hidden />
                  {style.short}
                </h3>
                <div className="grid grid-cols-7 gap-1.5 sm:grid-cols-6">
                  {questions.map((q) => {
                    const index = q.number - 1;
                    const isCurrent = index === simulado.currentIndex;
                    const isAnswered = simulado.answers[q.number] !== undefined;
                    const isFlagged = simulado.flagged.includes(q.number);
                    return (
                      <button
                        key={q.number}
                        type="button"
                        onClick={() => onJump(index)}
                        aria-label={`Ir para a questão ${q.number}${isAnswered ? " (respondida)" : ""}${isFlagged ? " (marcada)" : ""}`}
                        aria-current={isCurrent ? "true" : undefined}
                        className={cx(
                          "relative flex h-10 items-center justify-center rounded-lg border text-sm font-semibold tabular-nums transition",
                          isAnswered
                            ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-500"
                            : "border-zinc-200 bg-surface text-zinc-600 hover:border-indigo-300 hover:bg-indigo-50",
                          isCurrent && "ring-2 ring-indigo-600 ring-offset-1 ring-offset-surface"
                        )}
                      >
                        {q.number}
                        {isFlagged && (
                          <span
                            className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-surface bg-amber-400"
                            aria-hidden
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-zinc-100 p-4 sm:p-5">
          <button
            type="button"
            onClick={onFinishRequest}
            className="h-11 w-full rounded-xl bg-emerald-600 font-semibold text-white shadow-sm transition hover:bg-emerald-500"
          >
            Finalizar simulado
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modo estudo                                                         */
/* ------------------------------------------------------------------ */

function StudySheet({
  question,
  timerEnabled,
  onClose,
}: {
  question: SimuladoQuestion;
  timerEnabled: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const topic = tagQuestion(question);
  const conteudo = CONTEUDOS[topic];
  const style = AREAS[question.discipline];

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(promptAprofundar(topic, style.short));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard indisponível: segue sem feedback
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fechar modo estudo"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-black/60"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Modo estudo"
        className="absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col rounded-t-2xl bg-surface shadow-xl animate-sheet-up sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[440px] sm:rounded-none"
      >
        <div className="flex items-center justify-between gap-3 border-b border-zinc-100 p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-400">
              <BookOpen className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <h2 className="font-semibold text-zinc-900">Modo estudo</h2>
              <p className="truncate text-xs text-zinc-500">
                {style.short} · {topic}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {timerEnabled && (
          <p className="flex items-center gap-2 border-b border-zinc-100 bg-amber-50/70 px-4 py-2.5 text-xs font-medium text-amber-700 sm:px-5">
            <Pause className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Cronômetro pausado enquanto você estuda. Na prova real esse botão
            não existe!
          </p>
        )}

        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-5">
          {conteudo ? (
            <>
              <p className="rounded-xl bg-zinc-100/60 p-3.5 text-[15px] font-medium leading-relaxed text-zinc-800">
                {conteudo.ideiaCentral}
              </p>

              {conteudo.aula.map((secao) => (
                <div key={secao.titulo}>
                  <h3 className="mb-1.5 font-semibold text-zinc-900">{secao.titulo}</h3>
                  <p className="text-[15px] leading-relaxed text-zinc-600">{secao.texto}</p>
                </div>
              ))}

              {conteudo.exemplo && (
                <div className="rounded-xl border border-zinc-200 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Exemplo resolvido
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-800">
                    {conteudo.exemplo.enunciado}
                  </p>
                  <ol className="mt-3 space-y-2">
                    {conteudo.exemplo.passos.map((passo, i) => (
                      <li key={passo} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-500">
                          {i + 1}
                        </span>
                        {passo}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 flex gap-2 rounded-lg bg-emerald-50/70 p-2.5 text-sm font-medium leading-relaxed text-emerald-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    {conteudo.exemplo.resposta}
                  </p>
                </div>
              )}

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  O que dominar
                </h3>
                <ul className="space-y-2">
                  {conteudo.pontosChave.map((ponto) => (
                    <li key={ponto} className="flex gap-2 text-sm leading-relaxed text-zinc-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                      {ponto}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-indigo-50/60 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
                  Como cai no ENEM
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {conteudo.comoCaiNoEnem}
                </p>
              </div>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-zinc-600">
              Ainda não temos resumo deste conteúdo, mas você pode se aprofundar
              com o prompt abaixo.
            </p>
          )}

          <div className="border-t border-zinc-100 pt-4">
            <h3 className="text-sm font-semibold text-zinc-900">Quer ir mais fundo?</h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              Copie o prompt e cole na IA que você usa (ChatGPT, Claude,
              Gemini...) para uma aula completa com exemplos resolvidos.
            </p>
            <button
              type="button"
              onClick={copyPrompt}
              className={cx(
                "mt-3 inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition",
                copied
                  ? "bg-emerald-50 text-emerald-700"
                  : "border border-zinc-200 bg-surface text-zinc-700 hover:border-indigo-300"
              )}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" aria-hidden />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden />
                  Copiar prompt de estudo
                </>
              )}
            </button>
          </div>
        </div>

        <div className="border-t border-zinc-100 p-4 sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="h-11 w-full rounded-xl bg-indigo-600 font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Voltar para a questão
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Quiz                                                                */
/* ------------------------------------------------------------------ */

export default function QuizClient() {
  const router = useRouter();
  const [simulado, setSimulado] = useState<Simulado | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [mapOpen, setMapOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [paused, setPaused] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);

  const simuladoRef = useRef<Simulado | null>(null);
  const elapsedRef = useRef(0);
  const finishingRef = useRef(false);

  // Carrega o simulado salvo; sem simulado ativo, volta para a home.
  useEffect(() => {
    const saved = loadCurrent();
    if (!saved || saved.status !== "in-progress" || saved.questions.length === 0) {
      router.replace("/");
      return;
    }
    // Migração: simulados salvos antes do recurso de dicas não têm o campo.
    const migrated = { ...saved, hints: saved.hints ?? {} };
    simuladoRef.current = migrated;
    elapsedRef.current = migrated.elapsedSeconds;
    // Carga única do localStorage após a hidratação; o re-render é intencional.
    /* eslint-disable react-hooks/set-state-in-effect */
    setSimulado(migrated);
    setElapsed(migrated.elapsedSeconds);
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [router]);

  const persist = useCallback((next: Simulado) => {
    simuladoRef.current = next;
    saveCurrent({ ...next, elapsedSeconds: elapsedRef.current });
  }, []);

  const update = useCallback(
    (patch: Partial<Simulado>) => {
      setSimulado((prev) => {
        if (!prev) return prev;
        const next = { ...prev, ...patch, elapsedSeconds: elapsedRef.current };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const finish = useCallback(
    (timedOut: boolean) => {
      const s = simuladoRef.current;
      if (!s || finishingRef.current) return;
      finishingRef.current = true;
      const result = computeResult({ ...s, elapsedSeconds: elapsedRef.current }, timedOut);
      saveLastResult(result);
      pushHistory(toHistoryEntry(result));
      clearCurrent();
      router.push("/resultado");
    },
    [router]
  );

  // Relógio: conta o tempo decorrido e dispara o fim quando o cronômetro
  // zera. O modo estudo também congela a contagem.
  useEffect(() => {
    if (!loaded || paused || timeUp || studyOpen) return;
    const id = window.setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
      const s = simuladoRef.current;
      if (!s) return;
      if (elapsedRef.current % 10 === 0) {
        saveCurrent({ ...s, elapsedSeconds: elapsedRef.current });
      }
      if (s.config.timerEnabled && elapsedRef.current >= s.totalSeconds) {
        setTimeUp(true);
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, [loaded, paused, timeUp, studyOpen]);

  // Persiste ao sair/ocultar a aba.
  useEffect(() => {
    function persistNow() {
      const s = simuladoRef.current;
      if (s && !finishingRef.current) {
        saveCurrent({ ...s, elapsedSeconds: elapsedRef.current });
      }
    }
    window.addEventListener("beforeunload", persistNow);
    document.addEventListener("visibilitychange", persistNow);
    return () => {
      window.removeEventListener("beforeunload", persistNow);
      document.removeEventListener("visibilitychange", persistNow);
    };
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const s = simuladoRef.current;
      if (!s) return;
      const clamped = Math.max(0, Math.min(s.questions.length - 1, index));
      update({ currentIndex: clamped });
      setMapOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [update]
  );

  const select = useCallback(
    (letter: Letter) => {
      const s = simuladoRef.current;
      if (!s) return;
      const question = s.questions[s.currentIndex];
      const hintLevel = s.hints?.[question.number] ?? 0;
      if (eliminatedFor(question, hintLevel).includes(letter)) return;
      const answers = { ...s.answers };
      if (answers[question.number] === letter) delete answers[question.number];
      else answers[question.number] = letter;
      update({ answers });
    },
    [update]
  );

  const requestHint = useCallback(() => {
    const s = simuladoRef.current;
    if (!s) return;
    const question = s.questions[s.currentIndex];
    const current = s.hints?.[question.number] ?? 0;
    if (current >= MAX_HINTS) return;
    const nextLevel = current + 1;
    const hints = { ...(s.hints ?? {}), [question.number]: nextLevel };
    // Se a resposta marcada acabou de ser descartada pela dica, desmarca.
    const answers = { ...s.answers };
    const marked = answers[question.number];
    if (marked && eliminatedFor(question, nextLevel).includes(marked)) {
      delete answers[question.number];
    }
    update({ hints, answers });
  }, [update]);

  const toggleFlag = useCallback(() => {
    const s = simuladoRef.current;
    if (!s) return;
    const number = s.questions[s.currentIndex].number;
    const flagged = s.flagged.includes(number)
      ? s.flagged.filter((n) => n !== number)
      : [...s.flagged, number];
    update({ flagged });
  }, [update]);

  // Callback estável: passar uma arrow inline quebraria o memo do
  // QuestionView e re-renderizaria a questão (e suas imagens) a cada
  // tick do cronômetro.
  const openStudy = useCallback(() => setStudyOpen(true), []);

  // Atalhos de teclado.
  useEffect(() => {
    if (!loaded) return;
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;

      if (e.key === "Escape") {
        setMapOpen(false);
        setConfirmOpen(false);
        setStudyOpen(false);
        return;
      }
      if (timeUp) return;
      if (paused) {
        if (e.key === " ") {
          e.preventDefault();
          setPaused(false);
        }
        return;
      }
      if (mapOpen || confirmOpen || studyOpen) return;

      const s = simuladoRef.current;
      if (!s) return;
      const key = e.key.toLowerCase();

      if (key >= "a" && key <= "e") {
        select(LETTERS[key.charCodeAt(0) - 97]);
      } else if (key >= "1" && key <= "5") {
        select(LETTERS[Number(key) - 1]);
      } else if (e.key === "ArrowLeft") {
        goTo(s.currentIndex - 1);
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        if (s.currentIndex < s.questions.length - 1) goTo(s.currentIndex + 1);
      } else if (key === "f") {
        toggleFlag();
      } else if (key === "m") {
        setMapOpen((v) => !v);
      } else if (key === "e") {
        setStudyOpen(true);
      } else if (key === "d") {
        requestHint();
      } else if (e.key === " " && s.config.timerEnabled) {
        e.preventDefault();
        setPaused(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [loaded, mapOpen, confirmOpen, timeUp, paused, studyOpen, select, goTo, toggleFlag, requestHint]);

  if (!loaded || !simulado) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-zinc-50">
        <div className="w-full max-w-3xl space-y-4 px-4">
          <div className="h-4 w-40 animate-pulse rounded bg-zinc-200" />
          <div className="h-96 animate-pulse rounded-2xl bg-zinc-200" />
        </div>
      </div>
    );
  }

  const question = simulado.questions[simulado.currentIndex];
  const total = simulado.questions.length;
  const answeredCount = Object.keys(simulado.answers).length;
  const blankCount = total - answeredCount;
  const isLast = simulado.currentIndex === total - 1;
  const remaining = simulado.totalSeconds - elapsed;
  const timerCritical = simulado.config.timerEnabled && remaining <= 300;
  const areaStyle = AREAS[question.discipline];

  return (
    <div className="flex min-h-dvh flex-col bg-zinc-50">
      {/* Barra superior */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-surface/85 backdrop-blur">
        <div
          className="absolute inset-x-0 top-0 h-0.5 bg-zinc-100"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={answeredCount}
          aria-label="Questões respondidas"
        >
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${(answeredCount / total) * 100}%` }}
          />
        </div>
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center gap-2 px-4">
          <Link
            href="/"
            aria-label="Salvar e voltar ao início"
            title="Salvar e voltar ao início"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </Link>

          <div className="flex min-w-0 items-center gap-2">
            <span className="text-sm font-semibold tabular-nums text-zinc-900">
              {question.number}
              <span className="font-normal text-zinc-400">/{total}</span>
            </span>
            <span
              className={cx(
                "rounded-md px-2 py-0.5 text-xs font-semibold",
                areaStyle.chipBg,
                areaStyle.chipText
              )}
            >
              {areaStyle.short}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <span
              className={cx(
                "flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium tabular-nums",
                simulado.config.timerEnabled
                  ? timerCritical
                    ? "bg-red-50 text-red-600"
                    : "text-zinc-700"
                  : "text-zinc-400"
              )}
              title={simulado.config.timerEnabled ? "Tempo restante" : "Tempo decorrido"}
            >
              <TimerIcon className="h-4 w-4" aria-hidden />
              {simulado.config.timerEnabled ? formatClock(remaining) : formatClock(elapsed)}
            </span>
            {simulado.config.timerEnabled && (
              <button
                type="button"
                onClick={() => setPaused(true)}
                aria-label="Pausar simulado"
                title="Pausar (espaço)"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
              >
                <Pause className="h-4 w-4" aria-hidden />
              </button>
            )}
            <button
              type="button"
              onClick={() => setMapOpen(true)}
              aria-label="Abrir mapa de questões"
              title="Mapa de questões (M)"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
            >
              <LayoutGrid className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setConfirmOpen(true)}
              className="hidden h-9 items-center rounded-lg border border-zinc-200 px-3 text-sm font-medium text-zinc-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 sm:flex"
            >
              Finalizar
            </button>
          </div>
        </div>
      </header>

      {/* Questão */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-32 pt-6">
        <QuestionView
          question={question}
          answer={simulado.answers[question.number]}
          flagged={simulado.flagged.includes(question.number)}
          hintLevel={simulado.hints?.[question.number] ?? 0}
          onSelect={select}
          onToggleFlag={toggleFlag}
          onStudy={openStudy}
          onHint={requestHint}
        />
        <p className="mt-4 hidden text-center text-xs text-zinc-400 lg:block">
          Atalhos: A–E respondem · ← → navegam · F marca · D dica · E estuda · M mapa
        </p>
      </main>

      {/* Barra inferior */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200/80 bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => goTo(simulado.currentIndex - 1)}
            disabled={simulado.currentIndex === 0}
            className="inline-flex h-11 flex-1 items-center justify-center gap-1 rounded-xl border border-zinc-200 bg-surface font-medium text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-40 sm:flex-none sm:px-5"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Anterior
          </button>
          <span className="hidden flex-1 text-center text-xs text-zinc-400 sm:block">
            {answeredCount} de {total} respondidas
          </span>
          {isLast ? (
            <button
              type="button"
              onClick={() => setConfirmOpen(true)}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1 rounded-xl bg-emerald-600 font-semibold text-white shadow-sm transition hover:bg-emerald-500 sm:flex-none sm:px-6"
            >
              Finalizar
            </button>
          ) : (
            <button
              type="button"
              onClick={() => goTo(simulado.currentIndex + 1)}
              className="inline-flex h-11 flex-1 items-center justify-center gap-1 rounded-xl bg-indigo-600 font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:flex-none sm:px-6"
            >
              Próxima
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>
      </nav>

      {/* Mapa */}
      {mapOpen && (
        <QuestionMap
          simulado={simulado}
          onJump={goTo}
          onClose={() => setMapOpen(false)}
          onFinishRequest={() => {
            setMapOpen(false);
            setConfirmOpen(true);
          }}
        />
      )}

      {/* Modo estudo */}
      {studyOpen && (
        <StudySheet
          question={question}
          timerEnabled={simulado.config.timerEnabled}
          onClose={() => setStudyOpen(false)}
        />
      )}

      {/* Confirmação de fim */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Cancelar"
            onClick={() => setConfirmOpen(false)}
            className="absolute inset-0 animate-fade-in bg-black/60"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Finalizar simulado"
            className="relative w-full max-w-sm animate-sheet-up rounded-2xl bg-surface p-6 shadow-xl"
          >
            <h2 className="text-lg font-semibold text-zinc-900">Finalizar simulado?</h2>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-zinc-50 p-3">
                <p className="text-xl font-bold tabular-nums text-zinc-900">{answeredCount}</p>
                <p className="text-xs text-zinc-500">respondidas</p>
              </div>
              <div className="rounded-xl bg-zinc-50 p-3">
                <p className="text-xl font-bold tabular-nums text-zinc-900">{blankCount}</p>
                <p className="text-xs text-zinc-500">em branco</p>
              </div>
              <div className="rounded-xl bg-zinc-50 p-3">
                <p className="text-xl font-bold tabular-nums text-zinc-900">
                  {simulado.flagged.length}
                </p>
                <p className="text-xs text-zinc-500">marcadas</p>
              </div>
            </div>
            {blankCount > 0 && (
              <p className="mt-3 flex items-start gap-2 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-700">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                Questões em branco contam como erro no resultado.
              </p>
            )}
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                className="h-11 flex-1 rounded-xl border border-zinc-200 font-medium text-zinc-700 transition hover:bg-zinc-50"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => finish(false)}
                className="h-11 flex-1 rounded-xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-500"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tempo esgotado */}
      {timeUp && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 animate-fade-in bg-black/70" />
          <div
            role="alertdialog"
            aria-modal="true"
            aria-label="Tempo esgotado"
            className="relative w-full max-w-sm animate-sheet-up rounded-2xl bg-surface p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
              <TimerIcon className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="mt-3 text-lg font-semibold text-zinc-900">Tempo esgotado!</h2>
            <p className="mt-1 text-sm text-zinc-600">
              O tempo da prova acabou. Vamos corrigir as {answeredCount} questões que você
              respondeu.
            </p>
            <button
              type="button"
              onClick={() => finish(true)}
              className="mt-5 h-11 w-full rounded-xl bg-indigo-600 font-semibold text-white transition hover:bg-indigo-500"
            >
              Ver resultado
            </button>
          </div>
        </div>
      )}

      {/* Pausa */}
      {paused && !timeUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm animate-sheet-up rounded-2xl border border-zinc-200 bg-surface p-6 text-center shadow-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-400">
              <Pause className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="mt-3 text-lg font-semibold text-zinc-900">Simulado pausado</h2>
            <p className="mt-1 text-sm text-zinc-600">
              O cronômetro está parado. Na prova de verdade não dá pra pausar, hein!
            </p>
            <button
              type="button"
              onClick={() => setPaused(false)}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 font-semibold text-white transition hover:bg-indigo-500"
            >
              <Play className="h-4 w-4" aria-hidden />
              Retomar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
