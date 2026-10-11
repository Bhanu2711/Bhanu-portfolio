type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ id, eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
