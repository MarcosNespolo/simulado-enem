import { NextResponse } from "next/server";
import { POOL } from "@/lib/pool";
import { generateSimulado } from "@/lib/generator";
import { AREA_ORDER, MAX_PER_AREA } from "@/lib/areas";
import type { Discipline, Language, SimuladoConfig } from "@/lib/types";

const LANGUAGES: Language[] = ["ingles", "espanhol"];

function parseConfig(body: unknown): SimuladoConfig | null {
  if (typeof body !== "object" || body === null) return null;
  const { counts, language, timerEnabled } = body as Record<string, unknown>;

  if (typeof counts !== "object" || counts === null) return null;
  const parsedCounts = {} as Record<Discipline, number>;
  let total = 0;
  for (const area of AREA_ORDER) {
    const value = (counts as Record<string, unknown>)[area] ?? 0;
    if (typeof value !== "number" || !Number.isInteger(value) || value < 0 || value > MAX_PER_AREA) {
      return null;
    }
    parsedCounts[area] = value;
    total += value;
  }
  if (total < 1 || total > MAX_PER_AREA * AREA_ORDER.length) return null;

  if (!LANGUAGES.includes(language as Language)) return null;
  if (typeof timerEnabled !== "boolean") return null;

  return { counts: parsedCounts, language: language as Language, timerEnabled };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const config = parseConfig(body);
  if (!config) {
    return NextResponse.json(
      { error: "Configuração inválida: confira quantidades por área (0 a 45), idioma e cronômetro." },
      { status: 400 }
    );
  }

  const questions = generateSimulado(config, POOL);
  if (questions.length === 0) {
    return NextResponse.json({ error: "Nenhuma questão disponível para essa configuração." }, { status: 422 });
  }

  return NextResponse.json({ config, questions });
}
