import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TEMAS_TREINO } from "@/data/redacao";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import TemaClient from "@/components/redacao/TemaClient";

export function generateStaticParams() {
  return TEMAS_TREINO.map((tema) => ({ temaId: tema.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ temaId: string }>;
}): Promise<Metadata> {
  const { temaId } = await params;
  const tema = TEMAS_TREINO.find((t) => t.id === temaId);
  return {
    title: tema ? `${tema.titulo} · Tema de redação` : "Tema de redação",
  };
}

export default async function TemaPage({
  params,
}: {
  params: Promise<{ temaId: string }>;
}) {
  const { temaId } = await params;
  const tema = TEMAS_TREINO.find((t) => t.id === temaId);
  if (!tema) notFound();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader active="redacao" />
      <main className="flex-1">
        <TemaClient tema={tema} />
      </main>
      <SiteFooter />
    </div>
  );
}
