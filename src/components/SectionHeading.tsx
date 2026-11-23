interface Props { id: string; index: string; category: string; title: string; subtitle: string; tone?: 'light' | 'blue' }

export function SectionHeading({ id, index, category, title, subtitle, tone = 'light' }: Props) {
  return (
    <div className={`section-heading section-heading--${tone}`} id={id}>
      <div className="section-heading__meta"><span className="section-heading__index">{index}<span className="section-heading__dash"> / </span></span><span>{category}</span></div>
      <div className="section-heading__main"><h2>{title}</h2><p>{subtitle}</p></div>
    </div>
  );
}
