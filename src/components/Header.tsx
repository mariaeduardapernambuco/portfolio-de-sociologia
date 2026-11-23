import { useEffect, useState } from 'react';

const mainTabs = [
  { href: '#pesquisa', id: 'pesquisa', label: 'Pesquisa', number: '01' },
  { href: '#leituras', id: 'leituras', label: 'Leituras', number: '02' },
  { href: '#autoavaliacao', id: 'autoavaliacao', label: 'Autoavaliação', number: '03' },
  { href: '#avaliacao-disciplina', id: 'avaliacao-disciplina', label: 'Avaliação da disciplina', number: '04' },
];

export function Header() {
  const [active, setActive] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
      const sections = mainTabs.map(tab => document.getElementById(tab.id)).filter((el): el is HTMLElement => Boolean(el));
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.37) current = section.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <header className="site-header">
      <div className="reading-progress" role="presentation" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="site-header__bar frame">
        <a className="brand" href="#topo" aria-label="Portfólio de Sociologia, voltar ao início"><span className="brand__square" aria-hidden="true">P<span>.</span></span><span>Portfólio de Sociologia</span></a>
        <div className="header-right"><span className="header-note">UPE <span aria-hidden="true">/</span> 2026</span><a href="#atividades" className="header-index">Arquivo de atividades <span aria-hidden="true">↗</span></a></div>
      </div>
      <nav className="folder-nav frame" aria-label="Seções principais">
        {mainTabs.map((tab) => (
          <a className={`folder-tab${active === tab.id ? ' folder-tab--active' : ''}`} href={tab.href} key={tab.id} aria-current={active === tab.id ? 'location' : undefined}>
            <span className="folder-tab__number">{tab.number}</span>
            <span>{tab.label}</span>
            <span className="folder-tab__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
