"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "simulado-enem:theme";

/**
 * Alterna entre o tema claro (padrão) e o escuro. A classe "dark" no <html>
 * redefine os design tokens (ver globals.css); um script inline no layout
 * aplica a preferência salva antes do primeiro paint.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Sincroniza com a classe aplicada pelo script anti-flash do layout.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // sem localStorage, o tema vale só para a sessão
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      title={dark ? "Tema claro" : "Tema escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700"
    >
      {dark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </button>
  );
}
