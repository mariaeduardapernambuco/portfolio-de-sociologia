# Portfólio de Sociologia

Portfólio acadêmico autoral de Maria Eduarda Pernambuco Souza Leão, produzido em **React + TypeScript + Vite**. O projeto usa navegação por âncoras, arquivo de sete atividades e conteúdo editável separado da apresentação.

## Executar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Validar para produção

```bash
npm run build
npm run preview
```

O Vite gera a versão estática em `dist/`.

## Editar o conteúdo

| Alteração | Arquivo |
| --- | --- |
| Dois parágrafos de apresentação e foto de capa | `src/content/site.ts` |
| Entradas do diário de pesquisa | `src/content/research.ts` |
| Entradas do diário de leitura | `src/content/readings.ts` |
| Autoavaliação, avaliação e encerramento | `src/content/assessment.ts` |
| URLs, títulos e vínculos dos sete materiais | `src/content/activities.ts` |
| Cores e tipografias | `src/styles/tokens.css` |
| Composições e interações | `src/styles/global.css` |
| Adaptação de telas estreitas | `src/styles/responsive.css` |

### Fotografia de capa

A fotografia original foi incorporada em `public/images/portfolio-main.jpeg`, no arquivo original, sem alterações destrutivas. A capa exibe um recorte circular por CSS, centralizado para manter o rosto e a mão com o celular visíveis. O caminho está cadastrado em `src/content/site.ts`. Para substituí-la, atualize esse arquivo preservando o mesmo nome ou altere o caminho em `heroPhoto`.

### Inserir fotos dos diários

1. Coloque as imagens reais em `public/images/`.
2. Encontre a entrada relevante em `src/content/research.ts` e preencha `images`:

```ts
images: [
  {
    src: '/images/fundaj-visita.jpeg',
    alt: 'Descrição factual do que aparece na fotografia',
    caption: 'Legenda confirmada no registro original',
    credit: 'Crédito conhecido, se houver',
  },
],
```

3. Para corrigir legenda, altere `caption` no mesmo registro. Com pelo menos duas fotografias documentais, o componente `PhotoEssay` pode apresentar uma montagem em fundo carvão. Entradas sem imagens não mostram placeholders.

### Editar um relato ou uma atividade

Em `research.ts` e `readings.ts`, ajuste `title`, `paragraphs`, `question`, `images` e `activityIds`. Para adicionar uma atividade, crie um registro no objeto `activities` em `activities.ts` e inclua seu identificador em `activityOrder`. A URL deve ser declarada **uma única vez** ali; o índice e os relatos a reutilizam.

## Publicar na Vercel

1. Coloque esta pasta em um repositório GitHub, GitLab ou Bitbucket.
2. Entre na Vercel e escolha **Add New → Project**.
3. Importe o repositório.
4. Configure **Framework Preset: Vite**, **Build Command: `npm run build`** e **Output Directory: `dist`**.
5. Faça o deploy, abra a URL publicada e teste navegação, layout móvel e materiais externos.

É possível publicar também com Vercel CLI caso o ambiente esteja autorizado, mas nenhum deploy é presumido neste pacote.

## Acessibilidade e manutenção

O site utiliza títulos semânticos, `nav`, `main`, `section`, `article`, âncoras reais, estados de foco, link para pular ao conteúdo, textos alternativos para as imagens incluídas e respeito a `prefers-reduced-motion`. As quatro abas organizam-se em duas linhas no celular.

As fontes usam Google Fonts e possuem fallbacks. Se for necessário funcionamento integral offline, faça hospedagem local de arquivos de fontes licenciados adequadamente.

## Inventário e limites documentais

A implementação foi realizada com base no arquivo de prompt fornecido pela autora. **Já foram incorporados:** a fotografia original de apresentação e onze registros fotográficos relacionados à Fundaj, à Torre Malakoff, ao REC’n’Play e ao Cine Sócio. **Ainda não foram consultados:** os três PDFs de referência visual e o PDF do diário de campo original. Os sete endereços externos foram incluídos conforme fornecidos; a leitura do conteúdo e a permissão de acesso público não puderam ser verificadas pela ferramenta disponível.

Por isso:

- Não há fotografias apresentadas falsamente como registros acadêmicos.
- Os dois parágrafos aprovados de **Quem escreve** estão preservados integralmente.
- As narrativas complementares foram desenvolvidas a partir dos fatos narrados no prompt, sem inventar observações, falas ou títulos de obras não identificadas.
- A entrada **Organizações na modernidade** contém o título e o link, sem resumo inventado da fonte inacessível.
- A seção sobre perfil socioeconômico explicita que o diário completo não foi consultado; evita qualquer dado de colegas.
- O capítulo de Marx não apresenta uma referência bibliográfica completa porque a edição não foi confirmada nos arquivos.
- O índice não promete que os links estejam abertos ao público; eles podem exigir permissões do Google/Canva.

**Para finalizar a versão documental:** consultar o diário de campo e as referências visuais; conferir os relatos com esses registros; revisar as permissões dos sete links antes da entrega à professora. A classificação das fotos da Torre Malakoff e do Cais do Sertão foi corrigida conforme identificação fornecida pela autora.

## Prévia independente de instalação

Além do código-fonte React, foi incluído `preview/portfolio-preview-autocontido.html`. Ele contém **o mesmo conteúdo e CSS exportados do projeto**, em um único HTML que pode ser aberto no navegador sem instalar nada. As capturas de tela da versão anterior foram retiradas do pacote para evitar mostrar um layout desatualizado. Abra `preview/portfolio-preview-autocontido.html` para ver o portfólio completo com as fotografias atualizadas.

O preview tem âncoras, abas e indicador de progresso em JavaScript nativo; é uma amostra estática, **não** substitui `npm run build` nem o deploy de produção.

## Relatório de validação deste pacote

- 16 arquivos TS/TSX: sintaxe analisada, 0 erros de parse na exportação revisada.
- 13 entradas editoriais: 8 registros de pesquisa e 5 leituras.
- Todos os links internos no HTML exportado têm destinos existentes.
- 7 endereços externos distintos preservados; apresentados em 15 pontos de acesso.
- Layout previamente inspecionado em 1365 × 900 e 390 × 844 antes desta revisão. Nesta atualização, o HTML com as novas imagens foi exportado e validado; novas capturas pelo navegador não puderam ser concluídas neste ambiente.
- **Build Vite pendente:** este ambiente não conseguiu acessar o registro npm para instalar `react`, `vite` e as demais dependências. Não foi possível executar `npm run build`; rode `npm install && npm run build` em um ambiente com acesso ao registro npm antes de publicar.
- **Publicação pendente:** nenhuma hospedagem ou URL pública foi criada nesta execução.
