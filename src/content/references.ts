/** Fontes de consulta e materiais identificados. Não confundir com leituras comprovadamente realizadas. */
export interface PortfolioReference { id: string; title: string; detail: string; url?: string; related?: string; }
export const referenceGroups: { title: string; introduction: string; items: PortfolioReference[] }[] = [
  {
    title: 'Materiais e registros da disciplina',
    introduction: 'Atividades documentadas no semestre. Os links apontam para os materiais informados pela autora; alguns podem exigir autenticação.',
    items: [
      { id: 'r-pote', title: 'Diário de campo: Do pote de grãos e papel à keffiyeh', detail: 'Registro da atividade inicial e discussão a partir de Giddens.', url: 'https://drive.google.com/file/d/1P8ju4gFCsHWQicv1jn2-w60nGJG2vnk-/view?usp=sharing', related: '#aula-do-pote' },
      { id: 'r-rec', title: 'Diário de campo: REC’n’Play, 8ª edição', detail: 'Encontros, soberania digital e percursos pelo Recife.', url: 'https://docs.google.com/document/d/1vbyi2xtG0noLpLiizMyz4au7J0j30Vnf/edit?usp=sharing&ouid=118372244558731830283&rtpof=true&sd=true', related: '#rec-soberania' },
      { id: 'r-perfil', title: 'Diário de campo: perfil socioeconômico, cultural e individualidades', detail: 'Relato autoral e fotografias dos gráficos da turma, 17 ago. 2026.', url: 'https://docs.google.com/document/d/1n39_PP-ui5eePD_F2m_ItWfi6evTyyZ77KVz5P9oXvw/edit?usp=sharing', related: '#perfil-socioeconomico' },
      { id: 'r-cine', title: 'Diário de campo: Cine Sócio', detail: 'Registros de exibição e discussão dos curtas.', url: 'https://docs.google.com/document/d/1u5hQ15MOKBorx1NtXE65dMvv5lHkyz1xgjMmN6g9RPI/edit?usp=sharing', related: '#cine-socio' },
      { id: 'r-org', title: 'Organizações na modernidade', detail: 'Material indicado na disciplina, conteúdo integral ainda não conferido.', url: 'https://drive.google.com/file/d/1C7mvMdhJv0WhAsMRwBHQCht1GlTwK7vS/view?usp=classroom_web&authuser=0', related: '#organizacoes-na-modernidade' },
      { id: 'r-ciclo', title: 'Apresentação do ciclo de leitura', detail: 'Produção disponibilizada pela autora.', url: 'https://canva.link/verde-ciclo-de-leituras', related: '#ciclo-de-leitura' },
      { id: 'r-info', title: 'Infográfico', detail: 'Produção visual da disciplina; tema não atribuído sem consultar o arquivo.', url: 'https://drive.google.com/file/d/1NJDHRSOTOw8Lr7NJWaq-y7P9iL4J2Xj_/view?usp=sharing', related: '#atividades' },
    ]
  },
  {
    title: 'Leituras e referências para aprofundamento',
    introduction: 'Obras e fontes verificáveis relacionadas aos conceitos e filmes mencionados nos relatos. Nem todas são materiais distribuídos pela professora ou leituras integrais realizadas pela autora.',
    items: [
      { id: 'r-crenshaw', title: 'CRENSHAW, Kimberlé. Demarginalizing the Intersection of Race and Sex (1989).', detail: 'University of Chicago Legal Forum. Referência para interseccionalidade.', url: 'https://chicagounbound.uchicago.edu/uclf/vol1989/iss1/8/', related: '#raca-etnicidade' },
      { id: 'r-lelia', title: 'GONZALEZ, Lélia. Racismo e sexismo na cultura brasileira (1984).', detail: 'Registro bibliográfico da Biblioteca Digital da UnB.', url: 'https://bds.unb.br/handle/123456789/1141', related: '#raca-etnicidade' },
      { id: 'r-dubois', title: 'DU BOIS, W. E. B. The Souls of Black Folk (1903).', detail: 'Contextualização do conceito de dupla consciência na Stanford Encyclopedia of Philosophy.', url: 'https://plato.stanford.edu/entries/double-consciousness/', related: '#raca-etnicidade' },
      { id: 'r-mbembe', title: 'MBEMBE, Achille. Necropolítica. n-1 edições, 2018.', detail: 'Ficha da editora; a edição pessoal utilizada pela autora não foi conferida.', url: 'https://n-1edicoes.org/publicacoes/necropolitica/', related: '#achille-mbembe' },
      { id: 'r-mayo', title: 'Harvard Business School. The Human Relations Movement.', detail: 'Acervo histórico sobre as pesquisas de Hawthorne e a contribuição de Elton Mayo.', url: 'https://www.library.hbs.edu/hc/hawthorne/intro.html', related: '#karl-marx' },
      { id: 'r-flores', title: 'FURTADO, Jorge. Ilha das Flores (1989).', detail: 'Página da Casa de Cinema de Porto Alegre.', url: 'https://arquivo.casacinepoa.com.br/os-filmes/produção/curtas/ilha-das-flores.html', related: '#cine-socio' },
      { id: 'r-meow', title: 'MAGALHÃES, Marcos. Meow! (1981).', detail: 'Ficha de exibição do CINUSP e contextualização do curta.', url: 'https://cinusp.webhostusp.sti.usp.br/mostra/2021/07/animacoes_de_nuestra_america/filme/meow', related: '#cine-socio' },
      { id: 'r-giddens', title: 'GIDDENS, Anthony. Leitura sobre indivíduo e sociedade.', detail: 'Obra/edição exata indicada na disciplina ainda precisa ser conferida no diário original.', related: '#anthony-giddens' },
      { id: 'r-marx', title: 'SELL, Carlos Eduardo. Capítulo sobre Karl Marx, material indicado (2001).', detail: 'Título completo e edição não foram confirmados na documentação disponível.', related: '#karl-marx' },
      { id: 'r-corpo', title: 'Corpo-Capital (2021) e High Noon (1988), de Viktor Kubal.', detail: 'Curtas identificados pela autora como integrantes do Cine Sócio; fichas completas não verificadas.', related: '#cine-socio' },
    ]
  },
  {
    title: 'Projetos da autora',
    introduction: 'Projetos apresentados pela autora e seus endereços de acesso ou demonstração.',
    items: [
      { id: 'r-ideia', title: 'IDEIA, residência Embarque Digital, SJCC.', detail: 'Segundo projeto desenvolvido em grupo; sugestões de títulos e conteúdos a partir de palavras-chave.', url: 'https://ideia-sjcc.vercel.app/', related: '#projetos' },
      { id: 'r-contagia', title: 'ContagIA, projeto para a Globo.', detail: 'Ferramenta de transcrição de áudio e geração de EDL com inteligência artificial.', url: 'https://globo-residencia.vercel.app/', related: '#projetos' },
      { id: 'r-tetris', title: 'Tetris, projeto de disciplina.', detail: 'Vídeo demonstrativo do projeto desenvolvido durante a formação em tecnologia.', url: 'https://www.youtube.com/watch?v=8B70ke0Ml5c', related: '#projetos' },
    ]
  },
  {
    title: 'Fontes sobre a Fundação Joaquim Nabuco',
    introduction: 'Referências consultadas para contextualizar a trajetória de Túlio Velho Barreto, apresentada no relato da visita.',
    items: [
      { id: 'r-tulio1', title: 'Equipe PIBIC/Fundaj: Túlio Velho Barreto.', detail: 'Informações biográficas, formação e atuação como pesquisador desde 1984.', url: 'https://sociolabfundaj.wixsite.com/pibicemfundaj1ed/equipe', related: '#fundaj' },
      { id: 'r-tulio2', title: 'Seminário Manuel Correia de Andrade (USP, 2023).', detail: 'Informações sobre a coordenação de Estudos Sociais e Culturais.', url: 'https://sites.usp.br/pmca/seminariopmca2023/', related: '#fundaj' },
      { id: 'r-tulio3', title: 'Jornal do Commercio, 18 ago. 2025.', detail: 'Notícia sobre o trabalho e a atuação na direção de Memória, Educação, Cultura e Arte.', url: 'https://jc.uol.com.br/pernambuco/2025/08/18/coloquio-no-recife-vai-abordar-historias-e-acervos-do-abolicionismo-e-do-pos-abolicao.html', related: '#fundaj' },
    ]
  }
];
