import type { Discipline, Letter, Question, Recommendation, SimuladoQuestion } from "./types";

/**
 * Classificação temática por palavras-chave. Não é perfeita, mas é suficiente
 * para apontar os assuntos em que o estudante mais errou e sugerir o que
 * revisar. Cada questão recebe o tópico com mais ocorrências de padrões no
 * texto; sem nenhuma ocorrência, cai no tópico geral da área.
 */

interface TopicDef {
  topic: string;
  hint: string;
  patterns: RegExp[];
}

const TOPICS: Record<Discipline, TopicDef[]> = {
  matematica: [
    {
      topic: "Porcentagem e matemática financeira",
      hint: "Revise porcentagem, aumentos e descontos sucessivos, juros simples e compostos.",
      patterns: [/porcent/i, /\d\s?%/, /juros/i, /desconto/i, /acr[ée]scimo/i, /financ/i, /parcela/i, /[àa] vista/i],
    },
    {
      topic: "Razão, proporção e escalas",
      hint: "Treine regra de três, grandezas direta e inversamente proporcionais e leitura de escalas.",
      patterns: [/propor[çc]/i, /raz[ãa]o/i, /escala/i, /regra de tr[êe]s/i, /por litro/i, /por quil[ôo]metro/i],
    },
    {
      topic: "Probabilidade",
      hint: "Estude espaço amostral, probabilidade condicional e eventos independentes.",
      patterns: [/probabilidade/i, /aleat[óo]ri/i, /sorteio/i, /sortead/i, /chance/i],
    },
    {
      topic: "Estatística (média, mediana e gráficos)",
      hint: "Revise média, mediana, moda e desvio, e pratique leitura de tabelas e gráficos.",
      patterns: [/m[ée]dia/i, /mediana/i, /\bmoda\b/i, /desvio/i, /estat[íi]stic/i, /frequ[êe]ncia/i],
    },
    {
      topic: "Análise combinatória",
      hint: "Pratique princípio fundamental da contagem, permutações, arranjos e combinações.",
      patterns: [/combina[çc][õo]/i, /permuta[çc]/i, /arranjo/i, /fatorial/i, /quantas maneiras/i, /de quantos modos/i, /possibilidades/i],
    },
    {
      topic: "Funções e gráficos de funções",
      hint: "Revise função afim, quadrática, exponencial e logarítmica e a interpretação dos seus gráficos.",
      patterns: [/fun[çc][ãa]o/i, /f\s?\(\s?x\s?\)/i, /quadr[áa]tic/i, /exponencial/i, /logarit/i, /par[áa]bola/i, /v[ée]rtice/i],
    },
    {
      topic: "Geometria plana",
      hint: "Revise áreas e perímetros de figuras planas, ângulos e semelhança de triângulos.",
      patterns: [/[áa]rea/i, /per[íi]metro/i, /tri[âa]ngulo/i, /pol[íi]gono/i, /circunfer[êe]ncia/i, /c[íi]rculo/i, /[âa]ngulo/i, /diagonal/i],
    },
    {
      topic: "Geometria espacial",
      hint: "Estude volume e área de prismas, cilindros, cones, pirâmides e esferas.",
      patterns: [/volume/i, /prisma/i, /cilindr/i, /\bcone\b/i, /esfera/i, /pir[âa]mide/i, /\bcubo\b/i, /paralelep[íi]pedo/i, /capacidade de/i],
    },
    {
      topic: "Trigonometria",
      hint: "Revise seno, cosseno e tangente, relações no triângulo retângulo e funções periódicas.",
      patterns: [/\bseno\b/i, /cosseno/i, /tangente/i, /trigonom/i, /\bsen\b/i, /\bcos\b/i],
    },
    {
      topic: "Equações e sistemas",
      hint: "Pratique montar e resolver equações e sistemas a partir de problemas em contexto.",
      patterns: [/equa[çc][ãa]o/i, /sistema (linear|de equa)/i, /inc[óo]gnita/i, /express[ãa]o alg[ée]brica/i],
    },
    {
      topic: "Sequências e progressões",
      hint: "Revise progressões aritméticas e geométricas e reconhecimento de padrões.",
      patterns: [/progress[ãa]o/i, /sequ[êe]ncia/i, /termo seguinte/i, /padr[ãa]o num[ée]rico/i],
    },
    {
      topic: "Grandezas e unidades de medida",
      hint: "Treine conversão de unidades (tempo, comprimento, massa, volume) e ordens de grandeza.",
      patterns: [/unidade de medida/i, /convers[ãa]o/i, /quilômetro/i, /mililitro/i, /tonelada/i, /\bkm\b/, /\bkg\b/],
    },
  ],
  "ciencias-natureza": [
    {
      topic: "Ecologia e meio ambiente",
      hint: "Revise cadeias alimentares, ciclos biogeoquímicos, biomas e impactos ambientais.",
      patterns: [/ecossistema/i, /cadeia alimentar/i, /teia tr[óo]fica/i, /biodiversidade/i, /polui[çc]/i, /aquecimento global/i, /efeito estufa/i, /sustentab/i, /desmatamento/i],
    },
    {
      topic: "Genética e evolução",
      hint: "Estude leis de Mendel, DNA/RNA, hereditariedade, seleção natural e evidências da evolução.",
      patterns: [/\bgene\b/i, /gen[ée]tic/i, /\bdna\b/i, /\brna\b/i, /cromossom/i, /heredit/i, /evolu[çc][ãa]o/i, /sele[çc][ãa]o natural/i, /muta[çc][ãa]o/i, /alelo/i],
    },
    {
      topic: "Fisiologia humana e citologia",
      hint: "Revise sistemas do corpo humano (nervoso, digestório, circulatório) e organelas celulares.",
      patterns: [/horm[ôo]nio/i, /sistema nervoso/i, /digest[óo]ri/i, /circulat[óo]ri/i, /imunol[óo]gic/i, /prote[íi]na/i, /enzima/i, /c[ée]lula/i, /membrana/i, /mitoc[ôo]ndria/i],
    },
    {
      topic: "Microbiologia, saúde e doenças",
      hint: "Estude vírus, bactérias, parasitoses, vacinas e formas de prevenção de doenças.",
      patterns: [/bact[ée]ria/i, /v[íi]rus/i, /vacina/i, /antibi[óo]tico/i, /doen[çc]a/i, /parasit/i, /fungo/i, /epidemi/i, /transmiss[ãa]o/i],
    },
    {
      topic: "Química orgânica",
      hint: "Revise funções orgânicas, hidrocarbonetos, polímeros e isomeria.",
      patterns: [/org[âa]nic/i, /hidrocarboneto/i, /pol[íi]mero/i, /[ée]ster/i, /[áa]lcool/i, /carbono/i, /cadeia carb[ôo]nica/i, /isomer/i],
    },
    {
      topic: "Reações químicas e estequiometria",
      hint: "Pratique balanceamento, cálculo estequiométrico, mol e rendimento de reações.",
      patterns: [/rea[çc][ãa]o qu[íi]mica/i, /estequiom/i, /balancea/i, /\bmol\b/i, /massa molar/i, /combust[ãa]o/i, /reagente/i],
    },
    {
      topic: "Soluções, ácidos e bases",
      hint: "Revise concentração de soluções, diluição, pH e neutralização.",
      patterns: [/solu[çc][ãa]o/i, /concentra[çc]/i, /solvente/i, /soluto/i, /\bph\b/i, /[áa]cido/i, /\bbase\b/i, /dilui[çc]/i],
    },
    {
      topic: "Eletroquímica e oxirredução",
      hint: "Estude pilhas, eletrólise e número de oxidação.",
      patterns: [/pilha/i, /eletr[óo]lise/i, /oxida[çc]/i, /redu[çc][ãa]o.*el[ée]tron/i, /bateria/i, /eletroqu[íi]mic/i],
    },
    {
      topic: "Mecânica (cinemática e dinâmica)",
      hint: "Revise velocidade, aceleração, leis de Newton, trabalho e energia mecânica.",
      patterns: [/velocidade/i, /acelera[çc]/i, /for[çc]a/i, /newton/i, /atrito/i, /queda livre/i, /energia cin[ée]tica/i, /energia potencial/i, /movimento/i],
    },
    {
      topic: "Eletricidade e magnetismo",
      hint: "Estude circuitos, corrente, tensão, resistência, potência elétrica e eletromagnetismo.",
      patterns: [/corrente el[ée]tric/i, /resist[êe]ncia/i, /circuito/i, /tens[ãa]o/i, /\bvolt/i, /pot[êe]ncia el[ée]tric/i, /campo magn[ée]tico/i, /[íi]m[ãa]/i, /\bwatt/i],
    },
    {
      topic: "Ondas, som e óptica",
      hint: "Revise características de ondas, fenômenos ondulatórios, espelhos e lentes.",
      patterns: [/\bonda/i, /frequ[êe]ncia.*hz/i, /\bsom\b/i, /sonor/i, /\bluz\b/i, /lente/i, /espelho/i, /refra[çc]/i, /reflex[ãa]o/i, /comprimento de onda/i],
    },
    {
      topic: "Termologia e termodinâmica",
      hint: "Estude calor, temperatura, dilatação, trocas térmicas e máquinas térmicas.",
      patterns: [/temperatura/i, /calor/i, /t[ée]rmic/i, /dilata[çc]/i, /termodin[âa]mic/i, /celsius/i, /isolante/i],
    },
    {
      topic: "Energia e fontes energéticas",
      hint: "Revise matriz energética, fontes renováveis e não renováveis e eficiência energética.",
      patterns: [/energia (solar|e[óo]lica|renov[áa]vel|el[ée]trica|nuclear)/i, /usina/i, /combust[íi]vel/i, /etanol/i, /matriz energ[ée]tica/i],
    },
  ],
  "ciencias-humanas": [
    {
      topic: "Brasil Colônia e Império",
      hint: "Revise sociedade colonial, escravidão, economia açucareira/mineradora e o período imperial.",
      patterns: [/col[ôo]nia/i, /colonial/i, /escravid[ãa]o/i, /escraviza/i, /imp[ée]rio do brasil/i, /imperial/i, /capitania/i, /jesu[íi]ta/i, /senzala/i, /abolicion/i],
    },
    {
      topic: "Brasil República",
      hint: "Estude Era Vargas, ditadura militar, redemocratização e Constituição de 1988.",
      patterns: [/rep[úu]blica/i, /vargas/i, /ditadura/i, /militar(es)? no poder/i, /redemocratiza/i, /constitui[çc][ãa]o de 1988/i, /golpe de 1964/i, /populis/i],
    },
    {
      topic: "História geral",
      hint: "Revise revoluções (Francesa, Industrial), guerras mundiais, Guerra Fria e mundo antigo/medieval.",
      patterns: [/revolu[çc][ãa]o (francesa|industrial|russa)/i, /guerra mundial/i, /guerra fria/i, /nazis/i, /fascis/i, /feudal/i, /iluminis/i, /gr[ée]cia antiga/i, /imp[ée]rio romano/i, /idade m[ée]dia/i],
    },
    {
      topic: "Geografia agrária e urbana",
      hint: "Estude urbanização, êxodo rural, agronegócio, agricultura familiar e questões fundiárias.",
      patterns: [/urbaniza[çc]/i, /agr[áa]ri/i, /agr[íi]cola/i, /agroneg[óo]cio/i, /[êe]xodo rural/i, /metr[óo]pole/i, /favela/i, /reforma agr[áa]ria/i, /campo e a cidade/i],
    },
    {
      topic: "Geopolítica e globalização",
      hint: "Revise blocos econômicos, fluxos migratórios, conflitos territoriais e divisão internacional do trabalho.",
      patterns: [/globaliza[çc]/i, /geopol[íi]tic/i, /bloco econ[ôo]mico/i, /migra[çc]/i, /imigrante/i, /refugiado/i, /fronteira/i, /multinacional/i, /com[ée]rcio internacional/i],
    },
    {
      topic: "Geografia física e meio ambiente",
      hint: "Estude climas, biomas, relevo, hidrografia, solos e impactos ambientais no espaço geográfico.",
      patterns: [/clima/i, /bioma/i, /relevo/i, /hidrogr/i, /bacia hidrogr[áa]fica/i, /\bsolo\b/i, /eros[ãa]o/i, /cerrado/i, /amaz[ôo]ni/i, /caatinga/i, /recursos h[íi]dricos/i],
    },
    {
      topic: "Filosofia",
      hint: "Revise filosofia antiga (Platão, Aristóteles), ética, teoria do conhecimento e filosofia política.",
      patterns: [/filosof/i, /fil[óo]sofo/i, /plat[ãa]o/i, /arist[óo]teles/i, /s[óo]crates/i, /kant/i, /nietzsche/i, /descartes/i, /[ée]tica/i, /raz[ãa]o e f[ée]/i, /epistemolog/i],
    },
    {
      topic: "Sociologia, trabalho e cidadania",
      hint: "Estude pensadores clássicos (Marx, Durkheim, Weber), mundo do trabalho, desigualdade e movimentos sociais.",
      patterns: [/sociolog/i, /soci[óo]logo/i, /durkheim/i, /weber/i, /marx/i, /cidadania/i, /movimento social/i, /desigualdade/i, /classe social/i, /mundo do trabalho/i, /sindica/i],
    },
    {
      topic: "Cultura, identidade e povos tradicionais",
      hint: "Revise cultura material e imaterial, identidade, povos indígenas, quilombolas e patrimônio.",
      patterns: [/cultura/i, /identidade/i, /ind[íi]gena/i, /quilombola/i, /patrim[ôo]nio/i, /afro-brasileir/i, /tradi[çc][õo]es/i, /diversidade cultural/i],
    },
    {
      topic: "Estado, política e direitos",
      hint: "Estude formas de Estado e governo, democracia, direitos humanos e participação política.",
      patterns: [/estado democr/i, /democracia/i, /direitos humanos/i, /soberania/i, /elei[çc]/i, /poder (executivo|legislativo|judici[áa]rio)/i, /lei /i],
    },
  ],
  linguagens: [
    {
      topic: "Língua estrangeira (inglês/espanhol)",
      hint: "Pratique leitura de textos autênticos em língua estrangeira, focando em ideia geral e vocabulário em contexto.",
      patterns: [/^/], // resolvido via language, ver tagQuestion
    },
    {
      topic: "Gêneros textuais e funções da linguagem",
      hint: "Revise características de gêneros (crônica, editorial, charge, propaganda) e funções da linguagem.",
      patterns: [/g[êe]nero textual/i, /cr[ôo]nica/i, /editorial/i, /charge/i, /cartum/i, /propaganda/i, /an[úu]ncio/i, /campanha publicit/i, /fun[çc][ãa]o (da linguagem|referencial|conativa|po[ée]tica|f[áa]tica)/i, /tirinha/i],
    },
    {
      topic: "Variação linguística",
      hint: "Estude variação regional, social e situacional, norma-padrão e adequação linguística.",
      patterns: [/varia[çc][ãa]o lingu[íi]stic/i, /norma (culta|padr[ãa]o)/i, /regionalis/i, /g[íi]ria/i, /dialeto/i, /fala popular/i, /linguagem (formal|informal|coloquial)/i, /sotaque/i],
    },
    {
      topic: "Literatura brasileira",
      hint: "Revise escolas literárias (Barroco ao Modernismo), seus autores e leitura de poemas e prosa.",
      patterns: [/literatur/i, /poema/i, /poesia/i, /\bverso/i, /soneto/i, /romance/i, /modernis/i, /romantis/i, /barroco/i, /realis/i, /parnasian/i, /drummond/i, /conto/i],
    },
    {
      topic: "Gramática e semântica no texto",
      hint: "Estude classes de palavras, coesão, regência, concordância e efeitos de sentido da pontuação.",
      patterns: [/pronome/i, /\bverbo/i, /conjun[çc][ãa]o/i, /adv[ée]rbio/i, /sintax/i, /sem[âa]ntic/i, /pontua[çc]/i, /v[íi]rgula/i, /coes[ãa]o/i, /concord[âa]ncia/i, /reg[êe]ncia/i, /sentido de/i],
    },
    {
      topic: "Artes e cultura visual",
      hint: "Revise movimentos artísticos, leitura de obras visuais, música, dança e teatro.",
      patterns: [/pintura/i, /escultura/i, /obra de arte/i, /vanguarda/i, /m[úu]sica/i, /can[çc][ãa]o/i, /dan[çc]a/i, /teatro/i, /espet[áa]culo/i, /artista/i, /exposi[çc][ãa]o/i],
    },
    {
      topic: "Tecnologia, mídia e comunicação",
      hint: "Estude gêneros digitais, redes sociais, fake news e o impacto das tecnologias na comunicação.",
      patterns: [/internet/i, /rede(s)? social/i, /\bmeme\b/i, /digital/i, /tecnolog/i, /aplicativo/i, /celular/i, /fake news/i, /m[íi]dia/i],
    },
    {
      topic: "Esporte e cultura corporal",
      hint: "Revise práticas corporais, esportes, jogos e seus significados sociais (Educação Física).",
      patterns: [/esporte/i, /futebol/i, /atividade f[íi]sica/i, /gin[áa]stica/i, /jogos/i, /pr[áa]tica corporal/i, /capoeira/i, /atleta/i],
    },
    {
      topic: "Interpretação de texto",
      hint: "Pratique identificar tese, argumentos, inferências e a intenção comunicativa dos textos.",
      patterns: [], // fallback da área
    },
  ],
};

