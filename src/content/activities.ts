export interface Activity {
  id: string;
  title: string;
  url: string;
  category: 'Diário de campo' | 'Leitura' | 'Produção visual';
  relatedHref: string;
  relatedLabel: string;
}

/** Fonte única das URLs externas; o índice e as entradas consomem os mesmos registros. */
export const activities: Record<string, Activity> = {
  ciclo: {
    id: 'ciclo',
    title: 'Ver a apresentação do ciclo de leitura',
    url: 'https://canva.link/verde-ciclo-de-leituras',
    category: 'Leitura',
    relatedHref: '#ciclo-de-leitura',
    relatedLabel: 'Encerramento do ciclo de leitura',
  },
  organizacoes: {
    id: 'organizacoes',
    title: 'Sobre organizações na modernidade',
    url: 'https://drive.google.com/file/d/1C7mvMdhJv0WhAsMRwBHQCht1GlTwK7vS/view?usp=classroom_web&authuser=0',
    category: 'Leitura',
    relatedHref: '#organizacoes-na-modernidade',
    relatedLabel: 'Organizações na modernidade',
  },
  perfil: {
    id: 'perfil',
    title: 'Ler o diário de campo sobre perfil socioeconômico, cultural e individualidades',
    url: 'https://docs.google.com/document/d/1n39_PP-ui5eePD_F2m_ItWfi6evTyyZ77KVz5P9oXvw/edit?usp=sharing',
    category: 'Diário de campo',
    relatedHref: '#perfil-socioeconomico',
    relatedLabel: 'Perfil socioeconômico, cultural e individualidades',
  },
  cine: {
    id: 'cine',
    title: 'Ler o diário de campo do Cine Sócio',
    url: 'https://docs.google.com/document/d/1FaGu6tgv_swmDGdrunH6Ly3zkFWmzq5K/edit?usp=sharing&ouid=118372244558731830283&rtpof=true&sd=true',
    category: 'Diário de campo',
    relatedHref: '#cine-socio',
    relatedLabel: 'Cine Sócio',
  },
  rec: {
    id: 'rec',
    title: 'Ler o diário de campo da 8ª edição do REC’n’Play',
    url: 'https://docs.google.com/document/d/1vbyi2xtG0noLpLiizMyz4au7J0j30Vnf/edit?usp=sharing&ouid=118372244558731830283&rtpof=true&sd=true',
    category: 'Diário de campo',
    relatedHref: '#rec-soberania',
    relatedLabel: 'REC’n’Play e soberania digital',
  },
  pote: {
    id: 'pote',
    title: 'Ler o diário de campo “Do pote de grãos e papel a Keffiyeh”',
    url: 'https://drive.google.com/file/d/1P8ju4gFCsHWQicv1jn2-w60nGJG2vnk-/view?usp=sharing',
    category: 'Diário de campo',
    relatedHref: '#aula-do-pote',
    relatedLabel: 'A aula do pote',
  },
  infografico: {
    id: 'infografico',
    title: 'Abrir o infográfico',
    url: 'https://drive.google.com/file/d/1NJDHRSOTOw8Lr7NJWaq-y7P9iL4J2Xj_/view?usp=sharing',
    category: 'Produção visual',
    relatedHref: '#atividades',
    relatedLabel: 'Arquivo de atividades',
  },
};

export const activityOrder = ['pote', 'rec', 'perfil', 'cine', 'organizacoes', 'ciclo', 'infografico'];
