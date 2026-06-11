/**
 * Resumos de estudo por tópico da taxonomia (src/lib/topics.ts). Usados no
 * modo estudo dentro do simulado: o aluno pausa a questão, revisa o
 * essencial do conteúdo e volta para responder.
 *
 * As chaves precisam bater exatamente com os nomes dos tópicos.
 */

export interface ConteudoEstudo {
  ideiaCentral: string;
  pontosChave: string[];
  comoCaiNoEnem: string;
}

export const CONTEUDOS: Record<string, ConteudoEstudo> = {
  /* ----------------------------- Matemática ----------------------------- */
  "Porcentagem e matemática financeira": {
    ideiaCentral:
      "Porcentagem é uma razão de denominador 100: x% de um valor é (x/100) × valor. Aumentos e descontos viram multiplicações: +20% equivale a ×1,20 e -20% a ×0,80; variações sucessivas se multiplicam, não se somam.",
    pontosChave: [
      "Aumento de a% seguido de desconto de a% NÃO volta ao valor original (0,8 × 1,2 = 0,96).",
      "Juros simples: J = C·i·t (crescimento linear). Juros compostos: M = C·(1+i)^t (crescimento exponencial).",
      "Variação percentual = (valor final - valor inicial) / valor inicial × 100.",
      "Para comparar promoções e parcelamentos, traga tudo para o mesmo valor de referência.",
      "Lucro sobre custo e lucro sobre venda são porcentagens diferentes; leia qual é a base.",
    ],
    comoCaiNoEnem:
      "Quase sempre em contexto de consumo: promoções, parcelamentos, impostos e reajustes. A pegadinha clássica é a base de cálculo da porcentagem mudar no meio do problema.",
  },
  "Razão, proporção e escalas": {
    ideiaCentral:
      "Razão compara duas grandezas por divisão; proporção é a igualdade entre razões. Grandezas diretamente proporcionais crescem juntas (regra de três direta); inversamente proporcionais, uma cresce e a outra diminui (inverta uma coluna antes de multiplicar em cruz).",
    pontosChave: [
      "Escala = medida no desenho / medida real, nas mesmas unidades (1:100 significa 1 cm no mapa = 100 cm reais).",
      "Regra de três composta: analise cada grandeza separadamente contra a pergunta (direta ou inversa).",
      "Densidade demográfica, velocidade média, consumo por km e vazão são razões disfarçadas.",
      "Divisão proporcional: repartir um total em partes proporcionais a números dados (some as partes para achar o valor de cada 'cota').",
    ],
    comoCaiNoEnem:
      "Mapas e maquetes (escala), receitas, consumo de combustível e problemas de 'quantos trabalhadores em quantos dias'. Erro comum: esquecer de inverter a razão na grandeza inversa.",
  },
  Probabilidade: {
    ideiaCentral:
      "Probabilidade = casos favoráveis / casos possíveis, em um espaço amostral equiprovável. Para eventos sucessivos e independentes, multiplique as probabilidades; para 'um OU outro' de eventos que não acontecem juntos, some.",
    pontosChave: [
      "P(não acontecer) = 1 - P(acontecer): muitas questões ficam fáceis pelo complementar.",
      "Probabilidade condicional: P(A|B) restringe o espaço amostral aos casos em que B ocorreu.",
      "Com reposição, as probabilidades não mudam entre etapas; sem reposição, o total diminui.",
      "Organize espaços amostrais com tabelas de dupla entrada ou árvores de possibilidades.",
    ],
    comoCaiNoEnem:
      "Sorteios, jogos, exames médicos e tabelas de frequência. A banca adora pedir a probabilidade a partir de dados em tabela: monte a fração com a linha/coluna certa.",
  },
  "Estatística (média, mediana e gráficos)": {
    ideiaCentral:
      "Média é a soma dividida pela quantidade; mediana é o valor central dos dados ordenados (com n par, a média dos dois centrais); moda é o mais frequente. Cada medida resume os dados de um jeito, e valores extremos puxam a média, mas não a mediana.",
    pontosChave: [
      "Sempre ORDENE os dados antes de buscar a mediana.",
      "Média ponderada: multiplique cada valor pelo seu peso (ou frequência) e divida pela soma dos pesos.",
      "Em gráficos de barras/setores, leia eixos, legendas e unidades antes de calcular qualquer coisa.",
      "Desvio padrão mede dispersão: dados mais espalhados = desvio maior (o ENEM cobra a interpretação, não a fórmula).",
      "Para comparar regularidade entre atletas/máquinas, vence o menor desvio.",
    ],
    comoCaiNoEnem:
      "Interpretação de gráficos e tabelas de jornais e pesquisas, e comparação entre média, mediana e moda de um conjunto. É um dos assuntos mais frequentes da prova inteira.",
  },
  "Análise combinatória": {
    ideiaCentral:
      "O princípio fundamental da contagem multiplica as opções de cada etapa independente. Quando a ORDEM importa, use arranjo/permutação; quando não importa, combinação (divida pelas ordenações repetidas).",
    pontosChave: [
      "Permutação de n elementos: n!. Com elementos repetidos, divida pelos fatoriais das repetições.",
      "Arranjo A(n,p) = n!/(n-p)! escolhe E ordena; Combinação C(n,p) = n!/[p!(n-p)!] apenas escolhe.",
      "Pergunte sempre: 'trocar a ordem gera um caso novo?' Se não, é combinação.",
      "Restrições primeiro: posicione os elementos com exigência (começa com vogal, casal junto) antes dos livres.",
    ],
    comoCaiNoEnem:
      "Senhas, placas, comissões, cardápios e trajetos. O erro clássico é usar arranjo onde a ordem não importa (comissões e duplas são combinação).",
  },
  "Funções e gráficos de funções": {
    ideiaCentral:
      "Função relaciona cada entrada a uma única saída. A afim (f(x) = ax + b) tem gráfico reta: a é a taxa de variação e b o valor inicial. A quadrática tem gráfico parábola, com máximo ou mínimo no vértice. Exponencial cresce/decai por multiplicação constante.",
    pontosChave: [
      "Na afim, a > 0 cresce, a < 0 decresce; b é onde a reta corta o eixo y (valor fixo, taxa × quantidade).",
      "Vértice da parábola: x = -b/2a; é onde ocorre lucro máximo, altura máxima, custo mínimo.",
      "Exponencial aparece em juros compostos, crescimento de bactérias e decaimento radioativo.",
      "Interpretar gráfico: onde cresce, onde decresce, raízes (corta o eixo x) e interceptos.",
      "Logaritmo é o expoente: log responde 'a que expoente elevo a base para chegar nesse número?'",
    ],
    comoCaiNoEnem:
      "Tarifas (fixo + variável), lucro máximo de empresas e leitura de gráficos de situações reais. Saber montar a lei da função a partir do enunciado resolve a maioria das questões.",
  },
  "Geometria plana": {
    ideiaCentral:
      "Domínio de áreas e perímetros das figuras básicas: retângulo (b·h), triângulo (b·h/2), trapézio ((B+b)·h/2), círculo (πr²) e circunferência (2πr). Semelhança de triângulos relaciona lados proporcionais e é a chave de sombras, mapas e ampliações.",
    pontosChave: [
      "Perímetro é contorno (soma dos lados); área é a superfície. Não confunda o que a questão pede.",
      "Teorema de Pitágoras: a² = b² + c² no triângulo retângulo (distâncias, diagonais, rampas).",
      "Em figuras compostas, decomponha em retângulos, triângulos e semicírculos e some/subtraia áreas.",
      "Se as medidas lineares multiplicam por k, as áreas multiplicam por k².",
      "Soma dos ângulos internos de um triângulo = 180°; de um polígono de n lados = (n-2)·180°.",
    ],
    comoCaiNoEnem:
      "Plantas de casas, terrenos, pisos e logotipos. Frequentemente combina figura composta com custo por metro quadrado, misturando geometria e proporção.",
  },
  "Geometria espacial": {
    ideiaCentral:
      "Volume dos sólidos principais: prisma e cilindro (área da base × altura), pirâmide e cone (um terço disso) e esfera (4πr³/3). Capacidade é volume em litros: 1 dm³ = 1 L e 1 m³ = 1000 L.",
    pontosChave: [
      "Identifique a base certa: o volume do prisma depende da área dessa base, qualquer que seja seu formato.",
      "Dobrar TODAS as dimensões multiplica o volume por 8 (k³); dobrar só a altura, por 2.",
      "Nível de líquido em recipientes: volumes iguais ocupam alturas diferentes conforme a base.",
      "Planificação: cilindro abre em retângulo + 2 círculos; cone em setor circular + círculo.",
    ],
    comoCaiNoEnem:
      "Caixas d'água, piscinas, embalagens e silos, quase sempre pedindo capacidade em litros ou comparação entre recipientes. Cuidado redobrado com conversão de unidades.",
  },
  Trigonometria: {
    ideiaCentral:
      "No triângulo retângulo: seno = oposto/hipotenusa, cosseno = adjacente/hipotenusa, tangente = oposto/adjacente. Com um ângulo e um lado, calcula-se qualquer outro lado: alturas, rampas e distâncias inacessíveis.",
    pontosChave: [
      "Decore a tabela de 30°, 45° e 60° (sen 30 = 1/2, cos 30 = √3/2, tan 45 = 1...).",
      "Tangente é a razão preferida quando a questão envolve altura × distância no chão.",
      "Funções seno e cosseno descrevem fenômenos periódicos (marés, rodas-gigantes, som): amplitude e período são o que a prova explora.",
      "Lei dos senos e dos cossenos resolvem triângulos quaisquer (sem ângulo reto).",
    ],
    comoCaiNoEnem:
      "Cálculo de alturas de prédios/torres com ângulo de visão, rampas de acessibilidade e fenômenos periódicos com gráfico de seno. As razões no triângulo retângulo dominam.",
  },
  "Equações e sistemas": {
    ideiaCentral:
      "Traduzir o enunciado para a linguagem algébrica é a habilidade central: nomear a incógnita, montar a equação e resolver. Sistemas (duas equações, duas incógnitas) se resolvem por substituição ou soma.",
    pontosChave: [
      "Leia atribuindo letras: 'o dobro de um número menos 5 é 11' vira 2x - 5 = 11.",
      "Equação do 2º grau: Bhaskara ou soma e produto (x² - Sx + P = 0); verifique se as duas raízes fazem sentido no contexto (tempo negativo não existe).",
      "Em sistemas de problemas (ingressos, moedas, idades), cada frase do enunciado vira uma equação.",
      "Inequações pedem intervalo de soluções: atenção ao inverter o sinal ao multiplicar por negativo.",
    ],
    comoCaiNoEnem:
      "Problemas de tradução direta: ingressos a preços diferentes, idades, saldos. O desafio é a modelagem, não a conta.",
  },
  "Sequências e progressões": {
    ideiaCentral:
      "PA soma uma razão constante a cada termo (crescimento linear); PG multiplica por uma razão constante (crescimento exponencial). Reconhecer o padrão é mais importante que decorar fórmulas.",
    pontosChave: [
      "PA: termo geral a_n = a₁ + (n-1)r; soma S_n = (a₁ + a_n)·n/2.",
      "PG: termo geral a_n = a₁·q^(n-1).",
      "Sequências figurativas (palitos, bolinhas, pisos) escondem uma PA: conte os dois primeiros termos e ache a razão.",
      "Pergunte: o aumento é 'de tanto em tanto' (PA) ou 'multiplica por tanto' (PG)?",
    ],
    comoCaiNoEnem:
      "Padrões de figuras que crescem, assentos por fileira, dívidas com acréscimo fixo. Muitas vezes basta estender o padrão poucos termos com organização.",
  },
  "Grandezas e unidades de medida": {
    ideiaCentral:
      "Converter unidades com segurança: comprimento (km→m ×1000), massa (kg→g ×1000), tempo (h→min ×60) e as ligações entre volume e capacidade (1 m³ = 1000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL).",
    pontosChave: [
      "Velocidade: km/h → m/s divide por 3,6; m/s → km/h multiplica por 3,6.",
      "Área converte ao quadrado (1 m² = 10⁴ cm²) e volume ao cubo (1 m³ = 10⁶ cm³).",
      "kWh é unidade de energia: potência (kW) × tempo de uso (h); base das contas de luz.",
      "Notação científica organiza ordens de grandeza: 3,2 × 10⁶ = 3 200 000.",
    ],
    comoCaiNoEnem:
      "Raramente é o tema central, mas é a armadilha embutida em metade das questões de matemática e física: a resposta certa na unidade errada está sempre nas alternativas.",
  },

  /* ------------------------- Ciências da Natureza ------------------------ */
  "Ecologia e meio ambiente": {
    ideiaCentral:
      "Ecologia estuda as relações dos seres vivos entre si e com o ambiente: cadeias e teias alimentares (energia flui e DIMINUI a cada nível), ciclos biogeoquímicos (água, carbono, nitrogênio) e os impactos humanos sobre esses sistemas.",
    pontosChave: [
      "Apenas ~10% da energia passa de um nível trófico ao seguinte; por isso as cadeias são curtas.",
      "Bioacumulação: poluentes (mercúrio, agrotóxicos) se concentram nos predadores de topo.",
      "Efeito estufa é natural e vital; o problema é sua INTENSIFICAÇÃO por CO₂ e metano.",
      "Eutrofização: excesso de nutrientes → explosão de algas → queda de O₂ → mortandade de peixes.",
      "Relações ecológicas: mutualismo, comensalismo, parasitismo, competição (saiba classificar exemplos).",
      "Biomas brasileiros e suas ameaças: Amazônia, Cerrado (berço das águas), Caatinga, Mata Atlântica, Pampa e Pantanal.",
    ],
    comoCaiNoEnem:
      "Tema mais frequente de biologia: impactos ambientais em contexto de notícia (desmatamento, queimadas, poluição) e interpretação de cadeias alimentares e ciclos.",
  },
  "Genética e evolução": {
    ideiaCentral:
      "A 1ª Lei de Mendel: cada característica é determinada por um par de alelos que se separam na formação dos gametas; dominante se expressa em heterozigose, recessivo só em homozigose. Evolução por seleção natural: o ambiente seleciona os mais aptos JÁ existentes (a mutação vem antes, ao acaso).",
    pontosChave: [
      "Cruzamento Aa × Aa → 3:1 fenotípico; Aa × aa → 1:1. Monte o quadro de Punnett.",
      "Heredogramas: filho afetado de pais normais indica caráter recessivo.",
      "DNA → (transcrição) → RNA → (tradução) → proteína; mutações alteram essa receita.",
      "Seleção natural NÃO cria características sob demanda: bactérias resistentes já existiam, o antibiótico só as selecionou.",
      "Evidências evolutivas: fósseis, órgãos homólogos (ancestral comum) × análogos (convergência).",
      "Grupos sanguíneos (ABO e Rh): alelos múltiplos e codominância em A e B.",
    ],
    comoCaiNoEnem:
      "Probabilidade em cruzamentos, heredogramas, biotecnologia (transgênicos, CRISPR em contexto de texto) e seleção natural aplicada à resistência de bactérias e pragas.",
  },
  "Fisiologia humana e citologia": {
    ideiaCentral:
      "A célula é a unidade da vida: membrana controla trocas, mitocôndria faz respiração celular (ATP), ribossomos produzem proteínas. No corpo, os sistemas trabalham integrados: digestório quebra alimentos, circulatório distribui, respiratório troca gases, nervoso e endócrino coordenam.",
    pontosChave: [
      "Respiração celular: glicose + O₂ → CO₂ + H₂O + ATP (na mitocôndria); fermentação rende muito menos energia.",
      "Enzimas são catalisadores específicos, sensíveis a temperatura e pH.",
      "Hormônios-chave: insulina/glucagon (glicemia), adrenalina (alerta), tireoidianos (metabolismo).",
      "Vacina = imunização ativa (produz anticorpos e memória); soro = passiva (recebe anticorpos prontos, ação imediata).",
      "Neurônio transmite impulso elétrico-químico; sinapses usam neurotransmissores.",
    ],
    comoCaiNoEnem:
      "Situações de saúde do cotidiano: diabetes, exercício físico e energia, digestão e dietas, vacina × soro. Decorar nomes importa menos que entender a função no conjunto.",
  },
  "Microbiologia, saúde e doenças": {
    ideiaCentral:
      "Vírus só se reproduzem dentro de células (antibiótico NÃO funciona contra eles); bactérias são procariontes combatidos por antibióticos; protozoários e vermes causam parasitoses ligadas a saneamento. Conhecer transmissão e prevenção é o que a prova cobra.",
    pontosChave: [
      "Arboviroses (dengue, zika, chikungunya): mesmo vetor, Aedes aegypti; prevenção é eliminar criadouros.",
      "Doenças de veiculação hídrica (cólera, amebíase, hepatite A): saneamento básico é a prevenção central.",
      "Uso incorreto de antibiótico (parar antes da hora, usar para gripe) seleciona bactérias resistentes.",
      "Ciclos clássicos: esquistossomose (caramujo), doença de Chagas (barbeiro), malária (Anopheles).",
      "Cobertura vacinal alta protege até os não vacinados (imunidade coletiva).",
    ],
    comoCaiNoEnem:
      "Surtos e campanhas em formato de notícia: identificar agente, transmissão e a medida de prevenção adequada. Saneamento × doença é associação recorrente.",
  },
  "Química orgânica": {
    ideiaCentral:
      "Química dos compostos de carbono. Identifique as funções pelo grupo característico: álcool (-OH), ácido carboxílico (-COOH), éster (sabores/aromas), amina (N, caráter básico), cetona e aldeído (C=O). Hidrocarbonetos são só C e H (combustíveis).",
    pontosChave: [
      "Nomenclatura: prefixo conta carbonos (met-1, et-2, prop-3, but-4) + ligações (an/en/in) + sufixo da função (ol, al, ona, oico).",
      "Isômeros: mesma fórmula molecular, estruturas e propriedades diferentes.",
      "Polímeros são macromoléculas de unidades repetidas: PET, PVC, polietileno; base da discussão sobre plásticos e reciclagem.",
      "Cadeias maiores → maior ponto de ebulição; ramificação diminui; -OH e -COOH fazem ligação de hidrogênio (sobem ebulição e solubilidade).",
      "Esterificação: ácido + álcool → éster + água (biodiesel, aromas artificiais).",
    ],
    comoCaiNoEnem:
      "Reconhecer funções orgânicas em moléculas de fármacos, combustíveis e agrotóxicos desenhadas no enunciado, e discutir polímeros/plásticos em contexto ambiental.",
  },
  "Reações químicas e estequiometria": {
    ideiaCentral:
      "Reação química rearranja átomos: a massa se conserva (Lavoisier), então a equação precisa estar balanceada. Estequiometria converte entre massa, mols e volume usando as proporções da equação: 1 mol = 6×10²³ partículas = massa molar em gramas.",
    pontosChave: [
      "Roteiro: balanceie → converta dados para mol → use a proporção dos coeficientes → converta para o que a questão pede.",
      "Reagente limitante: o que acaba primeiro determina o produto formado.",
      "Rendimento real < 100%: multiplique o teórico pela porcentagem dada.",
      "Combustão completa: combustível + O₂ → CO₂ + H₂O (base dos cálculos de emissão de carbono).",
      "Fatores que aceleram reações: temperatura, concentração, superfície de contato e catalisador.",
    ],
    comoCaiNoEnem:
      "Cálculo de CO₂ emitido por combustível, dose de princípio ativo, produção industrial. As proporções vêm em contexto, mas o método é sempre o mesmo roteiro.",
  },
  "Soluções, ácidos e bases": {
    ideiaCentral:
      "Concentração expressa quanto soluto há na solução: g/L, mol/L ou porcentagem. Na diluição, a quantidade de soluto não muda: C₁V₁ = C₂V₂. pH mede acidez: menor que 7 ácido, 7 neutro, maior que 7 básico, e cada unidade é um fator de 10.",
    pontosChave: [
      "C = m/V (g/L) e M = n/V (mol/L): domine as duas e a conversão entre elas.",
      "Misturar soluções de mesmo soluto: some os solutos e os volumes.",
      "Neutralização: ácido + base → sal + água (antiácidos, correção de solo com calcário).",
      "Indicadores mudam de cor conforme o pH (fenolftaleína, papel tornassol, extrato de repolho roxo).",
      "Solubilidade varia com a temperatura: gráficos de curva de solubilidade são clássicos.",
    ],
    comoCaiNoEnem:
      "Diluição de produtos de limpeza e medicamentos, pH de alimentos e chuva ácida, soro caseiro. C₁V₁ = C₂V₂ resolve uma família inteira de questões.",
  },
  "Eletroquímica e oxirredução": {
    ideiaCentral:
      "Oxidação é perda de elétrons; redução é ganho. Pilhas convertem reação espontânea em corrente elétrica (o metal de menor potencial oxida e é corroído); eletrólise usa corrente para forçar reação não espontânea (galvanização, obtenção de alumínio).",
    pontosChave: [
      "Na pilha: ânodo oxida (polo negativo) e perde massa; cátodo reduz (polo positivo) e ganha massa.",
      "Os elétrons fluem do ânodo para o cátodo pelo circuito externo.",
      "Maior potencial de redução = tendência a reduzir; a tabela de potenciais diz quem oxida quem.",
      "Metal de sacrifício: um metal mais reativo (zinco, magnésio) protege ferro de navios e tubulações.",
      "Eletrólise é o inverso da pilha: consome energia para depositar metais ou decompor substâncias.",
    ],
    comoCaiNoEnem:
      "Corrosão e proteção de estruturas, baterias e recarga, galvanoplastia. Identificar quem oxida e quem reduz já elimina metade das alternativas.",
  },
  "Mecânica (cinemática e dinâmica)": {
    ideiaCentral:
      "Cinemática descreve o movimento (v = Δs/Δt; MRUV usa v = v₀ + at e Torricelli v² = v₀² + 2aΔs). Dinâmica explica suas causas: F = m·a (2ª lei de Newton). Energia mecânica (cinética + potencial) se conserva sem atrito, e trabalho transfere energia.",
    pontosChave: [
      "1ª lei (inércia): sem força resultante, o corpo mantém seu estado (cinto de segurança!).",
      "3ª lei: ação e reação atuam em corpos DIFERENTES e não se anulam.",
      "Energia cinética = mv²/2: dobrar a velocidade quadruplica a energia (e a distância de frenagem).",
      "Em gráficos v × t, a área sob a curva é o deslocamento e a inclinação é a aceleração.",
      "Potência = energia/tempo; rendimento = útil/total.",
    ],
    comoCaiNoEnem:
      "Trânsito (frenagem, colisões), esportes e quedas, sempre em contexto. Conservação de energia em rampas e montanhas-russas é figurinha repetida.",
  },
  "Eletricidade e magnetismo": {
    ideiaCentral:
      "Corrente é fluxo ordenado de cargas. A lei de Ohm (U = R·i) relaciona tensão, resistência e corrente, e a potência elétrica (P = U·i) liga o consumo dos aparelhos à conta de luz: energia = potência × tempo (kWh).",
    pontosChave: [
      "Série: mesma corrente, resistências somam, um queima e tudo apaga. Paralelo: mesma tensão, é a ligação das residências.",
      "Conta de luz: P (kW) × horas de uso × dias = kWh consumidos × tarifa.",
      "Chuveiro na posição 'inverno' tem MENOR resistência (mais potência com a mesma tensão).",
      "Disjuntores e fusíveis protegem contra excesso de corrente; fio terra escoa fugas.",
      "Eletroímãs, motores e geradores: corrente gera campo magnético (Oersted) e variação de campo gera corrente (indução de Faraday).",
    ],
    comoCaiNoEnem:
      "Consumo e economia de energia em casa (cálculo de kWh é quase garantido), circuitos de chuveiro e lâmpadas, e indução em contexto de usinas e motores.",
  },
  "Ondas, som e óptica": {
    ideiaCentral:
      "Onda transporta energia sem transportar matéria: v = λ·f (a frequência não muda quando a onda troca de meio; quem muda é a velocidade e o comprimento). Som precisa de meio material; luz não. Espelhos e lentes formam imagens por reflexão e refração.",
    pontosChave: [
      "Altura do som = frequência (grave/agudo); intensidade = amplitude (volume, decibéis); timbre distingue instrumentos.",
      "Refração: a luz muda de velocidade ao trocar de meio e desvia (canudo 'quebrado' na água).",
      "Espelho plano: imagem virtual, mesmo tamanho, invertida esquerda-direita; côncavos ampliam (maquiagem), convexos ampliam o campo (retrovisores).",
      "Miopia corrige com lente divergente; hipermetropia com convergente.",
      "Ondas eletromagnéticas em ordem de frequência: rádio < micro-ondas < IV < visível < UV < raios X < gama.",
    ],
    comoCaiNoEnem:
      "Instrumentos musicais e qualidades do som, defeitos da visão e lentes corretivas, e o espectro eletromagnético (celular, micro-ondas, raio X) em contexto tecnológico.",
  },
  "Termologia e termodinâmica": {
    ideiaCentral:
      "Calor é energia em trânsito do corpo mais quente para o mais frio. Calor sensível muda a temperatura (Q = m·c·ΔT); calor latente muda o estado físico sem mudar a temperatura (Q = m·L). Condução, convecção e radiação são as formas de propagação.",
    pontosChave: [
      "A água tem calor específico alto: demora a esquentar e a esfriar (clima litorâneo, radiadores).",
      "Convecção explica brisas, geladeira (congelador em cima) e ar-condicionado no alto.",
      "Garrafa térmica ataca as três propagações: vácuo (condução/convecção) e espelhamento (radiação).",
      "Máquinas térmicas convertem calor em trabalho com rendimento sempre menor que 100% (2ª lei).",
      "Dilatação: trilhos, pontes e juntas de dilatação; a água é anômala entre 0 e 4 °C.",
    ],
    comoCaiNoEnem:
      "Situações domésticas (panela, garrafa térmica, geladeira), sensação térmica e clima, e eficiência de motores em contexto energético.",
  },
  "Energia e fontes energéticas": {
    ideiaCentral:
      "A matriz energética brasileira é atípica: forte presença de hidrelétricas e biocombustíveis (etanol, biodiesel). Cada fonte tem prós e contras: renováveis dependem de condições naturais; fósseis emitem gases de efeito estufa e são finitas.",
    pontosChave: [
      "Hidrelétrica: renovável e barata na operação, mas alaga áreas e depende de chuva (crises hídricas afetam a conta de luz).",
      "Eólica e solar: limpas e intermitentes; exigem armazenamento ou complementação.",
      "Termelétricas fósseis: acionadas como reserva, encarecem a energia e emitem CO₂.",
      "Etanol da cana fecha parte do ciclo do carbono (a planta reabsorve CO₂ ao crescer).",
      "Eficiência energética (selo Procel, LED) é 'fonte' invisível: a energia mais limpa é a não consumida.",
    ],
    comoCaiNoEnem:
      "Comparação entre fontes em tabelas e textos, impactos socioambientais de usinas e cálculo de consumo/geração. Tema interdisciplinar com geografia.",
  },

  /* -------------------------- Ciências Humanas -------------------------- */
  "Brasil Colônia e Império": {
    ideiaCentral:
      "A colonização portuguesa montou uma sociedade sobre o tripé latifúndio, monocultura de exportação e escravização (indígena e, sobretudo, africana). A independência (1822) manteve escravidão, concentração de terra e exclusão política; a abolição (1888) veio sem inclusão dos libertos.",
    pontosChave: [
      "Açúcar (NE) e depois ouro (MG) organizaram o território, a economia e a urbanização colonial.",
      "Resistências constantes: quilombos (Palmares), revoltas escravas e irmandades negras.",
      "Periodização do Império: 1º Reinado, Regências (revoltas: Cabanagem, Malês, Farroupilha) e 2º Reinado (café).",
      "Lei de Terras (1850): terra só por compra; dificultou o acesso de libertos e imigrantes pobres.",
      "Abolição gradual e sem reforma: Eusébio de Queirós, Ventre Livre, Sexagenários, Áurea: a exclusão pós-1888 ecoa nas desigualdades atuais.",
    ],
    comoCaiNoEnem:
      "Quase sempre via documentos e imagens de época, conectando escravidão e suas heranças às desigualdades raciais de hoje. Resistência negra e indígena é ângulo recorrente.",
  },
  "Brasil República": {
    ideiaCentral:
      "Da República oligárquica (café com leite, voto de cabresto) à Era Vargas (trabalhismo, CLT, Estado Novo), da experiência democrática de 46-64 à ditadura civil-militar (AI-5, censura, tortura e 'milagre' concentrador), até a redemocratização e a Constituição Cidadã de 1988.",
    pontosChave: [
      "República Velha: coronelismo, política dos governadores e exclusão da maioria do voto.",
      "Vargas: leis trabalhistas como conquista E instrumento de controle; propaganda e culto ao líder no Estado Novo.",
      "1964-1985: atos institucionais, bipartidarismo, repressão e resistência (e o papel de artistas e imprensa).",
      "Constituição de 1988: direitos sociais, SUS, voto universal: referência obrigatória em temas de cidadania.",
      "Memória e justiça de transição: Comissão Nacional da Verdade no debate sobre a ditadura.",
    ],
    comoCaiNoEnem:
      "Charges, músicas de protesto e documentos analisados criticamente. A prova valoriza a relação entre autoritarismo, direitos e democracia, sempre amarrando com 1988.",
  },
  "História geral": {
    ideiaCentral:
      "Os marcos que estruturam o mundo moderno: Iluminismo e revoluções burguesas (Francesa: cidadania moderna), Revolução Industrial (capitalismo fabril, questão operária), imperialismo, guerras mundiais, fascismos, Guerra Fria e descolonização.",
    pontosChave: [
      "Revolução Francesa: igualdade jurídica e soberania popular; vocabulário político que usamos até hoje (direita/esquerda).",
      "Revolução Industrial: urbanização acelerada, trabalho fabril, sindicatos e as primeiras leis trabalhistas.",
      "Nazifascismo: crise do liberalismo, culto ao líder, propaganda e genocídio; o ENEM cobra os mecanismos, não só os fatos.",
      "Guerra Fria: mundo bipolar, corrida armamentista/espacial e guerras por procuração; reflexos no Brasil (1964).",
      "Antiguidade e medievo aparecem por contraste: democracia ateniense × moderna, feudalismo × capitalismo.",
    ],
    comoCaiNoEnem:
      "Interpretação de fontes (cartazes de propaganda, discursos, fotos) relacionando passado e presente: autoritarismos, direitos e cidadania são as lentes favoritas da banca.",
  },
  "Geografia agrária e urbana": {
    ideiaCentral:
      "No campo: concentração fundiária histórica, tensão entre agronegócio exportador e agricultura familiar (que produz a maior parte do alimento da mesa brasileira) e conflitos por terra. Na cidade: urbanização rápida e desigual, segregação socioespacial e déficit habitacional.",
    pontosChave: [
      "Êxodo rural + falta de planejamento = periferização, favelização e ocupação de áreas de risco.",
      "Especulação imobiliária empurra os pobres para longe; transporte e saneamento não acompanham.",
      "Problemas urbanos clássicos do ENEM: mobilidade, enchentes (impermeabilização), ilhas de calor, lixões.",
      "Modernização agrícola expulsa trabalhadores: máquina substitui braço e alimenta o êxodo.",
      "Estatuto da Cidade e função social da propriedade: instrumentos de cidade mais justa.",
    ],
    comoCaiNoEnem:
      "Mapas, tabelas de estrutura fundiária e fotos de paisagens urbanas, pedindo a relação entre processo (especulação, êxodo) e problema (favela, enchente).",
  },
  "Geopolítica e globalização": {
    ideiaCentral:
      "A globalização integra mercados, informações e culturas, mas de forma desigual: fluxos de capital são livres, fluxos de pessoas são barrados. Multinacionais fragmentam a produção pelo planeta (DIT) e blocos econômicos negociam em escala regional.",
    pontosChave: [
      "Divisão Internacional do Trabalho: países centrais concentram tecnologia e finanças; periféricos, commodities e manufatura barata.",
      "Migrações e refúgio: motivações econômicas, climáticas e de conflito; xenofobia nos destinos.",
      "Blocos: Mercosul, União Europeia (estágios de integração diferentes); BRICS como articulação do Sul global.",
      "Globalização cultural: homogeneização (consumo padronizado) × resistências e hibridismos locais.",
      "Tecnologia e trabalho: plataformas, precarização e a nova geografia do emprego.",
    ],
    comoCaiNoEnem:
      "Textos e charges sobre migração, comércio global e cultura de consumo, cobrando leitura crítica das assimetrias da globalização: quem ganha e quem fica de fora.",
  },
  "Geografia física e meio ambiente": {
    ideiaCentral:
      "Clima, relevo, solo e água como sistemas interligados: os domínios morfoclimáticos brasileiros condensam essa relação. Ação humana (desmatamento, impermeabilização, poluição) desorganiza esses sistemas e devolve o problema em forma de desastre.",
    pontosChave: [
      "Fatores do clima: latitude, altitude, maritimidade, massas de ar (a friagem na Amazônia e a seca do sertão têm explicação).",
      "Bacias hidrográficas: divisores de água, usos múltiplos e conflitos; o Cerrado como 'caixa d'água' do Brasil.",
      "Erosão e voçorocas: solo exposto + chuva; mata ciliar protege rios de assoreamento.",
      "El Niño/La Niña alteram chuvas no Brasil (seca no Norte/NE, chuva no Sul, e vice-versa).",
      "Mudanças climáticas: eventos extremos mais frequentes; populações pobres são as mais vulneráveis (racismo/injustiça ambiental).",
    ],
    comoCaiNoEnem:
      "Climogramas, perfis de relevo e notícias de desastres, sempre perguntando a CAUSA integrada (natural + humana) e quem sofre mais com as consequências.",
  },
  Filosofia: {
    ideiaCentral:
      "Da pergunta socrática à crítica contemporânea: Sócrates (saber que não sabe), Platão (mundo das ideias), Aristóteles (ética da virtude como hábito), contratualistas (Hobbes, Locke, Rousseau: origem do Estado), Kant (dever e autonomia) e Nietzsche (crítica da moral).",
    pontosChave: [
      "Mito da caverna: aparência × essência, senso comum × conhecimento; a banca adora atualizá-lo para redes sociais.",
      "Ética: Aristóteles (virtude, justa medida) × Kant (agir por dever, imperativo categórico) × utilitarismo (consequências).",
      "Contratualismo: Hobbes (Estado forte contra o caos), Locke (direitos naturais, base liberal), Rousseau (vontade geral).",
      "Escola de Frankfurt: indústria cultural transforma cultura em mercadoria e padroniza comportamentos.",
      "Foucault: poder disciplinar e vigilância (escolas, prisões, e hoje, dados).",
    ],
    comoCaiNoEnem:
      "Um trecho curto do filósofo + situação atual: a questão pede para identificar o conceito em ação. Dominar 10-12 conceitos-chave vale mais que decorar biografias.",
  },
  "Sociologia, trabalho e cidadania": {
    ideiaCentral:
      "Os clássicos explicam o presente: Durkheim (fato social, coesão), Weber (ação social, burocracia, ética protestante) e Marx (classes, mais-valia, alienação). Mundo do trabalho: do fordismo à uberização, com direitos em disputa permanente.",
    pontosChave: [
      "Marx: quem vive do trabalho × quem detém os meios de produção; alienação quando o trabalhador não se reconhece no que produz.",
      "Trabalho contemporâneo: terceirização, informalidade e plataformas (autonomia aparente, controle algorítmico).",
      "Cidadania: direitos civis, políticos e sociais (Marshall); no Brasil, conquista desigual e inacabada.",
      "Movimentos sociais (negro, feminista, LGBTQIA+, ambientalista, MST) como motores de direitos.",
      "Desigualdade brasileira: renda, raça e gênero se cruzam (interseccionalidade).",
    ],
    comoCaiNoEnem:
      "Textos sobre uberização, desigualdade e participação política, pedindo o conceito sociológico que ilumina o caso. Citações de Marx, Weber e Durkheim aparecem literalmente.",
  },
  "Cultura, identidade e povos tradicionais": {
    ideiaCentral:
      "Cultura é tudo que o ser humano cria e significa: material e imaterial. O Brasil se formou de matrizes indígenas, africanas e europeias em relação desigual; valorizar povos indígenas, quilombolas e demais comunidades tradicionais é pauta constitucional (arts. 215-216, 231).",
    pontosChave: [
      "Etnocentrismo julga outras culturas pela régua da própria; relativismo busca compreendê-las em seus termos.",
      "Patrimônio imaterial: saberes, festas e ofícios registrados pelo IPHAN (capoeira, frevo, modo de fazer queijo minas...).",
      "Terras indígenas e territórios quilombolas: demarcação como condição de existência física e cultural.",
      "Indústria cultural × culturas populares: apropriação, resistência e ressignificação.",
      "Identidades são construções históricas, não essências: o ENEM cobra essa visão antropológica.",
    ],
    comoCaiNoEnem:
      "Fotos de manifestações culturais, textos antropológicos e conflitos territoriais. Foi tema de redação em 2022 (povos tradicionais) e 2024 (herança africana): transversal a toda a prova.",
  },
  "Estado, política e direitos": {
    ideiaCentral:
      "O Estado democrático de direito submete todos (inclusive governantes) à lei, separa poderes (Executivo, Legislativo, Judiciário) e garante direitos fundamentais. Democracia vai além do voto: participação, pluralismo e respeito a minorias.",
    pontosChave: [
      "Constituição de 1988: dignidade da pessoa humana como fundamento; direitos sociais (saúde, educação, trabalho) exigíveis do Estado.",
      "Direitos humanos são universais, indivisíveis e históricos (Declaração de 1948 após os horrores da guerra).",
      "Formas de participação: voto, conselhos, plebiscito, referendo, iniciativa popular de lei.",
      "Estado laico: liberdade religiosa para todos, sem religião oficial.",
      "Desinformação e ataques às instituições como riscos contemporâneos à democracia.",
    ],
    comoCaiNoEnem:
      "Artigos da Constituição e da Declaração de 1948 aplicados a casos concretos, e textos sobre qualidade da democracia. É o vocabulário-base para a proposta de intervenção da redação.",
  },

  /* ------------------------------ Linguagens ----------------------------- */
  "Língua estrangeira (inglês/espanhol)": {
    ideiaCentral:
      "As 5 questões de língua estrangeira são de LEITURA: ideia geral, propósito do texto e inferência. Você não precisa traduzir palavra por palavra: precisa entender o que o texto faz e para quem.",
    pontosChave: [
      "Leia primeiro o comando da questão (em português): ele diz o que procurar no texto.",
      "Use cognatos e contexto; cuidado com falsos cognatos (pretend = fingir; actually = na verdade; embarazada = grávida).",
      "Em poemas, tirinhas e cartazes, o sentido global e o tom (ironia, crítica, humor) valem mais que detalhes.",
      "As alternativas erradas costumam distorcer um detalhe verdadeiro do texto: confira a afirmação INTEIRA.",
      "Gêneros frequentes: notícia, campanha, poema, tirinha, letra de música: pergunte-se sempre 'qual o propósito?'",
    ],
    comoCaiNoEnem:
      "Cinco questões de interpretação direta. Quem treina ler textos autênticos curtos (manchetes, tiras, posts) ganha esses pontos com consistência.",
  },
  "Gêneros textuais e funções da linguagem": {
    ideiaCentral:
      "Cada gênero (notícia, editorial, charge, propaganda, crônica, meme) tem propósito, público e linguagem próprios. As funções da linguagem indicam a ênfase: referencial (informar), conativa (convencer: propagandas), emotiva (1ª pessoa), poética (forma), fática (contato) e metalinguística (a língua explicando a si mesma).",
    pontosChave: [
      "Pergunte do texto: quem fala, para quem, com que intenção, em que suporte?",
      "Propaganda e campanha = função conativa: imperativos, apelo direto ao leitor ('Vacine-se').",
      "Charge e cartum: crítica por imagem + ironia; exigem ligar o desenho ao contexto social.",
      "Editorial defende a opinião do veículo; notícia (em tese) informa; artigo de opinião é assinado.",
      "Intertextualidade: um texto que cita/parodia outro; o ENEM cobra reconhecer o diálogo.",
    ],
    comoCaiNoEnem:
      "Identificar o propósito comunicativo do gênero e a função da linguagem predominante. Charges e propagandas aparecem TODOS os anos.",
  },
  "Variação linguística": {
    ideiaCentral:
      "A língua varia por região, grupo social, situação e tempo, e nenhuma variedade é 'errada': existe adequação ao contexto. A norma-padrão é uma das variedades, exigida em situações formais, e o preconceito linguístico é preconceito social disfarçado.",
    pontosChave: [
      "Tipos: diatópica (região), diastrática (grupo social), diafásica (formal/informal), diacrônica (tempo).",
      "Adequação > correção: o 'erro' é usar o registro inadequado para a situação.",
      "Textos com fala regional/popular (Patativa do Assaré, cordel, rap) valorizam a variedade, não a ridicularizam.",
      "Gírias e internetês são legítimos em seus contextos; a prova cobra reconhecer o efeito de sentido.",
      "Marcos Bagno e a crítica ao preconceito linguístico: visão adotada pela banca.",
    ],
    comoCaiNoEnem:
      "Textos em variedade popular ou regional perguntando o papel daquela escolha. A alternativa que trata a variedade como 'errada' ou 'inferior' está SEMPRE incorreta.",
  },
  "Literatura brasileira": {
    ideiaCentral:
      "Linha do tempo essencial: Barroco (conflito fé/razão), Arcadismo, Romantismo (idealização; 3 gerações), Realismo/Naturalismo (Machado: crítica social e ironia), Parnasianismo/Simbolismo, Pré-Modernismo (Euclides, Lima Barreto), Modernismo (Semana de 22; Drummond, Clarice, Guimarães) e contemporâneos (Conceição Evaristo).",
    pontosChave: [
      "Modernismo de 22: ruptura com o academicismo, verso livre, língua brasileira, antropofagia (Oswald: devorar o estrangeiro e criar o próprio).",
      "Machado de Assis: narrador irônico e não confiável; análise psicológica e crítica das elites.",
      "O ENEM compara textos: poema romântico × moderno, mesma cena em autores diferentes.",
      "Literatura engajada: Castro Alves (abolicionista), João Cabral, Carolina Maria de Jesus e Conceição Evaristo (vozes negras e periféricas).",
      "Mais que datas, a prova cobra LER o texto literário: tema, tom, recursos expressivos.",
    ],
    comoCaiNoEnem:
      "Fragmentos de poemas e prosa para interpretar, às vezes pareados. Conhecer o projeto de cada movimento ajuda a situar o texto mesmo sem conhecer o autor.",
  },
  "Gramática e semântica no texto": {
    ideiaCentral:
      "No ENEM, gramática é cobrada A SERVIÇO do sentido: o efeito da pontuação, o valor de um conectivo, a ambiguidade de um pronome, a escolha de um tempo verbal. A pergunta nunca é 'classifique', é 'que efeito produz?'",
    pontosChave: [
      "Conectivos mudam tudo: mas (oposição), porque (causa), embora (concessão), portanto (conclusão).",
      "Pontuação expressiva: travessão, aspas (ironia/citação), reticências (suspense) e a vírgula que muda o sentido.",
      "Referenciação: a quem 'ele', 'isso', 'cujo' se referem? Ambiguidade é tema de questão.",
      "Sentido literal × figurado: metáfora, metonímia, hipérbole, ironia, eufemismo.",
      "Polissemia e ambiguidade no humor: muitas piadas de tirinha nascem do duplo sentido.",
    ],
    comoCaiNoEnem:
      "Tirinhas e textos curtos perguntando o efeito de um recurso linguístico específico. Releia a frase substituindo o recurso: se o sentido muda, você achou a resposta.",
  },
  "Artes e cultura visual": {
    ideiaCentral:
      "Ler obras de arte como textos: o que a forma (cor, traço, composição, técnica) comunica. Vanguardas europeias (cubismo, surrealismo, expressionismo) romperam com a representação fiel; no Brasil, a Semana de 22 e nomes como Tarsila, Portinari (denúncia social) e Aleijadinho (barroco).",
    pontosChave: [
      "Vanguardas: cubismo geometriza, surrealismo onírico, expressionismo deforma para expressar emoção, dadaísmo nega a arte tradicional.",
      "Antropofagia de Tarsila/Oswald: 'Abaporu' como símbolo de devorar influências e criar identidade.",
      "Portinari ('Retirantes') e a arte como denúncia social: par perfeito com temas de migração e seca.",
      "Arte contemporânea: performance, instalação, grafite (Os Gêmeos): a pergunta 'isso é arte?' é a própria questão.",
      "Música, dança e teatro também caem: tropicália, samba, capoeira como patrimônio.",
    ],
    comoCaiNoEnem:
      "Reprodução de obra + pergunta sobre características do movimento ou diálogo com o contexto social. Descrever mentalmente a imagem antes das alternativas evita ciladas.",
  },
  "Tecnologia, mídia e comunicação": {
    ideiaCentral:
      "Os gêneros digitais (post, meme, podcast, thread) reconfiguram a comunicação: linguagem multimodal (texto + imagem + som), viralização e a crise de confiança trazida pelas fake news. O ENEM cobra leitura crítica desse ecossistema.",
    pontosChave: [
      "Meme é gênero: humor + crítica + intertextualidade em alta compressão.",
      "Fake news: estrutura que imita jornalismo, apelo emocional, ausência de fonte; checagem como prática de leitura.",
      "Algoritmos personalizam o que você vê: bolhas e câmaras de eco empobrecem o debate.",
      "Cibercultura: novas sociabilidades, exposição de si, cancelamento e cyberbullying.",
      "Multimodalidade: sentido construído pela soma de linguagens (imagem + legenda + áudio).",
    ],
    comoCaiNoEnem:
      "Posts, memes e campanhas digitais como corpus, perguntando efeitos de sentido e impactos sociais das redes. Tema em ascensão constante na prova.",
  },
  "Esporte e cultura corporal": {
    ideiaCentral:
      "A Educação Física no ENEM trata o corpo e suas práticas como cultura: esporte (com regras e rendimento), jogo (lúdico), luta, ginástica e dança expressam valores sociais e disputas (gênero no esporte, padrões de corpo, mercantilização).",
    pontosChave: [
      "Esporte de rendimento × lazer × educacional: mesmo futebol, lógicas diferentes.",
      "Capoeira: luta, dança e jogo: resistência cultural afro-brasileira e patrimônio imaterial.",
      "Corpo e padrões de beleza: pressão estética, saúde × aparência, distúrbios alimentares.",
      "Mulheres no esporte: invisibilidade histórica, desigualdade de prêmios e cobertura na mídia.",
      "Sedentarismo e atividade física como questão de saúde pública.",
    ],
    comoCaiNoEnem:
      "Textos sobre práticas corporais relacionando-as a identidade, saúde e sociedade. A leitura sociocultural (não técnica) do esporte é o que a banca quer.",
  },
  "Interpretação de texto": {
    ideiaCentral:
      "A competência transversal de Linguagens: identificar tese e argumentos, distinguir fato de opinião, perceber ironia e pressupostos, e comparar textos. Quem domina os procedimentos de leitura ganha pontos em TODAS as áreas da prova.",
    pontosChave: [
      "Localize a tese (geralmente no início ou fim) e como cada parágrafo a sustenta.",
      "Fato é verificável; opinião carrega julgamento (adjetivos e modalizadores entregam: 'infelizmente', 'é preciso').",
      "Ironia: o texto diz uma coisa significando outra; o contexto denuncia.",
      "Cuidado com alternativas extremas ('sempre', 'nunca', 'todos'): o texto raramente autoriza generalizações.",
      "A resposta certa se apoia no TEXTO, não no seu conhecimento prévio ou opinião.",
    ],
    comoCaiNoEnem:
      "É a habilidade nº 1 da prova inteira. Estratégia: leia o comando antes do texto longo, sublinhe a tese e elimine alternativas que extrapolam o que está escrito.",
  },
};

/** Prompt para o aluno se aprofundar no conteúdo com a IA que preferir. */
export function promptAprofundar(topico: string, areaLabel: string): string {
  return `Você é um professor experiente preparando um aluno do ensino médio para o ENEM. Explique o conteúdo "${topico}" (área de ${areaLabel}) de forma didática e direta.

Estruture assim:
1. Os conceitos essenciais explicados em linguagem simples.
2. As fórmulas, definições ou datas que eu realmente preciso memorizar (se houver).
3. Dois exemplos resolvidos passo a passo, no estilo das questões contextualizadas do ENEM.
4. As pegadinhas e erros mais comuns que a prova explora nesse assunto.
5. Um mini-exercício para eu resolver agora (com o gabarito comentado no final).

Seja objetivo e foque no que cai na prova.`;
}
