import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionHeading } from './components/SectionHeading';
import { DiaryEntry } from './components/DiaryEntry';
import { PhotoEssay } from './components/PhotoEssay';
import { ActivityIndex } from './components/ActivityIndex';
import { Footer } from './components/Footer';
import { researchEntries } from './content/research';
import { readingEntries } from './content/readings';
import { selfAssessment, courseAssessment, courseSuggestion, closingThought } from './content/assessment';

function App() {
  const documentaryPhotos = researchEntries.flatMap(entry => entry.images);

  return (
    <>
      <a className="skip-link" href="#pesquisa">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <section className="research-section editorial-section" id="pesquisa" aria-label="Diário de pesquisa">
          <div className="frame">
            <SectionHeading id="pesquisa-inicio" index="01" category="Diário de pesquisa" title="O mundo não cabe numa única página." subtitle="Aulas, encontros e percursos que ampliaram meu jeito de observar. Um arquivo de perguntas feito a partir de experiências reais." />
            <div className="entries-list">{researchEntries.map(entry => <DiaryEntry entry={entry} key={entry.id} />)}</div>
          </div>
          <PhotoEssay photos={documentaryPhotos} />
        </section>

        <div className="interlude" aria-label="Passagem entre o diário de campo e o diário de leitura"><div className="frame interlude__inner"><span className="interlude__number">NOTA DE MARGEM / 01</span><p>Às vezes, uma leitura ajuda a dar nome ao que eu já estava tentando <em>entender.</em></p><span className="interlude__glyph" aria-hidden="true">↘</span></div></div>

        <section className="readings-section editorial-section" id="leituras" aria-label="Diário de leitura">
          <div className="frame">
            <SectionHeading id="leituras-inicio" index="02" category="Diário de leitura" title="Ler, sublinhar, voltar." subtitle="Alguns autores entraram no semestre pela primeira vez; outros já estavam nas minhas perguntas antes da aula." />
            <div className="entries-list entries-list--reading">{readingEntries.map(entry => <DiaryEntry entry={entry} key={entry.id} variant="reading" />)}</div>
          </div>
        </section>

        <section className="reflection-section editorial-section" id="autoavaliacao" aria-label="Autoavaliação">
          <div className="frame">
            <SectionHeading id="autoavaliacao-inicio" index="03" category="Autoavaliação" title="O que mudou em mim?" subtitle="Mais do que chegar a respostas, fui aprendendo a colocar minhas ideias em conversa." tone="blue" />
            <div className="reflection-layout"><div className="reflection-layout__margin"><span className="vertical-label">ANOTAÇÃO PESSOAL / 03</span><span className="reflection-layout__asterisk" aria-hidden="true">✳</span></div><div className="reflection-layout__text"><p className="reflection-layout__opening">Eu já me considerava crítica. O que estava aprendendo era a <em>me fazer ouvir.</em></p>{selfAssessment.slice(0, 3).map((p,i) => <p key={i}>{p}</p>)}<blockquote>Quando eu guardava uma ideia por medo de errar, também guardava o erro. Ninguém podia questionar o que eu não dizia, e eu perdia a chance de rever o que pensava.</blockquote>{selfAssessment.slice(3).map((p,i) => <p key={i + 3}>{p}</p>)}</div></div>
          </div>
        </section>

        <section className="course-section editorial-section" id="avaliacao-disciplina" aria-label="Avaliação da disciplina">
          <div className="frame">
            <SectionHeading id="avaliacao-disciplina-inicio" index="04" category="Avaliação da disciplina" title="O que levo do semestre." subtitle="Uma avaliação pessoal da experiência e uma ideia para continuar as conversas." />
            <div className="course-layout"><div className="course-layout__main"><p className="course-layout__kicker">01 / A experiência</p>{courseAssessment.map((p,i) => <p key={i}>{p}</p>)}</div><aside className="course-layout__suggestion"><span>02 / UMA POSSIBILIDADE</span><h3>Depois da visita,<br /><em>a conversa continua.</em></h3>{courseSuggestion.map((p,i) => <p key={i}>{p}</p>)}<div className="suggestion-steps"><span>Uma fotografia</span><span>Uma pergunta</span><span>Uma leitura</span></div></aside></div>
            <div className="closing-note"><span>Última página / 04</span><p>{closingThought}</p></div>
          </div>
        </section>

        <section className="activities-section editorial-section" id="atividades" aria-label="Arquivo de atividades">
          <div className="frame"><SectionHeading id="atividades-inicio" index="05" category="Arquivo documental" title="Para abrir e continuar lendo." subtitle="Diários, materiais de leitura e produções reunidos em um único índice, com retorno aos relatos correspondentes." /><p className="activities-notice">Os endereços são os fornecidos nos materiais do portfólio. A abertura de alguns arquivos pode depender de permissões de acesso dos serviços externos.</p><ActivityIndex /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
