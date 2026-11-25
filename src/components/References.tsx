import { referenceGroups } from '../content/references';

export function References() {
  return <div className="references-groups">
    {referenceGroups.map(group => <div className="references-group" key={group.title}>
      <h3>{group.title}</h3><p>{group.introduction}</p>
      <ol>{group.items.map(item => <li key={item.id}>
        <div className="reference-item__title">{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} <span aria-hidden="true">↗</span></a> : <span>{item.title}</span>}</div>
        <p>{item.detail}</p>
        {item.related && <a className="reference-item__back" href={item.related}>Ver no portfólio ↳</a>}
      </li>)}</ol>
    </div>)}
  </div>;
}
