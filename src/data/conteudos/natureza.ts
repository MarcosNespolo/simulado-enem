import type { ConteudoEstudo } from "./index";

export const CONTEUDOS_NATUREZA: Record<string, ConteudoEstudo> = {
  "Ecologia e meio ambiente": {
    ideiaCentral:
      "Ecologia estuda as relações entre os seres vivos e o ambiente. Três engrenagens explicam a maior parte das questões: o fluxo de energia nas cadeias alimentares, os ciclos da matéria e o desequilíbrio que a ação humana introduz nesses sistemas.",
    aula: [
      {
        titulo: "Energia flui e se perde; matéria circula",
        texto:
          "Na cadeia alimentar, a energia entra pelos produtores (fotossíntese) e passa de nível em nível, mas cerca de 90% se perde em cada transferência (respiração, calor). Por isso as cadeias têm poucos elos e a biomassa diminui em direção ao topo. A matéria, ao contrário, CIRCULA: carbono, nitrogênio e água passam dos seres vivos para o ambiente e voltam, nos ciclos biogeoquímicos. Decompositores fecham o ciclo devolvendo nutrientes ao solo: sem eles, o sistema trava.",
      },
      {
        titulo: "Bioacumulação e eutrofização: os dois vilões clássicos",
        texto:
          "Poluentes não degradáveis (mercúrio, agrotóxicos organoclorados) não saem do organismo: a cada nível trófico, a concentração AUMENTA, e o predador de topo (inclusive o ser humano) recebe a dose máxima: isso é bioacumulação/biomagnificação. Já a eutrofização começa com excesso de nutrientes (esgoto, fertilizantes) na água: algas explodem, a luz não entra, as algas morrem, bactérias decompositoras consomem o oxigênio e peixes morrem asfixiados. Repare: o oxigênio acaba por causa da DECOMPOSIÇÃO, não das algas vivas.",
      },
      {
        titulo: "Efeito estufa, biomas e as relações ecológicas",
        texto:
          "O efeito estufa é natural e necessário (sem ele a Terra seria congelada); o problema é sua intensificação por CO₂ e metano, que eleva a temperatura média global. Conheça os biomas brasileiros e suas ameaças: Amazônia (desmatamento, ciclo de chuvas continental), Cerrado (berço das águas, fronteira agrícola), Caatinga (único exclusivamente brasileiro), Mata Atlântica (o mais devastado), Pampa e Pantanal. Nas relações ecológicas, diferencie as harmônicas (mutualismo, comensalismo) das desarmônicas (predação, parasitismo, competição) e saiba classificá-las em exemplos.",
      },
    ],
    exemplo: {
      enunciado:
        "Em um lago contaminado por mercúrio, qual organismo apresentará maior concentração do metal: o fitoplâncton, os peixes pequenos que o comem, ou as aves que comem esses peixes?",
      passos: [
        "Mercúrio não é metabolizado nem excretado de forma eficiente: acumula nos tecidos.",
        "A cada nível trófico, um indivíduo come MUITOS do nível anterior, somando o mercúrio de todos.",
        "A concentração cresce ao longo da cadeia (biomagnificação): topo = maior dose.",
      ],
      resposta: "As aves (topo da cadeia) concentram mais mercúrio.",
    },
    pontosChave: [
      "~10% da energia passa por nível trófico; biomassa diminui rumo ao topo.",
      "Bioacumulação: poluente persistente se concentra nos predadores de topo.",
      "Eutrofização: nutrientes → algas → decomposição → queda de O₂ → mortandade.",
      "Efeito estufa é natural; o problema é a intensificação por CO₂ e CH₄.",
      "Decompositores devolvem nutrientes ao ciclo: papel insubstituível.",
    ],
    comoCaiNoEnem:
      "Impactos ambientais em formato de notícia (desmatamento, mineração, esgoto) pedindo o mecanismo ecológico por trás. É o assunto mais frequente de biologia.",
    estrategia:
      "Pergunte ao enunciado: estou seguindo ENERGIA (diminui a cada nível) ou MATÉRIA/poluente (circula ou acumula)? Localize o organismo na cadeia e aplique a lógica do nível trófico.",
  },

  "Genética e evolução": {
    ideiaCentral:
      "Genética: características são determinadas por pares de alelos que se separam nos gametas (1ª Lei de Mendel). Evolução: o ambiente seleciona variações que JÁ existem na população (seleção natural), não cria características novas sob demanda.",
    aula: [
      {
        titulo: "Mendel sem mistério",
        texto:
          "Cada indivíduo carrega dois alelos por característica e passa UM deles a cada filho. Dominante (A) se expressa com uma cópia; recessivo (a) só em dose dupla (aa). O quadro de Punnett organiza os cruzamentos: Aa × Aa dá 1 AA : 2 Aa : 1 aa, ou seja, 3:1 no fenótipo e 25% de chance do recessivo. Aa × aa dá 1:1. Em heredogramas, a pista de ouro: pais sem a característica com filho afetado = característica RECESSIVA (os pais são portadores Aa).",
      },
      {
        titulo: "Do DNA à proteína (e os grupos sanguíneos)",
        texto:
          "O fluxo da informação: DNA é transcrito em RNA mensageiro, que é traduzido em proteína nos ribossomos. Mutações alteram a 'receita' e geram variação, matéria-prima da evolução. No sistema ABO, os alelos A e B são codominantes entre si e dominantes sobre O: por isso pais A e B podem ter filhos de QUALQUER tipo sanguíneo (se forem heterozigotos AO e BO). O fator Rh é um caso simples de dominância: Rh+ domina Rh-.",
      },
      {
        titulo: "Seleção natural: a lógica que o ENEM cobra",
        texto:
          "O erro conceitual que a prova adora punir: 'as bactérias se tornaram resistentes POR CAUSA do antibiótico'. Errado na causa: a variação (algumas bactérias já resistentes, por mutação aleatória prévia) existia ANTES; o antibiótico apenas selecionou, matando as sensíveis e deixando as resistentes se multiplicarem. O ambiente não induz a mudança: ele filtra. O mesmo raciocínio explica insetos resistentes a inseticidas. Evidências da evolução: fósseis, órgãos homólogos (mesma origem, funções diferentes: ancestral comum) e análogos (origens diferentes, mesma função: convergência adaptativa).",
      },
    ],
    exemplo: {
      enunciado:
        "Pais com pigmentação normal têm um filho albino (condição recessiva). Qual a probabilidade de o próximo filho também ser albino?",
      passos: [
        "Filho albino (aa) recebeu um 'a' de cada pai → ambos os pais são Aa.",
        "Cruzamento Aa × Aa: AA, Aa, Aa, aa.",
        "P(aa) = 1/4 = 25%, independentemente dos filhos anteriores.",
      ],
      resposta: "25% (1/4).",
    },
    pontosChave: [
      "Aa × Aa → 3:1; Aa × aa → 1:1; monte o quadro de Punnett.",
      "Pais normais + filho afetado = característica recessiva.",
      "DNA → RNA → proteína; mutação gera variação ao acaso.",
      "Seleção natural FILTRA variações pré-existentes; não cria sob demanda.",
      "ABO: A e B codominantes, ambos dominam O.",
    ],
    comoCaiNoEnem:
      "Probabilidade em cruzamentos e heredogramas, resistência de bactérias/insetos (lógica selecionista) e biotecnologia em textos de divulgação científica.",
    estrategia:
      "Em hereditariedade: descubra os genótipos dos pais a partir das pistas (filho recessivo entrega tudo) e monte o quadro. Em evolução: desconfie de alternativas em que o ambiente 'cria' ou o organismo 'decide' se adaptar.",
  },

  "Fisiologia humana e citologia": {
    ideiaCentral:
      "A célula é a unidade da vida: organelas dividem o trabalho (mitocôndria gera energia, ribossomos montam proteínas). No corpo, os sistemas operam integrados sob comando duplo: nervoso (rápido, elétrico) e endócrino (lento, hormonal).",
    aula: [
      {
        titulo: "Energia: respiração celular e fermentação",
        texto:
          "A glicose dos alimentos vira ATP (a 'moeda energética') na respiração celular: glicose + O₂ → CO₂ + H₂O + energia, processo que ocorre majoritariamente nas mitocôndrias. Sem oxigênio suficiente (exercício intenso), o músculo recorre à fermentação láctica, que rende MUITO menos ATP e gera ácido láctico (fadiga). É por isso que treino aeróbico melhora o fôlego: mais mitocôndrias e melhor entrega de O₂. Plantas fazem fotossíntese (cloroplastos) E respiração celular: as duas coisas, o tempo todo.",
      },
      {
        titulo: "Hormônios: os reguladores do equilíbrio",
        texto:
          "O corpo busca constância interna (homeostase) e usa hormônios como mensageiros químicos. O par insulina/glucagon controla a glicemia: insulina GUARDA glicose nas células (falta dela = diabetes, açúcar alto no sangue); glucagon LIBERA glicose quando falta. Adrenalina prepara para luta-ou-fuga (acelera coração, dilata pupilas). Tireoidianos (T3/T4) regulam o ritmo do metabolismo. A lógica de prova é sempre causa-efeito: 'se falta o hormônio X, o que acontece com Y?'",
      },
      {
        titulo: "Defesa: vacina não é soro",
        texto:
          "Vacina é prevenção: contém antígenos (agente morto, atenuado ou pedaços dele) que ensinam o corpo a produzir seus próprios anticorpos e células de memória: imunização ATIVA e duradoura. Soro é tratamento de urgência: anticorpos PRONTOS (produzidos em outro organismo) para neutralizar veneno ou toxina imediatamente: imunização PASSIVA, sem memória. Picada de cobra = soro; campanha de gripe = vacina. Essa distinção é uma das perguntas mais repetidas da história da prova.",
      },
    ],
    exemplo: {
      enunciado:
        "Após uma refeição rica em carboidratos, qual hormônio aumenta no sangue e qual seu efeito?",
      passos: [
        "Carboidratos digeridos elevam a glicose no sangue (glicemia sobe).",
        "O pâncreas responde liberando INSULINA.",
        "A insulina promove a entrada de glicose nas células (e estoque no fígado como glicogênio), baixando a glicemia ao normal.",
      ],
      resposta: "Insulina, que reduz a glicemia ao facilitar a captação de glicose pelas células.",
    },
    pontosChave: [
      "Mitocôndria = respiração celular = ATP; fermentação rende muito menos.",
      "Insulina guarda glicose; glucagon libera: o par da glicemia.",
      "Vacina = prevenção, anticorpos próprios, memória; soro = urgência, anticorpos prontos.",
      "Enzimas são específicas e sensíveis a temperatura e pH.",
    ],
    comoCaiNoEnem:
      "Situações de saúde do cotidiano: diabetes, exercício físico, dietas, febre e vacinação. Entender a função no conjunto vale mais que decorar nomes.",
    estrategia:
      "Pense em causa e efeito fisiológico: o que sobe, o que desce, qual órgão responde. Se a questão envolver imunidade, primeiro classifique: é prevenção (vacina) ou emergência (soro)?",
  },

  "Microbiologia, saúde e doenças": {
    ideiaCentral:
      "Cada agente tem sua arma e sua fraqueza: vírus só vivem dentro de células (antibiótico NÃO os afeta); bactérias são combatidas por antibióticos; protozoários e vermes ligam-se a vetores e saneamento. Conhecer transmissão e prevenção decide a questão.",
    aula: [
      {
        titulo: "O mapa dos agentes e das doenças",
        texto:
          "Vírus: dengue, zika, chikungunya, gripe, sarampo, covid, hepatites, HIV: tratam-se os sintomas, previne-se com vacina (quando existe) e controle de transmissão. Bactérias: tuberculose, cólera, leptospirose, tétano: respondem a antibióticos. Protozoários: malária (Anopheles), doença de Chagas (barbeiro), leishmaniose, amebíase. Vermes: esquistossomose (caramujo na água doce), teníase, ascaridíase. Associar doença → agente → transmissão é o tripé das questões.",
      },
      {
        titulo: "Saneamento e vetores: a prevenção certa",
        texto:
          "Doenças de veiculação hídrica ou fecal-oral (cólera, hepatite A, amebíase, ascaridíase) se previnem com água tratada e esgoto: saneamento básico. Arboviroses (dengue, zika, chikungunya) compartilham o MESMO vetor, o Aedes aegypti: a prevenção central é eliminar água parada (criadouros). Esquistossomose precisa do caramujo como hospedeiro intermediário: contato com lagoas contaminadas. A prova descreve um surto e pergunta a medida de prevenção ADEQUADA: ligar a transmissão certa à medida certa é todo o jogo.",
      },
      {
        titulo: "Resistência bacteriana e imunidade coletiva",
        texto:
          "Usar antibiótico sem necessidade (gripe é vírus!) ou abandonar o tratamento no meio seleciona as bactérias mais resistentes: as sensíveis morrem primeiro, as fortes sobram e se multiplicam: é a seleção natural em tempo real, e um problema de saúde pública global. Já a vacinação em massa protege até quem não pode se vacinar: com a maioria imune, o patógeno não encontra corrente de transmissão (imunidade coletiva). Queda na cobertura vacinal = volta de doenças controladas (o sarampo brasileiro é o exemplo recente).",
      },
    ],
    exemplo: {
      enunciado:
        "Uma cidade registra surto simultâneo de dengue e chikungunya. Qual medida única de prevenção ataca as duas doenças ao mesmo tempo? Por quê?",
      passos: [
        "Identifique os agentes: ambos são vírus.",
        "Identifique a transmissão: ambos são transmitidos pelo MESMO mosquito, o Aedes aegypti.",
        "A medida que interrompe a transmissão das duas é eliminar os criadouros (água parada).",
      ],
      resposta: "Eliminar focos de água parada, pois as duas viroses compartilham o vetor Aedes aegypti.",
    },
    pontosChave: [
      "Antibiótico não age sobre vírus; uso incorreto seleciona bactérias resistentes.",
      "Dengue, zika e chikungunya: mesmo vetor (Aedes), mesma prevenção.",
      "Doenças fecal-orais e hídricas: a resposta é saneamento básico.",
      "Esquistossomose: caramujo intermediário; Chagas: barbeiro; malária: Anopheles.",
      "Alta cobertura vacinal protege a comunidade inteira (imunidade coletiva).",
    ],
    comoCaiNoEnem:
      "Surtos e campanhas em formato de notícia: identificar agente, modo de transmissão e a prevenção compatível. Saneamento × doença é a associação mais cobrada.",
    estrategia:
      "Monte o tripap mental: agente (vírus/bactéria/protozoário/verme) → transmissão (vetor? água? contato?) → prevenção correspondente. A alternativa certa fecha os três elos com coerência.",
  },

  "Química orgânica": {
    ideiaCentral:
      "Química orgânica é a química do carbono, que forma quatro ligações e cadeias longas. Reconhecer a FUNÇÃO (o grupo característico da molécula) é 80% das questões: cada função tem propriedades e usos próprios.",
    aula: [
      {
        titulo: "As funções pelo grupo característico",
        texto:
          "Procure o 'crachá' da molécula: -OH ligado a carbono = álcool (etanol); -COOH = ácido carboxílico (vinagre); C=O no meio da cadeia = cetona (acetona); C=O na ponta com H = aldeído (formol); -COO- entre dois carbonos = éster (aromas de frutas, biodiesel); N na cadeia = amina (caráter básico, cheiro de peixe); anel de seis carbonos alternando ligações = aromático (benzeno). Hidrocarbonetos têm SÓ C e H: são os combustíveis (metano, gasolina).",
      },
      {
        titulo: "Nomenclatura e isomeria no essencial",
        texto:
          "O nome conta a estrutura: prefixo = nº de carbonos (met-1, et-2, prop-3, but-4, pent-5...); infixo = saturação (an = só simples, en = dupla, in = tripla); sufixo = função (ol = álcool, al = aldeído, ona = cetona, oico = ácido). Etanol = 2 carbonos, ligações simples, álcool. Isômeros têm a MESMA fórmula molecular e estruturas diferentes, logo propriedades diferentes: é o que explica como C₂H₆O pode ser tanto etanol (líquido, bebida) quanto éter dimetílico (gás).",
      },
      {
        titulo: "Propriedades e polímeros: por que importa",
        texto:
          "Interações intermoleculares mandam nas propriedades: -OH e -COOH fazem ligações de hidrogênio → pontos de ebulição maiores e solubilidade em água (álcoois pequenos se misturam à água; gasolina não). Cadeia maior = mais superfície de contato = ferve mais alto. Polímeros são correntes de unidades repetidas (monômeros): polietileno (sacolas), PET (garrafas), PVC (tubos): a base da discussão ambiental sobre plásticos, reciclagem e os ésteres do biodiesel (produzidos de óleos vegetais + álcool, a transesterificação).",
      },
    ],
    exemplo: {
      enunciado:
        "O ácido acetilsalicílico (aspirina) contém os grupos -COOH e -COO- em sua estrutura. Quais funções orgânicas estão presentes?",
      passos: [
        "-COOH (carboxila) caracteriza ácido carboxílico.",
        "-COO- entre dois carbonos caracteriza éster.",
        "Identificadas pelas 'assinaturas', sem precisar decorar a molécula inteira.",
      ],
      resposta: "Ácido carboxílico e éster.",
    },
    pontosChave: [
      "Identifique funções pelo grupo: -OH álcool, -COOH ácido, C=O cetona/aldeído, -COO- éster, N amina.",
      "Prefixo conta carbonos; sufixo entrega a função (ol, al, ona, oico).",
      "Ligações de hidrogênio (-OH, -COOH) elevam ebulição e solubilidade em água.",
      "Isômeros: mesma fórmula, propriedades diferentes.",
      "Polímeros: monômeros repetidos (PET, PVC, polietileno).",
    ],
    comoCaiNoEnem:
      "Moléculas de fármacos, combustíveis e agrotóxicos desenhadas no enunciado, pedindo o reconhecimento de funções, ou textos sobre plásticos/biodiesel.",
    estrategia:
      "Não tente decifrar a molécula inteira: escaneie-a procurando os grupos característicos (OH, COOH, C=O, N) e marque cada função encontrada. O nome da substância no enunciado costuma confirmar.",
  },

  "Reações químicas e estequiometria": {
    ideiaCentral:
      "Numa reação química, átomos se rearranjam, mas nada se perde: a equação balanceada é uma receita de proporções. Estequiometria é seguir essa receita: converter tudo para mol, aplicar a proporção dos coeficientes e voltar para a unidade pedida.",
    aula: [
      {
        titulo: "O roteiro universal em 4 passos",
        texto:
          "(1) Balanceie a equação (mesma quantidade de cada átomo dos dois lados). (2) Converta o dado para MOL: n = massa/massa molar (a massa molar sai da tabela periódica somando os átomos: H₂O = 2×1 + 16 = 18 g/mol). (3) Use a proporção dos coeficientes como regra de três: em 2H₂ + O₂ → 2H₂O, 2 mol de H₂ geram 2 mol de água. (4) Converta o resultado para o que a questão pede (gramas, litros, moléculas: 1 mol = 6×10²³ partículas). Esse roteiro resolve QUALQUER estequiometria do ENEM.",
      },
      {
        titulo: "Limitante e rendimento: os dois refinamentos",
        texto:
          "Quando a questão dá as quantidades de DOIS reagentes, um deles acaba primeiro: o limitante, que comanda a conta (o outro sobra em excesso). Compare dividindo a quantidade de cada um pelo seu coeficiente: o menor resultado é o limitante. Rendimento real: se a reação rende 80%, multiplique o valor teórico por 0,8. A combustão completa (combustível + O₂ → CO₂ + H₂O) é o contexto favorito: calcular o CO₂ emitido por um tanque de etanol é estequiometria pura com verniz ambiental.",
      },
      {
        titulo: "Velocidade de reação: o que acelera",
        texto:
          "Quatro fatores aumentam a velocidade: temperatura (mais colisões eficazes), concentração dos reagentes, superfície de contato (pó reage mais rápido que pedaço: pense no comprimido efervescente triturado) e catalisador (abaixa a energia de ativação SEM ser consumido: as enzimas do corpo são catalisadores biológicos). A prova traz situações domésticas (panela de pressão, geladeira conservando alimento, palha de aço enferrujando) e pergunta qual fator está em jogo.",
      },
    ],
    exemplo: {
      enunciado:
        "Na combustão completa do etanol (C₂H₆O + 3O₂ → 2CO₂ + 3H₂O), qual massa de CO₂ é produzida a partir de 92 g de etanol? (massas molares: etanol 46 g/mol; CO₂ 44 g/mol)",
      passos: [
        "Converta para mol: n(etanol) = 92/46 = 2 mol.",
        "Proporção da equação: 1 mol de etanol → 2 mol de CO₂; logo 2 mol → 4 mol de CO₂.",
        "Volte para massa: 4 × 44 = 176 g.",
      ],
      resposta: "176 g de CO₂.",
    },
    pontosChave: [
      "Roteiro: balancear → mol → proporção dos coeficientes → unidade pedida.",
      "1 mol = 6×10²³ partículas = massa molar em gramas.",
      "Dois reagentes com quantidades dadas: ache o limitante antes de calcular.",
      "Rendimento de x%: multiplique o teórico por x/100.",
      "Velocidade: temperatura, concentração, superfície de contato e catalisador.",
    ],
    comoCaiNoEnem:
      "Emissão de CO₂ por combustíveis, dose de princípio ativo, produção industrial: contextos variados, mas o roteiro de conversão é sempre o mesmo.",
    estrategia:
      "Escreva a equação balanceada e converta o dado em mol ANTES de qualquer proporção. Monte a regra de três entre os coeficientes e só converta para gramas/litros no final.",
  },

  "Soluções, ácidos e bases": {
    ideiaCentral:
      "Concentração diz quanto soluto existe por volume de solução (g/L ou mol/L). Diluir é acrescentar solvente: o soluto NÃO muda, e daí vem a fórmula-chave C₁V₁ = C₂V₂. O pH traduz a acidez em escala logarítmica de 0 a 14.",
    aula: [
      {
        titulo: "Concentração e diluição sem decoreba",
        texto:
          "C = massa do soluto / volume da solução (g/L); M = mols do soluto / volume (mol/L). Na diluição, pense fisicamente: a quantidade de soluto que estava no frasco continua lá, só o volume cresceu. Logo C₁V₁ = C₂V₂. Exemplo: completar 100 mL de suco concentrado até 500 mL divide a concentração por 5. Misturas de soluções do MESMO soluto: some os solutos e some os volumes, depois divida. Não decore casos: conserve o soluto.",
      },
      {
        titulo: "pH: a escala que anda de 10 em 10",
        texto:
          "pH < 7 ácido, pH = 7 neutro, pH > 7 básico. Por ser logarítmica, CADA unidade de pH significa concentração de H⁺ dez vezes maior ou menor: um refrigerante de pH 3 é 1.000 vezes mais ácido que um café de pH 6. Indicadores mudam de cor conforme o pH (fenolftaleína fica rosa em meio básico; o extrato de repolho roxo é o indicador caseiro queridinho da prova). Chuva ácida: óxidos de enxofre e nitrogênio (queima de combustíveis fósseis) reagem com a água da atmosfera, baixando o pH da chuva e corroendo monumentos.",
      },
      {
        titulo: "Neutralização: ácido + base",
        texto:
          "Ácido + base → sal + água. É a química do antiácido (base fraca neutralizando o HCl do estômago), do calcário corrigindo solo ácido e da pasta de dente combatendo a acidez bucal. Em contas de neutralização, a lógica molar continua: iguale os mols de H⁺ e OH⁻. O ENEM costuma cobrar o conceito aplicado (qual substância adicionar e por quê) mais do que o cálculo completo de titulação.",
      },
    ],
    exemplo: {
      enunciado:
        "Um medicamento deve ser diluído de 200 mg/mL para 50 mg/mL. Partindo de 10 mL do concentrado, qual o volume final após a diluição?",
      passos: [
        "Use C₁V₁ = C₂V₂ (o soluto se conserva).",
        "200 × 10 = 50 × V₂.",
        "V₂ = 2.000/50 = 40 mL (ou seja, acrescentam-se 30 mL de solvente).",
      ],
      resposta: "40 mL de volume final.",
    },
    pontosChave: [
      "C = m/V; M = n/V; na diluição, C₁V₁ = C₂V₂.",
      "Cada unidade de pH = fator 10 na concentração de H⁺.",
      "Ácido + base → sal + água (antiácidos, correção de solo).",
      "Chuva ácida: SOx e NOx da queima de fósseis.",
      "Misturar soluções do mesmo soluto: somar solutos e volumes.",
    ],
    comoCaiNoEnem:
      "Diluição de medicamentos e produtos de limpeza, soro caseiro, pH de alimentos e chuva ácida. C₁V₁ = C₂V₂ resolve uma família inteira de questões.",
    estrategia:
      "Pergunte: o soluto mudou? Se só entrou solvente, é diluição: C₁V₁ = C₂V₂ direto. Para pH, lembre da escala logarítmica antes de comparar acidez 'no olho'.",
  },

  "Eletroquímica e oxirredução": {
    ideiaCentral:
      "Oxidar é perder elétrons; reduzir é ganhar. A pilha transforma uma reação espontânea em corrente elétrica; a eletrólise usa corrente para forçar uma reação que não ocorreria sozinha. Quem decide a direção é o potencial de redução.",
    aula: [
      {
        titulo: "A pilha por dentro",
        texto:
          "Dois metais diferentes mergulhados em soluções, ligados por um fio: o de MENOR potencial de redução oxida (perde elétrons, corrói, perde massa): é o ânodo, polo negativo. Os elétrons viajam pelo fio até o cátodo (polo positivo), onde ocorre redução (íons da solução viram metal depositado: o cátodo GANHA massa). Memorize o par: ânodo/oxidação, cátodo/redução (vogal com vogal, consoante com consoante). A ponte salina fecha o circuito equilibrando as cargas das soluções.",
      },
      {
        titulo: "Tabela de potenciais: quem protege quem",
        texto:
          "Dada a tabela de potenciais-padrão, o metal de potencial de redução MAIS ALTO reduz (é protegido); o mais baixo oxida (se sacrifica). Aplicação favorita do ENEM: o metal de sacrifício: blocos de zinco ou magnésio presos a cascos de navio e tubulações de ferro oxidam no lugar do ferro, protegendo a estrutura. A galvanização (revestir ferro com zinco) usa a mesma lógica. Para calcular a ddp da pilha: E = E(cátodo) - E(ânodo), sempre positiva em pilha espontânea.",
      },
      {
        titulo: "Eletrólise: a pilha ao contrário",
        texto:
          "Na eletrólise, uma fonte externa BOMBEIA elétrons e força a reação não espontânea: é assim que se obtém alumínio da bauxita, se cromam peças (galvanoplastia) e se purifica cobre. Consome muita energia elétrica: por isso o alumínio é caro de produzir e valioso de reciclar (a reciclagem gasta ~5% da energia da produção primária: argumento ambiental recorrente na prova). Recarregar uma bateria é, na prática, fazer eletrólise para reverter a reação da pilha.",
      },
    ],
    exemplo: {
      enunciado:
        "Numa pilha de zinco e cobre (E°red: Zn = -0,76 V; Cu = +0,34 V), qual eletrodo perde massa e qual é a ddp da pilha?",
      passos: [
        "Menor potencial de redução oxida: o zinco é o ânodo (perde massa).",
        "O cobre é o cátodo: íons Cu²⁺ se depositam, o eletrodo ganha massa.",
        "ddp: E = E(cátodo) - E(ânodo) = 0,34 - (-0,76) = 1,10 V.",
      ],
      resposta: "O eletrodo de zinco perde massa; a ddp é 1,10 V.",
    },
    pontosChave: [
      "Ânodo: oxidação, polo negativo, perde massa; cátodo: redução, ganha massa.",
      "Elétrons fluem do ânodo para o cátodo pelo circuito externo.",
      "Menor potencial de redução oxida: base do metal de sacrifício.",
      "ddp = E(cátodo) - E(ânodo).",
      "Eletrólise consome energia para forçar reação não espontânea (alumínio, galvanoplastia).",
    ],
    comoCaiNoEnem:
      "Corrosão e proteção de estruturas, pilhas/baterias e recarga, reciclagem de alumínio. Identificar quem oxida e quem reduz elimina metade das alternativas.",
    estrategia:
      "Compare os potenciais de redução: o menor OXIDA (ânodo, corrói), o maior REDUZ (cátodo, deposita). Localize o fluxo de elétrons (ânodo → cátodo) e a questão se desarma.",
  },

  "Mecânica (cinemática e dinâmica)": {
    ideiaCentral:
      "Cinemática descreve o movimento (posição, velocidade, aceleração); dinâmica o explica (forças, F = m·a). A conservação de energia mecânica é o atalho que resolve as questões de rampa, queda e montanha-russa sem equações de movimento.",
    aula: [
      {
        titulo: "As leis de Newton no trânsito",
        texto:
          "1ª lei (inércia): sem força resultante, o corpo mantém velocidade: é por isso que o passageiro 'voa' na freada (o corpo tende a continuar) e o cinto de segurança existe. 2ª lei: F = m·a: a mesma força acelera menos um corpo mais massivo. 3ª lei: ação e reação têm mesma intensidade, sentidos opostos e atuam em CORPOS DIFERENTES (por isso não se cancelam): o fuzil recua ao atirar, o barco vai para trás quando você salta para o cais.",
      },
      {
        titulo: "Energia: o atalho que sempre funciona",
        texto:
          "Energia cinética: Ec = mv²/2 (atenção: dobrar a velocidade QUADRUPLICA a energia e, com ela, a distância de frenagem: argumento físico das campanhas de trânsito). Energia potencial gravitacional: Ep = mgh. Sem atrito, a soma se conserva: o que desce de uma altura h chega embaixo com v = √(2gh), não importa a forma da rampa. Com atrito, a diferença de energia virou calor: trabalho da força de atrito. Potência = energia/tempo: dois motores que erguem a mesma carga diferem no TEMPO que levam.",
      },
      {
        titulo: "Gráficos e quedas: leitura antes de fórmula",
        texto:
          "No gráfico v × t: a inclinação é a aceleração e a ÁREA sob a curva é o deslocamento (um trapézio que vale pontos fáceis). No gráfico s × t, a inclinação é a velocidade. Queda livre (desprezando o ar): todos os corpos caem com a mesma aceleração g ≈ 10 m/s², independentemente da massa: a pena e o martelo só caem juntos no vácuo. Lançamento horizontal: o movimento vertical (queda) e o horizontal (uniforme) são INDEPENDENTES: o tempo de queda só depende da altura.",
      },
    ],
    exemplo: {
      enunciado:
        "Um carro de 1.000 kg a 20 m/s (72 km/h) freia até parar. Qual a energia dissipada na frenagem? Se a velocidade fosse 40 m/s, o que aconteceria com essa energia?",
      passos: [
        "Energia cinética inicial: Ec = mv²/2 = 1.000 × 20²/2 = 200.000 J.",
        "Ao parar, toda essa energia é dissipada pelo atrito dos freios (200 kJ).",
        "Com o dobro da velocidade (40 m/s): Ec = 1.000 × 40²/2 = 800.000 J: QUATRO vezes mais energia (e distância de frenagem ~4× maior).",
      ],
      resposta: "200 kJ; com o dobro da velocidade, a energia quadruplica (800 kJ).",
    },
    pontosChave: [
      "Inércia explica cinto de segurança e encosto de cabeça.",
      "Ação e reação atuam em corpos diferentes: nunca se cancelam.",
      "Ec = mv²/2: dobrar v quadruplica energia e frenagem.",
      "Conservação: mgh ↔ mv²/2; com atrito, a diferença virou calor.",
      "Gráfico v × t: inclinação = aceleração; área = deslocamento.",
    ],
    comoCaiNoEnem:
      "Trânsito (frenagem, colisões, cinto), esportes, quedas e montanhas-russas. A conservação de energia substitui contas longas na maioria dos casos.",
    estrategia:
      "Antes de buscar fórmulas de movimento, teste o caminho da energia: dá para resolver com mgh = mv²/2? Em gráficos, leia inclinação e área antes de calcular qualquer coisa.",
  },

  "Eletricidade e magnetismo": {
    ideiaCentral:
      "Corrente é fluxo de cargas empurrado por uma tensão através de uma resistência: U = R·i (lei de Ohm). Potência (P = U·i) liga a física à conta de luz: energia consumida = potência × tempo, cobrada em kWh.",
    aula: [
      {
        titulo: "Circuitos: série × paralelo",
        texto:
          "Em SÉRIE, a corrente é a mesma em todos os componentes e as resistências se somam; se um elemento queima, o circuito abre e tudo apaga (pisca-pisca antigo). Em PARALELO, a tensão é a mesma para todos e cada aparelho funciona de forma independente: é a ligação das residências (a geladeira não apaga quando a lâmpada queima). Acrescentar resistores em paralelo DIMINUI a resistência total e aumenta a corrente exigida: por isso muitos aparelhos numa mesma tomada ('benjamim') sobrecarregam o circuito.",
      },
      {
        titulo: "A conta de luz, passo a passo",
        texto:
          "Cada aparelho tem potência em watts. Energia consumida = potência (kW) × tempo (h), em kWh. Roteiro: converta W para kW (÷1.000), multiplique pelas horas de uso diário, pelos dias do mês e pela tarifa (R$/kWh). Chuveiro de 5.500 W, 0,5 h/dia, 30 dias, tarifa R$ 0,80: 5,5 × 0,5 × 30 × 0,8 = R$ 66. O chuveiro na posição inverno tem MENOR resistência: com a mesma tensão, P = U²/R, menos resistência = mais potência = mais calor (e mais conta).",
      },
      {
        titulo: "Segurança elétrica e eletromagnetismo",
        texto:
          "Disjuntores e fusíveis interrompem o circuito quando a corrente excede o limite seguro (protegem a FIAÇÃO contra superaquecimento); o fio terra desvia correntes de fuga, protegendo PESSOAS contra choque. No eletromagnetismo, dois fatos: corrente elétrica gera campo magnético (Oersted: base dos eletroímãs e motores) e variação de campo magnético gera corrente (indução de Faraday: base dos geradores de usinas, do dínamo e do carregamento sem fio). Transformar movimento em eletricidade e vice-versa é sempre indução + motor.",
      },
    ],
    exemplo: {
      enunciado:
        "Um ar-condicionado de 1.400 W funciona 8 h por dia. Com tarifa de R$ 0,75/kWh, qual o custo mensal (30 dias)?",
      passos: [
        "Potência em kW: 1.400 ÷ 1.000 = 1,4 kW.",
        "Energia diária: 1,4 × 8 = 11,2 kWh; mensal: 11,2 × 30 = 336 kWh.",
        "Custo: 336 × 0,75 = R$ 252,00.",
      ],
      resposta: "R$ 252,00 por mês.",
    },
    pontosChave: [
      "Série: mesma corrente, soma resistências; paralelo: mesma tensão, independência (residências).",
      "kWh = kW × horas; multiplique pela tarifa para chegar a reais.",
      "Chuveiro no inverno: menor resistência → maior potência (P = U²/R).",
      "Disjuntor protege a fiação; fio terra protege as pessoas.",
      "Corrente gera campo (motor); variação de campo gera corrente (gerador).",
    ],
    comoCaiNoEnem:
      "Cálculo de consumo e economia doméstica (quase garantido em toda prova), circuitos de chuveiro/lâmpadas e o princípio de motores e geradores.",
    estrategia:
      "Para consumo: monte a corrente kW × h × dias × tarifa em uma linha só, convertendo W → kW logo no início. Para circuitos, identifique primeiro: série ou paralelo?",
  },

  "Ondas, som e óptica": {
    ideiaCentral:
      "Onda transporta energia sem transportar matéria, obedecendo v = λ·f. Quando muda de meio, a FREQUÊNCIA permanece: mudam velocidade e comprimento de onda. Som precisa de meio material; luz viaja no vácuo.",
    aula: [
      {
        titulo: "As qualidades do som",
        texto:
          "Altura = frequência: som alto é AGUDO (frequência grande), som baixo é GRAVE: cuidado, na física 'alto' não é volume! Intensidade = amplitude/energia: é o volume, medido em decibéis (acima de ~85 dB, risco auditivo: contexto de saúde que a prova adora). Timbre é a 'identidade' da fonte: o que diferencia a mesma nota no violão e no piano (formato da onda). Instrumentos de corda e sopro afinam alterando comprimento, tensão ou coluna de ar: mudando a frequência do harmônico fundamental.",
      },
      {
        titulo: "Fenômenos ondulatórios no cotidiano",
        texto:
          "Reflexão: a onda volta (eco, espelho). Refração: muda de meio, muda velocidade e direção (o canudo 'quebrado' no copo, a piscina que parece rasa). Difração: a onda contorna obstáculos: por isso você ouve alguém atrás do muro (o som, com λ grande, difrata bem; a luz, com λ minúsculo, quase não). Interferência: ondas se somam ou se cancelam (fones com cancelamento ativo de ruído geram onda oposta). Ressonância: empurrar na frequência natural amplifica (taça que estilhaça, ponte que oscila).",
      },
      {
        titulo: "Óptica: espelhos, lentes e os defeitos da visão",
        texto:
          "Espelho plano: imagem virtual, simétrica, mesmo tamanho. Côncavo: amplia objetos próximos (maquiagem, dentista). Convexo: diminui mas ALARGA o campo (retrovisores, segurança de lojas). Nas lentes: míope enxerga mal de LONGE (imagem forma antes da retina) e corrige com lente DIVERGENTE; hipermétrope enxerga mal de perto e corrige com CONVERGENTE. No espectro eletromagnético, da menor para a maior frequência: rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X, gama: quanto maior a frequência, maior a energia (e o perigo).",
      },
    ],
    exemplo: {
      enunciado:
        "Uma pessoa míope precisa de óculos. Explique onde a imagem se forma no olho dela e qual lente corrige.",
      passos: [
        "Na miopia, o olho é 'longo demais' ou converge demais: a imagem de objetos DISTANTES se forma ANTES da retina.",
        "Para empurrar a imagem para trás, é preciso divergir os raios antes de entrarem no olho.",
        "Lente corretiva: DIVERGENTE (bordas grossas, vergência negativa).",
      ],
      resposta: "A imagem forma-se antes da retina; corrige-se com lente divergente.",
    },
    pontosChave: [
      "v = λ·f; ao trocar de meio, a frequência não muda.",
      "Agudo = frequência alta; volume = intensidade/amplitude (dB).",
      "Difração: contornar obstáculos (ouvir sem ver); ressonância amplifica.",
      "Miopia → lente divergente; hipermetropia → convergente.",
      "Convexo alarga o campo (retrovisor); côncavo amplia de perto.",
    ],
    comoCaiNoEnem:
      "Música e qualidades do som, poluição sonora (dB), defeitos da visão e usos do espectro eletromagnético (micro-ondas, raio X, UV): sempre em contexto cotidiano.",
    estrategia:
      "Identifique a grandeza em jogo: a questão fala de frequência (altura/agudo), amplitude (volume) ou velocidade (meio)? Em óptica, comece localizando onde a imagem se forma.",
  },

  "Termologia e termodinâmica": {
    ideiaCentral:
      "Calor é energia em trânsito do quente para o frio. Dois regimes: calor sensível muda a TEMPERATURA (Q = m·c·ΔT); calor latente muda o ESTADO físico a temperatura constante (Q = m·L). Condução, convecção e radiação são os caminhos.",
    aula: [
      {
        titulo: "Sensível × latente: o platô do gráfico",
        texto:
          "Aquecendo gelo continuamente, a temperatura sobe até 0 °C, PARA enquanto derrete (todo o calor vira mudança de fase: latente) e volta a subir na água líquida. No gráfico temperatura × calor, os trechos inclinados são calor sensível e os patamares horizontais são as mudanças de estado. O calor específico (c) mede a 'resistência' a esquentar: a água tem c altíssimo, por isso demora a aquecer e a esfriar: explica o clima ameno do litoral e o uso de água em radiadores.",
      },
      {
        titulo: "Os três transportes de calor",
        texto:
          "Condução: contato direto, de molécula em molécula: metais conduzem bem (cabo da panela é de material isolante por isso). Convecção: o fluido quente sobe e o frio desce, criando correntes: por isso o congelador fica em CIMA na geladeira e o ar-condicionado no alto da parede (o frio desce). Radiação: ondas eletromagnéticas, único transporte que atravessa o vácuo (o calor do Sol chega por radiação). A garrafa térmica ataca os três: vácuo entre paredes (bloqueia condução e convecção) e superfície espelhada (reflete radiação).",
      },
      {
        titulo: "Máquinas térmicas e a 2ª lei",
        texto:
          "Máquinas térmicas (motor a combustão, usina termelétrica) convertem calor em trabalho, mas NUNCA integralmente: parte do calor é obrigatoriamente rejeitada para a fonte fria: rendimento sempre menor que 100% (2ª lei da termodinâmica). Rendimento = trabalho útil / calor recebido. A dilatação térmica completa o tópico: trilhos, pontes e calçadas têm juntas de dilatação para acomodar a expansão no calor; a água é exceção anômala entre 0 e 4 °C (contrai ao aquecer), o que faz lagos congelarem só na superfície.",
      },
    ],
    exemplo: {
      enunciado:
        "Quanta energia é preciso para aquecer 2 kg de água de 20 °C a 70 °C? (c da água = 4.200 J/kg·°C)",
      passos: [
        "Só muda temperatura (sem mudança de estado): calor sensível, Q = m·c·ΔT.",
        "ΔT = 70 - 20 = 50 °C.",
        "Q = 2 × 4.200 × 50 = 420.000 J = 420 kJ.",
      ],
      resposta: "420 kJ.",
    },
    pontosChave: [
      "Q = m·c·ΔT (muda temperatura); Q = m·L (muda estado, temperatura constante).",
      "Patamar no gráfico de aquecimento = mudança de fase.",
      "Condução (contato), convecção (fluidos: quente sobe), radiação (atravessa vácuo).",
      "Água: calor específico alto = clima litorâneo ameno.",
      "Máquina térmica: rendimento sempre < 100% (2ª lei).",
    ],
    comoCaiNoEnem:
      "Situações domésticas (panela, garrafa térmica, geladeira), gráficos de aquecimento e eficiência de motores em contexto energético.",
    estrategia:
      "Primeiro classifique: o calor está mudando a temperatura (sensível) ou o estado (latente)? Em transporte de calor, identifique o meio: sólido (condução), fluido (convecção) ou vácuo/distância (radiação).",
  },

  "Energia e fontes energéticas": {
    ideiaCentral:
      "A matriz elétrica brasileira é dominada por hidrelétricas, complementada por termelétricas, eólica e solar em crescimento. Cada fonte tem um par de prós e contras que a prova pede para comparar: custo, impacto ambiental e confiabilidade.",
    aula: [
      {
        titulo: "O retrato brasileiro",
        texto:
          "O Brasil é atípico: a maior parte da eletricidade vem de fonte renovável (hidrelétrica), e os biocombustíveis (etanol da cana, biodiesel) têm peso raro no mundo nos transportes. O reverso: dependência do regime de chuvas. Em anos secos, reservatórios baixam, termelétricas (mais caras e poluentes) são acionadas e a conta de luz sobe: as 'bandeiras tarifárias' são o termômetro desse mecanismo, e o ENEM já cobrou exatamente essa cadeia de causa e efeito.",
      },
      {
        titulo: "O quadro comparativo das fontes",
        texto:
          "Hidrelétrica: renovável, barata na operação, mas alaga áreas (impacto social/ambiental) e depende de chuva. Eólica e solar: limpas, custo em queda, porém INTERMITENTES (dependem de vento e sol: exigem armazenamento ou complementação). Termelétricas fósseis (carvão, gás, diesel): despacháveis a qualquer hora, mas emitem CO₂ e custam caro. Nuclear: não emite CO₂ na operação e gera muito com pouco combustível, mas produz rejeitos radioativos e exige segurança máxima. Biomassa/etanol: o CO₂ emitido é parcialmente reabsorvido no crescimento da planta, fechando parte do ciclo do carbono.",
      },
      {
        titulo: "Eficiência: a fonte invisível",
        texto:
          "A energia mais barata e limpa é a que não se consome: LED no lugar da incandescente (que converte ~90% em calor), selo Procel, aquecimento solar de água. Em questões de comparação, calcule o custo-benefício em kWh: trocar uma lâmpada de 60 W por LED de 9 W, 5 h/dia, economiza ~7,6 kWh/mês por lâmpada. Esse tipo de conta, somado ao argumento ambiental, é o fecho típico das questões interdisciplinares de energia (física + geografia).",
      },
    ],
    exemplo: {
      enunciado:
        "Por que, em períodos de seca prolongada, a conta de luz do brasileiro tende a subir?",
      passos: [
        "A base da matriz elétrica é hidrelétrica: depende dos reservatórios.",
        "Com chuva escassa, os reservatórios baixam e a geração hídrica cai.",
        "Para compensar, acionam-se termelétricas, de operação mais cara (combustível) e mais poluente: o custo extra vai à tarifa (bandeiras vermelhas).",
      ],
      resposta: "Porque a queda dos reservatórios força o acionamento de termelétricas, mais caras, encarecendo a tarifa.",
    },
    pontosChave: [
      "Matriz elétrica brasileira: hidrelétrica dominante, renovável porém dependente de chuva.",
      "Eólica/solar: limpas e intermitentes; termelétrica: despachável, cara e emissora.",
      "Etanol fecha parte do ciclo do carbono (a cana reabsorve CO₂).",
      "Seca → termelétricas → tarifa mais cara (bandeiras).",
      "Eficiência energética (LED, Procel) é a 'fonte' mais barata.",
    ],
    comoCaiNoEnem:
      "Tabelas e textos comparando fontes, impactos socioambientais de usinas e contas de economia doméstica: questão interdisciplinar com geografia.",
    estrategia:
      "Para cada fonte citada, mobilize o par prós × contras (renovável? intermitente? emite CO₂? custo?). Se houver números, a resposta costuma sair de uma conta simples de kWh ou porcentagem.",
  },
};
