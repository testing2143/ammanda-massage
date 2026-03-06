export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink/75 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
