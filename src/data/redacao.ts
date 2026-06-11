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

export interface Repertorio {
  fonte: string;
  comoUsar: string;
}

export interface DestaqueParagrafo {
  /** Trecho copiado verbatim do parágrafo (usado para o highlight). */
  trecho: string;
  explicacao: string;
  competencia?: 1 | 2 | 3 | 4 | 5;
}

export interface ParagrafoModelo {
  rotulo: string;
  texto: string;
  funcao: string;
  destaques: DestaqueParagrafo[];
}

export interface RedacaoModelo {
  notaAlvo: string;
  comentarioGeral: string;
  paragrafos: ParagrafoModelo[];
}

export interface TemaTreino {
  id: string;
  titulo: string;
  eixo: string;
  porQuePodeCair: string;
  recorte: string;
  repertorios: Repertorio[];
  caminhos: string[];
  redacao?: RedacaoModelo;
}

export const TEMAS_TREINO: TemaTreino[] = [
  {
    id: "inclusao-digital-idosos",
    titulo: "Os desafios da inclusão digital da população idosa no Brasil",
    eixo: "Envelhecimento e tecnologia",
    porQuePodeCair:
      "O ENEM 2025 cobrou o envelhecimento da população e a digitalização dos serviços públicos só avança. A interseção dos dois assuntos é um recorte clássico de banca: um grupo vulnerável diante de uma transformação social.",
    recorte:
      "Bancos, consultas, benefícios e até vacinação migraram para aplicativos, mas boa parte dos idosos brasileiros não domina essas ferramentas. O tema pede a discussão das causas dessa exclusão (design que ignora o idoso, falta de letramento digital) e dos seus efeitos sobre autonomia e cidadania.",
    repertorios: [
      {
        fonte: "Constituição Federal, art. 230",
        comoUsar:
          "Atribui à família, à sociedade e ao Estado o dever de amparar o idoso e assegurar sua participação na comunidade. Use para mostrar o contraste entre a lei e a realidade da exclusão digital.",
      },
      {
        fonte: "Zygmunt Bauman, 'modernidade líquida'",
        comoUsar:
          "As transformações velozes descartam quem não as acompanha. Aplique ao ritmo das atualizações de aplicativos e interfaces pensadas só para nativos digitais.",
      },
      {
        fonte: "Pesquisa TIC Domicílios (Cetic.br)",
        comoUsar:
          "Monitora o uso de internet no Brasil e mostra que a parcela conectada entre idosos é bem menor que a média nacional. Dado institucional para fundamentar o problema.",
      },
    ],
    caminhos: [
      "Causa 1: etarismo no design das tecnologias (interfaces, linguagem, suporte pensados para jovens).",
      "Causa 2: ausência de políticas contínuas de letramento digital para a terceira idade.",
      "Consequências: perda de autonomia, dependência de terceiros, exposição a golpes virtuais e exclusão de serviços essenciais.",
    ],
    redacao: {
      notaAlvo: "Modelo nota 1000",
      comentarioGeral:
        "Estude a estrutura, não decore o texto: introdução com repertório + tese de duas frentes, um desenvolvimento por causa (cada um com repertório explicado e fechamento), e conclusão com proposta completa dos cinco elementos retomando a introdução.",
      paragrafos: [
        {
          rotulo: "Introdução",
          funcao:
            "Apresenta o tema com repertório legitimado, mostra o contraste entre a norma e a realidade e fecha com a tese, que anuncia os dois argumentos que serão desenvolvidos.",
          texto:
            "A Constituição Federal de 1988, em seu artigo 230, atribui à família, à sociedade e ao Estado o dever de amparar as pessoas idosas, assegurando sua participação na comunidade. Entretanto, em um Brasil cada vez mais digitalizado, no qual serviços bancários, consultas médicas e benefícios sociais migraram para aplicativos, milhões de idosos permanecem à margem da vida conectada. Essa exclusão digital, alimentada tanto pelo etarismo presente no desenho das tecnologias quanto pela ausência de políticas de letramento digital, configura grave entrave ao exercício pleno da cidadania na terceira idade.",
          destaques: [
            {
              trecho: "A Constituição Federal de 1988, em seu artigo 230",
              explicacao:
                "Repertório legitimado logo na primeira linha: uma lei específica, citada com precisão, dá autoridade ao texto desde o início.",
              competencia: 2,
            },
            {
              trecho: "Entretanto",
              explicacao:
                "Conectivo de oposição que cria o movimento clássico de introdução: a norma diz X, a realidade mostra Y. É desse choque que nasce o problema.",
              competencia: 4,
            },
            {
              trecho:
                "alimentada tanto pelo etarismo presente no desenho das tecnologias quanto pela ausência de políticas de letramento digital",
              explicacao:
                "A tese anuncia exatamente os dois argumentos dos desenvolvimentos. Isso é 'projeto de texto': o corretor percebe que o texto foi planejado.",
              competencia: 3,
            },
          ],
        },
        {
          rotulo: "Desenvolvimento 1",
          funcao:
            "Primeiro argumento (causa cultural/estrutural): as tecnologias são desenhadas ignorando o idoso. Estrutura interna: tópico frasal, repertório explicado, dado de reforço e arremate.",
          texto:
            "Em primeira análise, é preciso reconhecer que a própria concepção das plataformas digitais ignora o usuário idoso. O sociólogo Zygmunt Bauman descreveu a modernidade como “líquida”, marcada por transformações velozes que descartam quem não consegue acompanhá-las; os aplicativos, com letras diminutas, atualizações constantes e linguagem repleta de estrangeirismos, materializam essa lógica excludente. Não por acaso, dados da pesquisa TIC Domicílios indicam que a parcela de idosos que utiliza a internet no Brasil é muito inferior à média nacional. Quando a tecnologia é pensada apenas para nativos digitais, envelhecer converte-se, indevidamente, em sinônimo de desconexão.",
          destaques: [
            {
              trecho: "Em primeira análise",
              explicacao:
                "Articulador interparágrafo que sinaliza ao corretor a organização do texto: este é o primeiro argumento.",
              competencia: 4,
            },
            {
              trecho: "O sociólogo Zygmunt Bauman descreveu a modernidade como “líquida”",
              explicacao:
                "Repertório de sociologia usado de forma produtiva: o conceito não é só citado, é aplicado ao problema na frase seguinte (letras diminutas, atualizações, estrangeirismos).",
              competencia: 2,
            },
            {
              trecho: "Não por acaso, dados da pesquisa TIC Domicílios",
              explicacao:
                "Dado institucional que comprova o argumento. Repare que não é preciso decorar números exatos: indicar a fonte e a tendência já fundamenta.",
              competencia: 3,
            },
            {
              trecho: "envelhecer converte-se, indevidamente, em sinônimo de desconexão",
              explicacao:
                "Frase de arremate que devolve o argumento à tese. Todo parágrafo de desenvolvimento merece um fechamento assim.",
              competencia: 3,
            },
          ],
        },
        {
          rotulo: "Desenvolvimento 2",
          funcao:
            "Segundo argumento (causa política): falta letramento digital para idosos. Aprofunda mostrando as consequências concretas: dependência, perda de autonomia e golpes.",
          texto:
            "Além disso, a exclusão digital da terceira idade é agravada pela escassez de iniciativas públicas de alfabetização tecnológica. O educador Paulo Freire defendia que a educação é um ato permanente, que não se encerra em nenhuma etapa da vida; contudo, os programas brasileiros de inclusão digital raramente contemplam metodologias adequadas ao ritmo e às necessidades dos mais velhos. Essa lacuna obriga idosos a depender de familiares para tarefas básicas, como agendar consultas ou movimentar contas, o que corrói sua autonomia e os expõe, inclusive, a golpes virtuais. Perpetua-se, assim, um ciclo no qual a falta de formação gera medo, e o medo, afastamento.",
          destaques: [
            {
              trecho: "Além disso",
              explicacao:
                "Conectivo aditivo abrindo o segundo argumento: a costura entre parágrafos é avaliada diretamente na competência 4.",
              competencia: 4,
            },
            {
              trecho: "O educador Paulo Freire defendia que a educação é um ato permanente",
              explicacao:
                "Segundo repertório legitimado do texto, de área diferente do primeiro (educação). Variedade de repertório fortalece a competência 2.",
              competencia: 2,
            },
            {
              trecho: "como agendar consultas ou movimentar contas",
              explicacao:
                "Exemplificação concreta: aterrissar o argumento no cotidiano mostra domínio do problema, não só da teoria.",
              competencia: 3,
            },
            {
              trecho: "Perpetua-se, assim, um ciclo no qual a falta de formação gera medo, e o medo, afastamento",
              explicacao:
                "Fechamento que sintetiza a engrenagem do problema. A elipse ('e o medo, afastamento') mostra domínio estilístico da norma culta.",
              competencia: 1,
            },
          ],
        },
        {
          rotulo: "Conclusão",
          funcao:
            "Proposta de intervenção com os cinco elementos (agente, ação, meio, detalhamento e efeito) e retomada da introdução, fechando o projeto de texto.",
          texto:
            "Portanto, urge que o poder público enfrente a desconexão da terceira idade. Cabe ao Ministério da Ciência, Tecnologia e Inovação, em parceria com as prefeituras e instituições como o SESC, implementar centros comunitários de letramento digital voltados ao público idoso, por meio de oficinas gratuitas conduzidas por monitores treinados, com material em linguagem acessível e financiamento do Fundo de Universalização dos Serviços de Telecomunicações. Tal medida permitirá que os idosos usem os serviços digitais com autonomia e segurança, concretizando o amparo previsto na Constituição. Afinal, em uma sociedade que envelhece, incluir digitalmente os mais velhos é incluir o próprio futuro.",
          destaques: [
            {
              trecho: "Cabe ao Ministério da Ciência, Tecnologia e Inovação, em parceria com as prefeituras e instituições como o SESC",
              explicacao:
                "AGENTE específico (e não um genérico 'o governo'). Somar parcerias mostra detalhamento do agente.",
              competencia: 5,
            },
            {
              trecho: "implementar centros comunitários de letramento digital voltados ao público idoso",
              explicacao: "AÇÃO clara e diretamente ligada ao problema discutido nos desenvolvimentos.",
              competencia: 5,
            },
            {
              trecho: "por meio de oficinas gratuitas conduzidas por monitores treinados",
              explicacao: "MEIO introduzido pela fórmula clássica 'por meio de'.",
              competencia: 5,
            },
            {
              trecho: "financiamento do Fundo de Universalização dos Serviços de Telecomunicações",
              explicacao: "DETALHAMENTO do meio: de onde sai o recurso. É o quinto elemento, que muita gente esquece.",
              competencia: 5,
            },
            {
              trecho: "Tal medida permitirá que os idosos usem os serviços digitais com autonomia e segurança",
              explicacao: "EFEITO esperado da proposta, amarrado ao problema central (autonomia e golpes).",
              competencia: 5,
            },
            {
              trecho: "concretizando o amparo previsto na Constituição",
              explicacao:
                "Retomada do repertório da introdução: o texto termina onde começou, evidenciando planejamento.",
              competencia: 3,
            },
          ],
        },
      ],
    },
  },
  {
    id: "desinformacao-cientifica",
    titulo: "Caminhos para combater a desinformação científica no Brasil",
    eixo: "Ciência, mídia e democracia",
    porQuePodeCair:
      "Negacionismo climático, movimentos antivacina e curas milagrosas circulando em redes sociais são pauta permanente. O formato 'caminhos para combater' é uma das fórmulas favoritas da banca.",
    recorte:
      "O tema pede mais do que constatar que existem fake news: exige discutir por que a desinformação científica se espalha (lógica dos algoritmos, déficit de letramento científico) e quais os efeitos disso na saúde pública e na democracia.",
    repertorios: [
      {
        fonte: "Carl Sagan, 'O Mundo Assombrado pelos Demônios' (1995)",
        comoUsar:
          "Sagan alertou para uma sociedade totalmente dependente de ciência em que quase ninguém entende de ciência. Profético para abrir a introdução.",
      },
      {
        fonte: "Estudo do MIT publicado na revista Science (2018)",
        comoUsar:
          "Concluiu que notícias falsas se espalham significativamente mais rápido e mais longe que as verdadeiras nas redes. Fundamenta o argumento da lógica algorítmica.",
      },
      {
        fonte: "Perda do certificado de eliminação do sarampo (2019)",
        comoUsar:
          "O Brasil perdeu o certificado da OPAS após queda da cobertura vacinal. Consequência concreta e datada da desinformação em saúde.",
      },
    ],
    caminhos: [
      "Causa 1: o modelo de negócio das plataformas premia o engajamento, e o conteúdo falso ou alarmista engaja mais.",
      "Causa 2: ensino de ciências focado em memorização não forma cidadãos capazes de avaliar evidências e fontes.",
      "Consequências: queda vacinal e doenças erradicadas de volta, descrédito de instituições, decisões públicas irracionais.",
    ],
    redacao: {
      notaAlvo: "Modelo nota 1000",
      comentarioGeral:
        "Observe a progressão: a introdução usa repertório literário-científico, o primeiro desenvolvimento ataca a engrenagem econômica das plataformas, o segundo ataca a lacuna educacional, e a proposta resolve exatamente a causa discutida no segundo desenvolvimento, citando o instrumento legal (BNCC).",
      paragrafos: [
        {
          rotulo: "Introdução",
          funcao:
            "Abre com repertório que dialoga diretamente com o tema, atualiza o alerta para o contexto brasileiro e apresenta a tese com as duas causas.",
          texto:
            "Na obra “O Mundo Assombrado pelos Demônios”, o astrônomo Carl Sagan alertou para o perigo de uma sociedade profundamente dependente da ciência na qual quase ninguém compreende como a ciência funciona. Três décadas depois, o Brasil materializa esse temor: movimentos antivacina, negacionismo climático e tratamentos sem eficácia comprovada circulam em escala industrial pelas redes sociais. Essa epidemia de desinformação científica, impulsionada pela lógica do engajamento das plataformas digitais e pelo frágil letramento científico da população, ameaça tanto a saúde pública quanto a própria qualidade do debate democrático.",
          destaques: [
            {
              trecho: "O Mundo Assombrado pelos Demônios",
              explicacao:
                "Repertório literário-científico precisamente conectado ao tema: não é citação de enfeite, é o alicerce do problema.",
              competencia: 2,
            },
            {
              trecho: "Três décadas depois, o Brasil materializa esse temor",
              explicacao:
                "Ponte entre o repertório e a realidade brasileira: a banca quer ver o repertório 'aterrissando' no recorte do tema.",
              competencia: 3,
            },
            {
              trecho:
                "impulsionada pela lógica do engajamento das plataformas digitais e pelo frágil letramento científico da população",
              explicacao: "Tese de duas frentes anunciando o roteiro dos desenvolvimentos.",
              competencia: 3,
            },
          ],
        },
        {
          rotulo: "Desenvolvimento 1",
          funcao:
            "Argumento econômico-tecnológico: as plataformas lucram com o engajamento, e a mentira engaja mais. Usa dado científico como prova central.",
          texto:
            "Em primeiro plano, cumpre analisar a engrenagem que torna a mentira mais veloz que o fato. As plataformas digitais sustentam-se da economia da atenção: quanto mais tempo o usuário permanece conectado, maior a receita publicitária, e conteúdos alarmistas ou conspiratórios são justamente os que mais retêm audiência. Não à toa, um estudo do MIT publicado na revista Science demonstrou que notícias falsas se propagam significativamente mais rápido e alcançam mais pessoas do que as verdadeiras. Nesse cenário, a desinformação científica deixa de ser acidente e passa a ser consequência previsível de um modelo de negócio que monetiza a indignação.",
          destaques: [
            {
              trecho: "Em primeiro plano",
              explicacao: "Articulador que organiza a sequência argumentativa.",
              competencia: 4,
            },
            {
              trecho: "economia da atenção",
              explicacao:
                "Conceito contemporâneo nomeado e explicado em seguida ('quanto mais tempo... maior a receita'). Nomear conceitos e explicá-los é a marca do repertório produtivo.",
              competencia: 2,
            },
            {
              trecho: "um estudo do MIT publicado na revista Science",
              explicacao: "Evidência científica internacional sustentando o argumento central do parágrafo.",
              competencia: 3,
            },
            {
              trecho: "deixa de ser acidente e passa a ser consequência previsível",
              explicacao:
                "Arremate analítico: o parágrafo não apenas descreve, ele interpreta (a desinformação como produto do sistema).",
              competencia: 3,
            },
          ],
        },
        {
          rotulo: "Desenvolvimento 2",
          funcao:
            "Argumento educacional: sem método científico na formação, o cidadão fica vulnerável. Mostra consequência concreta e datada (sarampo).",
          texto:
            "Ademais, a desinformação só encontra terreno fértil porque o letramento científico da população é frágil. O ensino de ciências no Brasil ainda privilegia a memorização de fórmulas e nomenclaturas em detrimento da compreensão do método científico, de modo que grande parte dos cidadãos conclui a educação básica sem saber distinguir uma evidência robusta de uma opinião vestida de verdade. Os efeitos são tangíveis: em 2019, o país perdeu o certificado de eliminação do sarampo, concedido pela Organização Pan-Americana da Saúde, após a queda da cobertura vacinal alimentada por boatos. Quando a escola não ensina a duvidar com método, as redes ensinam a acreditar sem critério.",
          destaques: [
            {
              trecho: "Ademais",
              explicacao: "Conectivo aditivo variado (evita repetir 'além disso' em todos os textos).",
              competencia: 4,
            },
            {
              trecho: "privilegia a memorização de fórmulas e nomenclaturas em detrimento da compreensão do método científico",
              explicacao: "Diagnóstico preciso da causa educacional, com vocabulário formal exato.",
              competencia: 1,
            },
            {
              trecho: "em 2019, o país perdeu o certificado de eliminação do sarampo",
              explicacao:
                "Fato verídico e datado como consequência concreta: transforma o argumento abstrato em realidade mensurável.",
              competencia: 3,
            },
            {
              trecho: "Quando a escola não ensina a duvidar com método, as redes ensinam a acreditar sem critério",
              explicacao:
                "Período de efeito construído com paralelismo: fechamento memorável que sintetiza os dois desenvolvimentos.",
              competencia: 1,
            },
          ],
        },
        {
          rotulo: "Conclusão",
          funcao:
            "Proposta completa (cinco elementos) atacando a causa educacional, com agente plural e retomada do repertório inicial.",
          texto:
            "Diante do exposto, é imperativo que o Ministério da Educação, em conjunto com as secretarias estaduais de ensino, incorpore de forma efetiva o letramento midiático e científico à prática escolar prevista na Base Nacional Comum Curricular, por meio de projetos permanentes de checagem de fatos em sala de aula, desenvolvidos em parceria com universidades e agências de verificação e custeados por recursos do Fundo Nacional de Desenvolvimento da Educação. Assim, formar-se-ão cidadãos capazes de avaliar evidências antes de compartilhá-las, fortalecendo a confiança na ciência e o debate público. Só então a sociedade iluminada pela vela da ciência, sonhada por Sagan, deixará de ser assombrada por seus demônios.",
          destaques: [
            {
              trecho: "o Ministério da Educação, em conjunto com as secretarias estaduais de ensino",
              explicacao: "AGENTE específico e em parceria, mostrando compreensão federativa da educação.",
              competencia: 5,
            },
            {
              trecho: "incorpore de forma efetiva o letramento midiático e científico à prática escolar prevista na Base Nacional Comum Curricular",
              explicacao: "AÇÃO ancorada em instrumento legal existente (BNCC): proposta viável, não genérica.",
              competencia: 5,
            },
            {
              trecho: "por meio de projetos permanentes de checagem de fatos em sala de aula",
              explicacao: "MEIO concreto de execução.",
              competencia: 5,
            },
            {
              trecho: "custeados por recursos do Fundo Nacional de Desenvolvimento da Educação",
              explicacao: "DETALHAMENTO orçamentário do meio.",
              competencia: 5,
            },
            {
              trecho: "formar-se-ão cidadãos capazes de avaliar evidências antes de compartilhá-las",
              explicacao: "EFEITO da proposta (com mesóclise corretíssima, ponto extra de norma culta).",
              competencia: 5,
            },
            {
              trecho: "sonhada por Sagan, deixará de ser assombrada por seus demônios",
              explicacao: "Retomada do repertório da introdução fechando o ciclo do projeto de texto.",
              competencia: 3,
            },
          ],
        },
      ],
    },
  },
  {
    id: "saude-mental-jovens",
    titulo: "A precarização da saúde mental dos jovens na era da hiperconexão",
    eixo: "Saúde mental e redes sociais",
    porQuePodeCair:
      "O ENEM 2020 cobrou o estigma das doenças mentais; desde então, a ansiedade juvenil ligada às redes só cresceu como debate público. É um tema com forte apelo social e farto repertório.",
    recorte:
      "Não basta dizer que 'rede social faz mal': o recorte liga o adoecimento juvenil à cultura da performance e da comparação permanente, e cobra também a insuficiência da rede de apoio (escolas e serviços de saúde mental).",
    repertorios: [
      {
        fonte: "Byung-Chul Han, 'Sociedade do Cansaço'",
        comoUsar:
          "O filósofo descreve o sujeito contemporâneo que se autoexplora em busca de desempenho. Encaixa perfeitamente na lógica de métricas e comparação das redes.",
      },
      {
        fonte: "OMS: suicídio entre as principais causas de morte juvenil",
        comoUsar:
          "A Organização Mundial da Saúde aponta o suicídio entre as principais causas de morte de jovens no mundo. Dado de autoridade para dimensionar a gravidade.",
      },
      {
        fonte: "Programa Saúde na Escola (PSE) e CAPSi",
        comoUsar:
          "Estruturas públicas existentes (saúde + educação) que podem ancorar sua proposta de intervenção com viabilidade real.",
      },
    ],
    caminhos: [
      "Causa 1: cultura da performance e comparação permanente nas redes (métricas de aprovação como medida de valor).",
      "Causa 2: rede de apoio insuficiente: escolas sem acolhimento estruturado e poucos serviços especializados para o público jovem.",
      "Consequências: ansiedade, depressão, autolesão e abandono escolar; estigma que atrasa a busca por ajuda.",
    ],
    redacao: {
      notaAlvo: "Modelo nota 980+",
      comentarioGeral:
        "Repare como o texto evita o senso comum ('celular faz mal'): ele nomeia o mecanismo (autoexploração, métricas), traz dado de autoridade e propõe intervenção dentro de estruturas públicas que já existem, o que dá viabilidade à proposta.",
      paragrafos: [
        {
          rotulo: "Introdução",
          funcao:
            "Contextualiza com filosofia contemporânea, define o paradoxo (hiperconexão x adoecimento) e fecha com tese de duas causas.",
          texto:
            "No livro “Sociedade do Cansaço”, o filósofo sul-coreano Byung-Chul Han descreve um sujeito contemporâneo que adoece ao explorar a si mesmo em busca de desempenho infinito. A juventude brasileira vive esse diagnóstico em tela cheia: hiperconectada, exibe-se e compara-se ininterruptamente, enquanto índices de ansiedade e depressão atingem patamares inéditos na faixa etária. Tal precarização da saúde mental juvenil decorre, de um lado, da cultura de performance imposta pelas redes sociais e, de outro, da insuficiência da rede pública de acolhimento psicossocial, falhas que urgem ser enfrentadas.",
          destaques: [
            {
              trecho: "Sociedade do Cansaço",
              explicacao:
                "Repertório filosófico contemporâneo, perfeitamente alinhado ao recorte do tema (desempenho e adoecimento).",
              competencia: 2,
            },
            {
              trecho: "vive esse diagnóstico em tela cheia",
              explicacao:
                "Metáfora curta que conecta o conceito ao universo digital sem perder o registro formal: autoria com controle.",
              competencia: 1,
            },
            {
              trecho: "de um lado, da cultura de performance imposta pelas redes sociais e, de outro, da insuficiência da rede pública de acolhimento",
              explicacao: "Tese bipartida com paralelismo claro: o leitor já sabe o mapa do texto.",
              competencia: 3,
            },
          ],
        },
        {
          rotulo: "Desenvolvimento 1",
          funcao:
            "Disseca o mecanismo psicológico das redes: métricas transformam valor pessoal em número e a comparação é incessante.",
          texto:
            "Primeiramente, é necessário compreender o mecanismo que faz das redes sociais uma fábrica de angústia juvenil. Nelas, a aprovação alheia converte-se em métrica pública: curtidas, seguidores e visualizações funcionam como notas atribuídas à própria existência. O jovem, em fase de formação identitária, passa a comparar seus bastidores com o palco editado dos outros, em uma competição na qual a derrota é sentida como fracasso pessoal, e não como ilusão estatística. Conforme alerta a Organização Mundial da Saúde, o suicídio figura entre as principais causas de morte na juventude, dado que escancara o custo humano dessa engrenagem de cobrança ininterrupta.",
          destaques: [
            {
              trecho: "curtidas, seguidores e visualizações funcionam como notas atribuídas à própria existência",
              explicacao:
                "Tradução do conceito abstrato (métrica de aprovação) em imagem concreta: argumentação que o corretor entende em uma leitura.",
              competencia: 3,
            },
            {
              trecho: "comparar seus bastidores com o palco editado dos outros",
              explicacao:
                "Antítese bastidores/palco que explica o viés da comparação nas redes com elegância e precisão.",
              competencia: 1,
            },
            {
              trecho: "Conforme alerta a Organização Mundial da Saúde",
              explicacao: "Dado de autoridade internacional dimensionando a gravidade do problema.",
              competencia: 2,
            },
          ],
        },
        {
          rotulo: "Desenvolvimento 2",
          funcao:
            "Desloca a discussão do indivíduo para o Estado: a rede de acolhimento é insuficiente e o estigma atrasa a busca por ajuda.",
          texto:
            "Outrossim, o sofrimento psíquico juvenil encontra pouca retaguarda nas instituições que deveriam acolhê-lo. As escolas, espaço onde os jovens passam a maior parte do dia, raramente dispõem de profissionais ou protocolos de saúde mental, e os Centros de Atenção Psicossocial Infantojuvenis ainda são escassos em grande parte dos municípios brasileiros. Some-se a isso o estigma, herdeiro de séculos de incompreensão sobre os transtornos mentais, que faz adolescentes silenciarem seus sintomas por medo de rótulos. Sem diagnóstico precoce nem acompanhamento, quadros tratáveis evoluem para crises, abandono escolar e tragédias evitáveis.",
          destaques: [
            {
              trecho: "Outrossim",
              explicacao: "Conectivo aditivo formal e raro: variedade coesiva que pontua na competência 4.",
              competencia: 4,
            },
            {
              trecho: "os Centros de Atenção Psicossocial Infantojuvenis ainda são escassos",
              explicacao:
                "Conhecimento específico da política pública de saúde mental (CAPSi): repertório técnico que poucos candidatos dominam.",
              competencia: 2,
            },
            {
              trecho: "herdeiro de séculos de incompreensão sobre os transtornos mentais",
              explicacao:
                "Diálogo com o tema do ENEM 2020 (estigma das doenças mentais): perspectiva histórica em meia linha.",
              competencia: 3,
            },
            {
              trecho: "quadros tratáveis evoluem para crises, abandono escolar e tragédias evitáveis",
              explicacao: "Gradação de consequências que fecha o parágrafo com peso argumentativo.",
              competencia: 3,
            },
          ],
        },
        {
          rotulo: "Conclusão",
          funcao:
            "Proposta de intervenção dentro de programas existentes (PSE), com os cinco elementos explícitos e fechamento que retoma Han.",
          texto:
            "Portanto, o enfrentamento da crise de saúde mental juvenil exige ação coordenada do poder público. O Ministério da Saúde, em articulação com o Ministério da Educação, deve ampliar o Programa Saúde na Escola, por meio da inserção de equipes multiprofissionais com psicólogos nas redes de ensino e da expansão dos Centros de Atenção Psicossocial Infantojuvenis, com financiamento prioritário do orçamento do Sistema Único de Saúde. Dessa forma, os jovens terão acolhimento próximo e diagnóstico precoce, e a busca por ajuda deixará de ser tabu. Assim, será possível formar uma geração que use as telas sem ser consumida por elas, aposentando, enfim, a sociedade do cansaço.",
          destaques: [
            {
              trecho: "O Ministério da Saúde, em articulação com o Ministério da Educação",
              explicacao: "AGENTE duplo e específico, coerente com um problema que é ao mesmo tempo de saúde e de escola.",
              competencia: 5,
            },
            {
              trecho: "deve ampliar o Programa Saúde na Escola",
              explicacao: "AÇÃO ancorada em programa real: viabilidade que diferencia propostas nota 200.",
              competencia: 5,
            },
            {
              trecho: "por meio da inserção de equipes multiprofissionais com psicólogos nas redes de ensino",
              explicacao: "MEIO concreto.",
              competencia: 5,
            },
            {
              trecho: "com financiamento prioritário do orçamento do Sistema Único de Saúde",
              explicacao: "DETALHAMENTO orçamentário.",
              competencia: 5,
            },
            {
              trecho: "os jovens terão acolhimento próximo e diagnóstico precoce",
              explicacao: "EFEITO diretamente ligado ao problema do segundo desenvolvimento.",
              competencia: 5,
            },
            {
              trecho: "aposentando, enfim, a sociedade do cansaço",
              explicacao: "Fechamento circular com o repertório da introdução: projeto de texto completo.",
              competencia: 3,
            },
          ],
        },
      ],
    },
  },
  {
    id: "seguranca-hidrica",
    titulo: "Desafios para a garantia da segurança hídrica no Brasil",
    eixo: "Meio ambiente e infraestrutura",
    porQuePodeCair:
      "Crises hídricas recorrentes, conflitos pelo uso da água e eventos climáticos extremos mantêm o tema quente. A banca gosta de temas ambientais com dimensão social (quem sofre primeiro com a falta d'água).",
    recorte:
      "Discutir por que um país com 12% da água doce do planeta convive com escassez: má distribuição natural e populacional, desperdício e poluição de mananciais, e desigualdade no acesso (saneamento).",
    repertorios: [
      {
        fonte: "ONU: água como direito humano (2010)",
        comoUsar:
          "A Assembleia Geral da ONU reconheceu o acesso à água potável como direito humano essencial. Contraste com os milhões de brasileiros sem abastecimento regular.",
      },
      {
        fonte: "Marco Legal do Saneamento (Lei 14.026/2020)",
        comoUsar:
          "Meta de universalizar água e esgoto até 2033. Útil na proposta: cobrar a efetivação de uma lei que já existe é mais forte que inventar lei nova.",
      },
      {
        fonte: "Crise hídrica de São Paulo (2014-2015)",
        comoUsar:
          "Exemplo concreto de colapso em região rica: mostra que o problema não é só sertão, é gestão.",
      },
    ],
    caminhos: [
      "Paradoxo: abundância nacional x escassez local (a água está longe de quem mais precisa).",
      "Gestão: perdas na distribuição, poluição de rios urbanos e ocupação desordenada de áreas de manancial.",
      "Desigualdade: a falta d'água atinge primeiro periferias e populações rurais; mulheres e crianças pagam o maior preço.",
    ],
  },
  {
    id: "evasao-escolar",
    titulo: "Caminhos para o enfrentamento da evasão escolar no ensino médio brasileiro",
    eixo: "Educação e desigualdade",
    porQuePodeCair:
      "A evasão explodiu no pós-pandemia e o ensino médio é a etapa com maior abandono. Educação é o eixo mais recorrente da história do ENEM depois de cidadania.",
    recorte:
      "Por que o jovem abandona a escola: necessidade de trabalhar, currículo distante da realidade e falta de políticas de permanência. E o custo disso para o país inteiro.",
    repertorios: [
      {
        fonte: "Constituição Federal, art. 205",
        comoUsar:
          "Educação como direito de todos e dever do Estado e da família, visando ao pleno desenvolvimento da pessoa. Base jurídica do argumento.",
      },
      {
        fonte: "Pesquisas PNAD Contínua (IBGE) sobre abandono",
        comoUsar:
          "O motivo mais citado pelos jovens que abandonam é a necessidade de trabalhar. Direciona a discussão para a renda, não para a 'falta de interesse'.",
      },
      {
        fonte: "Pé-de-Meia (poupança do ensino médio)",
        comoUsar:
          "Programa federal de incentivo financeiro à permanência. Pode ancorar a proposta (ampliação/aperfeiçoamento) com viabilidade.",
      },
    ],
    caminhos: [
      "Causa 1: pressão econômica: o jovem pobre precisa escolher entre estudar e compor a renda familiar.",
      "Causa 2: escola pouco atrativa: currículo descolado do mundo do trabalho e da cultura juvenil.",
      "Consequências: perpetuação do ciclo de pobreza, queda de produtividade do país e maior vulnerabilidade social.",
    ],
  },
  {
    id: "trabalho-analogo-escravidao",
    titulo: "Desafios para o combate ao trabalho análogo à escravidão no Brasil contemporâneo",
    eixo: "Direitos humanos e trabalho",
    porQuePodeCair:
      "Resgates de trabalhadores em condições degradantes seguem nas manchetes todos os anos. Combina três marcas da banca: direitos humanos, herança histórica e mundo do trabalho.",
    recorte:
      "Relacionar a permanência do trabalho escravo contemporâneo à herança da escravização histórica, à vulnerabilidade econômica e às fragilidades da fiscalização, sem confundir com a escravidão colonial em si.",
    repertorios: [
      {
        fonte: "Art. 149 do Código Penal",
        comoUsar:
          "Define o crime: trabalho forçado, jornada exaustiva, condição degradante ou servidão por dívida. Citar os critérios mostra precisão conceitual.",
      },
      {
        fonte: "Abolição inacabada (Joaquim Nabuco)",
        comoUsar:
          "A ideia de que a abolição não veio acompanhada de inclusão: liga a vulnerabilidade atual à herança histórica. ('A escravidão permanecerá por muito tempo como a característica nacional do Brasil.')",
      },
      {
        fonte: "'Lista Suja' do trabalho escravo (MTE)",
        comoUsar:
          "Cadastro público de empregadores flagrados. Instrumento real de transparência que pode compor a proposta de intervenção.",
      },
    ],
    caminhos: [
      "Raiz histórica: abolição sem reforma agrária nem inclusão produziu vulnerabilidade que atravessa gerações.",
      "Engrenagem econômica: cadeias produtivas que se beneficiam do custo baixo e da terceirização sem rastreabilidade.",
      "Fiscalização: número insuficiente de auditores e alcance limitado nas áreas rurais e na confecção urbana.",
    ],
  },
];

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
