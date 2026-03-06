import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { LeafIcon, SparkIcon } from "@/components/icons";
import { amandaProfile, siteSettings } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Over mij",
  description:
    "Lees meer over Amanda, haar werkwijze, motivatie en aansluiting bij BMS.",
  path: "/over-mij"
});

export default function OverMijPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Over Amanda"
          title="Persoonlijke aandacht als basis van iedere behandeling"
          description="Een rustige benadering, een warme sfeer en aandacht voor wat iemand op dat moment nodig heeft."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn className="card-surface overflow-hidden">
            <div className="relative min-h-[30rem]">
              <Image
                src="/images/amanda-portrait.jpg"
                alt="Portretfoto van Amanda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="card-surface p-8 sm:p-10">
            <div className="flex items-center gap-3 text-bark">
              <LeafIcon className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Visie</p>
            </div>
            <p className="mt-5 text-lg leading-8 text-ink/80">{amandaProfile.intro}</p>
            <div className="mt-6 space-y-4 text-base leading-8 text-ink/75">
              {amandaProfile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn className="card-surface p-8 sm:p-10">
            <div className="flex items-center gap-3 text-bark">
              <SparkIcon className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Opleiding en certificering</p>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-ink/75 sm:text-base">
              {amandaProfile.education.map((item) => (
                <li key={item} className="rounded-2xl bg-mist px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">BMS en motivatie</p>
            <div className="mt-5 flex items-center gap-4">
              <Image src="/bms-logo.svg" alt="BMS logo placeholder" width={82} height={82} />
              <p className="text-base leading-8 text-ink/75">
                Volgens de aangeleverde projectbrief is Amanda Massage aangesloten bij BMS. Vervang dit placeholderlogo zodra het officiele beeldmerk beschikbaar is.
              </p>
            </div>
            <blockquote className="mt-8 rounded-[1.75rem] bg-mist px-6 py-5 font-heading text-2xl leading-relaxed text-bark">
              {amandaProfile.motivation}
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
                Afspraak maken
              </a>
              <Link href="/contact" className="button-secondary">
                Contact opnemen
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
