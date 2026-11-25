import { projects } from '../content/projects';

export function Projects() {
  return (
    <section className="projects-section editorial-section" id="projetos" aria-labelledby="projects-title">
      <div className="frame">
        <div className="projects-heading">
          <span className="projects-heading__eyebrow">PROJETOS / TECNOLOGIA, NEGÓCIOS E PESSOAS</span>
          <h2 id="projects-title">Ideias que saíram <em>do papel.</em></h2>
          <p>Como bolsista do Embarque Digital na CESAR School, tenho vivido experiências práticas de criação e desenvolvimento. Do jornalismo à produção audiovisual e aos desafios de programação, estes são alguns trabalhos que fizeram parte do meu percurso acadêmico.</p>
        </div>
        <div className="projects-grid">
          {projects.map((item, i) => <article className="project-card" key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.action}: ${item.title} (abre em outra guia)`}>
              <div className="project-card__image"><img src={item.cover} alt={`Imagem de capa do projeto ${item.title}`} loading="lazy" /></div>
              <div className="project-card__meta"><span>{String(i+1).padStart(2,'0')} / {item.eyebrow}</span><span aria-hidden="true">↗</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="project-card__action">{item.action} <span aria-hidden="true">↗</span></span>
            </a>
          </article>)}
        </div>
      </div>
    </section>
  );
}
