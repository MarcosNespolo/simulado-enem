/**
 * Conteúdo do guia de redação do ENEM: como a prova é avaliada, temas das
 * edições anteriores, quiz de regras e temas de treino com redações-modelo
 * comentadas. Conteúdo estático e versionado, sem dependência externa.
 */

export interface Competencia {
  numero: 1 | 2 | 3 | 4 | 5;
  titulo: string;
  resumo: string;
  oQueAvalia: string;
  comoPontuar: string[];
  oQueDerruba: string[];
}

export const COMPETENCIAS: Competencia[] = [
  {
    numero: 1,
    titulo: "Domínio da escrita formal",
    resumo: "Norma culta da língua portuguesa",
    oQueAvalia:
      "Avalia se você escreve seguindo a norma-padrão: ortografia, acentuação, concordância, regência, pontuação e adequação do vocabulário. Deslizes recorrentes ou que comprometem a leitura derrubam a nota.",
    comoPontuar: [
      "Prefira períodos mais curtos: frases longas multiplicam erros de pontuação e concordância.",
      "Revise os campeões de desconto: vírgula entre sujeito e verbo, crase, 'há/a', 'mas/mais' e concordâncias distantes.",
      "Use vocabulário preciso sem rebuscamento; palavra difícil usada errado pesa mais do que palavra simples bem usada.",
      "Reserve os minutos finais para reler só procurando erro de língua, não de conteúdo.",
    ],
    oQueDerruba: [
      "Erros sistemáticos do mesmo tipo (mostram que não é desatenção).",
      "Marcas de oralidade: 'né', 'a gente vê que', gírias.",
      "Período sem pontuação interna ou com vírgulas aleatórias.",
    ],
  },
  {
    numero: 2,
    titulo: "Compreensão do tema",
    resumo: "Tema completo + repertório sociocultural",
    oQueAvalia:
      "Avalia se você compreendeu o tema por inteiro (sem tangenciar), se manteve o tipo dissertativo-argumentativo e se usou repertório sociocultural produtivo: conhecimento de outras áreas (história, filosofia, dados, obras) a serviço da discussão.",
    comoPontuar: [
      "Sublinhe as palavras-chave do tema e confira se TODAS aparecem discutidas no seu texto (no ENEM 2023, quem falou de trabalho de cuidado sem falar de mulher tangenciou).",
      "Traga ao menos um repertório legitimado por parágrafo de desenvolvimento: lei, dado de instituição, conceito de autor, obra.",
      "Repertório precisa ser produtivo: explique como ele se conecta ao argumento, não apenas cite.",
      "Não copie os textos motivadores; eles servem só para você entender o recorte.",
    ],
    oQueDerruba: [
      "Tangenciar: discutir o assunto geral ignorando o recorte do tema.",
      "Repertório de enfeite, citado e abandonado na sequência.",
      "Texto narrativo ou excesso de primeira pessoa opinativa sem argumentação.",
    ],
  },
  {
    numero: 3,
    titulo: "Organização dos argumentos",
    resumo: "Projeto de texto e defesa do ponto de vista",
    oQueAvalia:
      "Avalia o seu projeto de texto: a tese está clara? Cada parágrafo desenvolve um argumento que sustenta essa tese? As informações são interpretadas (e não só listadas) em defesa do seu ponto de vista?",
    comoPontuar: [
      "Antes de escrever, rascunhe: tese + argumento 1 + argumento 2 + proposta. Esse esqueleto é o 'projeto de texto' que o corretor procura.",
      "Estruture cada desenvolvimento: tópico frasal (a ideia), repertório (a prova), análise (o porquê) e fechamento (o elo com a tese).",
      "Aprofunde: pergunte 'por quê?' duas vezes sobre cada afirmação que fizer e responda no próprio parágrafo.",
      "Os dois desenvolvimentos devem atacar dimensões diferentes do problema (ex.: uma causa estrutural e uma consequência social).",
    ],
    oQueDerruba: [
      "Parágrafos que apenas constatam o problema sem explicar causas ou efeitos.",
      "Argumentos repetidos com palavras diferentes.",
      "Informações soltas, sem amarração com a tese ('colcha de retalhos').",
    ],
  },
  {
    numero: 4,
    titulo: "Coesão e articulação",
    resumo: "Conectivos e costura entre as partes",
    oQueAvalia:
      "Avalia os mecanismos linguísticos que costuram o texto: conectivos entre parágrafos e dentro deles, pronomes que retomam ideias, sinônimos que evitam repetição. O corretor verifica se há articulação variada e sem inadequações.",
    comoPontuar: [
      "Comece cada parágrafo com um articulador interparágrafo: 'Diante disso', 'Além desse fator', 'Portanto'.",
      "Dentro do parágrafo, use operadores variados: causa (visto que), oposição (entretanto), conclusão (logo), exemplificação (a exemplo de).",
      "Retome ideias com pronomes e sinônimos ('esse cenário', 'tal problemática') em vez de repetir a mesma palavra.",
      "Monte seu kit de 10-12 conectivos favoritos antes da prova e treine usá-los sempre.",
    ],
    oQueDerruba: [
      "Parágrafos que começam sem nenhuma ponte com o anterior.",
      "Conectivo usado com sentido errado ('portanto' para introduzir causa).",
      "Repetição insistente do mesmo conectivo ou da palavra do tema.",
    ],
  },
  {
    numero: 5,
    titulo: "Proposta de intervenção",
    resumo: "Solução detalhada que respeite os direitos humanos",
    oQueAvalia:
      "Avalia a sua solução para o problema discutido. Para os 200 pontos, a proposta precisa de cinco elementos: agente (quem faz), ação (o que faz), meio (como faz), efeito (para que faz) e detalhamento (um desdobramento de qualquer um deles), sempre respeitando os direitos humanos.",
    comoPontuar: [
      "Decore o esqueleto: AGENTE + AÇÃO + MEIO/MODO + EFEITO + DETALHAMENTO.",
      "Seja específico no agente: 'o Ministério da Educação', 'as prefeituras em parceria com ONGs', não apenas 'o governo'.",
      "O meio costuma entrar com 'por meio de', 'mediante', 'com verba de'.",
      "Conecte a proposta aos argumentos: ela deve resolver exatamente o problema que você discutiu.",
    ],
    oQueDerruba: [
      "Proposta vaga: 'é preciso conscientizar a população'.",
      "Faltar elementos (sem agente ou sem meio, a nota cai por nível).",
      "Propostas que violam direitos humanos (zeram a competência 5).",
    ],
  },
];

