"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "simulado-enem:theme";

/**
 * Alterna entre o tema escuro (padrão) e o claro. A classe "light" no <html>
 * redefine os design tokens (ver globals.css); um script inline no layout
 * aplica a preferência salva antes do primeiro paint.
 */
export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    // Sincroniza com a classe aplicada pelo script anti-flash do layout.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      window.localStorage.setItem(THEME_KEY, next ? "light" : "dark");
    } catch {
      // sem localStorage, o tema vale só para a sessão
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Mudar para o tema escuro" : "Mudar para o tema claro"}
      title={light ? "Tema escuro" : "Tema claro"}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-700"
    >
      {light ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
    </button>
  );
}
