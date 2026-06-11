import type { ConteudoEstudo } from "./index";

export const CONTEUDOS_HUMANAS: Record<string, ConteudoEstudo> = {
  "Brasil Colônia e Império": {
    ideiaCentral:
      "A colonização montou o Brasil sobre três pilares: latifúndio, monocultura de exportação e trabalho escravizado. Entender como esse tripé se formou (e como ele sobreviveu à Independência e à Abolição) é a chave de quase toda questão do período.",
    aula: [
      {
        titulo: "O tripé colonial e seus ciclos",
        texto:
          "Portugal organizou a colônia para EXPORTAR: primeiro o pau-brasil, depois o açúcar no Nordeste (engenhos, mão de obra africana escravizada) e o ouro em Minas (século XVIII, que interiorizou a ocupação e mudou o eixo econômico para o Sudeste). A sociedade era patriarcal e escravista: senhores de engenho no topo, escravizados na base, e grupos intermediários (homens livres pobres, mestiços) dependentes dos poderosos. A catequese jesuítica e a destruição de povos indígenas completam o quadro da violência colonial.",
      },
      {
        titulo: "Resistências: o que a prova valoriza",
        texto:
          "O ENEM rejeita a imagem do escravizado passivo. Resistência era cotidiana e múltipla: fugas e quilombos (Palmares resistiu quase um século), revoltas (Malês, 1835, liderada por africanos muçulmanos na Bahia), irmandades negras, capoeira, preservação de religiões e línguas, compra de alforrias. Trate quilombo como projeto político e territorial de liberdade, não como 'refúgio de fugitivos'. Essa lente (agência dos dominados) também vale para os povos indígenas, que negociaram, guerrearam e resistiram à colonização.",
      },
      {
        titulo: "Império: independência sem ruptura",
        texto:
          "A Independência (1822) foi negociada pelas elites: manteve escravidão, latifúndio, monarquia e exclusão política (voto censitário). O Primeiro Reinado terminou na abdicação de D. Pedro I; as Regências foram o período mais instável (Cabanagem, Sabinada, Balaiada, Farroupilha: revoltas que misturavam disputas de elites e revolta popular). No Segundo Reinado, o café financiou o Estado. A Lei de Terras (1850) tornou a terra acessível só por COMPRA, blindando o latifúndio às vésperas do fim do tráfico. A abolição veio em conta-gotas (Eusébio de Queirós, Ventre Livre, Sexagenários) até a Lei Áurea (1888): sem terra, sem escola e sem indenização aos libertos: uma 'abolição inacabada' cujos efeitos a prova conecta às desigualdades raciais de hoje.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um texto descreve a Lei de Terras de 1850 e pergunta sua relação com o fim do tráfico negreiro no mesmo ano. Como raciocinar?",
      passos: [
        "Contexto: com o fim do tráfico (Lei Eusébio de Queirós, 1850), a elite previa a futura abolição e a chegada de imigrantes.",
        "A Lei de Terras determinou que terras públicas só seriam adquiridas por COMPRA: fechou a via da posse/ocupação.",
        "Efeito: libertos e imigrantes pobres ficaram sem acesso à terra, garantindo mão de obra barata para o latifúndio: continuidade da concentração fundiária.",
      ],
      resposta:
        "As duas leis se complementam: ao fechar o acesso gratuito à terra, a elite garantiu trabalhadores dependentes para o pós-escravidão.",
    },
    pontosChave: [
      "Tripé colonial: latifúndio, monocultura exportadora, escravização.",
      "Resistência ativa: quilombos, revoltas, cultura: nunca passividade.",
      "Independência conservadora: manteve escravidão e exclusão.",
      "Lei de Terras (1850): terra só por compra: blindagem do latifúndio.",
      "Abolição sem inclusão: raiz histórica das desigualdades raciais atuais.",
    ],
    comoCaiNoEnem:
      "Documentos e imagens de época para análise crítica, quase sempre conectando escravidão e suas heranças ao presente. Resistência negra e indígena é o ângulo preferido.",
    estrategia:
      "Leia o documento perguntando: quem escreveu, com que interesse? Prefira alternativas que reconheçam agência dos dominados e continuidades entre passado e presente; desconfie das que romantizam a colonização ou tratam a abolição como ruptura completa.",
  },

  "Brasil República": {
    ideiaCentral:
      "Da República oligárquica à Constituição de 1988, o fio condutor é a disputa pela ampliação da cidadania: quem vota, quem tem direitos, quem é reprimido. Cada período resolve (ou adia) essa pergunta de um jeito.",
    aula: [
      {
        titulo: "República Velha (1889-1930): a república dos coronéis",
        texto:
          "A Primeira República foi governada pelas oligarquias paulista e mineira ('café com leite'), sustentadas pelo coronelismo: o chefe local controlava o 'voto de cabresto' num sistema de voto aberto e fraudado. A maioria (mulheres, analfabetos, pobres) ficava fora. As tensões explodiam nas margens: Canudos e Contestado (messianismo e questão agrária), Revolta da Vacina (autoritarismo sanitário no Rio), Revolta da Chibata (castigos físicos na Marinha), greves operárias de 1917 (imigrantes anarquistas). É o período favorito da prova para discutir exclusão política.",
      },
      {
        titulo: "Era Vargas (1930-1945): direitos e controle",
        texto:
          "Vargas chega pela Revolução de 1930 e governa em três fases: Provisório, Constitucional (1934: voto feminino e secreto) e a ditadura do Estado Novo (1937-45): censura pelo DIP, repressão e propaganda do 'pai dos pobres'. A marca registrada: legislação trabalhista (CLT, salário mínimo, férias), real conquista E instrumento de cooptação dos sindicatos pelo Estado. O ENEM cobra exatamente essa ambiguidade: direitos concedidos de cima para baixo, em troca de controle político: o 'trabalhismo'.",
      },
      {
        titulo: "Ditadura (1964-1985) e redemocratização",
        texto:
          "O golpe civil-militar de 1964 derrubou João Goulart com apoio de setores empresariais, midiáticos e dos EUA (Guerra Fria). A escalada autoritária culminou no AI-5 (1968): fechamento do Congresso, censura prévia, tortura institucionalizada e desaparecimentos. O 'milagre econômico' cresceu concentrando renda ('o bolo cresceu e não foi dividido') e endividando o país. A abertura 'lenta, gradual e segura' passou pela Lei da Anistia (1979), pelas Diretas Já (1984, emenda derrotada) até a Constituição de 1988, a 'Cidadã': SUS, voto universal (incluindo analfabetos), direitos sociais extensos: a referência obrigatória para fechar qualquer questão de cidadania.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: uma propaganda do Estado Novo exalta Vargas como 'pai dos trabalhadores'. O que a banca espera que você identifique?",
      passos: [
        "Identifique o gênero: propaganda política oficial (DIP): fonte interessada, não retrato neutro.",
        "Conecte ao mecanismo: a concessão de direitos trabalhistas construía lealdade popular e legitimava a ditadura.",
        "Conclua na chave da ambiguidade: benefícios reais usados como instrumento de controle e culto à personalidade.",
      ],
      resposta:
        "A propaganda revela o trabalhismo varguista: direitos sociais concedidos de cima para baixo como base de legitimação autoritária.",
    },
    pontosChave: [
      "República Velha: café com leite, coronelismo, voto de cabresto, revoltas nas margens.",
      "Vargas: CLT e voto feminino + censura e Estado Novo: ambiguidade central.",
      "1964-85: AI-5, censura, tortura; 'milagre' com concentração de renda.",
      "Diretas Já e Constituição de 1988: marco da cidadania (SUS, voto universal).",
      "Memória da ditadura: Comissão Nacional da Verdade no debate atual.",
    ],
    comoCaiNoEnem:
      "Charges, cartazes, músicas de protesto (Chico, Vandré) e documentos oficiais, cobrando leitura crítica e a relação autoritarismo × direitos × democracia.",
    estrategia:
      "Situe a fonte no período pelo vocabulário e pelo tema, identifique de que lado ela fala e busque a alternativa que articula o documento ao mecanismo político do período (exclusão, cooptação, repressão ou redemocratização).",
  },

  "História geral": {
    ideiaCentral:
      "Os marcos que estruturam o mundo moderno: revoluções burguesas (cidadania), Revolução Industrial (capitalismo e questão operária), imperialismo, guerras mundiais e fascismos, Guerra Fria. O ENEM cobra os MECANISMOS desses processos, não datas.",
    aula: [
      {
        titulo: "Iluminismo e revoluções: o nascimento do cidadão",
        texto:
          "O Iluminismo (razão, contrato social, direitos naturais) armou intelectualmente a queda do Antigo Regime. A Revolução Francesa (1789) transformou súditos em CIDADÃOS: igualdade jurídica, soberania popular, Declaração dos Direitos do Homem: e nos legou até o vocabulário político (esquerda/direita). Seus limites também caem: mulheres ficaram de fora (Olympe de Gouges foi guilhotinada) e a independência do Haiti (1804), feita por escravizados, foi a aplicação mais radical: e mais punida: dos ideais de liberdade.",
      },
      {
        titulo: "Revolução Industrial: a fábrica muda tudo",
        texto:
          "Iniciada na Inglaterra (séc. XVIII), substituiu a manufatura pela fábrica: urbanização explosiva, jornadas de 14-16 horas, trabalho infantil, bairros operários insalubres. Dessa experiência nasceram o ludismo (quebra de máquinas), os sindicatos e as teorias socialistas (Marx). A prova adora comparar: a exploração fabril do século XIX com a precarização atual (aplicativos), e a 1ª Revolução Industrial (vapor) com a 2ª (eletricidade, aço, petróleo) e a 3ª/4ª (informática, automação): mudanças técnicas que sempre reorganizam o trabalho.",
      },
      {
        titulo: "Século XX: guerras, fascismos e Guerra Fria",
        texto:
          "O imperialismo (partilha da África e Ásia) acumulou as tensões que explodiram na 1ª Guerra. A crise de 1929 e a humilhação de Versalhes adubaram os fascismos: ultranacionalismo, culto ao líder, propaganda de massa, eliminação de inimigos internos: culminando na 2ª Guerra e no Holocausto. O ENEM cobra os MECANISMOS do nazifascismo (como a propaganda funciona, como minorias são desumanizadas), com olho nas atualizações contemporâneas. Depois de 1945, a Guerra Fria dividiu o mundo em blocos (EUA × URSS): corrida armamentista e espacial, guerras por procuração (Coreia, Vietnã) e reflexos diretos no Brasil: o golpe de 1964 se justificou pelo anticomunismo.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um cartaz de propaganda nazista dos anos 1930 é apresentado, e a pergunta pede a função social daquela imagem. Como proceder?",
      passos: [
        "Descreva mentalmente o cartaz: quem é exaltado? quem é desumanizado? que símbolos aparecem?",
        "Mobilize o mecanismo: propaganda de massa fabrica consenso, constrói o culto ao líder e elege bodes expiatórios.",
        "Escolha a alternativa que liga a IMAGEM à FUNÇÃO política (mobilizar, desumanizar, legitimar): não a que apenas descreve o desenho.",
      ],
      resposta:
        "A imagem funciona como instrumento de fabricação de consenso e desumanização de minorias, pilar da dominação nazifascista.",
    },
    pontosChave: [
      "Revolução Francesa: cidadania moderna, com limites (mulheres, escravizados).",
      "Revolução Industrial: fábrica, urbanização, questão operária, sindicatos.",
      "Fascismos: crise + ultranacionalismo + propaganda + bode expiatório.",
      "Guerra Fria: bipolaridade, guerras por procuração, reflexo no Brasil (1964).",
      "Antiguidade/medievo caem por CONTRASTE com o presente (democracia, trabalho).",
    ],
    comoCaiNoEnem:
      "Fontes visuais e textuais (cartazes, discursos, mapas) pedindo o mecanismo do processo histórico e suas conexões com o presente: autoritarismo, direitos, trabalho.",
    estrategia:
      "Diante de qualquer documento, pergunte: quem produziu, para quê, em que contexto? Prefira alternativas que expliquem mecanismos e processos; descarte as que reduzem o evento a datas ou a vontades individuais.",
  },

  "Geografia agrária e urbana": {
    ideiaCentral:
      "No campo e na cidade, a pergunta geográfica é a mesma: quem ocupa o espaço, como e por quê? Concentração fundiária histórica de um lado; urbanização acelerada e segregação socioespacial do outro: dois retratos da mesma desigualdade.",
    aula: [
      {
        titulo: "O campo brasileiro: dois projetos em disputa",
        texto:
          "O agronegócio domina a área e a pauta exportadora (soja, milho, carne, cana): alta tecnologia, pouca mão de obra, grandes propriedades. A agricultura familiar, em área muito menor, responde por parte expressiva dos ALIMENTOS da mesa brasileira (mandioca, feijão, hortaliças) e emprega a maioria dos trabalhadores do campo. A modernização agrícola ('Revolução Verde') aumentou a produtividade, mas expulsou trabalhadores (mecanização), concentrou terra e intensificou agrotóxicos. Conflitos fundiários, grilagem e a luta de movimentos como o MST completam o quadro que a prova explora.",
      },
      {
        titulo: "Urbanização brasileira: rápida e desigual",
        texto:
          "Em poucas décadas o Brasil virou um país urbano (mais de 85% nas cidades), empurrado pelo êxodo rural. A cidade, porém, não acolheu a todos: a especulação imobiliária encareceu as áreas centrais e empurrou os pobres para periferias distantes e áreas de risco (encostas, beiras de córrego): é a segregação socioespacial. Favela é consequência da falta de política habitacional, não de 'desordem': o ENEM pune leituras moralizantes. Mobilidade pendular (horas entre casa e trabalho), déficit de saneamento e enchentes são os sintomas urbanos clássicos.",
      },
      {
        titulo: "Problemas urbanos: causas físicas + sociais",
        texto:
          "Enchentes: impermeabilização do solo + ocupação de várzeas + lixo nos bueiros: a água que não infiltra escoa e alaga, atingindo primeiro quem mora nas áreas baixas e baratas. Ilha de calor: concreto e asfalto absorvem calor e elevam a temperatura do centro vários graus acima das áreas verdes. Resíduos: do lixão (a céu aberto, ilegal) ao aterro sanitário (impermeabilizado, com tratamento de chorume). A leitura esperada combina sempre o processo físico com a desigualdade social de quem sofre os efeitos.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: uma foto mostra casas precárias em encosta e o texto fala de deslizamentos no verão. O que a banca espera que você articule?",
      passos: [
        "Causa social: especulação imobiliária + déficit habitacional empurram a população pobre para áreas de risco (encostas íngremes).",
        "Causa física: remoção da vegetação + chuvas intensas de verão = solo encharcado e instável.",
        "Síntese: o desastre 'natural' é socialmente construído: atinge quem não teve alternativa de moradia.",
      ],
      resposta:
        "A ocupação de encostas resulta da exclusão do mercado formal de moradia; o deslizamento combina processo físico com vulnerabilidade social.",
    },
    pontosChave: [
      "Agronegócio exporta; agricultura familiar alimenta e emprega.",
      "Modernização agrícola: mais produtividade, menos empregos, êxodo rural.",
      "Segregação socioespacial: especulação empurra pobres para periferias e áreas de risco.",
      "Enchente = impermeabilização + ocupação de várzea; ilha de calor = concreto.",
      "Estatuto da Cidade e função social da propriedade: o contraponto legal.",
    ],
    comoCaiNoEnem:
      "Mapas, tabelas fundiárias e fotos de paisagem urbana, pedindo a relação processo → problema (especulação → favela; impermeabilização → enchente).",
    estrategia:
      "Monte a cadeia causal completa: processo econômico (quem lucra) → ocupação do espaço (quem é empurrado) → consequência (quem sofre). Alternativas que culpam a vítima ('desordem', 'falta de planejamento dos moradores') estão erradas.",
  },

  "Geopolítica e globalização": {
    ideiaCentral:
      "A globalização integra o planeta de forma DESIGUAL: capitais e mercadorias circulam livres; pessoas encontram muros. Entender quem ganha e quem perde nessa integração é a lente para todas as questões do tema.",
    aula: [
      {
        titulo: "A fábrica global e a DIT",
        texto:
          "As multinacionais fragmentaram a produção: design na Califórnia, chips em Taiwan, montagem no Vietnã: cada país entra na Divisão Internacional do Trabalho conforme o que oferece (tecnologia, mão de obra barata, matérias-primas). Países centrais concentram pesquisa, finanças e patentes; periféricos exportam commodities e manufatura de baixo valor: a 'troca desigual' que perpetua assimetrias. A China embaralhou o tabuleiro: de fábrica do mundo a potência tecnológica, disputando a hegemonia com os EUA (guerra comercial, 5G, semicondutores).",
      },
      {
        titulo: "Fluxos de pessoas: migrações e refúgio",
        texto:
          "Migra-se por trabalho, fome, guerra e, cada vez mais, por CLIMA. O contraste central: o capital atravessa fronteiras em milissegundos, mas o migrante enfrenta muros, cotas e xenofobia. Diferencie migrante econômico de REFUGIADO (foge de perseguição ou conflito, com proteção prevista em direito internacional). No Brasil, os fluxos recentes (venezuelanos, haitianos) e a interiorização são contexto recorrente. A prova cobra leitura humanizada: alternativas xenófobas ou que tratem migração como 'invasão' estão automaticamente erradas.",
      },
      {
        titulo: "Blocos, organismos e a globalização cultural",
        texto:
          "Blocos econômicos têm graus de integração: zona de livre comércio (USMCA) → união aduaneira (Mercosul) → mercado comum → união monetária (zona do euro). ONU, OMC, FMI organizam (e refletem as hierarquias de) o sistema internacional; os BRICS articulam o Sul global. Na cultura, a globalização padroniza consumos (fast-food, streaming, 'americanização'), mas gera reações: valorização de identidades locais e hibridismos (o funk, o K-pop): homogeneização e resistência coexistem, e a prova gosta exatamente dessa tensão.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um mapa mostra os fluxos de investimento e os fluxos migratórios globais, e a pergunta pede a contradição entre eles. Qual é?",
      passos: [
        "Observe os fluxos de capital: livres, instantâneos, desregulamentados, rumo a onde houver lucro.",
        "Observe os fluxos de pessoas: barrados por fronteiras, vistos, muros e políticas anti-imigração.",
        "A contradição: a globalização liberaliza mercadorias e dinheiro, mas restringe a circulação de seres humanos: integração seletiva.",
      ],
      resposta:
        "Capitais circulam livremente enquanto pessoas enfrentam barreiras: a globalização é assimétrica e seletiva.",
    },
    pontosChave: [
      "DIT: centro concentra tecnologia/finanças; periferia, commodities e manufatura barata.",
      "Capital circula livre; pessoas encontram muros: a assimetria-chave.",
      "Refugiado foge de perseguição/conflito: categoria com proteção legal.",
      "Blocos têm graus de integração (livre comércio → união monetária).",
      "Cultura: homogeneização × resistências e hibridismos locais.",
    ],
    comoCaiNoEnem:
      "Mapas de fluxo, charges sobre migração e textos sobre comércio global, cobrando leitura crítica das assimetrias: quem ganha, quem fica de fora.",
    estrategia:
      "Pergunte ao texto/mapa: que FLUXO está representado (capital, mercadoria, pessoas, informação) e quem o controla? A alternativa correta costuma expor a desigualdade do processo, nunca naturalizá-la.",
  },

  "Geografia física e meio ambiente": {
    ideiaCentral:
      "Clima, relevo, solo e água funcionam como sistema integrado, e cada domínio brasileiro é uma combinação própria desses elementos. A ação humana desorganiza o sistema, e o desastre devolve a conta: primeiro para os mais pobres.",
    aula: [
      {
        titulo: "Os controles do clima",
        texto:
          "Latitude (quanto mais perto do Equador, mais quente), altitude (sobe-se, esfria: por isso neva na Serra Gaúcha), maritimidade (o mar ameniza as variações; o interior tem amplitudes maiores) e as massas de ar (a friagem na Amazônia é a massa polar atlântica chegando lá; a seca do inverno paulista é o domínio da tropical continental). El Niño (aquecimento do Pacífico) e La Niña alteram o regime de chuvas: seca no Norte/Nordeste e chuva excessiva no Sul, ou o inverso: pergunta recorrente em anos de evento forte.",
      },
      {
        titulo: "Biomas e domínios: o essencial de cada um",
        texto:
          "Amazônia: floresta densa, equatorial, os 'rios voadores' que levam umidade ao Centro-Sul: desmatá-la mexe com a chuva do país inteiro. Cerrado: savana de solo ácido e raízes profundas, 'caixa d'água do Brasil' (nascem ali grandes bacias): virou fronteira agrícola e perde vegetação mais rápido que a Amazônia. Caatinga: semiárido exclusivamente brasileiro, vegetação adaptada (xerófilas). Mata Atlântica: a mais devastada (restam ~12%), onde mora a maioria da população. Pampa (campos) e Pantanal (planície alagável, regulada pelo pulso de cheias) completam o sexteto.",
      },
      {
        titulo: "Água e solo: os ciclos que a ação humana quebra",
        texto:
          "Bacia hidrográfica é a área drenada por um rio principal: o que se faz na vertente aparece no rio. Mata ciliar segura o solo; sem ela, a chuva arrasta sedimentos e ASSOREIA o leito (rio raso transborda mais). Solo exposto + chuva = erosão, que evolui de sulcos a voçorocas. Compactação por pisoteio de gado e impermeabilização urbana reduzem a infiltração, intensificando enxurradas. As mudanças climáticas amplificam tudo: eventos extremos mais frequentes, e a conta social é desigual: justiça ambiental é o conceito que fecha essas questões.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um texto associa o desmatamento da Amazônia à redução de chuvas no Sudeste. Qual o mecanismo?",
      passos: [
        "A floresta evapotranspira volumes gigantescos de água, formando umidade atmosférica.",
        "Essa umidade é transportada pelos 'rios voadores' (correntes de ar) para o Centro-Sul do país.",
        "Menos floresta → menos evapotranspiração → menos umidade transportada → chuvas reduzidas longe da Amazônia.",
      ],
      resposta:
        "Pelo mecanismo dos rios voadores: a umidade gerada pela floresta abastece chuvas no Centro-Sul; desmatar reduz esse fluxo.",
    },
    pontosChave: [
      "Clima: latitude, altitude, maritimidade e massas de ar explicam os contrastes.",
      "Cerrado = berço das águas e fronteira agrícola; Mata Atlântica = a mais devastada.",
      "Rios voadores: a Amazônia abastece as chuvas do Centro-Sul.",
      "Sem mata ciliar: erosão e assoreamento; solo impermeabilizado: enxurrada.",
      "Eventos extremos atingem primeiro os vulneráveis: justiça ambiental.",
    ],
    comoCaiNoEnem:
      "Climogramas, perfis de relevo, mapas de biomas e notícias de desastre, pedindo a causa integrada (física + humana) e quem sofre as consequências.",
    estrategia:
      "Monte o sistema: o que mudou (desmatamento? impermeabilização?) → qual ciclo foi afetado (água? solo?) → qual a consequência e para quem. Climograma: leia primeiro as barras (chuva) e a linha (temperatura) dos meses extremos.",
  },

  Filosofia: {
    ideiaCentral:
      "O ENEM apresenta um trecho de filósofo e pede o CONCEITO em ação. Dominar uma dúzia de ideias-chave (e reconhecê-las em situações atuais) vale mais que decorar biografias ou escolas inteiras.",
    aula: [
      {
        titulo: "Antiguidade: as perguntas fundadoras",
        texto:
          "Sócrates: 'só sei que nada sei': o exame de si e a maiêutica (parir ideias pelo diálogo); morreu condenado por 'corromper a juventude', símbolo do filosofar contra o senso comum. Platão: o mundo sensível é aparência; o conhecimento verdadeiro está nas Ideias: o Mito da Caverna (prisioneiros que tomam sombras por realidade) é o texto mais reciclado da prova, atualizado para mídia e redes sociais. Aristóteles: a virtude é HÁBITO e justa medida entre extremos (coragem entre covardia e temeridade); o ser humano é 'animal político', que se realiza na pólis.",
      },
      {
        titulo: "Modernidade: razão, contrato e dever",
        texto:
          "Descartes funda a filosofia moderna na dúvida metódica: 'penso, logo existo'. Os contratualistas explicam a origem do Estado: Hobbes (sem Estado, 'guerra de todos contra todos': soberano forte), Locke (direitos naturais: vida, liberdade, propriedade: o Estado existe para protegê-los: base do liberalismo), Rousseau ('o homem nasce livre e por toda parte está acorrentado': soberania popular e vontade geral). Kant: agir moralmente é agir por DEVER, segundo máximas universalizáveis (imperativo categórico): trate a humanidade sempre como fim, nunca apenas como meio. Esclarecimento: 'ousar saber', sair da menoridade intelectual.",
      },
      {
        titulo: "Contemporâneos: as críticas que caem",
        texto:
          "Nietzsche: crítica da moral tradicional ('moral de rebanho') e dos valores absolutos: transvaloração. Escola de Frankfurt (Adorno/Horkheimer): a INDÚSTRIA CULTURAL transforma cultura em mercadoria padronizada, fabricando gostos e docilidade: conceito que o ENEM aplica a TV, hits e algoritmos. Foucault: o poder não está só no Estado: é capilar e DISCIPLINAR, moldando corpos em escolas, quartéis, fábricas e prisões (vigilância: o panóptico), atualizadíssimo para câmeras e dados. Hannah Arendt: a 'banalidade do mal': o mal cometido por burocratas que obedecem sem pensar.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um trecho descreve pessoas que só consomem conteúdos escolhidos por algoritmos e tomam essa seleção pela realidade inteira. Que conceito filosófico se aplica?",
      passos: [
        "Identifique a estrutura: pessoas presas a uma versão limitada da realidade, sem saber que há algo além.",
        "Compare com o repertório: prisioneiros que tomam sombras projetadas por verdade = Mito da Caverna (Platão).",
        "A alternativa correta atualiza a caverna para as bolhas digitais; as erradas citarão filósofos sem relação estrutural com a cena.",
      ],
      resposta:
        "O Mito da Caverna de Platão: as bolhas algorítmicas funcionam como as sombras tomadas por realidade.",
    },
    pontosChave: [
      "Caverna de Platão: aparência × essência, atualizável para mídia/redes.",
      "Aristóteles: virtude como hábito e justa medida; animal político.",
      "Contratualistas: Hobbes (Estado forte), Locke (direitos naturais), Rousseau (vontade geral).",
      "Kant: dever e imperativo categórico (universalizar a máxima).",
      "Indústria cultural (Frankfurt) e poder disciplinar (Foucault): críticas contemporâneas.",
    ],
    comoCaiNoEnem:
      "Trecho curto do filósofo + situação contemporânea: a tarefa é reconhecer o conceito em funcionamento. Citações literais de Platão, Kant e Frankfurt são as mais frequentes.",
    estrategia:
      "Extraia do trecho a ESTRUTURA do argumento (o que se afirma sobre conhecimento, moral ou poder?) e busque o conceito de mesmo esqueleto. Elimine alternativas que citam filósofos corretos com teses distorcidas.",
  },

  "Sociologia, trabalho e cidadania": {
    ideiaCentral:
      "Os três clássicos oferecem as lentes: Durkheim (a sociedade nos molda: fato social), Weber (compreender o sentido da ação), Marx (classes e exploração). O ENEM os aplica ao mundo do trabalho contemporâneo e à desigualdade brasileira.",
    aula: [
      {
        titulo: "As três lentes clássicas",
        texto:
          "Durkheim: fatos sociais são maneiras de agir EXTERIORES ao indivíduo e COERCITIVAS (a língua, a moda, as leis: ninguém escolheu, todos seguem); a sociedade precede e molda o indivíduo. Weber: a sociologia compreende o SENTIDO que os agentes dão às suas ações; a modernidade é o desencantamento do mundo e a burocracia, a forma racional-legal de dominação. Marx: a história é luta de classes; no capitalismo, quem vende força de trabalho produz MAIS VALOR do que recebe (mais-valia), e o trabalhador não se reconhece no que produz (alienação). Identificar qual lente o texto usa é metade da questão.",
      },
      {
        titulo: "Trabalho: do fordismo à uberização",
        texto:
          "Taylor cronometrou gestos; Ford os pôs na esteira: produção em massa, trabalhador especializado em UMA tarefa (Chaplin em 'Tempos Modernos' é o repertório visual). O toyotismo flexibilizou: just-in-time, multifunção, terceirização. O capítulo atual é a UBERIZAÇÃO: plataformas que prometem autonomia ('seja seu chefe') e entregam controle algorítmico sem direitos trabalhistas: o trabalhador banca carro, combustível e risco. O ENEM pergunta exatamente essa contradição autonomia aparente × subordinação real, muitas vezes pedindo o conceito marxista por trás (precarização, mais-valia, alienação).",
      },
      {
        titulo: "Cidadania e desigualdade à brasileira",
        texto:
          "Cidadania em três dimensões (Marshall): direitos civis (liberdade, propriedade), políticos (votar e ser votado) e sociais (saúde, educação, trabalho): no Brasil, conquistados de forma desigual e tardia (direitos sociais vieram antes dos políticos plenos, e setores inteiros seguem com cidadania 'de papel'). Movimentos sociais (negro, feminista, LGBTQIA+, indígena, MST) são motores históricos da ampliação de direitos. A desigualdade brasileira cruza renda, RAÇA e GÊNERO: interseccionalidade: os dados de mercado de trabalho e violência mostram que as hierarquias se acumulam.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um texto descreve entregadores de aplicativo que trabalham 12 horas por dia, sem férias, pagando seus próprios custos, enquanto o app define preços e os pune por recusas. O que a banca espera?",
      passos: [
        "Identifique a aparência: 'autonomia', 'empreendedor de si', 'sem patrão'.",
        "Identifique a realidade: controle algorítmico do trabalho, transferência dos custos e riscos, ausência de direitos.",
        "Conceitos correspondentes: uberização/precarização do trabalho: subordinação sem proteção.",
      ],
      resposta:
        "O caso ilustra a uberização: autonomia aparente encobrindo subordinação ao algoritmo e precarização dos direitos.",
    },
    pontosChave: [
      "Durkheim: fato social (exterior e coercitivo); Weber: sentido da ação; Marx: classe, mais-valia, alienação.",
      "Fordismo: esteira e massa; toyotismo: flexível; uberização: controle algorítmico.",
      "Autonomia aparente × subordinação real: a contradição das plataformas.",
      "Cidadania: civil + política + social (Marshall), desigual no Brasil.",
      "Interseccionalidade: renda, raça e gênero se acumulam.",
    ],
    comoCaiNoEnem:
      "Textos sobre trabalho em plataformas, desigualdade e movimentos sociais, além de citações diretas dos três clássicos para identificar a lente.",
    estrategia:
      "Pergunte: o texto enfatiza a coerção da sociedade (Durkheim), o sentido da ação (Weber) ou o conflito/exploração (Marx)? Em trabalho contemporâneo, procure a distância entre o discurso ('liberdade') e a prática (controle).",
  },

  "Cultura, identidade e povos tradicionais": {
    ideiaCentral:
      "Cultura é tudo que os grupos humanos criam e carregam de significado: material e imaterial: e nenhuma é superior a outra. O Brasil deve sua formação a matrizes indígenas, africanas e europeias em relações desiguais que ainda cobram reconhecimento e direitos.",
    aula: [
      {
        titulo: "Etnocentrismo × relativismo: a régua das questões",
        texto:
          "Etnocentrismo é julgar outras culturas pela régua da própria (chamar religião alheia de 'superstição', técnica indígena de 'atraso'). O antídoto analítico é o relativismo cultural: compreender práticas nos SEUS contextos e termos. No ENEM, alternativas etnocêntricas, evolucionistas ('culturas mais evoluídas') ou que exotizam povos estão SEMPRE erradas: a banca adota a postura antropológica. Identidade cultural não é essência congelada: é construção histórica, dinâmica e múltipla (ser nordestino, negro e evangélico ao mesmo tempo).",
      },
      {
        titulo: "Povos e comunidades tradicionais: cultura é território",
        texto:
          "Indígenas (centenas de povos e línguas), quilombolas, ribeirinhos, quebradeiras de coco, pescadores artesanais: comunidades cujo modo de vida depende do TERRITÓRIO. Por isso a demarcação de terras indígenas (art. 231 da Constituição) e a titulação quilombola não são 'privilégio': são condição de existência física e cultural. A Constituição (arts. 215-216) protege o patrimônio cultural material E IMATERIAL: o IPHAN registra saberes e celebrações (capoeira, frevo, modo de fazer queijo minas, ofício das baianas de acarajé). Tema das redações de 2022 e 2024: transversal à prova inteira.",
      },
      {
        titulo: "Cultura popular, indústria e apropriação",
        texto:
          "A indústria cultural transforma manifestações em mercadoria: o que era rito vira espetáculo, o que era comunitário vira produto: às vezes visibilizando, às vezes esvaziando significados. Apropriação cultural entra nesse debate: usar elementos de culturas marginalizadas sem reconhecimento, fora do contexto, enquanto seus criadores seguem discriminados. Cultura popular não é 'folclore parado no tempo': é viva e se ressignifica (o samba criminalizado virou símbolo nacional; o funk repete a trajetória de estigma). A prova valoriza alternativas que reconheçam dinamismo e disputa de sentidos.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um texto descreve viajantes europeus do século XIX classificando rituais indígenas como 'feitiçaria primitiva'. Que postura o texto revela e qual a leitura correta?",
      passos: [
        "Identifique o julgamento: a cultura alheia avaliada pela régua religiosa e 'civilizacional' europeia.",
        "Nomeie o conceito: etnocentrismo (e seu desdobramento evolucionista: 'primitivo' × 'civilizado').",
        "A leitura antropológica correta: compreender o ritual dentro do sistema de significados do próprio povo (relativismo cultural).",
      ],
      resposta:
        "O texto revela etnocentrismo; a postura adequada é compreender a prática em seus próprios termos, sem hierarquizar culturas.",
    },
    pontosChave: [
      "Etnocentrismo julga; relativismo compreende: alternativas etnocêntricas estão erradas.",
      "Identidade é construção histórica, não essência.",
      "Território = condição de existência de povos tradicionais (demarcação, titulação).",
      "Patrimônio imaterial: saberes e celebrações registrados pelo IPHAN.",
      "Cultura popular é dinâmica: samba e funk, do estigma ao símbolo.",
    ],
    comoCaiNoEnem:
      "Fotos de manifestações culturais, relatos históricos com viés etnocêntrico e conflitos territoriais: além de ter sido tema de redação em 2022 e 2024.",
    estrategia:
      "Procure o ponto de vista do texto: quem descreve a cultura de quem? Marque a alternativa que respeita o contexto próprio da prática e reconhece direitos; descarte qualquer hierarquização entre culturas.",
  },

  "Estado, política e direitos": {
    ideiaCentral:
      "O Estado democrático de direito submete todos à lei: inclusive quem governa: separa os poderes e garante direitos fundamentais. Democracia é mais que voto: é participação, pluralismo e proteção das minorias contra a tirania da maioria.",
    aula: [
      {
        titulo: "A arquitetura do Estado democrático",
        texto:
          "Três poderes independentes e harmônicos (Montesquieu): Legislativo faz as leis, Executivo governa, Judiciário julga: freios e contrapesos para ninguém concentrar poder. O Estado é LAICO: sem religião oficial, garantindo liberdade de crença para todos (laicidade protege inclusive os religiosos). República significa coisa pública: o cargo não pertence ao ocupante: patrimonialismo (confundir público e privado) é a doença histórica brasileira que a prova adora nomear.",
      },
      {
        titulo: "Direitos: de 1948 a 1988",
        texto:
          "A Declaração Universal dos Direitos Humanos (1948) nasceu da catástrofe da guerra e do Holocausto: direitos UNIVERSAIS (de todos), INDIVISÍVEIS (civis, políticos e sociais juntos) e históricos (conquistados em lutas, por gerações). A Constituição de 1988 traduziu isso para o Brasil: dignidade da pessoa humana como fundamento, direitos sociais exigíveis (saúde → SUS, educação, moradia), voto universal. Importante para a prova E para a redação: direitos humanos valem para TODOS, inclusive para quem comete crimes: alternativa que os relativize está errada.",
      },
      {
        titulo: "Democracia além do voto e seus riscos atuais",
        texto:
          "A Constituição prevê participação direta: plebiscito, referendo, iniciativa popular de lei (a Lei da Ficha Limpa nasceu assim), conselhos de políticas públicas e audiências. Democracia saudável exige imprensa livre, oposição atuante e respeito às minorias. Os riscos contemporâneos que o ENEM tematiza: desinformação em massa distorcendo eleições, ataques às instituições, discurso de ódio e a erosão 'por dentro' (líderes eleitos que corroem freios e contrapesos). Cidadania ativa: fiscalizar, participar, informar-se: é a resposta esperada nas conclusões.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: o texto narra um governante que nomeia parentes, usa bens públicos como pessoais e ataca juízes que o contrariam. Que conceitos descrevem a cena?",
      passos: [
        "Confusão entre o público e o privado (cargos e bens como propriedade pessoal) = patrimonialismo.",
        "Ataque ao Judiciário que o contraria = agressão à separação de poderes (freios e contrapesos).",
        "A leitura republicana: o poder é delegado e limitado pela lei: ninguém está acima dela.",
      ],
      resposta:
        "Patrimonialismo e desrespeito à separação de poderes: violações dos princípios republicano e democrático.",
    },
    pontosChave: [
      "Três poderes + freios e contrapesos: ninguém concentra poder.",
      "Estado laico protege a liberdade religiosa de todos.",
      "DUDH (1948): direitos universais e indivisíveis, nascidos do pós-guerra.",
      "Constituição de 1988: dignidade humana, direitos sociais, participação direta.",
      "Riscos atuais: desinformação, discurso de ódio, erosão das instituições.",
    ],
    comoCaiNoEnem:
      "Artigos da Constituição e da DUDH aplicados a casos concretos, e textos sobre qualidade da democracia. É também o vocabulário-base da proposta de intervenção da redação.",
    estrategia:
      "Identifique o princípio em jogo (separação de poderes? laicidade? universalidade dos direitos?) e aplique-o ao caso. Alternativas que relativizam direitos humanos ou justificam concentração de poder estão erradas por definição.",
  },
};
