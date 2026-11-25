import type { PortfolioEntry } from '../types';

/** Relatos desenvolvidos apenas a partir dos fatos expressos no prompt e das imagens fornecidas. Sem citações fictícias. */
export const researchEntries: PortfolioEntry[] = [
  {
    id: 'aula-do-pote',
    order: '01',
    kicker: 'Aula • Objetos e sociedade',
    title: 'Do pote de grãos e papel à keffiyeh',
    lead: 'No início da aula, o pote coberto por um tecido parecia despertar pouca atenção. Depois, o que estava ali embaixo passou a ocupar a conversa. Quando a professora revelou os grãos de café, a soja e os pedaços de papel, comecei a pensar no caminho daqueles grãos e em quem decide o que se produz.',
    paragraphs: [
      'Um pote é um objeto pequeno para dar início a uma conversa tão grande. Mas o café e a soja, que podem parecer apenas produtos do cotidiano, carregam histórias de produção, circulação e trabalho. A aula me ajudou a deslocar a pergunta: em vez de olhar só para o que estava dentro do recipiente, comecei a pensar em tudo o que precisava acontecer fora dele para que aqueles grãos chegassem até ali.',
      'A discussão sobre a produção agrícola voltada à exportação e a agricultura familiar tornou essa mudança mais concreta. Não se trata apenas de diferentes modos de plantar. São também escolhas econômicas e políticas que envolvem a terra, o trabalho e quem pode decidir sobre o destino da produção.',
      'A presença da keffiyeh e a conversa sobre o trabalho artesanal no Nordeste acrescentaram outras camadas à atividade. Um tecido pode carregar formas de produção, pertencimentos e histórias que não aparecem quando o observamos apenas como objeto. O pote acabou reunindo elementos que, à primeira vista, eu não pensaria em aproximar.',
      'A leitura de Anthony Giddens sobre indivíduo e sociedade me oferece uma maneira de continuar essa reflexão. O que vemos como coisa isolada está atravessado por relações sociais, hábitos, instituições e decisões coletivas. Quanto da sociedade está presente nas coisas mais comuns que usamos todos os dias?'
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
      'Além de conhecer mais sobre a história da Fundação e os contextos pelos quais ela passou, achei especialmente interessante ouvir Túlio Velho Barreto contar sua trajetória. Ele é cientista social formado pela UFPE, mestre em Ciência Política e pesquisador da Fundaj desde 1984. Já trabalhou com estudos sobre sociologia, política e história brasileira, coordenou a área de Estudos Sociais e Culturais e esteve à frente da direção de Memória, Educação, Cultura e Arte. Ouvir a história de alguém que ajudou, e continua ajudando, a construir esses espaços me fez perceber a instituição para além de seus prédios e de sua programação.',
      'O trabalho de direção de memória me despertou uma admiração particular. Acho bonito pensar no cuidado necessário para preservar acervos, dar continuidade a pesquisas e permitir que outras pessoas conheçam histórias que poderiam se perder. Na visita, percebi ainda mais que preservar a memória não é simplesmente guardar o passado: é criar caminhos para que ele continue sendo conhecido, discutido e reinterpretado. Foi uma das partes da experiência de que mais gostei, justamente por mostrar o lado humano e paciente desse trabalho.',
      'A visita também chamou minha atenção para o fato de que a instituição enfrenta dificuldades. Não tenho elementos suficientes para descrever ou dimensionar essas questões, e seria injusto tentar preenchê-las com suposições. O que posso registrar é que esse contato tornou minha percepção do lugar menos superficial.',
      'Passei a pensar que uma instituição cultural não existe apenas para receber pessoas: ela precisa preservar, organizar, comunicar e criar condições para que diferentes públicos tenham acesso à cultura. É uma conexão com a Administração que me interessa justamente por não se resumir à gestão de empresas. Há organizações cuja importância aparece no que tornam possível para a sociedade.'
    ],
    question: 'Que trabalho precisa acontecer para que uma instituição cultural consiga abrir suas portas todos os dias?',
    images: [
      { src: '/images/fundaj-porta-cartazes.jpg', alt: 'Porta de vidro com cartazes de programação cultural na Fundação Joaquim Nabuco.', caption: 'Cartazes e programação cultural na entrada da Fundaj.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-patio-grupo.jpg', alt: 'Pátio interno da Fundação Joaquim Nabuco com estudantes circulando.', caption: 'Circulação pelo espaço durante a visita acadêmica.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-entrada-restrita.jpg', alt: 'Aviso de entrada restrita para funcionários da Fundação Joaquim Nabuco.', caption: 'Esses detalhes acabam mostrando um pouco das pessoas que constroem esse ambiente.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-cinema.jpg', alt: 'Sinalização do Cinema da Fundação em uma parede iluminada.', caption: 'Cinema da Fundação: uma das primeiras coisas que vêm à mente quando se pensa na Fundação.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/fundaj-massangana.jpg', alt: 'Pátio com vegetação e parede identificada como Massangana Vídeo Som, da Fundação Joaquim Nabuco.', caption: 'Logo do Massangana Vídeo Som.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: [],
  },
  {
    id: 'rec-soberania',
    order: '03',
    kicker: 'REC’n’Play • Trabalho e tecnologia',
    title: 'Quem decide os rumos da tecnologia?',
    paragraphs: [
      'Tecnologia costuma ser um assunto próximo de mim. Estudo Análise e Desenvolvimento de Sistemas, atuo na área e gosto de pensar no que podemos construir com ela. Durante a 8ª edição do REC’n’Play, a conversa sobre soberania digital me fez relacionar esse interesse a questões sobre trabalho, decisões organizacionais e uso da tecnologia.',
      'No evento, conheci o Sindicato dos Trabalhadores em Empresas de Informática, Processamento de Dados e Tecnologia da Informação de Pernambuco, o SINDPD/PE. O encontro com profissionais da área e a discussão sobre soberania digital aproximaram duas questões que às vezes aparecem separadas: o trabalho de quem desenvolve tecnologia e o poder de quem controla sua infraestrutura.',
      'O registro da roda de conversa me lembra desse encontro. Ela mostra pessoas reunidas em torno de uma discussão que, para mim, não ficou no nível abstrato dos sistemas. Havia ali trabalhadores discutindo a própria área, suas condições de atuação e as pessoas que usam os sistemas e serviços desenvolvidos.',
      'A pergunta sobre onde guardamos nossos dados parece técnica, mas não termina em uma decisão de arquitetura de sistemas. Ela envolve organizações, fornecedores, dependências e possibilidades de controle. Para quem administra uma empresa ou instituição, escolher uma tecnologia é também decidir em quem confiar e quais relações estabelecer a longo prazo.',
      'O que ficou dessa conversa, ao organizar meu portfólio, foi a vontade de continuar pensando em que tipo de tecnologia desejo ajudar a construir. Não basta considerar se algo funciona; também quero perguntar para quem funciona, quem participa das decisões e quem vai assumir as consequências quando elas afetam outras pessoas.'
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
      'Eu tinha planejado participar de uma mesa em que deputados e artistas debateriam as vozes do futuro e o hip-hop. A sala atingiu a lotação máxima quando eu ainda estava na fila, e não consegui entrar. O plano mudou ali mesmo, e acho mais fiel contar esse desvio do que fazer parecer que tudo aconteceu conforme eu havia imaginado.',
      'Com a mudança de planos, segui para a Torre Malakoff e visitei uma exposição. Uma das fotografias registra uma janela em arco e parte das obras expostas. Outra mostra, pela janela, o Cais do Sertão movimentado pelas pessoas que estavam no evento sobre vozes do futuro e hip-hop. Assim, o que eu tinha planejado e o caminho que acabei fazendo continuam presentes no mesmo relato.',
      'Em uma atividade fora da sala de aula, a cidade deixa de ser apenas o caminho entre dois endereços. Ela também oferece situações imprevistas, espaços que podemos conhecer melhor e escolhas que precisamos fazer no meio do trajeto. Nem tudo o que aprendemos começa com uma atividade concluída exatamente como foi planejada.',
      'Penso nessa mudança de rota sem transformá-la em uma grande lição. Eu queria estar em uma conversa sobre hip-hop; não consegui. Acabei em uma exposição na Torre Malakoff. Registrar os dois momentos é uma forma de manter a experiência inteira, inclusive aquilo que não saiu como eu imaginava.'
    ],
    images: [
      { src: '/images/torre-malakoff-exposicao.jpg', alt: 'Janela em arco e obras na exposição visitada na Torre Malakoff.', caption: 'Vista da exposição na Torre Malakoff.', credit: 'Arquivo pessoal / Maria Eduarda' },
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
      'As fotos do palco montado e da praça ocupada ajudam a registrar exatamente isso. Não é só o evento como programação; é o modo como ele se espalha pela cidade e muda a paisagem por algumas horas, com gente circulando, descansando, conversando, indo de uma atividade a outra e trabalhadores preparando as estruturas que permitem que tudo aconteça.',
      'O que me chama a atenção não é só a programação do evento. É a possibilidade de circular, encontrar públicos diferentes e perceber que uma conversa sobre tecnologia pode acontecer perto de uma atividade artística ou de um comércio que segue o ritmo da região. É justamente essa mistura de usos e públicos que me faz gostar tanto de circular pelo centro nesses dias.',
      'Também vejo nessa ocupação uma oportunidade de discutir o acesso ao conhecimento. Um evento espalhado pela cidade pode aproximar temas e pessoas que talvez não se encontrassem em espaços mais fechados. Isso não significa afirmar, sem dados, que todos conseguem participar nas mesmas condições; significa reconhecer a importância de continuar perguntando quem consegue ocupar e aproveitar esses lugares.',
      'Estudar Administração e desenvolvimento de sistemas ao mesmo tempo me faz pensar na ligação entre negócios, tecnologia e pessoas. Um evento como esse depende de quem organiza, monta, atende, comunica e desenvolve; também depende de quem ocupa os espaços e usa o que foi construído. A Sociologia me ajuda a não olhar só para o produto ou para o resultado, mas para todas essas relações e para as escolhas que as atravessam.'
    ],
    question: 'Quem pode viver a cidade como espaço de encontro, cultura e aprendizagem?',
    images: [
      { src: '/images/rec-palco.jpg', alt: 'Palco do REC’n’Play 2026 montado no centro do Recife.', caption: 'Uma das estruturas do evento no centro do Recife.', credit: 'Arquivo pessoal / Maria Eduarda' },
      { src: '/images/rec-praca.jpg', alt: 'Praça do centro do Recife com palmeiras e pessoas durante o REC’n’Play.', caption: 'Pessoas descansando e circulando pela praça durante o REC’n’Play.', credit: 'Arquivo pessoal / Maria Eduarda' }
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
      'Na segunda aula de Sociologia das Organizações, discutimos os dados de um questionário socioeconômico e cultural aplicado anteriormente. As respostas eram anônimas, o que permitiu analisar o perfil da turma sem identificar individualmente os colegas. A própria sala se tornou objeto da nossa observação.',
      'Os números mostraram diferenças que mereciam atenção. Entre os estudantes, 65,1% se declararam brancos e 27,9% pardos. Na renda familiar, 35,7% indicaram mais de 16 salários mínimos e 16,7%, entre 11 e 15. Na fotografia do gráfico de renda, também aparece uma parcela de 26,2% na faixa de dois a cinco salários mínimos. Esses percentuais não contam a história de cada estudante, mas mostram como convivem realidades econômicas distintas dentro da mesma sala.',
      'Outro gráfico da apresentação mostrava o interesse da turma por áreas temáticas para uma atividade de curricularização da extensão. Entre 42 respostas, comunicação apareceu com 26,2%, enquanto educação e tecnologia e produção receberam 21,4% cada uma. Gostei de observar que, além de falar sobre o perfil de quem estava ali, a pesquisa também abria uma conversa sobre os temas com que a turma gostaria de trabalhar. São interesses que podem aproximar a universidade de questões concretas da sociedade.',
      'A discussão também passou pela escolaridade dos pais e pelas expectativas de gênero. Chamou minha atenção o contraste entre trajetórias de mães que tiveram de abrir mão de parte da formação em razão da sobrecarga da maternidade e outras que chegaram à pós-graduação. Do lado dos homens, apareceu a expectativa de assumir cedo o sustento financeiro. São histórias que não podem ser reduzidas a um gráfico: elas ajudam a compreender como as oportunidades são distribuídas de maneiras diferentes.',
      'O que mais me inquietou foi perceber pouco interesse de alguns colegas diante dos dados da nossa própria turma. Fiquei pensando que, se uma amostra tão próxima já parece distante para quem a observa, como vamos lidar, como futuros administradores, com dados sociais e econômicos de grupos maiores? Por trás de um indicador existem pessoas e escolhas que afetam suas vidas.',
      'Saí da aula pensando que administrar também exige atenção àquilo que os números mostram e ao que eles deixam de contar. O termo individualidades faz sentido aqui: reconhecer padrões coletivos não deveria apagar as trajetórias de quem compõe esses padrões.'
    ],
    images: [
      {
        src: '/images/perfil-areas-extensao.jpeg',
        alt: 'Projeção em sala de aula de gráfico circular com 42 respostas sobre áreas temáticas de interesse para curricularização da extensão; comunicação tem 26,2%, educação e tecnologia e produção, 21,4% cada.',
        caption: 'Áreas temáticas de interesse para a atividade de extensão. Entre 42 respostas, comunicação teve 26,2%; educação e tecnologia e produção, 21,4% cada.',
        credit: 'Registro da aula / arquivo pessoal de Maria Eduarda'
      },
      {
        src: '/images/perfil-renda-familiar.jpeg',
        alt: 'Projeção em sala de aula de gráfico circular sobre a renda familiar total das pessoas respondentes, com 42 respostas.',
        caption: 'Distribuição da renda familiar na turma, em 42 respostas. O gráfico mostra 35,7% acima de 16 salários mínimos, 26,2% entre dois e cinco e 16,7% entre 11 e 15.',
        credit: 'Registro da aula / arquivo pessoal de Maria Eduarda'
      }
    ],
    activityIds: ['perfil'],
    question: 'O que um perfil coletivo consegue mostrar? E o que ele não deve apagar?',
  },
  {
    id: 'cine-socio',
    order: '08',
    kicker: 'Cine Sócio • Linguagem audiovisual',
    title: 'O que percebi ao rever um filme',
    paragraphs: [
      'No Cine Sócio, assistimos a quatro curtas. Um deles era Ilha das Flores, que eu já conhecia. Da primeira vez, o que tinha ficado mais forte na minha memória era a fila de pessoas que recolhiam a comida que sobrava dos porcos. ',
      'Ao rever o filme, porém, outra coisa me chamou a atenção: o modo como a narração acompanha o percurso do tomate. A voz calma, quase objetiva, conduz uma sequência que começa em algo cotidiano e vai revelando relações de produção, consumo e desigualdade. O contraste entre a forma de narrar e aquilo que a história mostra me parece especialmente importante.',
      'A foto do quadro, com anotações sobre animação, curta, desenho, falas, sonoplastia e a lembrança do tomate com narrador, funciona para mim como um rastro dessa atividade. Ela mostra que a observação do audiovisual também passa por registrar detalhes de linguagem e organização da narrativa.',
      'Meow! (1981) foi especialmente interessante para mim porque interpretei a história como uma crítica que conversa com o imperialismo. Já Corpo-Capital (2021) e High Noon (1988), de Viktor Kubal, completaram a sessão e mostraram outras maneiras de usar o curta para provocar perguntas sociais.',
      'Foi interessante perceber que eu não estava necessariamente diante de um filme diferente. Eu é que estava prestando atenção em outro aspecto dele. A crítica social não está apenas nas imagens mais marcantes; também é construída pela ordem das informações, pelos vínculos que o roteiro estabelece e pelo modo como uma história aparentemente simples vai deixando de ser simples.',
      'Esse reencontro com Ilha das Flores me fez olhar com mais cuidado para a linguagem audiovisual como parte da interpretação sociológica.  Às vezes, rever é uma forma de aprender a observar de novo.'
    ],
    question: 'O que muda naquilo que vejo quando começo a prestar atenção em como uma história é contada?',
    images: [
      { src: '/images/cine-socio-quadro.jpg', alt: 'Quadro com anotações sobre animações e curtas discutidos no Cine Sócio.', caption: 'Anotações da atividade do Cine Sócio, incluindo observações sobre som, fala, desenho e narração.', credit: 'Arquivo pessoal / Maria Eduarda' }
    ],
    activityIds: ['cine'],
  },
];