export const O_QUE_ZERA: string[] = [
  "Fugir totalmente do tema proposto.",
  "Não seguir a estrutura dissertativo-argumentativa (escrever poema, narração, carta...).",
  "Escrever até 7 linhas (texto insuficiente) ou deixar a folha em branco.",
  "Copiar integralmente os textos motivadores ou de outras partes da prova.",
  "Inserir desenhos, impropérios ou trechos deliberadamente desconectados do tema.",
  "Assinar ou identificar-se fora do local permitido.",
  "Escrever em língua estrangeira ou com letra ilegível.",
];

export const COMO_E_CORRIGIDA: { titulo: string; texto: string }[] = [
  {
    titulo: "Dois corretores independentes",
    texto:
      "Sua redação é avaliada por dois professores, separadamente, sem que um veja a nota do outro. Cada um atribui de 0 a 200 pontos por competência; sua nota é a média das duas avaliações.",
  },
  {
    titulo: "Discrepância chama um terceiro",
    texto:
      "Se as notas totais diferirem em mais de 100 pontos, ou mais de 80 pontos em qualquer competência, um terceiro corretor entra. Persistindo a diferença, uma banca de três professores dá a palavra final.",
  },
  {
    titulo: "Cada competência vale 200",
    texto:
      "São 5 competências de mesmo peso, avaliadas em seis níveis (0, 40, 80, 120, 160, 200). A nota 1000 exige nível máximo nas cinco ao mesmo tempo, o que só acontece com pouquíssimos candidatos por edição.",
  },
  {
    titulo: "30 linhas, caneta preta",
    texto:
      "O espaço é de 30 linhas (título é opcional e conta como linha). Trechos copiados dos textos motivadores são descontados da contagem. A folha definitiva deve ser preenchida com caneta esferográfica preta.",
  },
];

export interface TemaAnterior {
  ano: number;
  tema: string;
  eixo: string;
}

export const TEMAS_ANTERIORES: TemaAnterior[] = [
  {
    ano: 2025,
    tema: "Perspectivas acerca do envelhecimento na sociedade brasileira",
    eixo: "Demografia e etarismo",
  },
  {
    ano: 2024,
    tema: "Desafios para a valorização da herança africana no Brasil",
    eixo: "Cultura e identidade",
  },
  {
    ano: 2023,
    tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
    eixo: "Gênero e trabalho",
  },
  {
    ano: 2022,
    tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
    eixo: "Diversidade e territórios",
  },
  {
    ano: 2021,
    tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
    eixo: "Cidadania e invisibilidade",
  },
  {
    ano: 2020,
    tema: "O estigma associado às doenças mentais na sociedade brasileira",
    eixo: "Saúde mental e preconceito",
  },
  {
    ano: 2019,
    tema: "Democratização do acesso ao cinema no Brasil",
    eixo: "Cultura e acesso",
  },
];

