import type { Metadata } from "next";
import ResultClient from "@/components/result/ResultClient";

export const metadata: Metadata = {
  title: "Resultado do simulado",
  robots: { index: false },
};

export default function ResultadoPage() {
  return <ResultClient />;
}
