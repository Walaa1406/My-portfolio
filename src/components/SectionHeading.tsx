type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-pink-deep">{eyebrow}</p>
      <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">{title}</h2>
    </div>);

}