import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { MassageCard } from "@/components/MassageCard";
import { OpeningHours } from "@/components/OpeningHours";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, CheckIcon, MapPinIcon, PhoneIcon, SparkIcon } from "@/components/icons";
import { heroHighlights, massageTypes, practiceFeatures, siteSettings } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  description: siteSettings.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="Welkom bij Amanda Massage"
        subtitle="Vergeet de drukte van alledag en gun uzelf een moment van ontspanning. Warme aandacht, rust en zorg in een toegankelijke praktijk in Zoetermeer."
        image="/images/hero-wellness.svg"
        alt="Sfeervolle placeholderafbeelding van een warme wellnessruimte"
        ctaLabel="Afspraak maken"
        ctaHref={siteSettings.bookingUrl}
        highlights={heroHighlights}
      />

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Rust, warmte en vertrouwen</span>
            <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
              Maar vergeet uzelf niet!
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">
              Amanda Massage biedt een rustige plek om spanning los te laten en weer even stil te staan bij wat uw lichaam nodig heeft. Iedere behandeling is gericht op ontspanning, comfort en een warme ontvangst.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">
              De praktijk in Zoetermeer is laagdrempelig, verzorgd en geschikt voor bezoekers die bewust tijd willen nemen voor herstel, aandacht en rust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
                Afspraak maken
              </a>
              <Link href="/praktijk" className="button-secondary">
                Bekijk de praktijk
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="card-surface overflow-hidden">
            <div className="relative h-64 sm:h-72">
              <Image
                src="/images/praktijk-ruimte.svg"
                alt="Placeholderafbeelding van de praktijkruimte"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 text-bark">
                <SparkIcon className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Zorgvuldig ingericht</p>
              </div>
              <ul className="mt-6 space-y-4 text-sm text-ink/75 sm:text-base">
                {practiceFeatures.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-bark">
                <a href={siteSettings.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 font-semibold">
                  <PhoneIcon className="h-4 w-4" />
                  {siteSettings.phoneDisplay}
                </a>
                <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 font-semibold">
                  <MapPinIcon className="h-4 w-4" />
                  Zoetermeer
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Massages"
            title="Behandelingen die vertragen, verzachten en ruimte geven"
            description="Kies een massagevorm die past bij uw behoefte aan ontspanning, warmte of verlichting van spanning."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {massageTypes.map((massage, index) => (
              <FadeIn key={massage.slug} delay={index * 0.08}>
                <MassageCard
                  name={massage.name}
                  summary={massage.teaser}
                  image={massage.image}
                  alt={massage.alt}
                  icon={massage.icon}
                  href="/massages"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <OpeningHours />
          </FadeIn>

          <FadeIn delay={0.1} className="card-surface overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[18rem]">
                <Image
                  src="/images/praktijk-detail.svg"
                  alt="Placeholderafbeelding van wellnessdetails"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="p-8 sm:p-10">
                <span className="eyebrow">Praktijk in Zoetermeer</span>
                <h3 className="mt-5 font-heading text-3xl text-ink sm:text-4xl">
                  Warm ingericht en goed bereikbaar
                </h3>
                <p className="mt-4 text-base leading-8 text-ink/75">
                  De praktijk is gevestigd aan het Weigeliapark 2 in Zoetermeer, met gratis parkeergelegenheid en een massageruimte op de begane grond.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-ink/75 sm:text-base">
                  {practiceFeatures.slice(2).map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage-700" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/praktijk" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-bark">
                  Meer over de praktijk
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container-shell">
          <FadeIn className="relative overflow-hidden rounded-[2.5rem] bg-bark px-8 py-10 text-white shadow-glow sm:px-12 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(143,188,143,0.24),transparent_26%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="eyebrow border-white/20 bg-white/10 text-white">Online boeken</span>
                <h2 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
                  Gun uzelf een rustig moment in de week
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  Boek direct online of neem contact op voor vragen over de behandelingen, beschikbaarheid of de praktijkruimte.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-bark">
                  Afspraak maken
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
                  Contact opnemen
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
