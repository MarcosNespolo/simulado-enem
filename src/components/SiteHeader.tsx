import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter((c) => typeof c === "string" && c !== "").join(" ");
}

export function SiteHeader({ active }: { active: "simulado" | "redacao" }) {
  const linkBase = "flex h-9 items-center rounded-lg px-3 text-sm font-medium transition";
  return (
    <header className="border-b border-zinc-200/80 bg-surface/70 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Início">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-semibold tracking-tight max-[400px]:hidden">
            Simulado ENEM
          </span>
        </Link>
        <nav className="ml-auto flex items-center gap-1" aria-label="Seções do site">
          <Link
            href="/"
            aria-current={active === "simulado" ? "page" : undefined}
            className={cx(
              linkBase,
              active === "simulado"
                ? "bg-indigo-50 text-indigo-700"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
            )}
          >
            Simulado
          </Link>
          <Link
            href="/redacao"
            aria-current={active === "redacao" ? "page" : undefined}
            className={cx(
              linkBase,
              active === "redacao"
                ? "bg-indigo-50 text-indigo-700"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
            )}
          >
            Redação
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
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
  );
}
