import type { ConteudoEstudo } from "./index";

export const CONTEUDOS_MATEMATICA: Record<string, ConteudoEstudo> = {
  "Porcentagem e matemática financeira": {
    ideiaCentral:
      "Porcentagem é uma fração de denominador 100. Todo problema de porcentagem se resolve respondendo: qual é o TODO (a base de cálculo) e qual é a PARTE? Quando a base muda no meio do problema, a conta muda junto.",
    aula: [
      {
        titulo: "O fator multiplicador resolve quase tudo",
        texto:
          "Em vez de calcular a porcentagem e somar ou subtrair, transforme a variação em um fator: aumentar 20% é multiplicar por 1,20 (100% + 20%); ter desconto de 20% é multiplicar por 0,80 (100% - 20%). A grande vantagem aparece nas variações sucessivas: um aumento de 10% seguido de outro de 10% é ×1,1×1,1 = ×1,21, ou seja, 21% no total, e não 20%. Da mesma forma, subir 20% e cair 20% dá ×1,2×0,8 = ×0,96: o valor termina 4% MENOR que o original. Essa é a pegadinha mais cobrada do assunto.",
      },
      {
        titulo: "Identificando a base de cálculo",
        texto:
          "A frase 'o preço aumentou 30% sobre o custo' e a frase 'o lucro é 30% do preço de venda' descrevem situações diferentes, porque a base (o '100%') é outra em cada uma. Antes de calcular, sublinhe DE QUEM a porcentagem está sendo tirada. Se uma mercadoria custa R$ 80 e é vendida com lucro de 25% sobre o custo, o preço é 80 × 1,25 = R$ 100. Se o lucro fosse 25% sobre a VENDA, o custo seria 75% do preço, e o preço seria 80 ÷ 0,75 ≈ R$ 106,67. Mesmos números, respostas diferentes.",
      },
      {
        titulo: "Juros simples × juros compostos",
        texto:
          "Nos juros simples, o rendimento incide sempre sobre o valor inicial: J = C·i·t; a dívida cresce em linha reta. Nos compostos, os juros entram na base do período seguinte ('juros sobre juros'): M = C·(1+i)^t; a dívida cresce em curva exponencial. O ENEM costuma pedir a comparação conceitual (qual cresce mais rápido, qual gráfico representa cada um) ou o cálculo de 1 ou 2 períodos compostos, que você resolve aplicando o fator multiplicador duas vezes.",
      },
    ],
    exemplo: {
      enunciado:
        "Uma loja remarcou um tênis de R$ 250 com aumento de 20% e, na liquidação seguinte, anunciou 20% de desconto sobre o novo preço. Qual o preço final?",
      passos: [
        "Aumento de 20%: fator 1,20 → 250 × 1,20 = R$ 300.",
        "Desconto de 20% sobre o NOVO preço: fator 0,80 → 300 × 0,80 = R$ 240.",
        "Compare com o original: 240 < 250. As variações não se cancelam porque as bases são diferentes (o desconto incidiu sobre 300, não sobre 250).",
      ],
      resposta: "R$ 240,00 (4% mais barato que o preço original).",
    },
    pontosChave: [
      "Aumento de a% seguido de desconto de a% nunca volta ao valor original.",
      "Variações sucessivas se multiplicam: ×(1+i)×(1+j), nunca se somam.",
      "Variação percentual = (final - inicial)/inicial × 100.",
      "Juros simples crescem em linha reta; compostos, em curva exponencial.",
    ],
    comoCaiNoEnem:
      "Contextos de consumo: promoções, parcelamentos, impostos, reajustes salariais. A armadilha clássica é a mudança da base de cálculo no meio do problema.",
    estrategia:
      "Identifique o TODO (100%) de cada etapa antes de calcular e converta cada variação em fator multiplicador (+20% = ×1,2; -20% = ×0,8). Se houver variações sucessivas, multiplique os fatores.",
  },

  "Razão, proporção e escalas": {
    ideiaCentral:
      "Razão compara grandezas por divisão; proporção é a igualdade de duas razões. O método universal: organize as grandezas em colunas, decida se cada uma é direta ou inversamente proporcional à pergunta, e só então multiplique em cruz.",
    aula: [
      {
        titulo: "Direta ou inversa? O teste mental",
        texto:
          "Antes de armar a regra de três, faça o teste do 'mais': se uma grandeza AUMENTA, a outra aumenta junto? Então são diretamente proporcionais (mais pães exigem mais farinha). Se uma aumenta e a outra DIMINUI, são inversamente proporcionais (mais pedreiros, menos dias de obra). Na regra de três, grandeza inversa exige INVERTER a coluna antes de multiplicar em cruz. Pular esse teste é a causa nº 1 de erro no assunto.",
      },
      {
        titulo: "Escala: o mapa no bolso",
        texto:
          "Escala é a razão entre a medida no desenho e a medida real, NAS MESMAS UNIDADES. Escala 1:50.000 significa que 1 cm no mapa vale 50.000 cm reais (500 m). Para resolver: escreva escala = desenho/real, substitua o que você tem e isole o que falta. Cuidado dobrado com conversão: o resultado costuma sair em centímetros e a alternativa estar em quilômetros. Em maquetes e plantas vale a mesma lógica; para ÁREAS, a razão fica elevada ao quadrado (escala 1:100 → áreas 1:10.000).",
      },
      {
        titulo: "Regra de três composta sem decorar nada",
        texto:
          "Com três ou mais grandezas, compare cada coluna ISOLADAMENTE com a coluna da pergunta, ignorando as demais: 'se eu aumentar as horas por dia, preciso de mais ou menos dias?' Marque D (direta) ou I (inversa) em cada coluna, inverta as colunas marcadas com I, e monte uma única multiplicação de frações. Esse procedimento mecânico evita a confusão de tentar raciocinar tudo de uma vez.",
      },
    ],
    exemplo: {
      enunciado:
        "Em um mapa de escala 1:250.000, a distância entre duas cidades é de 6 cm. Qual a distância real, em km?",
      passos: [
        "Escala 1:250.000 → 1 cm no mapa = 250.000 cm reais.",
        "6 cm no mapa = 6 × 250.000 = 1.500.000 cm reais.",
        "Converta: 1.500.000 cm = 15.000 m = 15 km.",
      ],
      resposta: "15 km.",
    },
    pontosChave: [
      "Teste 'se aumenta, a outra aumenta?' para classificar direta × inversa.",
      "Grandeza inversa: inverta a coluna antes de multiplicar em cruz.",
      "Escala = desenho/real, sempre na mesma unidade; áreas escalam ao quadrado.",
      "Velocidade, densidade, vazão e consumo por km são razões disfarçadas.",
    ],
    comoCaiNoEnem:
      "Mapas e plantas (escala), receitas, rendimento de equipes e consumo de combustível. Quase sempre há uma conversão de unidade escondida entre a conta e a alternativa.",
    estrategia:
      "Monte colunas com as grandezas e teste cada uma contra a pergunta: 'aumentando esta, a resposta aumenta ou diminui?' Inverta as inversas e só depois multiplique em cruz. Confira a unidade pedida.",
  },

  Probabilidade: {
    ideiaCentral:
      "Probabilidade = casos favoráveis ÷ casos possíveis. Todo o trabalho está em CONTAR direito esses casos: definir claramente o espaço amostral e o evento, antes de qualquer divisão.",
    aula: [
      {
        titulo: "Organize o espaço amostral primeiro",
        texto:
          "A maioria dos erros nasce de contar errado o total de possibilidades. Para experimentos compostos (dois dados, duas retiradas), uma tabela de dupla entrada ou uma árvore de possibilidades torna a contagem visual: dois dados têm 6×6 = 36 resultados, e 'soma 7' tem 6 casos favoráveis → 6/36 = 1/6. Quando a questão dá uma TABELA de dados (pesquisas, pacientes), o espaço amostral é a linha ou coluna que a condição da pergunta delimita, não o total geral.",
      },
      {
        titulo: "'E' multiplica, 'OU' soma, complementar salva",
        texto:
          "Eventos sucessivos e independentes ('tirar cara E depois 6') multiplicam probabilidades. Eventos mutuamente excludentes ('sair 2 OU sair 5') somam. E quando a pergunta tem 'pelo menos um', vá direto pelo complementar: P(pelo menos um) = 1 - P(nenhum), que costuma ser uma conta muito menor. Exemplo: a chance de pelo menos uma cara em 3 lançamentos é 1 - (1/2)³ = 7/8.",
      },
      {
        titulo: "Sem reposição e probabilidade condicional",
        texto:
          "Se algo é retirado e NÃO volta, o total diminui na etapa seguinte: a chance de duas bolas vermelhas seguidas em uma urna com 3 vermelhas e 2 azuis é (3/5)×(2/4). A probabilidade condicional P(A dado B) aparece como 'sabendo que a pessoa é mulher, qual a chance de...': o espaço amostral se restringe ao grupo da condição (o denominador passa a ser só as mulheres). Em tabelas, é simplesmente trocar o denominador da fração.",
      },
    ],
    exemplo: {
      enunciado:
        "Uma urna tem 4 bolas verdes e 6 amarelas. Retirando duas bolas sem reposição, qual a probabilidade de ambas serem verdes?",
      passos: [
        "Primeira retirada: P(verde) = 4/10.",
        "Sem reposição, restam 3 verdes em 9 bolas: P(segunda verde) = 3/9.",
        "Eventos sucessivos ('e'): multiplique → (4/10) × (3/9) = 12/90 = 2/15.",
      ],
      resposta: "2/15 (aproximadamente 13,3%).",
    },
    pontosChave: [
      "P(não acontecer) = 1 - P(acontecer): use para 'pelo menos um'.",
      "'E' (sucessivos independentes) multiplica; 'OU' (excludentes) soma.",
      "Sem reposição: numerador E denominador mudam na etapa seguinte.",
      "Em tabelas, a condição da pergunta define o denominador.",
    ],
    comoCaiNoEnem:
      "Sorteios, jogos e tabelas de pesquisa/saúde. A leitura da tabela (que linha? que coluna?) costuma valer mais que a teoria.",
    estrategia:
      "Escreva explicitamente: total de casos possíveis e casos favoráveis. Se houver duas etapas, decida antes: tem reposição? é 'e' (multiplica) ou 'ou' (soma)? Se aparecer 'pelo menos', use o complementar.",
  },

  "Estatística (média, mediana e gráficos)": {
    ideiaCentral:
      "Média, mediana e moda resumem um conjunto de dados de formas diferentes: a média equilibra os valores, a mediana marca o centro dos dados ordenados e a moda aponta o mais frequente. Valores extremos distorcem a média, mas quase não afetam a mediana.",
    aula: [
      {
        titulo: "As três medidas e quando cada uma engana",
        texto:
          "Num conjunto como os salários {1.000, 1.200, 1.300, 1.500, 20.000}, a média (5.000) dá uma falsa impressão de riqueza: o valor extremo a puxa para cima. A mediana (1.300) descreve melhor o 'funcionário típico'. O ENEM explora exatamente isso: pede a medida mais adequada para representar um conjunto, ou compara as três no mesmo conjunto. Regra prática: dados com discrepantes (outliers) → mediana representa melhor; dados homogêneos → média funciona bem; 'o mais vendido/comum' → moda.",
      },
      {
        titulo: "Mediana exige ordenar, média ponderada exige pesos",
        texto:
          "Para a mediana, ORDENE os dados sempre: com quantidade ímpar, é o termo central; com quantidade par, é a média dos dois centrais. Para dados em tabela de frequência, a média é ponderada: multiplique cada valor pela sua frequência, some tudo e divida pelo total de observações, não pelo número de valores distintos. Exemplo: notas 5, 8 e 10 com pesos 2, 3 e 5 → (5×2 + 8×3 + 10×5)/(2+3+5) = 84/10 = 8,4.",
      },
      {
        titulo: "Dispersão: quem é mais regular?",
        texto:
          "Dois atletas podem ter a MESMA média e desempenhos completamente diferentes. O desvio padrão mede o quanto os dados se espalham em torno da média: desvio menor = conjunto mais regular, mais previsível. O ENEM raramente pede o cálculo completo; pede a INTERPRETAÇÃO: 'qual candidato é mais regular?' → o de menor desvio. Se duas opções têm médias iguais, o desempate é sempre pela dispersão.",
      },
    ],
    exemplo: {
      enunciado:
        "As notas de um aluno foram 4, 7, 7, 8 e 10. Compare média, mediana e moda.",
      passos: [
        "Média: (4+7+7+8+10)/5 = 36/5 = 7,2.",
        "Mediana: dados já ordenados, o termo central (3º de 5) é 7.",
        "Moda: o valor mais frequente é 7 (aparece duas vezes).",
        "Comparação: moda = mediana = 7 < média = 7,2 (o 10 puxa a média para cima).",
      ],
      resposta: "Média 7,2; mediana 7; moda 7.",
    },
    pontosChave: [
      "Ordene antes de buscar a mediana; quantidade par → média dos dois centrais.",
      "Média ponderada: soma de (valor × peso) dividida pela soma dos pesos.",
      "Outliers puxam a média; a mediana resiste a eles.",
      "Menor desvio padrão = maior regularidade (critério de desempate clássico).",
    ],
    comoCaiNoEnem:
      "Leitura de gráficos e tabelas com cálculo de média/mediana e escolha da medida mais representativa. Um dos três assuntos mais frequentes de toda a prova de matemática.",
    estrategia:
      "Extraia os dados do gráfico/tabela para uma lista, ORDENE, e calcule o que for pedido. Se a questão comparar média e mediana, procure o valor extremo: ele explica a diferença.",
  },

  "Análise combinatória": {
    ideiaCentral:
      "Contar possibilidades sem listar todas: o princípio multiplicativo resolve a maioria das questões (multiplicar as opções de cada etapa). A única decisão conceitual é: a ORDEM dos elementos gera caso novo ou não?",
    aula: [
      {
        titulo: "O princípio multiplicativo é o seu martelo",
        texto:
          "Para contar senhas, placas, cardápios e trajetos, desenhe um tracinho para cada decisão e escreva quantas opções existem em cada um, respeitando restrições. Uma senha de 4 dígitos distintos: 10×9×8×7. Um cardápio com 3 entradas, 4 pratos e 2 sobremesas: 3×4×2 = 24 refeições. Restrições vêm PRIMEIRO: se a senha não pode começar com 0, o primeiro tracinho tem 9 opções, e só depois você preenche os demais.",
      },
      {
        titulo: "Ordem importa? Arranjo × combinação",
        texto:
          "Pergunte: 'se eu trocar dois elementos de lugar, o resultado é outro?' Pódio (ouro/prata/bronze) → sim, ordem importa → arranjo: A(n,p) = n!/(n-p)!. Comissão de 3 pessoas → não, {Ana, Bia, Caio} é a mesma comissão em qualquer ordem → combinação: C(n,p) = n!/[p!(n-p)!], que é o arranjo dividido pelas p! ordenações repetidas. Errar essa decisão multiplica ou divide sua resposta por p!, e a alternativa errada correspondente SEMPRE está lá esperando.",
      },
      {
        titulo: "Permutação e seus casos especiais",
        texto:
          "Permutar é ordenar todos os elementos: n!. Com elementos repetidos, divida pelos fatoriais das repetições: anagramas de ARARA = 5!/(3!·2!) = 10. Elementos que devem ficar JUNTOS viram um bloco único (permute o bloco com os demais e, depois, os elementos dentro do bloco). Esses dois truques (dividir por repetições e amarrar blocos) cobrem quase todas as variações que a prova inventa.",
      },
    ],
    exemplo: {
      enunciado:
        "Uma escola precisa formar uma comissão de 2 professores escolhidos entre 5. Quantas comissões diferentes são possíveis?",
      passos: [
        "Trocar a ordem dos escolhidos não cria comissão nova → combinação.",
        "C(5,2) = 5!/(2!·3!) = (5×4)/2 = 10.",
        "Se fosse presidente E vice (ordem importa), seria A(5,2) = 5×4 = 20: o dobro.",
      ],
      resposta: "10 comissões.",
    },
    pontosChave: [
      "Princípio multiplicativo: um tracinho por decisão, restrições primeiro.",
      "Ordem importa → arranjo; não importa → combinação (divida por p!).",
      "Anagramas com repetição: n! dividido pelos fatoriais das letras repetidas.",
      "Elementos juntos → trate como bloco e permute dentro dele também.",
    ],
    comoCaiNoEnem:
      "Senhas, placas, comissões, cardápios e caminhos. O enunciado é longo, mas a conta é curta: o desafio é classificar o tipo de contagem.",
    estrategia:
      "Desenhe um tracinho por decisão e preencha as opções (restrições primeiro). Antes de calcular, faça o teste da ordem: trocar dois elementos de lugar gera um caso novo? Se não, divida pelas ordenações (combinação).",
  },

  "Funções e gráficos de funções": {
    ideiaCentral:
      "Função é uma regra que transforma cada entrada em uma única saída. No ENEM, funções modelam situações reais: a afim modela o que tem valor fixo + taxa constante; a quadrática, o que sobe e desce com ponto ótimo; a exponencial, o que multiplica a cada período.",
    aula: [
      {
        titulo: "Função afim: fixo + variável",
        texto:
          "f(x) = ax + b é a matemática do taxista: b é a bandeirada (valor fixo, pago mesmo com x = 0) e a é o preço por quilômetro (taxa de variação). Para MONTAR a lei a partir do enunciado, identifique essas duas peças. Para LER um gráfico de reta: b é onde ela corta o eixo y; a é a inclinação (Δy/Δx entre dois pontos quaisquer). Comparar dois planos de celular = igualar duas funções afins e descobrir para qual x uma passa a ser mais barata que a outra.",
      },
      {
        titulo: "Quadrática: o problema do máximo",
        texto:
          "f(x) = ax² + bx + c desenha uma parábola: concavidade para baixo (a < 0) tem ponto de MÁXIMO; para cima (a > 0), de MÍNIMO. O vértice fica em x = -b/(2a), e o valor ótimo é f desse x. É a ferramenta dos enunciados 'que preço maximiza o lucro?', 'qual a altura máxima do projétil?'. As raízes (f(x) = 0) marcam onde o objeto toca o chão ou o lucro zera; entre montar Bhaskara e usar soma/produto, escolha o caminho mais rápido para os números dados.",
      },
      {
        titulo: "Exponencial e logaritmo: multiplicar no tempo",
        texto:
          "Quando algo dobra, triplica ou cai pela metade a cada período (bactérias, juros compostos, meia-vida de remédios), a função é exponencial: f(t) = a·q^t, em que q é o fator por período. O logaritmo é a operação inversa: responde 'QUANTOS períodos até atingir tal valor?'. O ENEM costuma dar o valor de log necessário (ex.: 'use log 2 = 0,3'), sinal claro de que a resposta sai aplicando logaritmo nos dois lados da equação.",
      },
    ],
    exemplo: {
      enunciado:
        "Uma corrida de aplicativo custa R$ 4,00 fixos mais R$ 2,50 por km. Com R$ 19,00, quantos km é possível percorrer?",
      passos: [
        "Monte a lei: C(x) = 4 + 2,5x (fixo + taxa × quantidade).",
        "Iguale ao valor disponível: 4 + 2,5x = 19.",
        "Resolva: 2,5x = 15 → x = 6.",
      ],
      resposta: "6 km.",
    },
    pontosChave: [
      "Afim: b = valor fixo (corta o eixo y), a = taxa de variação (inclinação).",
      "Vértice da parábola em x = -b/2a: é o lucro máximo, a altura máxima, o custo mínimo.",
      "Crescimento por multiplicação (dobra, meia-vida) = exponencial.",
      "Se a questão fornece valores de log, a solução passa por aplicar logaritmo.",
    ],
    comoCaiNoEnem:
      "Tarifas e planos (afim), otimização de lucro e lançamentos (quadrática), crescimento populacional e decaimento (exponencial), quase sempre pedindo para montar ou interpretar a lei.",
    estrategia:
      "Pergunte ao enunciado: existe valor fixo + taxa (afim)? Existe ponto ótimo de máximo/mínimo (quadrática, vértice)? Algo multiplica a cada período (exponencial)? Classificada a função, monte a lei com os dados.",
  },

  "Geometria plana": {
    ideiaCentral:
      "Áreas e perímetros das figuras básicas + Pitágoras + semelhança: com esse kit se resolve quase toda a geometria plana do ENEM. Perímetro é o contorno (soma dos lados); área é a medida da superfície.",
    aula: [
      {
        titulo: "O kit de áreas e a decomposição",
        texto:
          "Decore poucas fórmulas e use-as bem: retângulo b·h, triângulo b·h/2, trapézio (B+b)·h/2, losango D·d/2, círculo πr². Figuras estranhas (terrenos em L, pisos com recortes, coroas circulares) se resolvem por DECOMPOSIÇÃO: divida em figuras conhecidas e some, ou desenhe a figura grande e SUBTRAIA os buracos. Desenhar e marcar as medidas no papel vale mais que tentar resolver de cabeça.",
      },
      {
        titulo: "Pitágoras e semelhança: as duas ferramentas de comprimento",
        texto:
          "Sempre que houver triângulo retângulo (diagonais, rampas, escadas apoiadas), Pitágoras dá o lado que falta: a² = b² + c². Quando duas figuras têm o MESMO FORMATO em tamanhos diferentes (sombras no mesmo instante, mapa e terreno, foto ampliada), há semelhança: lados correspondentes mantêm a mesma razão k. Atenção à consequência mais cobrada: se os comprimentos escalam por k, as ÁREAS escalam por k². Dobrar os lados de um quadrado quadruplica a área.",
      },
      {
        titulo: "Ângulos: o que não pode faltar",
        texto:
          "Soma dos ângulos internos do triângulo = 180°; do quadrilátero, 360°; do polígono de n lados, (n-2)·180°. Em retas paralelas cortadas por transversal, ângulos correspondentes e alternos internos são iguais: é assim que a prova esconde ângulos em escadas, telhados e rampas. Ângulo central × inscrito na circunferência: o inscrito vale metade do central que enxerga o mesmo arco.",
      },
    ],
    exemplo: {
      enunciado:
        "Um terreno retangular de 20 m × 12 m terá uma piscina retangular de 8 m × 5 m. O restante será gramado, a R$ 15 o metro quadrado. Qual o custo do gramado?",
      passos: [
        "Área total: 20 × 12 = 240 m².",
        "Área da piscina: 8 × 5 = 40 m².",
        "Área gramada (subtração): 240 - 40 = 200 m².",
        "Custo: 200 × 15 = R$ 3.000.",
      ],
      resposta: "R$ 3.000,00.",
    },
    pontosChave: [
      "Área de figura composta: decomponha em figuras conhecidas ou subtraia buracos.",
      "Triângulo retângulo aparente (rampa, escada, diagonal) → Pitágoras.",
      "Semelhança: comprimentos × k, áreas × k².",
      "Confira se a questão pede perímetro (contorno) ou área (superfície).",
    ],
    comoCaiNoEnem:
      "Plantas, terrenos, pisos e logotipos, com frequência combinando área com custo por m². A figura do enunciado quase sempre precisa ser repartida.",
    estrategia:
      "Desenhe (ou redesenhe) a figura e marque todas as medidas. Reparta em figuras conhecidas ou pense em 'figura grande menos buraco'. Antes de responder, confira: pediram área ou perímetro? Em qual unidade?",
  },

  "Geometria espacial": {
    ideiaCentral:
      "Volume mede o espaço que um sólido ocupa. Prismas e cilindros: área da base × altura. Pirâmides e cones: um terço disso. Esfera: (4/3)πr³. Capacidade é volume traduzido para litros: 1 dm³ = 1 L.",
    aula: [
      {
        titulo: "Um princípio, todas as fórmulas",
        texto:
          "Sólidos 'retos de cima a baixo' (prismas, cilindros) empilham cópias da base: V = Área da base × altura, valendo para QUALQUER formato de base (triangular, hexagonal, circular). Sólidos que afunilam até um ponto (pirâmide, cone) guardam exatamente 1/3 do sólido reto correspondente. Entendido isso, a única memorização extra é a esfera: V = (4/3)πr³. Identifique a base verdadeira: um prisma deitado tem como 'base' a face que se repete, não a face em que ele está apoiado.",
      },
      {
        titulo: "Litros: a ponte mais cobrada",
        texto:
          "O ENEM quase nunca pergunta o volume em metros cúbicos: pergunta a CAPACIDADE em litros. Grave a ponte: 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL. Caminho seguro: calcule o volume na unidade dada, converta para dm³ (ou m³) e só então vire litros. Uma caixa d'água de 2 m × 1 m × 1,5 m tem 3 m³ = 3.000 L. Errar a conversão por um fator de 10 é a forma mais comum de cair em alternativa armadilha.",
      },
      {
        titulo: "Escala em 3D e nível de líquido",
        texto:
          "Se as dimensões lineares multiplicam por k, o volume multiplica por k³: uma maquete 1:100 guarda 1/1.000.000 do volume real. Dobrar SÓ a altura dobra o volume; dobrar TODAS as medidas multiplica por 8. Em problemas de transferência de líquido, o volume é o invariante: igualar o volume nos dois recipientes (Área₁ × h₁ = Área₂ × h₂) resolve a altura que o líquido atinge no recipiente novo.",
      },
    ],
    exemplo: {
      enunciado:
        "Um reservatório cilíndrico tem raio de 1 m e altura de 2 m. Quantos litros comporta? (use π = 3)",
      passos: [
        "Área da base: πr² = 3 × 1² = 3 m².",
        "Volume: base × altura = 3 × 2 = 6 m³.",
        "Converta: 6 m³ = 6 × 1.000 = 6.000 L.",
      ],
      resposta: "6.000 litros.",
    },
    pontosChave: [
      "Prisma/cilindro: V = base × altura; pirâmide/cone: 1/3 disso; esfera: (4/3)πr³.",
      "1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL.",
      "Dimensões × k → volume × k³.",
      "Transferência de líquido: o volume se conserva entre recipientes.",
    ],
    comoCaiNoEnem:
      "Caixas d'água, piscinas, embalagens, silos e doses de produto, pedindo capacidade em litros ou comparação entre recipientes. A conversão de unidades é o coração da questão.",
    estrategia:
      "Identifique o sólido e a base que se repete, calcule V = base × altura (÷3 se afunila) e converta para a unidade PEDIDA no final. Escreva a conversão com calma: é nela que a prova derruba.",
  },

  Trigonometria: {
    ideiaCentral:
      "No triângulo retângulo, seno, cosseno e tangente relacionam um ângulo com as razões entre os lados. Com UM ângulo e UM lado conhecidos, qualquer outro lado sai por uma das três razões: é a ferramenta para medir o inacessível.",
    aula: [
      {
        titulo: "SOH-CAH-TOA na prática",
        texto:
          "sen = oposto/hipotenusa, cos = adjacente/hipotenusa, tan = oposto/adjacente. O método: (1) desenhe o triângulo retângulo da situação; (2) marque o ângulo dado e classifique os lados a partir DELE (oposto é o que não o toca); (3) escolha a razão que liga o lado conhecido ao desconhecido. Altura de prédio vista do chão a uma distância conhecida pede TANGENTE (oposto/adjacente), de longe a razão mais usada na prova.",
      },
      {
        titulo: "A tabela que vale pontos",
        texto:
          "Os ângulos notáveis caem com valores prontos: sen30° = 1/2, sen45° = √2/2, sen60° = √3/2; cossenos na ordem inversa (cos30° = √3/2... cos60° = 1/2); tan30° = √3/3, tan45° = 1, tan60° = √3. Os enunciados costumam fornecer aproximações (√3 ≈ 1,7) quando necessárias: usá-las é obrigatório para a conta fechar com a alternativa. Rampas de acessibilidade, fios esticados, escadas e sombras são as fantasias clássicas desses triângulos.",
      },
      {
        titulo: "Fenômenos periódicos: ler, não calcular",
        texto:
          "Funções y = a·sen(bx) + c modelam marés, rodas-gigantes e pressão sonora. O ENEM pede LEITURA: o valor máximo é c + a, o mínimo é c - a (c desloca, a é a amplitude) e o período é 2π/b (tempo de um ciclo completo). Identificar 'entre que valores oscila' e 'de quanto em quanto tempo se repete' resolve a questão sem nenhuma conta trigonométrica de verdade.",
      },
    ],
    exemplo: {
      enunciado:
        "A 30 m da base de uma torre, uma pessoa vê o topo sob um ângulo de 60° com a horizontal. Qual a altura da torre? (use √3 ≈ 1,7)",
      passos: [
        "Desenhe: distância 30 m (adjacente ao ângulo), altura h (oposto).",
        "Oposto e adjacente → tangente: tan60° = h/30.",
        "h = 30 × tan60° = 30 × √3 ≈ 30 × 1,7 = 51.",
      ],
      resposta: "Aproximadamente 51 m.",
    },
    pontosChave: [
      "Classifique os lados a partir do ÂNGULO dado; só então escolha sen, cos ou tan.",
      "Altura × distância no chão = tangente, o caso mais frequente.",
      "Tabela dos notáveis (30°, 45°, 60°) na ponta da língua.",
      "Em funções periódicas: máximo = c + a, mínimo = c - a, período = 2π/b.",
    ],
    comoCaiNoEnem:
      "Alturas de torres e prédios, rampas e cabos (triângulo retângulo) e leitura de funções periódicas em fenômenos naturais. O desenho certo é metade da solução.",
    estrategia:
      "Desenhe o triângulo retângulo, marque o ângulo e nomeie os lados (oposto/adjacente/hipotenusa) em relação a ele. Escolha a razão que envolve o lado que você TEM e o que você QUER.",
  },

  "Equações e sistemas": {
    ideiaCentral:
      "A habilidade real é TRADUZIR: transformar frases em equações. Nomeie as incógnitas, escreva uma equação por informação do enunciado e resolva pelo método mais curto. A conta é simples; a modelagem é o jogo.",
    aula: [
      {
        titulo: "Do português para o algebrês",
        texto:
          "Cada expressão tem tradução direta: 'o dobro de um número' → 2x; 'excede em 5' → +5; 'a soma das idades é 30' → x + y = 30; 'daqui a 4 anos' → x + 4. Defina POR ESCRITO o que cada letra significa ('x = preço do ingresso de criança') para não se perder no meio da resolução, e confira no final se a resposta responde à pergunta feita (a prova adora perguntar pela OUTRA incógnita, ou pela soma das duas).",
      },
      {
        titulo: "Sistemas: substituição ou soma",
        texto:
          "Duas informações sobre duas quantidades = sistema 2×2. Substituição: isole a incógnita mais fácil em uma equação e troque na outra. Adição: multiplique uma equação para que, somando as duas, uma incógnita desapareça. O cenário clássico: 'no estacionamento há 20 veículos entre carros e motos, somando 64 rodas' → c + m = 20 e 4c + 2m = 64 → c = 12, m = 8. Reconheça o padrão: total de itens + total de algo que cada item carrega.",
      },
      {
        titulo: "Segundo grau e inequações com contexto",
        texto:
          "Equações do 2º grau aparecem em áreas e lucros: resolva por fatoração/soma-e-produto quando os números forem amigáveis, Bhaskara quando não forem. IMPORTANTE: valide as raízes no contexto: tempo, comprimento e quantidade não podem ser negativos, então uma das raízes quase sempre é descartada. Inequações ('para que o lucro supere R$ 1.000...') pedem um INTERVALO como resposta; lembre de inverter a desigualdade ao multiplicar ou dividir por número negativo.",
      },
    ],
    exemplo: {
      enunciado:
        "Em um show, ingressos custaram R$ 40 (inteira) e R$ 20 (meia). Foram vendidos 300 ingressos, arrecadando R$ 9.600. Quantas meias-entradas foram vendidas?",
      passos: [
        "Defina: i = inteiras, m = meias. Equações: i + m = 300 e 40i + 20m = 9.600.",
        "Da primeira: i = 300 - m. Substitua: 40(300 - m) + 20m = 9.600.",
        "12.000 - 40m + 20m = 9.600 → -20m = -2.400 → m = 120.",
        "Confira: i = 180; 180×40 + 120×20 = 7.200 + 2.400 = 9.600 ✓.",
      ],
      resposta: "120 meias-entradas.",
    },
    pontosChave: [
      "Escreva o significado de cada incógnita antes de equacionar.",
      "Padrão 'total de itens + total de valor/rodas/pontos' = sistema 2×2.",
      "Raízes do 2º grau: descarte as que não fazem sentido no contexto.",
      "Inequação: multiplicou por negativo, inverta o sinal da desigualdade.",
    ],
    comoCaiNoEnem:
      "Ingressos, idades, mistura de produtos e tarifas: enunciados de texto que viram sistemas pequenos. A resposta errada por 'resolver a incógnita errada' está sempre nas alternativas.",
    estrategia:
      "Liste as incógnitas com significado explícito, transforme cada frase do enunciado em uma equação e conte: nº de equações deve igualar o de incógnitas. No final, confira QUAL valor a pergunta quer.",
  },

  "Sequências e progressões": {
    ideiaCentral:
      "PA: soma-se a mesma razão a cada termo (crescimento em linha reta). PG: multiplica-se pela mesma razão (crescimento em curva). Antes de qualquer fórmula, descubra o padrão olhando dois termos vizinhos.",
    aula: [
      {
        titulo: "Diagnóstico do padrão",
        texto:
          "Subtraia termos vizinhos: diferença constante? É PA com razão r. Divida termos vizinhos: quociente constante? É PG com razão q. Sequências figurativas (palitos, azulejos, cadeiras por fileira) são PAs disfarçadas: conte os elementos das duas primeiras figuras e a razão aparece. Quando o padrão não é PA nem PG, liste os primeiros termos e procure ciclos que se repetem (a prova também gosta de padrões periódicos: dia da semana, posição em círculo).",
      },
      {
        titulo: "As fórmulas que importam",
        texto:
          "PA: termo geral aₙ = a₁ + (n-1)·r ('quantos saltos de r até o termo n'); soma Sₙ = (a₁ + aₙ)·n/2 ('média dos extremos vezes a quantidade', o truque de Gauss). PG: aₙ = a₁ · qⁿ⁻¹. No ENEM, a soma de PG finita é rara; quando o crescimento é geométrico, a pergunta costuma ser sobre um termo específico ('quantas bactérias após 5 horas?'), que sai aplicando o fator repetidamente.",
      },
      {
        titulo: "PA ou PG? O contexto entrega",
        texto:
          "Aumento 'de R$ 50 por mês' = PA (soma fixa). Aumento 'de 5% ao mês' ou 'dobra a cada hora' = PG (fator fixo). Essa distinção conecta o assunto a juros: simples crescem em PA, compostos em PG. Em questões de assentos de teatro ('cada fileira tem 2 lugares a mais'), o total de lugares é a SOMA da PA: identifique a₁, r e n com cuidado, pois o erro comum é errar n por 1 (contar uma fileira a mais ou a menos).",
      },
    ],
    exemplo: {
      enunciado:
        "Um teatro tem 12 fileiras: a primeira com 10 lugares e cada fileira seguinte com 4 a mais que a anterior. Quantos lugares há no total?",
      passos: [
        "PA com a₁ = 10, r = 4, n = 12.",
        "Último termo: a₁₂ = 10 + (12-1)×4 = 10 + 44 = 54.",
        "Soma: S₁₂ = (10 + 54) × 12/2 = 64 × 6 = 384.",
      ],
      resposta: "384 lugares.",
    },
    pontosChave: [
      "Diferença constante = PA; quociente constante = PG.",
      "aₙ = a₁ + (n-1)r e Sₙ = (a₁ + aₙ)n/2: as duas fórmulas resolvem quase tudo.",
      "'Aumenta R$ X' = PA; 'aumenta X%' ou 'dobra' = PG.",
      "Confira o valor de n: errar por 1 é o erro mais comum.",
    ],
    comoCaiNoEnem:
      "Padrões de figuras que crescem, fileiras de assentos, parcelas com acréscimo fixo e populações que dobram. Identificado o tipo, a conta é direta.",
    estrategia:
      "Compare dois termos vizinhos: subtração constante (PA) ou divisão constante (PG)? Anote a₁, a razão e QUAL termo (ou soma) a questão pede, contando n com cuidado.",
  },

  "Grandezas e unidades de medida": {
    ideiaCentral:
      "Converter unidades é a habilidade silenciosa que decide questões inteiras: a resposta certa na unidade errada está sempre entre as alternativas. Domine as pontes: comprimento, área, volume/capacidade, massa, tempo e velocidade.",
    aula: [
      {
        titulo: "As pontes essenciais",
        texto:
          "Comprimento anda de 10 em 10 (km → m: ×1.000). Área anda ao quadrado (1 m² = 10.000 cm²); volume, ao cubo (1 m³ = 1.000.000 cm³). A ponte volume-capacidade: 1 m³ = 1.000 L, 1 dm³ = 1 L, 1 cm³ = 1 mL. Tempo NÃO é decimal: 1h30 = 1,5 h (não 1,3); 2h15 = 2,25 h. Velocidade: km/h → m/s divide por 3,6 (m/s → km/h multiplica por 3,6): 72 km/h = 20 m/s.",
      },
      {
        titulo: "kWh: a unidade da conta de luz",
        texto:
          "Energia elétrica se mede em quilowatt-hora: potência (kW) × tempo de uso (h). Um chuveiro de 5.500 W (= 5,5 kW) ligado 30 min/dia consome 5,5 × 0,5 = 2,75 kWh por dia; em 30 dias, 82,5 kWh; a R$ 0,80 o kWh, R$ 66 mensais só de chuveiro. Esse encadeamento (W → kW, min → h, dia → mês, kWh → reais) é uma das contas mais repetidas da história do ENEM: treine-o até ficar automático.",
      },
      {
        titulo: "Ordem de grandeza e notação científica",
        texto:
          "Números enormes ou minúsculos viram potências de 10: 3.200.000 = 3,2 × 10⁶. Para multiplicar, multiplique os coeficientes e SOME os expoentes; para dividir, subtraia. A prova usa notação científica em contextos de astronomia, biologia (células, vírus) e dados populacionais, geralmente pedindo apenas uma estimativa de ordem de grandeza: não busque precisão, busque o expoente certo.",
      },
    ],
    exemplo: {
      enunciado:
        "Um carro a 90 km/h percorre quantos metros em 20 segundos?",
      passos: [
        "Converta a velocidade: 90 km/h ÷ 3,6 = 25 m/s.",
        "Distância = velocidade × tempo = 25 × 20 = 500 m.",
        "Alternativa armadilha: usar 90 direto daria 1.800, 'm' errados por unidade.",
      ],
      resposta: "500 metros.",
    },
    pontosChave: [
      "km/h ↔ m/s: fator 3,6 (divide para m/s, multiplica para km/h).",
      "Área converte ao quadrado; volume ao cubo; 1 dm³ = 1 L.",
      "kWh = potência em kW × horas de uso; multiplique pela tarifa para ter reais.",
      "Tempo não é decimal: 1h30 = 1,5 h.",
    ],
    comoCaiNoEnem:
      "Raramente é o tema central: é a etapa final embutida em questões de física, geometria e consumo. Quem converte com método não doa pontos.",
    estrategia:
      "Antes de calcular, anote a unidade dos dados e a unidade da RESPOSTA pedida. Faça as conversões explicitamente no papel (nada de cabeça) e desconfie de alternativas que diferem só por fatores de 10.",
  },
};
