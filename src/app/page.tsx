import manifest from "@/data/questions/manifest.json";
import HomeClient, { type TopicCount } from "@/components/home/HomeClient";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { POOL } from "@/lib/pool";
import { AREA_ORDER } from "@/lib/areas";
import { listTopics, topicOfCached } from "@/lib/topics";
import type { Discipline } from "@/lib/types";

/**
 * Contagem de questões por tópico em cada área, para o filtro de conteúdo
 * do modo avançado. Variantes em espanhol não contam para evitar duplicar
 * as questões de língua estrangeira.
 */
function buildTopicCounts(): Record<Discipline, TopicCount[]> {
  const counts = {} as Record<Discipline, Record<string, number>>;
  for (const area of AREA_ORDER) counts[area] = {};

  for (const q of POOL) {
    if (q.language === "espanhol") continue;
    const topic = topicOfCached(q);
    counts[q.discipline][topic] = (counts[q.discipline][topic] ?? 0) + 1;
  }

  const result = {} as Record<Discipline, TopicCount[]>;
  for (const area of AREA_ORDER) {
    result[area] = listTopics(area)
      .map((topic) => ({ topic, count: counts[area][topic] ?? 0 }))
      .filter((t) => t.count > 0);
  }
  return result;
}

export default function Home() {
  const years = manifest.years;
  const totalQuestions = Object.values(manifest.counts).reduce(
    (acc, c) => acc + c.kept,
    0
  );
  const topicCounts = buildTopicCounts();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader active="simulado" />

      <main className="flex-1">
        <HomeClient
          years={years}
          totalQuestions={totalQuestions}
          topicCounts={topicCounts}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
