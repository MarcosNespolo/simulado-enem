import type { Metadata } from "next";
import QuizClient from "@/components/quiz/QuizClient";

export const metadata: Metadata = {
  title: "Simulado em andamento",
  robots: { index: false },
};

export default function SimuladoPage() {
  return <QuizClient />;
}
