import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SectionHeading } from './components/SectionHeading';
import { DiaryEntry } from './components/DiaryEntry';
import { PhotoEssay } from './components/PhotoEssay';
import { ActivityIndex } from './components/ActivityIndex';
import { References } from './components/References';
import { Footer } from './components/Footer';
import { researchEntries } from './content/research';
import { readingEntries } from './content/readings';
import { selfAssessment, courseAssessment, closingThought } from './content/assessment';

function App() {
  const documentaryPhotos = researchEntries.flatMap(entry => entry.images);

  return (
    <>
      <a className="skip-link" href="#pesquisa">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <Projects />
        <section className="research-section editorial-section" id="pesquisa" aria-label="Diário de pesquisa">
          <div className="frame">
            <SectionHeading id="pesquisa-inicio" index="01" category="Diário de pesquisa" title="Diário de pesquisa" subtitle="Registros de aulas, visitas, conversas e experiências do semestre." />
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
            <SectionHeading id="avaliacao-disciplina-inicio" index="04" category="Avaliação da disciplina" title="O que levo do semestre." subtitle="Minha avaliação pessoal da disciplina." />
            <div className="course-layout"><div className="course-layout__main"><p className="course-layout__kicker">01 / A experiência</p>{courseAssessment.map((p,i) => <p key={i}>{p}</p>)}</div></div>
            <div className="closing-note"><span>Última página / 04</span><p>{closingThought}</p></div>
          </div>
        </section>

        <section className="activities-section editorial-section" id="atividades" aria-label="Arquivo de atividades">
          <div className="frame"><SectionHeading id="atividades-inicio" index="05" category="Arquivo documental" title="Arquivo de atividades" /><ActivityIndex /></div>
        </section>
        <section className="references-section editorial-section" id="referencias" aria-label="Referências e fontes">
          <div className="frame">
            <SectionHeading id="referencias-inicio" index="06" category="Fontes e referências" title="De onde vieram as ideias." subtitle="Textos, materiais da disciplina, registros e fontes que ajudam a acompanhar e conferir este percurso." />
            <References />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