const FALLBACK_TOPIC: Record<Discipline, string> = {
  linguagens: "Interpretação de texto",
  "ciencias-humanas": "História geral",
  "ciencias-natureza": "Ecologia e meio ambiente",
  matematica: "Razão, proporção e escalas",
};

function questionText(q: Question): string {
  const parts = [q.context, q.alternativesIntroduction];
  for (const a of q.alternatives) if (a.text) parts.push(a.text);
  return parts.join("\n");
}

/** Retorna o tópico mais provável de uma questão. */
export function tagQuestion(q: Question): string {
  if (q.discipline === "linguagens" && q.language) {
    return "Língua estrangeira (inglês/espanhol)";
  }
  const text = questionText(q);
  let best: { topic: string; score: number } | null = null;
  for (const def of TOPICS[q.discipline]) {
    if (def.patterns.length === 0) continue;
    if (def.topic === "Língua estrangeira (inglês/espanhol)") continue;
    let score = 0;
    for (const re of def.patterns) {
      const matches = text.match(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"));
      if (matches) score += matches.length;
    }
    if (score > 0 && (best === null || score > best.score)) {
      best = { topic: def.topic, score };
    }
  }
  return best?.topic ?? FALLBACK_TOPIC[q.discipline];
}

function hintFor(discipline: Discipline, topic: string): string {
  const def = TOPICS[discipline].find((t) => t.topic === topic);
  return def?.hint ?? "Revise esse assunto com questões comentadas de provas anteriores.";
}

/**
 * Gera recomendações de estudo a partir das questões erradas ou em branco,
 * agrupando por tópico e ordenando pelos assuntos com mais erros.
 */
export function buildRecommendations(
  questions: SimuladoQuestion[],
  answers: Record<number, Letter>
): Recommendation[] {
  const byTopic = new Map<string, Recommendation>();

  for (const q of questions) {
    const topic = tagQuestion(q);
    const key = `${q.discipline}::${topic}`;
    let rec = byTopic.get(key);
    if (!rec) {
      rec = { discipline: q.discipline, topic, missed: 0, total: 0, hint: hintFor(q.discipline, topic) };
      byTopic.set(key, rec);
    }
    rec.total += 1;
    const answer = answers[q.number];
    if (!answer || answer !== q.correctAlternative) rec.missed += 1;
  }

  return Array.from(byTopic.values())
    .filter((r) => r.missed > 0)
    .sort((a, b) => b.missed - a.missed || b.missed / b.total - a.missed / a.total)
    .slice(0, 8);
}
