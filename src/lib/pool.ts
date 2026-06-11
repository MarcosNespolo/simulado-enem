import "server-only";
import type { Question } from "./types";
import manifest from "@/data/questions/manifest.json";
import y2019 from "@/data/questions/2019.json";
import y2020 from "@/data/questions/2020.json";
import y2021 from "@/data/questions/2021.json";
import y2022 from "@/data/questions/2022.json";
import y2023 from "@/data/questions/2023.json";

/**
 * Pool completa de questões, carregada dos JSONs versionados no repo
 * (gerados por scripts/fetch-questions.mjs). Para adicionar mais anos:
 * rode o script e acrescente o import aqui.
 */
export const POOL: Question[] = [
  ...(y2019 as unknown as Question[]),
  ...(y2020 as unknown as Question[]),
  ...(y2021 as unknown as Question[]),
  ...(y2022 as unknown as Question[]),
  ...(y2023 as unknown as Question[]),
];

export const YEARS: number[] = manifest.years;
