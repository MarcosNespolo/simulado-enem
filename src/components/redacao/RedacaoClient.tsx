"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  PenLine,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import {
  COMO_E_CORRIGIDA,
  COMPETENCIAS,
  INSIGHT_TEMAS,
  O_QUE_ZERA,
  PROMPT_CORRECAO_IA,
  QUIZ_REDACAO,
  TEMAS_ANTERIORES,
  TEMAS_TREINO,
  type Competencia,
} from "@/data/redacao";

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter((c) => typeof c === "string" && c !== "").join(" ");
}

const BEST_SCORE_KEY = "simulado-enem:quiz-redacao-best";

/* ------------------------------------------------------------------ */
/* Competência (accordion)                                             */
/* ------------------------------------------------------------------ */

function CompetenciaCard({ competencia }: { competencia: Competencia }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="overflow-hidden rounded-xl border border-zinc-200 bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-zinc-100/50"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700">
          C{competencia.numero}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold text-zinc-900">{competencia.titulo}</span>
          <span className="block truncate text-sm text-zinc-500">{competencia.resumo}</span>
        </span>
        <span className="shrink-0 text-xs font-semibold tabular-nums text-zinc-400">
          0–200
        </span>
        <ChevronDown
          className={cx("h-4 w-4 shrink-0 text-zinc-400 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && (
        <div className="animate-fade-in space-y-4 border-t border-zinc-100 p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-zinc-600">{competencia.oQueAvalia}</p>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Como pontuar bem
            </h4>
            <ul className="space-y-1.5">
              {competencia.comoPontuar.map((dica) => (
                <li key={dica} className="flex gap-2 text-sm leading-relaxed text-zinc-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                  {dica}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-600">
              O que derruba sua nota
            </h4>
            <ul className="space-y-1.5">
              {competencia.oQueDerruba.map((erro) => (
                <li key={erro} className="flex gap-2 text-sm leading-relaxed text-zinc-600">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden />
                  {erro}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Quiz                                                                */
/* ------------------------------------------------------------------ */

function QuizRedacao() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(BEST_SCORE_KEY);
      // Carga única do recorde salvo após a hidratação.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved !== null) setBest(Number(saved));
    } catch {
      // sem localStorage, segue sem recorde
    }
  }, []);

  const pergunta = QUIZ_REDACAO[idx];
  const total = QUIZ_REDACAO.length;

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === pergunta.correta) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 >= total) {
      setFinished(true);
      const final = score;
      setBest((prev) => {
        const newBest = prev === null ? final : Math.max(prev, final);
        try {
          window.localStorage.setItem(BEST_SCORE_KEY, String(newBest));
        } catch {
          // ignora
        }
        return newBest;
      });
      return;
    }
    setIdx((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = score / total;
    const mensagem =
      pct === 1
        ? "Perfeito! Você domina as regras do jogo. Agora é treinar a escrita."
        : pct >= 0.7
          ? "Muito bom! Revise as questões que errou no guia acima e siga para o treino."
          : "Vale reler o guia acima com calma: conhecer as regras evita perder pontos bobos.";
    return (
      <div className="rounded-2xl border border-zinc-200 bg-surface p-6 text-center sm:p-8">
        <p className="text-4xl font-bold tabular-nums text-zinc-900">
          {score}<span className="text-xl font-medium text-zinc-500">/{total}</span>
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600">{mensagem}</p>
        {best !== null && (
          <p className="mt-2 text-xs text-zinc-500">Seu recorde: {best}/{total}</p>
        )}
        <button
          type="button"
          onClick={restart}
          className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-surface px-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Refazer quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-surface p-5 sm:p-6">
      <div className="mb-1 flex items-center justify-between text-xs text-zinc-500">
        <span>
          Pergunta {idx + 1} de {total}
        </span>
        <span className="tabular-nums">{score} acertos</span>
      </div>
      <div className="mb-4 h-1 overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all"
          style={{ width: `${(idx / total) * 100}%` }}
        />
      </div>
      <h3 className="font-semibold leading-relaxed text-zinc-900">{pergunta.pergunta}</h3>
      <div className="mt-4 space-y-2">
        {pergunta.alternativas.map((alt, i) => {
          const isCorrect = i === pergunta.correta;
          const isChosen = selected === i;
          const revealed = selected !== null;
          return (
            <button
              key={alt}
              type="button"
              onClick={() => choose(i)}
              disabled={revealed}
              className={cx(
                "flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition disabled:cursor-default",
                !revealed && "border-zinc-200 bg-surface hover:border-indigo-300 hover:bg-indigo-50/40",
                revealed && isCorrect && "border-emerald-400 bg-emerald-50/70",
                revealed && isChosen && !isCorrect && "border-red-400 bg-red-50/70",
                revealed && !isChosen && !isCorrect && "border-zinc-200 opacity-60"
              )}
            >
              <span
                className={cx(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                  revealed && isCorrect
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : revealed && isChosen
                      ? "border-red-400 bg-red-400 text-white"
                      : "border-zinc-300 text-zinc-500"
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="leading-relaxed text-zinc-700">{alt}</span>
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-4 animate-fade-in">
          <p
            className={cx(
              "rounded-xl p-3.5 text-sm leading-relaxed",
              selected === pergunta.correta
                ? "bg-emerald-50 text-emerald-800"
                : "bg-amber-50 text-amber-700"
            )}
          >
            <strong>{selected === pergunta.correta ? "Acertou! " : "Não é essa. "}</strong>
            {pergunta.explicacao}
          </p>
          <button
            type="button"
            onClick={next}
            className="mt-3 h-10 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-500 sm:w-auto sm:px-6"
          >
            {idx + 1 >= total ? "Ver resultado" : "Próxima pergunta"}
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Prompt de correção por IA                                           */
/* ------------------------------------------------------------------ */

function PromptIA() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(PROMPT_CORRECAO_IA);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard bloqueado: o usuário ainda pode selecionar o texto
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-100 p-4">
        <p className="text-sm text-zinc-600">
          Cole no ChatGPT, Claude, Gemini ou na IA que você usa. Substitua o
          tema e a redação no final do prompt.
        </p>
        <button
          type="button"
          onClick={copy}
          className={cx(
            "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition",
            copied
              ? "bg-emerald-50 text-emerald-700"
              : "bg-indigo-600 text-white hover:bg-indigo-500"
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
              Copiar prompt
            </>
          )}
        </button>
      </div>
      <pre className="max-h-72 overflow-y-auto whitespace-pre-wrap p-4 font-mono text-xs leading-relaxed text-zinc-600">
        {PROMPT_CORRECAO_IA}
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  ["avaliacao", "Como é avaliada"],
  ["correcao", "Quem corrige"],
  ["temas", "Temas anteriores"],
  ["quiz", "Quiz"],
  ["treinar", "Treinar com temas"],
  ["ia", "Corrigir com IA"],
] as const;

export default function RedacaoClient() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6 sm:pt-8">
      <section className="rounded-2xl border border-zinc-200 bg-surface p-5 sm:p-6">
        <h1 className="text-lg font-semibold text-zinc-900">Guia da Redação</h1>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          A redação vale 1000 pontos, tanto quanto uma área inteira da prova,
          e é onde dá para ganhar nota mais rápido. Entenda como a banca
          avalia, conheça os temas recentes, teste as regras no quiz e corrija
          seus textos com ajuda de IA.
        </p>
        <nav className="mt-4 flex flex-wrap gap-1.5" aria-label="Seções do guia">
          {SECTIONS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="h-8 rounded-lg border border-zinc-200 px-3 text-xs font-medium leading-8 text-zinc-500 transition hover:border-indigo-300 hover:text-zinc-700"
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      {/* Avaliação */}
      <section id="avaliacao" className="mt-10 scroll-mt-6">
        <h2 className="text-lg font-semibold text-zinc-900">Como sua redação é avaliada</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Cinco competências de mesmo peso. Clique em cada uma para ver o que
          o corretor procura:
        </p>
        <div className="mt-4 flex overflow-hidden rounded-lg" aria-hidden>
          {COMPETENCIAS.map((c, i) => (
            <div
              key={c.numero}
              className={cx(
                "flex h-8 flex-1 items-center justify-center text-[11px] font-semibold text-white",
                ["bg-indigo-300", "bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-violet-600"][i]
              )}
            >
              C{c.numero} · 200
            </div>
          ))}
        </div>
        <p className="mt-1 text-right text-xs text-zinc-500">= 1000 pontos</p>
        <ul className="mt-3 space-y-2">
          {COMPETENCIAS.map((competencia) => (
            <CompetenciaCard key={competencia.numero} competencia={competencia} />
          ))}
        </ul>
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50/60 p-4 sm:p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-red-600">
            <AlertTriangle className="h-4 w-4" aria-hidden />
            O que zera a redação
          </h3>
          <ul className="mt-2 space-y-1">
            {O_QUE_ZERA.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-zinc-600">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Correção */}
      <section id="correcao" className="mt-10 scroll-mt-6">
        <h2 className="text-lg font-semibold text-zinc-900">Quem corrige (e como)</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {COMO_E_CORRIGIDA.map((item) => (
            <div key={item.titulo} className="rounded-2xl border border-zinc-200 bg-surface p-4 sm:p-5">
              <h3 className="font-semibold text-zinc-900">{item.titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temas anteriores */}
      <section id="temas" className="mt-10 scroll-mt-6">
        <h2 className="text-lg font-semibold text-zinc-900">Temas das últimas edições</h2>
        <ol className="mt-4 space-y-0">
          {TEMAS_ANTERIORES.map((tema, i) => (
            <li key={tema.ano} className="relative flex gap-4 pb-6 last:pb-0">
              {i < TEMAS_ANTERIORES.length - 1 && (
                <span
                  className="absolute left-[27px] top-10 h-[calc(100%-2.5rem)] w-px bg-zinc-200"
                  aria-hidden
                />
              )}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-surface text-sm font-bold tabular-nums text-zinc-900">
                {tema.ano}
              </span>
              <div className="min-w-0 pt-1">
                <p className="font-medium leading-snug text-zinc-800">{tema.tema}</p>
                <span className="mt-1 inline-block rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                  {tema.eixo}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex gap-3 rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 sm:p-5">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden />
          <p className="text-sm leading-relaxed text-zinc-600">{INSIGHT_TEMAS}</p>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="mt-10 scroll-mt-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          Quiz: você conhece as regras do jogo?
        </h2>
        <p className="mb-4 mt-1 text-sm text-zinc-600">
          10 perguntas rápidas sobre o funcionamento da prova. Muita gente
          perde pontos por não conhecer essas regras.
        </p>
        <QuizRedacao />
      </section>

      {/* Treinar */}
      <section id="treinar" className="mt-10 scroll-mt-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
          <PenLine className="h-5 w-5 text-indigo-400" aria-hidden />
          Treine com temas inéditos
        </h2>
        <p className="mb-4 mt-1 text-sm text-zinc-600">
          Temas no estilo da banca, com repertórios prontos e caminhos de
          argumentação. Três deles trazem redação-modelo comentada parágrafo
          por parágrafo.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {TEMAS_TREINO.map((tema) => (
            <Link
              key={tema.id}
              href={`/redacao/${tema.id}`}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-surface p-4 transition hover:border-indigo-300 sm:p-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-indigo-400">
                {tema.eixo}
              </span>
              <h3 className="mt-1.5 flex-1 font-semibold leading-snug text-zinc-900">
                {tema.titulo}
              </h3>
              <span className="mt-3 flex items-center justify-between">
                {tema.redacao ? (
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                    Redação-modelo comentada
                  </span>
                ) : (
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500">
                    Guia de argumentação
                  </span>
                )}
                <ArrowRight
                  className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-400"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* IA */}
      <section id="ia" className="mt-10 scroll-mt-6">
        <h2 className="text-lg font-semibold text-zinc-900">Corrija sua redação com IA</h2>
        <p className="mb-4 mt-1 text-sm leading-relaxed text-zinc-600">
          Escreveu uma redação de treino? Use o prompt abaixo para receber uma
          correção honesta, nos moldes da banca: nota por competência (0 a
          200), trechos citados, o que faltou para o próximo nível e as
          prioridades de melhoria.
        </p>
        <PromptIA />
      </section>
    </div>
  );
}
