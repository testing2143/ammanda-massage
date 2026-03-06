import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { massagePlaceholderNote, massageTypes, siteSettings } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Massages",
  description:
    "Ontdek de klassieke massage, hot stone massage en zwangerschapsmassage van Amanda Massage in Zoetermeer.",
  path: "/massages"
});

export default function MassagesPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Massages"
          title="Massagevormen met aandacht voor ontspanning en verlichting"
          description="Kies de behandeling die past bij uw lichaam, energie en behoefte aan rust."
        />

        <div className="mt-8 rounded-[1.75rem] border border-gold/25 bg-gold/10 px-5 py-4 text-sm leading-7 text-bark">
          {massagePlaceholderNote}
        </div>

        <div className="mt-10 space-y-8">
          {massageTypes.map((massage, index) => {
            const reverse = index % 2 === 1;

            return (
              <FadeIn key={massage.slug}>
                <section id={massage.slug} className="card-surface overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className={`relative min-h-[20rem] ${reverse ? "lg:order-2" : ""}`.trim()}>
                      <Image
                        src={massage.image}
                        alt={massage.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </div>
                    <div className={`p-8 sm:p-10 ${reverse ? "lg:order-1" : ""}`.trim()}>
                      <span className="eyebrow">{massage.name}</span>
                      <h2 className="mt-5 font-heading text-4xl leading-tight text-ink sm:text-5xl">
                        {massage.name}
                      </h2>
                      <p className="mt-5 text-base leading-8 text-ink/75 sm:text-lg">
                        {massage.description}
                      </p>
                      <p className="mt-4 text-base leading-8 text-ink/75 sm:text-lg">
                        {massage.suitableFor}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {massage.durations.map((duration) => (
                          <span key={duration} className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-bark">
                            {duration}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/tarieven" className="button-secondary">
                          Bekijk tarieven
                        </Link>
                        <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
                          Afspraak maken
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
