import { activities, activityOrder } from '../content/activities';

export function ActivityIndex() {
  return <div className="activities-table" role="list">{activityOrder.map((id, index) => { const activity = activities[id]; return <div className="activities-table__item" role="listitem" key={activity.id}><span className="activities-table__num">{String(index + 1).padStart(2, '0')}</span><div className="activities-table__desc"><span className="activities-table__category">{activity.category}</span><a href={activity.url} target="_blank" rel="noopener noreferrer" className="activities-table__title">{activity.title} <span aria-hidden="true">↗</span><span className="sr-only"> (abre em outra guia; o acesso pode exigir permissão)</span></a><a href={activity.relatedHref} className="activities-table__return">No portfólio: {activity.relatedLabel} <span aria-hidden="true">↳</span></a></div><span className="activities-table__mark" aria-hidden="true">↗</span></div>; })}</div>;
}
