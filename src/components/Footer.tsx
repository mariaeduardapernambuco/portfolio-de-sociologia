import { portfolioMeta } from '../content/site';
export function Footer() {
  return <footer className="footer"><div className="frame footer__inner"><div><span className="footer__eyebrow">FIM DO PORTFÓLIO / POR ENQUANTO</span><p className="footer__headline">Ainda há <em>muito</em><br />a perguntar<span>.</span></p></div><div className="footer__info"><p>{portfolioMeta.author}<br />{portfolioMeta.university}<br />Sociologia · 1º período de Administração<br />Profª {portfolioMeta.professor}</p><a href="#topo">Voltar ao início <span aria-hidden="true">↑</span></a></div></div><div className="frame footer__baseline"><span>Feito para ler com calma.</span><span>Recife, 2026</span></div></footer>;
}
