# Simulado ENEM

Simulados gratuitos com **questões oficiais do ENEM (2019–2023)**, sem login e sem cadastro. Monte a prova do seu jeito, responda no ritmo do exame e receba um diagnóstico do que estudar.

## Funcionalidades

- **Simulado rápido**: 20 questões de todas as áreas em um clique.
- **Simulado personalizado**: escolha as áreas (Linguagens, Humanas, Natureza, Matemática), a quantidade de questões por área (até 45, como na prova real) e o idioma da língua estrangeira (inglês ou espanhol).
- **Cronômetro opcional** no ritmo da prova (3 min por questão), com pausa e encerramento automático.
- **Experiência de prova**: navegação entre questões, mapa de questões por área, marcação para revisão, atalhos de teclado (A–E respondem, ← → navegam, F marca, M abre o mapa).
- **Progresso salvo no navegador**: feche a aba e continue depois (localStorage, sem servidor).
- **Resultado com diagnóstico**: desempenho geral e por área, revisão completa com gabarito e **recomendações de estudo por assunto** com base nos seus erros.
- **Histórico** dos últimos resultados.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS v4
- Questões via [enem.dev](https://enem.dev) (API pública e open source), baixadas para JSON estático em `src/data/questions/`

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Atualizando as questões

As questões ficam versionadas no repositório. Para baixar de novo (ou incluir mais anos):

```bash
# 5 anos mais recentes disponíveis na API
node scripts/fetch-questions.mjs

# ou um intervalo específico
node scripts/fetch-questions.mjs 2015 2023
```

Ao adicionar anos novos, registre os imports correspondentes em `src/lib/pool.ts`. Questões com falha de parsing na fonte (sem enunciado ou sem gabarito) são descartadas automaticamente.

## Estrutura

```
src/
  app/                  # páginas (home, /simulado, /resultado) e API
  components/           # home, quiz, resultado, markdown
  lib/                  # tipos, gerador, pontuação, tópicos de estudo, storage
  data/questions/       # JSONs das provas (gerados pelo script)
scripts/
  fetch-questions.mjs   # download das questões da enem.dev
```

## Aviso

Projeto de estudo independente, sem vínculo com INEP ou MEC. As notas exibidas são percentuais de acerto simples (a nota TRI oficial do ENEM não é calculada). Os dados do usuário ficam apenas no navegador.