export const INSIGHT_TEMAS =
  "Repare no padrão: o ENEM quase sempre cobra um problema social brasileiro, muitas vezes ligado a grupos invisibilizados ou à garantia de direitos, pedindo 'desafios para', 'caminhos para' ou 'perspectivas sobre'. Treine com temas nesse formato e você dificilmente será surpreendido.";

/**
 * Prompt pronto para o usuário colar na LLM de preferência e receber uma
 * correção nos moldes da banca do ENEM. Mantido propositalmente rigoroso.
 */
export const PROMPT_CORRECAO_IA = `Você é um corretor oficial de redações do ENEM, treinado nos critérios da banca do INEP. Corrija a redação abaixo exatamente como a banca corrigiria, sem ser condescendente: se o texto merece 520, diga 520. Notas altas (acima de 900) são raras e exigem excelência real; nota 1000 é excepcional.

Avalie as 5 competências, atribuindo a cada uma APENAS um destes níveis: 0, 40, 80, 120, 160 ou 200.

C1 (norma culta): liste os desvios encontrados citando o trecho exato (ortografia, acentuação, vírgula entre sujeito e verbo, crase, concordância, regência, oralidade). Pelos critérios da banca, poucos desvios leves = 160; desvios recorrentes ou graves derrubam para 120 ou menos.

C2 (compreensão do tema): verifique se TODAS as palavras-chave do tema foram discutidas (recorte completo, não só o assunto geral). Tangenciou? Diga claramente. Avalie se o repertório sociocultural é legitimado (lei, dado, autor, obra, fato histórico) e produtivo (explicado e conectado ao argumento, não decorativo).

C3 (argumentação): a tese está explícita na introdução? Cada parágrafo de desenvolvimento tem tópico frasal, fundamentação e análise própria (o "porquê" explicado, não só constatação)? Há projeto de texto perceptível? Aponte onde a argumentação fica rasa.

C4 (coesão): avalie conectivos entre parágrafos e dentro deles, retomadas pronominais e repetições. Cite conectivos mal empregados ou ausentes.

C5 (proposta de intervenção): identifique cada elemento, citando o trecho: AGENTE, AÇÃO, MEIO/MODO, EFEITO e DETALHAMENTO. Cada elemento ausente derruba um nível. Proposta que desrespeite direitos humanos zera a competência.

Formato da resposta:
1. Nota por competência com justificativa de 2 a 4 linhas cada, citando trechos da redação.
2. Para cada competência, o que faltou para alcançar o próximo nível.
3. Nota final (soma) e diagnóstico honesto em uma frase.
4. As 3 correções prioritárias que mais aumentariam a nota na próxima redação.
5. Reescreva a proposta de intervenção do candidato em versão nota 200, mantendo a ideia original.

TEMA DA REDAÇÃO: [escreva aqui o tema]

MINHA REDAÇÃO:
[cole aqui a sua redação]`;

export interface QuizPergunta {
  pergunta: string;
  alternativas: string[];
  correta: number;
  explicacao: string;
}

