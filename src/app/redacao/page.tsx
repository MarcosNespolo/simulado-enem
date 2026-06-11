import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import RedacaoClient from "@/components/redacao/RedacaoClient";

export const metadata: Metadata = {
  title: "Guia da Redação",
  description:
    "Entenda como a redação do ENEM é corrigida (5 competências), veja os temas das últimas edições, teste as regras no quiz e corrija seus textos com IA.",
};

export default function RedacaoPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader active="redacao" />
      <main className="flex-1">
        <RedacaoClient />
      </main>
      <SiteFooter />
    </div>
  );
}
