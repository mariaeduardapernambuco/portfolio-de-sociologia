import type { PortfolioEntry } from '../types';

/** Relatos desenvolvidos apenas a partir dos fatos expressos no prompt e das imagens fornecidas. Sem citações fictícias. */
export const researchEntries: PortfolioEntry[] = [
  {
    id: 'aula-do-pote',
    order: '01',
    kicker: 'Aula • Objetos e sociedade',
    title: 'Do pote de grãos e papel à keffiyeh',
    lead: 'No início da aula, o pote coberto por um tecido parecia despertar pouca atenção. Depois, o que estava ali embaixo passou a ocupar a conversa. Quando a professora revelou os grãos de café, a soja e os pedaços de papel, comecei a pensar no caminho daqueles grãos e em quem decide o que se produz. Volto a essa aula para abrir meu portfólio porque ali consigo perceber uma mudança no meu próprio olhar.',
    paragraphs: [
      'Um pote é um objeto pequeno para dar início a uma conversa tão grande. Mas o café e a soja, que podem parecer apenas produtos do cotidiano, carregam histórias de produção, circulação e trabalho. A aula me ajudou a deslocar a pergunta: em vez de olhar só para o que estava dentro do recipiente, comecei a pensar em tudo o que precisava acontecer fora dele para que aqueles grãos chegassem até ali.',
      'A discussão sobre a produção agrícola voltada à exportação e a agricultura familiar tornou essa mudança mais concreta. Não se trata apenas de diferentes modos de plantar. São também escolhas econômicas e políticas que envolvem a terra, o trabalho e quem pode decidir sobre o destino da produção. Os pedaços de papel faziam parte da composição, mas eu não consegui ler seu conteúdo; por isso, não quero atribuir a eles um significado que não registrei.',
      'A presença da keffiyeh e a conversa sobre o trabalho artesanal no Nordeste acrescentaram outras camadas à atividade. Um tecido pode carregar formas de produção, pertencimentos e histórias que não aparecem quando o observamos apenas como objeto. O pote acabou reunindo elementos que, à primeira vista, eu não pensaria em aproximar.',
      'A leitura de Anthony Giddens sobre indivíduo e sociedade me oferece uma maneira de continuar essa reflexão. O que vemos como coisa isolada está atravessado por relações sociais, hábitos, instituições e decisões coletivas. Saí da imagem do pote e cheguei à pergunta que gosto de manter aberta neste portfólio: quanto da sociedade está presente nas coisas mais comuns que usamos todos os dias?'
    ],
    question: 'O que uma coisa aparentemente simples revela quando acompanho o caminho que a trouxe até mim?',
    images: [],
    activityIds: ['pote'],
    related: { label: 'Ler a reflexão sobre Anthony Giddens', href: '#anthony-giddens' },
  },
  {
    id: 'fundaj',
    order: '02',
    kicker: 'Visita acadêmica • Instituição cultural',
    title: 'Fundação Joaquim Nabuco: um lugar que eu achava que conhecia',
    paragraphs: [
      'Eu já tinha frequentado áreas comuns da Fundação Joaquim Nabuco. Por isso, a visita acadêmica começou com uma sensação curiosa: eu estava voltando a um lugar conhecido, mas não exatamente para fazer o que costumava fazer ali. Conforme a experiência avançou, ficou mais claro para mim que passar por um espaço e compreender seu funcionamento são coisas diferentes.',
      'Quando entramos em contato com uma instituição cultural como visitantes, é fácil perceber a programação, os ambientes e aquilo que está à nossa frente. Olhar para o mesmo lugar a partir da Administração abre outra dimensão. Existe um trabalho de organização, manutenção, planejamento e cuidado que muitas vezes fica fora do nosso campo de visão, embora seja indispensável para que as atividades aconteçam.',
      'As imagens que registrei durante a visita reforçam isso. Há os cartazes na porta de vidro, a placa do Cinema da Fundação, o aviso de entrada restrita e o espaço do Massangana Vídeo Som. São detalhes diferentes, mas todos me fazem pensar na instituição para além do papel de visitante: programação, circulação, preservação, equipes e acesso aparecem distribuídos pelo espaço.',
      'A visita também chamou minha atenção para o fato de que a instituição enfrenta dificuldades. Não tenho elementos suficientes para descrever ou dimensionar essas questões, e seria injusto tentar preenchê-las com suposições. O que posso registrar é que esse contato tornou minha percepção do lugar menos superficial.',
      'Passei a pensar que uma instituição cultural não existe apenas para receber pessoas: ela precisa preservar, organizar, comunicar e criar condições para que diferentes públicos tenham acesso à cultura. É uma conexão com a Administração que me interessa justamente por não se resumir à gestão de empresas. Há organizações cuja importância aparece no que tornam possível para a sociedade.'
    ],
    question: 'Que trabalho precisa acontecer para que uma instituição cultural consiga abrir suas portas todos os dias?',
    images: [
      { src: '/images/fundaj-porta-cartazes.jpg', alt: 'Porta de vidro com cartazes de programação cultural na Fundação Joaquim Nabuco.', caption: 'Cartazes e programação na entrada do espaço, lembrando que a instituição também se comunica por esses detalhes.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-patio-grupo.jpg', alt: 'Pátio interno da Fundação Joaquim Nabuco com estudantes circulando.', caption: 'Circulação pelo espaço durante a visita acadêmica.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-entrada-restrita.jpg', alt: 'Aviso de entrada restrita para funcionários da Fundação Joaquim Nabuco.', caption: 'Um detalhe simples que me lembrou das áreas e trabalhos que nem sempre aparecem para quem visita.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-cinema.jpg', alt: 'Sinalização do Cinema da Fundação em uma parede iluminada.', caption: 'Cinema da Fundação: outro ponto do espaço que amplia a percepção da instituição como organização cultural.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-massangana.jpg', alt: 'Pátio com vegetação e parede identificada como Massangana Vídeo Som, da Fundação Joaquim Nabuco.', caption: 'Registro do espaço Massangana Vídeo Som durante a visita.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: [],
  },
  {
    id: 'rec-soberania',
    order: '03',
    kicker: 'REC’n’Play • Trabalho e tecnologia',
    title: 'Quem decide os rumos da tecnologia?',
    paragraphs: [
      'Tecnologia costuma ser um assunto próximo de mim. Estudo Análise e Desenvolvimento de Sistemas, atuo na área e gosto de pensar no que podemos construir com ela. Mesmo assim, durante a 8ª edição do REC’n’Play, uma conversa me levou a olhar menos para a ferramenta em si e mais para as relações que tornam sua existência possível.',
      'No evento, conheci o Sindicato dos Trabalhadores em Empresas de Informática, Processamento de Dados e Tecnologia da Informação de Pernambuco, o SINDPD/PE. O encontro com profissionais da área e a discussão sobre soberania digital aproximaram duas questões que às vezes aparecem separadas: o trabalho de quem desenvolve tecnologia e o poder de quem controla sua infraestrutura.',
      'A fotografia da roda de conversa me ajuda a guardar esse momento com mais concretude. Ela mostra pessoas reunidas em torno de uma discussão que, para mim, não ficou no nível abstrato dos sistemas. Havia ali trabalhadores pensando sobre a própria área e suas condições de atuação.',
      'A pergunta sobre onde guardamos nossos dados parece técnica, mas não termina em uma decisão de arquitetura de sistemas. Ela envolve organizações, fornecedores, dependências e possibilidades de controle. Para quem administra uma empresa ou instituição, escolher uma tecnologia é também decidir em quem confiar e quais relações estabelecer a longo prazo.',
      'O que ficou dessa conversa, ao organizar meu portfólio, foi a vontade de continuar pensando em que tipo de tecnologia desejo ajudar a construir. Não basta considerar se algo funciona; também quero perguntar para quem funciona, quem participa das decisões e quem assume as consequências quando elas afetam outras pessoas.'
    ],
    question: 'Quando utilizamos uma tecnologia, quem controla os dados, a infraestrutura e as decisões que estão por trás dela?',
    images: [
      { src: '/images/rec-sindpd.jpg', alt: 'Roda de conversa do SINDPD-PE durante o REC’n’Play 2026.', caption: 'Discussão sobre soberania digital com participantes do SINDPD-PE no REC’n’Play.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: ['rec'],
  },
  {
    id: 'torre-malakoff',
    order: '04',
    kicker: 'Percurso pela cidade • Cultura',
    title: 'Torre Malakoff: o percurso que aconteceu',
    paragraphs: [
      'Eu tinha planejado participar de uma mesa em que deputados e artistas debateriam as vozes do futuro e o hip-hop. Não consegui entrar. Essa diferença entre o que eu tinha programado e o que realmente aconteceu faz parte da experiência, então não quero apagá-la para deixar o relato mais organizado do que o dia foi.',
      'Com a mudança de planos, segui para a Torre Malakoff e visitei uma exposição. Uma das fotografias registra uma janela em arco e parte das obras expostas. Outra mostra, pela janela, o Cais do Sertão movimentado pelas pessoas que estavam no evento sobre vozes do futuro e hip-hop. Assim, o que eu tinha planejado e o caminho que acabei fazendo continuam presentes no mesmo relato. Não tenho aqui a identificação documental do título da mostra ou das obras, por isso prefiro não atribuir nomes.',
      'Em uma atividade fora da sala de aula, a cidade deixa de ser apenas o caminho entre dois endereços. Ela também oferece situações imprevistas, espaços que podemos conhecer melhor e escolhas que precisamos fazer no meio do trajeto. Nem tudo o que aprendemos começa com uma atividade concluída exatamente como foi planejada.',
      'Penso nessa mudança de rota sem transformá-la em uma grande lição. Eu queria estar em uma conversa sobre hip-hop; não consegui. Acabei em uma exposição na Torre Malakoff. Registrar os dois momentos é uma forma de manter a experiência inteira, inclusive aquilo que não saiu como eu imaginava.'
    ],
    images: [
      { src: '/images/torre-malakoff-exposicao.jpg', alt: 'Janela em arco e obras na exposição visitada na Torre Malakoff.', caption: 'Vista da exposição na Torre Malakoff, que visitei depois de não conseguir entrar na atividade planejada.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/torre-malakoff-vista-cais-do-sertao.jpg', alt: 'Vista pela janela para o Cais do Sertão, com pessoas reunidas durante o evento sobre vozes do futuro e hip-hop.', caption: 'Vista do Cais do Sertão, movimentado pelo evento sobre vozes do futuro e hip-hop.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: ['rec'],
  },
  {
    id: 'rec-cidade',
    order: '05',
    kicker: 'REC’n’Play • Recife',
    title: 'A cidade também participa',
    paragraphs: [
      'Sempre fico feliz quando participo do REC’n’Play. Uma parte desse sentimento vem de ver o centro do Recife ocupado por pessoas, conversas e atividades diferentes. Gosto de acompanhar o movimento da cidade quando espaços históricos passam a fazer parte de experiências de cultura, tecnologia e aprendizagem.',
      'As fotos do palco montado e da praça ocupada ajudam a registrar exatamente isso. Não é só o evento como programação; é o modo como ele se espalha pela cidade e muda a paisagem por algumas horas, com gente circulando, descansando, conversando e indo de uma atividade a outra.',
      'O que me chama a atenção não é só a programação do evento. É a possibilidade de circular, encontrar públicos diferentes e perceber que uma conversa sobre tecnologia pode acontecer perto de uma atividade artística ou de um comércio que segue o ritmo da região. Essa convivência me faz pensar no centro como um lugar de encontro, e não apenas como cenário.',
      'Também vejo nessa ocupação uma oportunidade de discutir o acesso ao conhecimento. Um evento espalhado pela cidade pode aproximar temas e pessoas que talvez não se encontrassem em espaços mais fechados. Isso não significa afirmar, sem dados, que todos conseguem participar nas mesmas condições; significa reconhecer a importância de continuar perguntando quem consegue ocupar e aproveitar esses lugares.',
      'Quando penso no REC’n’Play como parte do meu diário de Sociologia, percebo que a conversa sobre trabalho e tecnologia não ficou isolada. Ela aconteceu em uma cidade concreta, com sua história, suas desigualdades e suas possibilidades de convivência. Isso também faz parte do que aprendo quando saio para observar.'
    ],
    question: 'Quem pode viver a cidade como espaço de encontro, cultura e aprendizagem?',
    images: [
      { src: '/images/rec-palco.jpg', alt: 'Palco do REC’n’Play 2026 montado no centro do Recife.', caption: 'Uma das estruturas do evento no centro do Recife.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/rec-praca.jpg', alt: 'Praça do centro do Recife com palmeiras e pessoas durante o REC’n’Play.', caption: 'A ocupação da praça é uma das imagens que mais gosto de associar ao REC’n’Play.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: ['rec'],
  },
  {
    id: 'raca-etnicidade',
    order: '06',
    kicker: 'Pesquisa coletiva • Raça e etnicidade',
    title: 'Minha parte em uma pesquisa coletiva',
    paragraphs: [
      'Em uma atividade coletiva sobre raça e etnicidade, minha contribuição foi pesquisar textos, entrevistas e artigos relacionados a três intelectuais: Kimberlé Crenshaw, Lélia Gonzalez e W. E. B. Du Bois. Gosto de registrar esse recorte porque ele mostra o que fiz dentro do grupo, sem apresentar como exclusivamente meu um trabalho construído por várias pessoas.',
      'A interseccionalidade, associada à obra de Crenshaw, ajuda a entender por que diferentes formas de discriminação não podem ser estudadas como se sempre atuassem separadamente. A produção de Lélia Gonzalez também aproxima racismo, sexismo e a experiência brasileira, lembrando que as categorias sociais fazem parte de uma história concreta. Com Du Bois, encontrei o conceito de dupla consciência, importante para pensar tensões entre identidade, percepção de si e a maneira como a sociedade enxerga sujeitos racializados.',
      'Esses conceitos não são intercambiáveis, e também não cabem por inteiro em poucas linhas. O que posso fazer aqui é mostrar uma pergunta que a pesquisa me ajuda a formular hoje, especialmente quando penso na Administração: o que uma organização deixa de perceber sobre mulheres negras quando analisa raça e gênero separadamente?',
      'Essa questão importa porque decisões organizacionais são tomadas a partir de categorias, formulários, indicadores e interpretações. Quando simplificamos demais as experiências das pessoas, corremos o risco de não enxergar desigualdades que acontecem justamente na combinação entre fatores. A pesquisa não encerrou o assunto para mim; deu mais precisão ao tipo de pergunta que quero continuar fazendo.'
    ],
    question: 'O que uma organização deixa de perceber quando analisa raça e gênero separadamente?',
    images: [],
    activityIds: [],
  },
  {
    id: 'perfil-socioeconomico',
    order: '07',
    kicker: 'Atividade • Perfil da turma',
    title: 'Perfil socioeconômico, cultural e individualidades',
    paragraphs: [
      'Entre os materiais da disciplina está uma atividade dedicada ao perfil socioeconômico, cultural e às individualidades. O próprio título me chama atenção ao reunir dimensões que podem ser observadas coletivamente e uma palavra que nos lembra das diferenças entre trajetórias pessoais.',
      'Quando falamos de um perfil, é possível organizar informações em categorias e identificar características compartilhadas. Mas a palavra “individualidades” me faz resistir à ideia de que um conjunto de dados possa contar, sozinho, a história inteira de alguém. Uma pessoa participa de grupos sociais e, ao mesmo tempo, não se resume a uma etiqueta.',
      'Não tenho acesso, nesta versão do material, ao diário completo para comentar resultados ou episódios específicos da atividade. Prefiro manter a reflexão ligada à questão proposta e ao documento correspondente, sem inventar estatísticas nem expor informações dos colegas. Para mim, essa é também uma escolha de cuidado ao transformar uma atividade coletiva em portfólio público.'
    ],
    question: 'O que um perfil coletivo consegue mostrar? E o que ele não deve apagar?',
    images: [],
    activityIds: ['perfil'],
  },
  {
    id: 'cine-socio',
    order: '08',
    kicker: 'Cine Sócio • Linguagem audiovisual',
    title: 'O que percebi ao rever um filme',
    paragraphs: [
      'No Cine Sócio, assistimos a quatro curtas brasileiros. Um deles era Ilha das Flores, que eu já conhecia. Da primeira vez, o que tinha ficado mais forte na minha memória era a fila de pessoas que recolhiam a comida que sobrava dos porcos. Era uma imagem difícil de esquecer.',
      'Ao rever o filme, porém, outra coisa me chamou a atenção: o modo como a narração acompanha o percurso do tomate. A voz calma, quase objetiva, conduz uma sequência que começa em algo cotidiano e vai revelando relações de produção, consumo e desigualdade. O contraste entre a forma de narrar e aquilo que a história mostra me parece especialmente importante.',
      'A foto do quadro, com anotações sobre animação, curta, desenho, falas, sonoplastia e a lembrança do tomate com narrador, funciona para mim como um rastro dessa atividade. Ela mostra que a observação do audiovisual também passa por registrar detalhes de linguagem e organização da narrativa.',
      'Foi interessante perceber que eu não estava necessariamente diante de um filme diferente. Eu é que estava prestando atenção em outro aspecto dele. A crítica social não está apenas nas imagens mais marcantes; também é construída pela ordem das informações, pelos vínculos que o roteiro estabelece e pelo modo como uma história aparentemente simples vai deixando de ser simples.',
      'Esse reencontro com Ilha das Flores me fez olhar com mais cuidado para a linguagem audiovisual como parte da interpretação sociológica. Ainda quero retomar os demais curtas com o diário completo à mão, sem arriscar títulos que não tenho documentados aqui. Às vezes, rever é uma forma de aprender a observar de novo.'
    ],
    question: 'O que muda naquilo que vejo quando começo a prestar atenção em como uma história é contada?',
    images: [
      { src: '/images/cine-socio-quadro.jpg', alt: 'Quadro com anotações sobre animações e curtas discutidos no Cine Sócio.', caption: 'Anotações da atividade do Cine Sócio, incluindo observações sobre som, fala, desenho e narração.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: ['cine'],
  },
];
