import { GraduationCap } from "lucide-react";
import manifest from "@/data/questions/manifest.json";
import HomeClient from "@/components/home/HomeClient";

export default function Home() {
  const years = manifest.years;
  const totalQuestions = Object.values(manifest.counts).reduce(
    (acc, c) => acc + c.kept,
    0
  );

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-zinc-200/80 bg-surface/70 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-semibold tracking-tight">Simulado ENEM</span>
          <span className="ml-auto text-xs text-zinc-500">
            Questões oficiais · {years[0]}–{years[years.length - 1]}
          </span>
        </div>
      </header>

      <main className="flex-1">
        <HomeClient years={years} totalQuestions={totalQuestions} />
      </main>

      <footer className="border-t border-zinc-200/80 bg-surface">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-xs leading-relaxed text-zinc-500">
          <p>
            Projeto de estudo independente, sem vínculo com INEP ou MEC. As
            questões são das provas oficiais do ENEM, obtidas via{" "}
            <a
              href="https://enem.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-2 hover:text-zinc-700"
            >
              enem.dev
            </a>
            . Seus dados ficam apenas no seu navegador.
          </p>
        </div>
      </footer>
    </div>
  );
}
