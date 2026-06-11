import type { ConteudoEstudo } from "./index";

export const CONTEUDOS_LINGUAGENS: Record<string, ConteudoEstudo> = {
  "Língua estrangeira (inglês/espanhol)": {
    ideiaCentral:
      "As cinco questões de língua estrangeira avaliam LEITURA, não gramática: ideia geral, propósito comunicativo e inferência. Você não precisa traduzir palavra por palavra: precisa responder o que o texto faz, para quem e com que intenção.",
    aula: [
      {
        titulo: "O método dos três passos",
        texto:
          "(1) Leia primeiro o comando da questão, que está em português: ele diz exatamente o que procurar ('o texto tem por objetivo...', 'a expressão X revela...'). (2) Leia o texto buscando o sentido global: título, fonte, primeiras e últimas linhas carregam o essencial. (3) Volte ao ponto específico que o comando pede. Ler a questão antes do texto transforma uma leitura cega em uma leitura com alvo: economiza tempo e evita as alternativas-isca.",
      },
      {
        titulo: "Vocabulário estratégico: cognatos e falsos amigos",
        texto:
          "Use os cognatos (palavras parecidas com o português: information, decision, importante) como âncoras e deduza o resto pelo contexto. Memorize os falsos cognatos campeões: em inglês, pretend = fingir, actually = na verdade, push = empurrar, parents = pais, library = biblioteca; em espanhol, embarazada = grávida, exquisito = saboroso, apellido = sobrenome, taller = oficina, salada = salgada. A prova raramente cobra o falso cognato diretamente, mas usá-lo errado derruba a interpretação da frase inteira.",
      },
      {
        titulo: "Gêneros e tom: onde mora a resposta",
        texto:
          "Os textos são autênticos: poemas, tirinhas, cartazes de campanha, notícias, letras de música. Pergunte sempre: qual o propósito (informar? criticar? vender? emocionar?) e qual o TOM (irônico? engajado? humorístico?). Em tirinhas e cartuns, a resposta costuma estar no CONTRASTE entre imagem e fala, ou na quebra de expectativa do último quadro. As alternativas erradas tipicamente distorcem um detalhe verdadeiro ou extrapolam o texto: confira a afirmação INTEIRA contra o texto antes de marcar.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um cartaz de campanha em inglês traz a frase 'Don't let hunger win. Donate today.' e a pergunta pede o objetivo do texto. Como resolver?",
      passos: [
        "Comando pede o OBJETIVO: classifique o gênero: cartaz de campanha = persuadir.",
        "Marcas linguísticas: imperativos ('Don't let...', 'Donate') dirigidos ao leitor.",
        "Sentido global: mobilizar o leitor a doar contra a fome: a alternativa correta expressará a função apelativa, não a mera descrição da fome.",
      ],
      resposta:
        "Persuadir o leitor a agir (doar), reconhecível pelos verbos no imperativo: função conativa típica de campanha.",
    },
    pontosChave: [
      "Leia o comando (em português) ANTES do texto.",
      "Cognatos são âncoras; falsos cognatos são as cascas de banana clássicas.",
      "Identifique propósito e tom: ironia muda tudo.",
      "Alternativa que extrapola ou distorce um detalhe verdadeiro: fora.",
    ],
    comoCaiNoEnem:
      "Cinco questões de interpretação com textos autênticos curtos. Quem treina ler manchetes, tiras e posts em inglês/espanhol ganha esses pontos com regularidade.",
    estrategia:
      "Comando primeiro, sentido global depois, detalhe por último. Não trave em palavra desconhecida: o contexto e os cognatos sustentam a compreensão necessária.",
  },

  "Gêneros textuais e funções da linguagem": {
    ideiaCentral:
      "Todo texto pertence a um gênero (notícia, editorial, charge, propaganda...) com propósito, público e forma próprios. As funções da linguagem nomeiam a ênfase comunicativa: saber 'quem fala, para quem e para quê' resolve a questão.",
    aula: [
      {
        titulo: "As seis funções com seus indícios",
        texto:
          "Referencial: foco na informação, 3ª pessoa, objetividade (notícia, verbete). Conativa/apelativa: foco no LEITOR, imperativos, 'você' (propaganda, campanha: 'Vacine-se!'). Emotiva: foco no emissor, 1ª pessoa, subjetividade (desabafo, lírica). Poética: foco na FORMA da mensagem (ritmo, jogo de palavras: inclusive em slogans). Fática: testar/manter o canal ('alô?', 'tá me ouvindo?'). Metalinguística: a linguagem explicando a si mesma (dicionário, poema sobre fazer poemas). Um texto combina várias; a questão pede a PREDOMINANTE.",
      },
      {
        titulo: "Gênero = propósito + suporte + interlocutor",
        texto:
          "Para identificar o gênero, pergunte: quem produziu, onde circula, para quem, com que intenção? Editorial defende a opinião do VEÍCULO (sem assinatura); artigo de opinião é assinado; notícia relata com pretensão de objetividade; crônica parte do cotidiano com olhar literário; charge critica fato ATUAL pelo humor gráfico; cartum critica situações atemporais; tirinha narra em quadros com desfecho surpresa. O ENEM adora pedir a FUNÇÃO SOCIAL do gênero: o que aquele tipo de texto faz no mundo.",
      },
      {
        titulo: "Intertextualidade: textos conversando",
        texto:
          "Paródia (retoma com inversão crítica ou humorística), paráfrase (reafirma com outras palavras), citação, alusão: a prova ama colocar dois textos lado a lado (um poema clássico e sua paródia moderna; uma obra de arte e sua releitura publicitária) e perguntar a RELAÇÃO entre eles. Verifique: o segundo texto homenageia, atualiza, critica ou subverte o primeiro? A resposta certa nomeia tanto o procedimento quanto o efeito de sentido produzido.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um anúncio de cerveja parodia 'Canção do Exílio' ('Minha terra tem palmeiras...'). O que a banca quer?",
      passos: [
        "Reconheça o texto-fonte: poema romântico de Gonçalves Dias (repertório escolar básico).",
        "Identifique o procedimento: paródia: estrutura mantida, conteúdo desviado para o produto.",
        "Efeito: usar a memória afetiva/nacional do leitor para gerar adesão à marca: função conativa sobre base poética.",
      ],
      resposta:
        "Intertextualidade por paródia: o anúncio explora a familiaridade do poema para persuadir o consumidor.",
    },
    pontosChave: [
      "Imperativo + 'você' = conativa (propaganda); foco na forma = poética.",
      "Editorial: opinião do veículo; artigo: opinião assinada; notícia: relato.",
      "Charge: crítica do fato atual; cartum: crítica atemporal; tirinha: narrativa em quadros.",
      "Intertextualidade: nomeie o procedimento (paródia/paráfrase) E o efeito.",
    ],
    comoCaiNoEnem:
      "Identificar propósito e função predominante de charges, propagandas e campanhas: presença garantida em todas as edições.",
    estrategia:
      "Responda mentalmente: quem fala? para quem? com que intenção? em que suporte? As respostas classificam gênero e função quase automaticamente.",
  },

  "Variação linguística": {
    ideiaCentral:
      "A língua varia por região, grupo social, situação e época: e NENHUMA variedade é errada. O que existe é adequação ao contexto. Para o ENEM, preconceito linguístico é preconceito social disfarçado: essa é a tese da banca.",
    aula: [
      {
        titulo: "Os tipos de variação",
        texto:
          "Diatópica (regional): 'macaxeira/mandioca/aipim', sotaques. Diastrática (grupos sociais): gírias juvenis, jargão médico, linguagem de comunidades específicas. Diafásica (situação): a MESMA pessoa fala diferente na entrevista de emprego e no churrasco: registros formal e informal. Diacrônica (tempo): 'vossa mercê' → 'você' → 'cê'. A norma-padrão é UMA variedade entre outras: a de prestígio social, exigida em contextos formais: prestígio é fato sociológico, não superioridade linguística.",
      },
      {
        titulo: "Adequação no lugar de 'certo e errado'",
        texto:
          "O conceito-chave: adequação. 'Nóis vai' comunica perfeitamente e segue regras da variedade popular (há lógica gramatical ali); é INADEQUADO num documento oficial, como o registro ultraformal seria inadequado num bate-papo. Quando a prova traz um texto com marcas de oralidade ou regionalismo (cordel, rap, Patativa do Assaré, Guimarães Rosa), a pergunta certa é: que EFEITO essa escolha produz? (autenticidade, identidade, aproximação com o leitor, caracterização de personagem).",
      },
      {
        titulo: "A regra de ouro nas alternativas",
        texto:
          "Memorize o padrão da banca: a alternativa que trata uma variedade como 'errada', 'inferior', 'degeneração da língua' ou que diz que o falante 'não sabe português' está SEMPRE incorreta. A correta reconhece a legitimidade da variedade e analisa seu papel no texto. Cuidado com o disfarce: às vezes a alternativa errada elogia a norma-padrão de um jeito que rebaixa as demais: mesmo veneno, embalagem nova. Marcos Bagno e a crítica ao preconceito linguístico são o lastro teórico dessa postura.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um poema de Patativa do Assaré escrito em variedade sertaneja ('Eu sou de uma terra que o povo padece') e a pergunta sobre o papel dessa linguagem. Como resolver?",
      passos: [
        "Identifique a variação: marcas regionais e populares do sertão nordestino.",
        "Pergunte o efeito: dar voz e autenticidade à experiência do povo retratado: a forma confirma o conteúdo.",
        "Elimine as alternativas que falem em 'desvio', 'erro' ou 'falta de escolaridade': sobra a que valoriza a variedade como identidade.",
      ],
      resposta:
        "A variedade sertaneja constrói autenticidade e identidade: o poeta fala DE dentro do mundo que retrata, legitimando-o.",
    },
    pontosChave: [
      "Variação regional, social, situacional e histórica: a língua é heterogênea por natureza.",
      "Adequação ao contexto substitui a dicotomia certo/errado.",
      "Norma-padrão: variedade de prestígio social, não superioridade linguística.",
      "Alternativa que rebaixa variedade popular está sempre errada.",
    ],
    comoCaiNoEnem:
      "Textos em variedade popular/regional (cordel, rap, literatura regionalista) perguntando o papel da escolha linguística: e a resposta nunca é 'erro'.",
    estrategia:
      "Classifique a variação (regional? social? de registro?) e pergunte que efeito de sentido ela produz no texto. Risque imediatamente alternativas com juízo de inferioridade.",
  },

  "Literatura brasileira": {
    ideiaCentral:
      "Mais que decorar escolas, o ENEM pede LER o texto literário: tema, tom e recursos: situando-o no projeto estético do seu movimento. A linha do tempo serve de mapa: do Barroco ao contemporâneo, cada movimento responde ao seu tempo.",
    aula: [
      {
        titulo: "O mapa dos movimentos (o que cada um queria)",
        texto:
          "Barroco (séc. XVII): conflito fé × razão, jogos de contraste (Gregório de Matos, o 'Boca do Inferno'). Arcadismo: simplicidade pastoral. Romantismo (séc. XIX): emoção, idealização: 3 gerações: nacionalista/indianista (Gonçalves Dias, Alencar), ultrarromântica (mal do século) e condoreira/social (Castro Alves, abolicionista). Realismo/Naturalismo: bisturi social: Machado de Assis ironiza as elites; Aluísio Azevedo expõe o cortiço como organismo. Pré-Modernismo: Euclides (Os Sertões), Lima Barreto (crítica racial e urbana). Modernismo: a ruptura de 1922.",
      },
      {
        titulo: "Modernismo: o queridinho da prova",
        texto:
          "A Semana de 22 declarou guerra ao academicismo: verso livre, língua falada brasileira, cotidiano como matéria poética. Oswald de Andrade propôs a ANTROPOFAGIA: devorar as influências estrangeiras e digeri-las em arte nacional (o 'Abaporu' de Tarsila é o ícone). 2ª geração (30): o romance social nordestino (Graciliano, Vidas Secas; Jorge Amado, Rachel de Queiroz) e a poesia madura de Drummond ('No meio do caminho'). 3ª geração (45): Clarice Lispector (mergulho psicológico), Guimarães Rosa (reinvenção da língua no sertão), João Cabral (rigor construtivo, Morte e Vida Severina).",
      },
      {
        titulo: "Como a prova cobra: comparação e vozes",
        texto:
          "O formato favorito: DOIS textos lado a lado (um poema romântico e um moderno sobre o mesmo tema) pedindo o contraste de tratamento: idealização × ironia, forma fixa × verso livre. Machado de Assis merece atenção especial: narrador irônico e não confiável (Dom Casmurro: Capitu traiu? o texto não fecha a questão: e a prova explora essa ambiguidade). Vozes antes silenciadas têm presença crescente: Carolina Maria de Jesus (Quarto de Despejo), Conceição Evaristo ('escrevivência'): literatura como testemunho e disputa de memória.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: a prova traz 'Canção do Exílio' (Gonçalves Dias) e um poema modernista que a parodia com ironia urbana. O que se espera?",
      passos: [
        "Situe o primeiro: Romantismo nacionalista: pátria idealizada ('Minha terra tem palmeiras...').",
        "Situe o segundo: Modernismo: ironia, cotidiano, quebra da idealização.",
        "Responda no CONTRASTE: a paródia critica a visão idealizada, atualizando o tema com humor e linguagem coloquial.",
      ],
      resposta:
        "O segundo texto dessacraliza a idealização romântica por meio da paródia: gesto tipicamente modernista.",
    },
    pontosChave: [
      "Romantismo idealiza; Realismo/Machado ironiza e disseca.",
      "Semana de 22: verso livre, língua brasileira, antropofagia.",
      "Geração de 30: romance social (Graciliano); 45: Clarice e Rosa.",
      "Machado: narrador não confiável: desconfie do que ele afirma.",
      "Carolina Maria de Jesus e Conceição Evaristo: literatura-testemunho.",
    ],
    comoCaiNoEnem:
      "Fragmentos para interpretar, frequentemente em pares comparativos. Conhecer o PROJETO de cada movimento permite situar textos mesmo sem conhecer o autor.",
    estrategia:
      "Leia o fragmento perguntando: qual o tema, qual o TOM (idealizador? irônico? engajado?) e que recursos saltam (verso livre? metáfora ousada? coloquialidade?). O tom costuma entregar o movimento.",
  },

  "Gramática e semântica no texto": {
    ideiaCentral:
      "No ENEM, gramática nunca é classificatória: é funcional. A pergunta é sempre 'que EFEITO esse recurso produz no texto?': o valor de um conectivo, o peso de uma vírgula, a ambiguidade de um pronome, a escolha de um tempo verbal.",
    aula: [
      {
        titulo: "Conectivos: as dobradiças do sentido",
        texto:
          "MAS/porém/contudo (oposição), PORQUE/visto que (causa), PORTANTO/logo (conclusão), EMBORA/apesar de (concessão: admite o obstáculo e o supera), SE/caso (condição), OU SEJA (reformulação). Teste do ENEM: substituir o conectivo e ver se o sentido muda: 'estudou, MAS passou' (passou contra a expectativa) ≠ 'estudou, LOGO passou' (consequência natural). A concessão é a mais cobrada por ser a mais sutil: 'EMBORA chovesse, saiu' reconhece a chuva como obstáculo vencido.",
      },
      {
        titulo: "Pontuação e referenciação: efeitos finos",
        texto:
          "Aspas sinalizam ironia, citação ou distanciamento ('o \"herói\" fugiu primeiro': as aspas dizem o contrário). Travessão e parênteses inserem comentário; reticências, suspensão e subentendido; a vírgula muda sentido ('Não, quero' ≠ 'Não quero'). Referenciação: pronomes e sinônimos retomam termos: a prova pergunta 'a que se refere ESSE/o qual/ele?': releia a frase anterior e teste cada candidato na posição. Ambiguidade ('o cachorro do vizinho': animal ou ofensa?) é fonte clássica de questão e de humor.",
      },
      {
        titulo: "Sentido figurado: as figuras que importam",
        texto:
          "Metáfora (comparação implícita: 'a vida é um palco'), metonímia (parte/todo, autor/obra: 'ler Machado', 'beber um copo'), hipérbole (exagero: 'mil vezes te falei'), eufemismo (suavização: 'partiu desta para melhor'), ironia (dizer o contrário: depende do CONTEXTO para ser percebida), personificação ('o vento sussurrava'), antítese e paradoxo ('amor é ferida que dói e não se sente'). A questão padrão apresenta o trecho e pede a figura ou seu efeito: nomear certo + explicar o sentido = resposta completa.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: na frase de uma crônica: 'Embora a cidade oferecesse mil diversões, ele preferia a varanda.', qual o valor do conectivo e o efeito da escolha?",
      passos: [
        "Identifique o conectivo: EMBORA introduz concessão.",
        "Teste o sentido: as diversões existiam (fato admitido), mas NÃO impediram a preferência pela varanda.",
        "Efeito: valoriza a escolha do personagem, que resiste ao apelo da cidade: contraste entre expectativa e atitude.",
      ],
      resposta:
        "Concessão: o conectivo admite o atrativo da cidade para destacar que, ainda assim, a varanda vence.",
    },
    pontosChave: [
      "Conectivo: troque-o mentalmente e veja o que muda: lá está o efeito.",
      "Concessão (embora/apesar de): obstáculo admitido e superado: a mais cobrada.",
      "Aspas = ironia/citação; vírgula muda sentido; reticências sugerem.",
      "Pronome: localize o referente na frase anterior e teste.",
      "Metáfora, metonímia, hipérbole, eufemismo, ironia: nomeie E explique.",
    ],
    comoCaiNoEnem:
      "Tirinhas e textos curtos perguntando o efeito de um recurso específico. A resposta nasce de reler a frase COM e SEM o recurso.",
    estrategia:
      "Releia o trecho substituindo ou removendo o recurso apontado: a diferença de sentido que você perceber É a resposta. Não classifique por classificar: conecte forma e efeito.",
  },

  "Artes e cultura visual": {
    ideiaCentral:
      "Ler uma obra de arte como se lê um texto: a FORMA (cor, traço, composição, técnica) comunica tanto quanto o tema. A prova conecta movimentos artísticos a seus contextos e pede o diálogo entre obra e sociedade.",
    aula: [
      {
        titulo: "Vanguardas europeias: o século XX rompe a moldura",
        texto:
          "No início do século XX, a fotografia liberou a pintura de 'copiar o real': cada vanguarda radicalizou um caminho. Cubismo (Picasso): geometrização e múltiplos pontos de vista simultâneos. Expressionismo: deformação para expressar emoção ('O Grito' de Munch). Surrealismo (Dalí, Magritte): lógica do sonho e do inconsciente. Dadaísmo (Duchamp e o urinol 'A Fonte'): provocação que pergunta 'o que é arte?'. Futurismo: velocidade e máquina. Abstracionismo: cor e forma sem figura. Reconhecer a vanguarda pelas CARACTERÍSTICAS VISUAIS é a habilidade pedida.",
      },
      {
        titulo: "Arte brasileira: identidade em construção",
        texto:
          "Barroco mineiro: Aleijadinho e o drama religioso esculpido em pedra-sabão. Modernismo de 22: Tarsila do Amaral ('Abaporu', cores tropicais, formas oníricas: a Antropofagia visual), Anita Malfatti (o estopim da polêmica), Di Cavalcanti. Portinari pintou o Brasil social: 'Retirantes' e 'Café': denúncia da seca e do trabalho: repertório perfeito para temas de migração e desigualdade. Arte contemporânea: instalação, performance, grafite (Os Gêmeos): a pergunta 'isso é arte?' faz parte da própria obra, e o ENEM cobra essa reflexão sem conservadorismo.",
      },
      {
        titulo: "Como analisar qualquer imagem na prova",
        texto:
          "Roteiro de leitura visual: (1) descreva o que se vê (figuras, cores, composição, técnica); (2) identifique o tratamento (realista? deformado? geométrico? onírico?); (3) conecte ao contexto/movimento; (4) interprete a intenção (denúncia? celebração? provocação?). As alternativas erradas descrevem a imagem com conceitos do movimento ERRADO ('o quadro expressionista retrata fielmente...': contradição) ou moralizam a obra. Música, dança e teatro entram na mesma lógica: tropicália, samba e capoeira como linguagens carregadas de história.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: a prova reproduz 'Retirantes' de Portinari (figuras esquálidas, tons terrosos, corpos alongados) e pergunta a relação entre forma e tema. Como responder?",
      passos: [
        "Descreva: figuras famélicas e deformadas, paleta de terra seca, composição que pesa sobre as figuras.",
        "Conecte forma → tema: a deformação NÃO é falha técnica: intensifica o sofrimento da migração forçada pela seca.",
        "Interprete: arte como denúncia social do drama dos retirantes nordestinos.",
      ],
      resposta:
        "A deformação expressiva e os tons terrosos materializam a miséria: a forma carrega a denúncia social do tema.",
    },
    pontosChave: [
      "Cubismo geometriza; expressionismo deforma; surrealismo sonha; dadá provoca.",
      "Antropofagia: devorar influências e criar identidade (Tarsila/Oswald).",
      "Portinari: denúncia social: par perfeito com migração e trabalho.",
      "Roteiro: descrever → tratamento → contexto → intenção.",
      "Arte contemporânea questiona os limites da própria arte: sem moralismo.",
    ],
    comoCaiNoEnem:
      "Reprodução de obra + pergunta sobre características do movimento ou relação com o contexto social. Descrever mentalmente antes de ler as alternativas evita ciladas.",
    estrategia:
      "Antes das alternativas, gaste 20 segundos descrevendo a imagem para si mesmo (formas, cores, tratamento). A alternativa correta respeitará o que você VIU; as erradas atribuem características que não estão lá.",
  },

  "Tecnologia, mídia e comunicação": {
    ideiaCentral:
      "Os gêneros digitais (post, meme, podcast, thread) reconfiguram quem fala, como e para quantos. O ENEM cobra leitura crítica desse ecossistema: multimodalidade, viralização, bolhas e desinformação.",
    aula: [
      {
        titulo: "Multimodalidade: sentido em camadas",
        texto:
          "No digital, o sentido nasce da SOMA das linguagens: imagem + legenda + áudio + hashtag. O meme é o gênero-síntese: comprime crítica, humor e intertextualidade num formato replicável: para entendê-lo, é preciso reconhecer a referência que ele retoma (um quadro famoso, uma cena, outro meme). A prova apresenta posts e memes pedindo exatamente essa leitura em camadas: o que o texto verbal diz, o que a imagem acrescenta e que efeito a combinação produz (ironia, denúncia, adesão).",
      },
      {
        titulo: "Algoritmos, bolhas e atenção",
        texto:
          "Plataformas vivem de atenção: algoritmos aprendem o que prende VOCÊ e entregam mais do mesmo. O efeito colateral: bolhas e câmaras de eco: cada um vê uma fatia da realidade que confirma o que já pensava, e o debate público se fragmenta. Conteúdo extremo e indignado engaja mais, logo circula mais: a arquitetura da plataforma molda o comportamento (e conceitos como cultura do cancelamento, exposição de si e cyberbullying entram nessa engrenagem). Questões sobre redes pedem essa visão estrutural, não moralização ('jovens viciados').",
      },
      {
        titulo: "Desinformação: anatomia e defesa",
        texto:
          "A fake news eficaz imita o jornalismo (layout, tom), apela à emoção (medo, indignação), cita autoridades vagas ('cientistas afirmam') e pede compartilhamento urgente. A defesa é procedimento de leitura: checar a fonte (quem publicou? existe?), a data (requentar notícia velha é tática comum), outras coberturas e a imagem (busca reversa: fotos fora de contexto são metade dos casos). O ENEM cobra tanto identificar essas marcas no texto quanto reconhecer o papel das agências de checagem e do letramento midiático.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um post viral mistura foto chocante de outra década com legenda alarmista sobre um fato atual e pede compartilhamento imediato. Quais marcas de desinformação o texto apresenta?",
      passos: [
        "Imagem fora de contexto: foto verdadeira, evento errado (verificável por busca reversa).",
        "Apelo emocional + urgência ('compartilhe antes que apaguem'): engajamento acima da verificação.",
        "Ausência de fonte identificável: nenhum veículo, autor ou data confiáveis.",
      ],
      resposta:
        "Descontextualização de imagem, apelo emocional com urgência e ausência de fonte: o tripé clássico da desinformação.",
    },
    pontosChave: [
      "Sentido multimodal: texto + imagem + som juntos (meme é o gênero-síntese).",
      "Algoritmo otimiza atenção → bolhas e câmaras de eco.",
      "Fake news: emoção + urgência + fonte vaga + imagem fora de contexto.",
      "Checagem: fonte, data, outras coberturas, busca reversa de imagem.",
    ],
    comoCaiNoEnem:
      "Posts, memes e campanhas como corpus, perguntando efeitos de sentido e impactos sociais das redes: tema em crescimento constante na prova.",
    estrategia:
      "Leia o gênero digital em camadas (verbal + visual + contexto de circulação) e pergunte: quem lucra com a circulação disso? Alternativas estruturais vencem alternativas moralizantes.",
  },

  "Esporte e cultura corporal": {
    ideiaCentral:
      "A Educação Física do ENEM trata corpo e movimento como CULTURA: esporte, jogo, dança, luta e ginástica expressam valores, identidades e disputas sociais: nunca apenas rendimento físico.",
    aula: [
      {
        titulo: "O mesmo futebol, três lógicas",
        texto:
          "Esporte de RENDIMENTO: regras oficiais, competição, profissionalização: e seus problemas (especialização precoce, doping, mercantilização). Esporte de LAZER: adaptado, recreativo, pelo prazer do jogo (a pelada de fim de semana). Esporte EDUCACIONAL: na escola, com objetivos formativos (cooperação, inclusão): onde a exclusão dos 'menos habilidosos' é justamente o que se deve combater. A prova descreve uma situação e pergunta qual lógica está em jogo: ou critica a transposição da lógica do rendimento para a escola.",
      },
      {
        titulo: "Jogo, luta e dança como linguagem",
        texto:
          "O jogo carrega culturas (amarelinha, peteca: brincadeiras indígenas e africanas) e o ENEM valoriza o resgate dessas práticas como patrimônio. A capoeira é o caso-síntese: luta disfarçada de dança, criada por escravizados, criminalizada na República Velha e hoje patrimônio imaterial: resistência cultural em movimento. Danças (do frevo ao funk) expressam identidades e sofrem os mesmos ciclos de estigma e consagração. Lutas tradicionais (huka-huka, jiu-jitsu) entram como expressão de culturas e códigos de respeito.",
      },
      {
        titulo: "Corpo: padrões, saúde e desigualdades",
        texto:
          "O culto ao corpo 'perfeito' (impulsionado pelas redes) produz distúrbios de imagem, dietas extremas e consumo de anabolizantes: a prova contrapõe saúde REAL (atividade física regular, em qualquer corpo) à estética imposta. Sedentarismo é questão de saúde pública: e de desigualdade urbana (quem tem parque, tempo e segurança para se exercitar?). Mulheres no esporte: invisibilidade histórica, diferenças de prêmios e cobertura: o futebol feminino, proibido por décadas no Brasil (1941-1979), é o exemplo documentado que a prova já usou.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: um texto relata que, nas aulas de Educação Física, só os 'melhores' jogam enquanto os demais assistem. Qual a crítica esperada?",
      passos: [
        "Identifique a lógica em ação: rendimento/seleção dos mais aptos.",
        "Identifique o contexto: escola: cujo objetivo é formativo e inclusivo.",
        "A crítica: transpor a lógica do rendimento para o esporte educacional exclui justamente quem mais precisa da prática.",
      ],
      resposta:
        "A situação revela a lógica do rendimento invadindo a escola: o esporte educacional deve incluir todos, não selecionar talentos.",
    },
    pontosChave: [
      "Rendimento × lazer × educacional: a mesma prática, lógicas diferentes.",
      "Capoeira: resistência cultural, da criminalização ao patrimônio.",
      "Padrão estético ≠ saúde: crítica ao culto ao corpo das redes.",
      "Futebol feminino proibido por décadas: gênero no esporte é pauta da prova.",
    ],
    comoCaiNoEnem:
      "Textos sobre práticas corporais relacionando-as a identidade, saúde e sociedade: a leitura é sociocultural, nunca técnica.",
    estrategia:
      "Classifique a lógica da prática descrita (rendimento, lazer ou educacional) e procure a tensão social do texto (exclusão, estigma, padrão de corpo, gênero). A alternativa crítica e inclusiva costuma ser a certa.",
  },

  "Interpretação de texto": {
    ideiaCentral:
      "A habilidade que sustenta a prova INTEIRA: identificar tese e argumentos, distinguir fato de opinião, captar ironia e pressupostos, comparar textos. A regra de ouro: a resposta certa se apoia no TEXTO, não no seu conhecimento prévio.",
    aula: [
      {
        titulo: "Encontre a espinha dorsal do texto",
        texto:
          "Todo texto argumentativo tem uma TESE (a ideia que o autor defende: procure no primeiro e no último parágrafo) sustentada por argumentos (dados, exemplos, autoridades, causas). Faça o mapa mental: 'o autor defende X, porque A e B'. Distinga fato (verificável: 'o desmatamento cresceu 20%') de opinião (julgamento: 'o cenário é alarmante'): modalizadores ('infelizmente', 'é preciso', 'talvez') entregam a subjetividade. Pressuposto é o que a frase assume sem dizer ('Pedro PAROU de fumar' pressupõe que fumava).",
      },
      {
        titulo: "O ranking das pegadinhas",
        texto:
          "1ª: EXTRAPOLAÇÃO: a alternativa vai além do texto (o texto fala de uma escola; a alternativa generaliza para 'a educação brasileira'). 2ª: palavras absolutas: 'sempre', 'nunca', 'todos', 'apenas': textos raramente autorizam tanto. 3ª: distorção sutil: troca a causa pela consequência ou inverte quem faz o quê. 4ª: o VERDADEIRO-MAS-IRRELEVANTE: afirmação correta no mundo real que NÃO responde ao comando. Contra todas, o mesmo antídoto: voltar ao texto e localizar a frase que sustenta (ou derruba) a alternativa.",
      },
      {
        titulo: "Método para o dia da prova",
        texto:
          "(1) Leia o COMANDO antes do texto longo: saiba o que procurar. (2) Primeira leitura: sentido global (de que trata? qual a posição do autor?). (3) Releia o trecho que o comando aponta. (4) Elimine alternativas: extrapolações e absolutas caem primeiro; entre as duas finais, vence a mais ANCORADA no texto (que você consegue apontar com o dedo onde está escrita). Ironia inverte tudo: se o tom geral é crítico e a frase parece elogio, desconfie: o contexto manda.",
      },
    ],
    exemplo: {
      enunciado:
        "Questão típica: após um artigo que critica o excesso de telas na infância citando UM estudo com 200 crianças, uma alternativa diz: 'o texto prova que a tecnologia prejudica todas as crianças brasileiras'. Por que está errada?",
      passos: [
        "Localize o alcance real do texto: um estudo, amostra específica, crítica ao EXCESSO.",
        "Compare com a alternativa: 'prova', 'todas as crianças brasileiras': generalização e palavra absoluta.",
        "Classifique a pegadinha: extrapolação + absolutização: o texto não autoriza nem uma nem outra.",
      ],
      resposta:
        "A alternativa extrapola (generaliza um estudo pontual) e usa termos absolutos que o texto não sustenta.",
    },
    pontosChave: [
      "Tese no início ou no fim; argumentos no meio: faça o mapa 'X porque A e B'.",
      "Fato é verificável; opinião carrega julgamento (modalizadores entregam).",
      "Extrapolação e palavras absolutas: as duas maiores armadilhas.",
      "A resposta certa pode ser apontada com o dedo no texto.",
    ],
    comoCaiNoEnem:
      "É a habilidade número 1: presente nas 45 questões de Linguagens e nas demais áreas. Cada ponto de método aqui vale pontos na prova inteira.",
    estrategia:
      "Comando antes do texto; sentido global antes do detalhe. Na dúvida entre duas alternativas, escolha a que você consegue LOCALIZAR no texto: a outra provavelmente extrapola.",
  },
};
