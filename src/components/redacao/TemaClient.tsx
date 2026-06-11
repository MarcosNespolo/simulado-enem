"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  ListChecks,
  PenLine,
  Sparkles,
} from "lucide-react";
import type { DestaqueParagrafo, TemaTreino } from "@/data/redacao";

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter((c) => typeof c === "string" && c !== "").join(" ");
}

const COMP_STYLE: Record<number, string> = {
  1: "bg-zinc-100 text-zinc-600",
  2: "bg-violet-100 text-violet-700",
  3: "bg-indigo-50 text-indigo-700",
  4: "bg-sky-100 text-sky-700",
  5: "bg-emerald-100 text-emerald-700",
};

/**
 * Renderiza o texto do parágrafo com os trechos destacados marcados e
 * numerados, na ordem em que aparecem.
 */
function TextoComDestaques({
  texto,
  destaques,
  ativo,
}: {
  texto: string;
  destaques: DestaqueParagrafo[];
  ativo: boolean;
}) {
  if (!ativo) return <>{texto}</>;

  const parts: ReactNode[] = [];
  let rest = texto;
  let shown = 0;
  destaques.forEach((destaque, i) => {
    const idx = rest.indexOf(destaque.trecho);
    if (idx === -1) return;
    parts.push(<span key={`t-${i}`}>{rest.slice(0, idx)}</span>);
    parts.push(
      <mark key={`m-${i}`} className="rounded bg-indigo-50 px-0.5 text-zinc-800 ring-1 ring-inset ring-indigo-200">
        {destaque.trecho}
        <sup className="ml-0.5 font-sans text-[10px] font-bold text-indigo-400">{shown + 1}</sup>
      </mark>
    );
    rest = rest.slice(idx + destaque.trecho.length);
    shown += 1;
  });
  parts.push(<span key="rest">{rest}</span>);
  return <>{parts}</>;
}

export default function TemaClient({ tema }: { tema: TemaTreino }) {
  const [selecionado, setSelecionado] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6 sm:pt-8">
      <Link
        href="/redacao"
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Guia da Redação
      </Link>

      {/* Tema */}
      <section className="mt-4 rounded-2xl border border-zinc-200 bg-surface p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          Tema de treino · {tema.eixo}
        </p>
        <h1 className="mt-2 text-balance text-2xl font-bold leading-snug text-zinc-900">
          {tema.titulo}
        </h1>
        <div className="mt-4 flex gap-3 rounded-xl bg-indigo-50/60 p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden />
          <p className="text-sm leading-relaxed text-zinc-600">
            <strong className="text-zinc-800">Por que treinar esse tema: </strong>
            {tema.porQuePodeCair}
          </p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">{tema.recorte}</p>
      </section>

      {/* Repertórios */}
      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
          <BookOpen className="h-5 w-5 text-indigo-400" aria-hidden />
          Repertórios para usar
        </h2>
        <div className="mt-3 space-y-2">
          {tema.repertorios.map((rep) => (
            <div key={rep.fonte} className="rounded-xl border border-zinc-200 bg-surface p-4">
              <h3 className="text-sm font-semibold text-zinc-900">{rep.fonte}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">{rep.comoUsar}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Caminhos */}
      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
          <ListChecks className="h-5 w-5 text-indigo-400" aria-hidden />
          Caminhos de argumentação
        </h2>
        <ol className="mt-3 space-y-2">
          {tema.caminhos.map((caminho, i) => (
            <li key={caminho} className="flex gap-3 rounded-xl border border-zinc-200 bg-surface p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-zinc-600">{caminho}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Redação-modelo */}
      {tema.redacao && (
        <section className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-900">
              <PenLine className="h-5 w-5 text-indigo-400" aria-hidden />
              Redação-modelo comentada
            </h2>
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              {tema.redacao.notaAlvo}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{tema.redacao.comentarioGeral}</p>
          <p className="mt-2 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-700">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            Toque em cada parágrafo para ver a análise: o que ele faz no texto
            e quais trechos garantem pontos em cada competência.
          </p>

          <div className="mt-4 space-y-3">
            {tema.redacao.paragrafos.map((paragrafo, i) => {
              const ativo = selecionado === i;
              const visiveis = paragrafo.destaques.filter((d) =>
                paragrafo.texto.includes(d.trecho)
              );
              return (
                <article
                  key={paragrafo.rotulo}
                  className={cx(
                    "overflow-hidden rounded-2xl border transition",
                    ativo ? "border-indigo-300 bg-surface" : "border-zinc-200 bg-surface"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelecionado(ativo ? null : i)}
                    aria-expanded={ativo}
                    className="w-full p-4 text-left sm:p-5"
                  >
                    <span
                      className={cx(
                        "mb-2 inline-block rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide",
                        ativo ? "bg-indigo-600 text-white" : "bg-zinc-100 text-zinc-500"
                      )}
                    >
                      {paragrafo.rotulo}
                    </span>
                    <p className="text-[15px] leading-[1.85] text-zinc-700">
                      <TextoComDestaques
                        texto={paragrafo.texto}
                        destaques={paragrafo.destaques}
                        ativo={ativo}
                      />
                    </p>
                  </button>
                  {ativo && (
                    <div className="animate-fade-in border-t border-zinc-100 bg-zinc-50/50 p-4 sm:p-5">
                      <p className="text-sm leading-relaxed text-zinc-600">
                        <strong className="text-zinc-800">O que este parágrafo faz: </strong>
                        {paragrafo.funcao}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {visiveis.map((destaque, j) => (
                          <li key={destaque.trecho} className="flex gap-2.5">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-700">
                              {j + 1}
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm leading-relaxed text-zinc-600">
                                {destaque.explicacao}
                              </p>
                              {destaque.competencia && (
                                <span
                                  className={cx(
                                    "mt-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold",
                                    COMP_STYLE[destaque.competencia]
                                  )}
                                >
                                  Competência {destaque.competencia}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-10 rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 text-center sm:p-7">
        <h2 className="text-lg font-semibold text-zinc-900">Agora é a sua vez</h2>
        <p className="mx-auto mt-1 max-w-md text-sm leading-relaxed text-zinc-600">
          Escreva sua redação sobre este tema em até 30 linhas (vale cronometrar
          1 hora) e use o prompt de correção por IA para receber nota e
          diagnóstico nas 5 competências.
        </p>
        <Link
          href="/redacao#ia"
          className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 font-semibold text-white transition hover:bg-indigo-500"
        >
          Pegar o prompt de correção
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>
    </div>
  );
}
