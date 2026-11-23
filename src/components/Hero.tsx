import { aboutParagraphs, heroPhoto, portfolioMeta } from '../content/site';

export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__stripes">
        <div className="frame hero__head"><span className="overline">Portfólio autoral <span aria-hidden="true">↘</span> 1º período</span><span className="overline">Disciplina de Sociologia <span aria-hidden="true">/</span> 2026</span></div>
        <div className="frame hero__title-wrap">
          <div className="hero__pretitle"><span className="hero__red-line" />Portfólio de</div>
          <h1 id="hero-title" className="hero__title">SOCIOLOGIA</h1>
          <div className="hero__under-title"><span>O que cabe entre uma observação e uma pergunta?</span><span className="hero__edition">EDIÇÃO 01 / NOV. 2026</span></div>
        </div>
      </div>
      <div className="frame hero__about-grid">
        <div className="hero__identity">
          {heroPhoto ? (
            <figure className="hero__photo"><img src={heroPhoto} alt="Retrato original de Maria Eduarda Pernambuco Souza Leão" loading="eager" /><figcaption>Arquivo pessoal / Maria Eduarda</figcaption></figure>
          ) : (
            <div className="hero__typographic-art" aria-hidden="true"><span className="hero__art-number">00 / ABERTURA</span><span className="hero__art-word">o olhar<br /><em>em movimento.</em></span><span className="hero__art-bottom">ANOTAÇÕES SOBRE O QUE VI,<br />LI E AINDA QUERO ENTENDER.</span></div>
          )}
          <div className="hero__identity-caption"><span>Maria Eduarda Pernambuco Souza Leão</span><span>{portfolioMeta.university} · Administração</span><span>Profª {portfolioMeta.professor}</span></div>
        </div>
        <div className="hero__about">
          <div className="eyebrow"><span className="eyebrow__dot" /> NOTA DA AUTORA / 00</div>
          <h2>Quem <em>escreve</em></h2>
          {aboutParagraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          <div className="hero__actions"><a className="primary-action" href="#pesquisa">Ler o diário de pesquisa <span aria-hidden="true">↗</span></a><a className="secondary-action" href="#leituras">Explorar as leituras <span aria-hidden="true">↗</span></a></div>
        </div>
      </div>
      <div className="frame hero__footnote"><span>Um percurso em construção</span><span>Deslize para abrir o portfólio <span aria-hidden="true">↓</span></span></div>
    </section>
  );
}