export const QUIZ_REDACAO: QuizPergunta[] = [
  {
    pergunta: "Qual é a nota máxima da redação do ENEM e como ela é composta?",
    alternativas: [
      "1000 pontos: 5 competências valendo até 200 cada",
      "1000 pontos: nota única dada pelo corretor",
      "100 pontos: 5 competências valendo até 20 cada",
      "800 pontos: 4 competências valendo até 200 cada",
    ],
    correta: 0,
    explicacao:
      "São 5 competências (norma culta, tema, argumentação, coesão e proposta de intervenção), cada uma avaliada de 0 a 200 em seis níveis. A soma dá a nota de 0 a 1000.",
  },
  {
    pergunta: "O que acontece com uma redação de 7 linhas?",
    alternativas: [
      "Recebe nota proporcional ao tamanho",
      "Recebe nota zero por texto insuficiente",
      "Perde 200 pontos e segue sendo corrigida",
      "É corrigida normalmente se estiver completa",
    ],
    correta: 1,
    explicacao:
      "Texto com até 7 linhas é considerado insuficiente e recebe nota zero. Na prática, escreva pelo menos 25 linhas para ter espaço de desenvolver argumentos e proposta.",
  },
  {
    pergunta: "Quem corrige a sua redação?",
    alternativas: [
      "Um corretor, com revisão por amostragem",
      "Um software de correção automática validado pelo INEP",
      "Dois corretores independentes; havendo discrepância, um terceiro",
      "Três corretores em todos os casos",
    ],
    correta: 2,
    explicacao:
      "Dois professores corrigem sem ver a nota um do outro. Diferença maior que 100 pontos no total (ou 80 em uma competência) aciona um terceiro corretor e, se persistir, uma banca de três.",
  },
  {
    pergunta: "Quais elementos a proposta de intervenção precisa ter para valer 200 pontos?",
    alternativas: [
      "Agente, ação, meio, efeito e detalhamento",
      "Causa, consequência e solução",
      "Tese, argumento e conclusão",
      "Agente, verba e prazo de execução",
    ],
    correta: 0,
    explicacao:
      "O nível máximo da competência 5 exige os cinco elementos: quem faz (agente), o que faz (ação), como faz (meio), para que faz (efeito) e um detalhamento de qualquer um deles.",
  },
  {
    pergunta: "Uma proposta de intervenção que desrespeita os direitos humanos...",
    alternativas: [
      "Zera a redação inteira",
      "Zera apenas a competência 5",
      "Desconta 50% da nota final",
      "Não interfere na nota, só na avaliação moral",
    ],
    correta: 1,
    explicacao:
      "Desde 2017, desrespeitar os direitos humanos (propor tortura, censura, violência) zera a competência 5, e não a prova inteira. Mesmo assim, são 200 pontos jogados fora.",
  },
  {
    pergunta: "O título é obrigatório na redação do ENEM?",
    alternativas: [
      "Sim, e vale pontos na competência 2",
      "Sim, mas não vale pontos",
      "Não; se houver, conta como uma das 30 linhas",
      "Não, e se houver a redação é anulada",
    ],
    correta: 2,
    explicacao:
      "O título é opcional no ENEM. Se você escrever um, ele ocupa uma das 30 linhas disponíveis. A maioria dos candidatos nota 1000 não usa título.",
  },
  {
    pergunta: "Copiar trechos dos textos motivadores...",
    alternativas: [
      "É recomendado para mostrar leitura atenta",
      "Faz os trechos copiados serem descontados da contagem de linhas",
      "Aumenta a nota da competência 4",
      "É permitido até o limite de 10 linhas",
    ],
    correta: 1,
    explicacao:
      "Trechos copiados dos textos motivadores não contam como linhas escritas (e cópia integral zera). Use os textos só para entender o recorte do tema; o repertório deve vir de você.",
  },
  {
    pergunta: "Qual estrutura de texto o ENEM exige?",
    alternativas: [
      "Dissertativo-argumentativa em prosa",
      "Narrativa com personagens e enredo",
      "Carta argumentativa ao leitor",
      "Artigo de opinião em primeira pessoa",
    ],
    correta: 0,
    explicacao:
      "A prova exige texto dissertativo-argumentativo em prosa: tese, argumentos que a sustentam e proposta de intervenção. Fugir desse formato zera a redação.",
  },
  {
    pergunta: "O 'repertório sociocultural produtivo' cobrado na competência 2 é...",
    alternativas: [
      "Qualquer citação famosa, mesmo solta no texto",
      "Conhecimento de outras áreas usado a serviço do argumento",
      "A opinião pessoal do candidato sobre o tema",
      "Os dados presentes nos textos motivadores",
    ],
    correta: 1,
    explicacao:
      "Repertório produtivo é lei, dado, conceito, obra ou fato histórico que você explica e conecta ao seu argumento. Citação jogada sem relação com a discussão não pontua.",
  },
  {
    pergunta: "Sobre o tempo e o espaço da redação, é correto afirmar:",
    alternativas: [
      "Não há limite de linhas, apenas de tempo",
      "O limite é de 30 linhas, dentro das 5h30 do primeiro dia de prova",
      "O limite é de 50 linhas, em prova exclusiva de redação",
      "São 20 linhas no máximo, com 1 hora extra",
    ],
    correta: 1,
    explicacao:
      "A folha tem 30 linhas e a redação divide as 5h30 do primeiro dia com Linguagens e Humanas (90 questões). Reserve cerca de 1h a 1h15 para ela, incluindo rascunho e passar a limpo.",
  },
];
