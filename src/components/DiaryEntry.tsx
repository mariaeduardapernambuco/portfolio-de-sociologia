import type { PortfolioEntry } from '../types';
import { ActivityLink } from './ActivityLink';

interface Props { entry: PortfolioEntry; variant?: 'research' | 'reading' }

export function DiaryEntry({ entry, variant = 'research' }: Props) {
  return (
    <article className={`diary-entry diary-entry--${variant}`} id={entry.id} aria-labelledby={`${entry.id}-title`}>
      <div className="diary-entry__side"><span className="diary-entry__number">{entry.order}</span><span className="diary-entry__side-line" /><span className="diary-entry__side-label">Portfólio / {variant === 'research' ? 'campo' : 'leitura'}</span></div>
      <div className="diary-entry__main">
        <p className="diary-entry__kicker">{entry.kicker}</p>
        <h3 id={`${entry.id}-title`}>{entry.title}</h3>
        {entry.lead && <p className="diary-entry__lead">{entry.lead}</p>}
        <div className="diary-entry__prose">{entry.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
        {entry.images.length > 0 && <div className="diary-entry__photos">{entry.images.map((photo) => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height} /><figcaption>{photo.caption}{photo.credit && <span> · {photo.credit}</span>}</figcaption></figure>)}</div>}
        {entry.question && <aside className="diary-entry__question"><p>{entry.question}</p></aside>}
        {(entry.activityIds.length > 0 || entry.related) && <div className="diary-entry__references"><span className="diary-entry__references-title">Conexões e materiais</span><div className="diary-entry__references-links">{entry.activityIds.map(id => <ActivityLink key={id} id={id} compact />)}{entry.related && <a className="activity-link activity-link--compact activity-link--internal" href={entry.related.href}><span className="activity-link__mark" aria-hidden="true">↳</span><span>{entry.related.label}</span></a>}</div></div>}
      </div>
    </article>
  );
}
