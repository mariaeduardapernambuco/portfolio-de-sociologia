import type { DocumentaryPhoto } from '../types';

/** Renderiza um ensaio somente quando fotografias documentais reais forem cadastradas. */
export function PhotoEssay({ photos }: { photos: DocumentaryPhoto[] }) {
  if (photos.length < 2) return null;
  return <aside className="photo-essay" aria-label="Ensaio fotográfico do diário de campo"><div className="frame"><div className="photo-essay__head"><span>Arquivo visual / 2026</span><h3>As coisas que <em>vi</em></h3></div><div className="photo-essay__grid">{photos.map((photo, i) => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height} /><figcaption><span>{String(i + 1).padStart(2, '0')} / </span>{photo.caption}{photo.credit ? ` · ${photo.credit}` : ''}</figcaption></figure>)}</div></div></aside>;
}
