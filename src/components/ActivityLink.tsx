import { activities } from '../content/activities';

interface Props { id: string; compact?: boolean }

export function ActivityLink({ id, compact = false }: Props) {
  const item = activities[id];
  if (!item) return null;

  return (
    <a className={`activity-link${compact ? ' activity-link--compact' : ''}`} href={item.url} target="_blank" rel="noopener noreferrer">
      <span className="activity-link__mark" aria-hidden="true">↗</span>
      <span>{item.title}</span>
      <span className="sr-only"> (abre em outra guia; o acesso pode exigir permissão)</span>
    </a>
  );
}
