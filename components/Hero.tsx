import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";
import { ArrowRightIcon, LeafIcon, SparkIcon } from "@/components/icons";

export function Hero({
  title,
  subtitle,
  image,
  alt,
  ctaLabel,
  ctaHref,
  highlights
}: {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  ctaLabel: string;
  ctaHref: string;
  highlights: readonly string[];
}) {
  return (
    <section className="container-shell pt-6 sm:pt-10">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-bark text-white shadow-glow">
        <Image src={image} alt={alt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,33,28,0.82),rgba(37,33,28,0.45)_48%,rgba(37,33,28,0.22))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,169,110,0.26),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(143,188,143,0.22),transparent_24%)]" />

        <div className="relative grid min-h-[34rem] gap-10 p-8 sm:p-12 lg:min-h-[40rem] lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:p-16">
          <FadeIn className="max-w-3xl self-end">
            <span className="eyebrow border-white/20 bg-white/10 text-white">
              <LeafIcon className="h-4 w-4" />
              Massagepraktijk in Zoetermeer
            </span>
            <h1 className="mt-6 font-heading text-5xl leading-none sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">{subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-bark transition hover:bg-cream"
              >
                {ctaLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="/contact" className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Neem contact op
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3 text-white/90">
                <SparkIcon className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">Warme aandacht</p>
              </div>
              <p className="mt-4 text-lg leading-8 text-white/85">
                Een rustige behandeling met aandacht voor ontspanning, comfort en het loslaten van spanning in een toegankelijke praktijkruimte.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/78">
                {highlights.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
