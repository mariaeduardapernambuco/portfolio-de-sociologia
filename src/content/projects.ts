/** Projetos relatados pela autora. As capas usam capturas cedidas pela autora e uma miniatura do vídeo do Tetris. */
export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  url: string;
  cover: string;
  action: string;
}
export const projects: Project[] = [
  {
    id: 'ideia-sjcc', title: 'IDEIA', eyebrow: 'Embarque Digital · residência em grupo · SJCC',
    description: 'Segundo projeto desenvolvido em grupo durante minha residência como bolsista do Embarque Digital, para o Sistema Jornal do Commercio. A partir de palavras-chave, a ferramenta sugere títulos e ideias de conteúdos.',
    url: 'https://ideia-sjcc.vercel.app/', cover: '/images/capa-ideia-real.png', action: 'Conhecer o projeto'
  },
  {
    id: 'globo-residencia', title: 'ContagIA', eyebrow: 'Residência tecnológica · Globo',
    description: 'Projeto desenvolvido para a Globo que utiliza inteligência artificial para transcrever áudios e gerar EDLs, apoiando o trabalho de edição de conteúdo audiovisual.',
    url: 'https://globo-residencia.vercel.app/', cover: '/images/capa-contagia-real.png', action: 'Conhecer o projeto'
  },
  {
    id: 'tetris', title: 'Tetris', eyebrow: 'Projeto de disciplina · CESAR School',
    description: 'Tetris desenvolvido para uma disciplina na CESAR School. Um exercício de programação e raciocínio lógico que apresentei em vídeo.',
    url: 'https://www.youtube.com/watch?v=8B70ke0Ml5c', cover: '/images/tetris.png', action: 'Assistir ao vídeo'
  }
];
