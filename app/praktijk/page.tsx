import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";
import { GoogleMap } from "@/components/GoogleMap";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { practiceFeatures, practiceGallery, siteSettings } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "De Praktijk",
  description:
    "Ontdek de praktijkruimte van Amanda Massage aan het Weigeliapark 2 in Zoetermeer, inclusief faciliteiten en bereikbaarheid.",
  path: "/praktijk"
});

export default function PraktijkPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="De praktijk"
          title="Een rustige plek om echt even uit te ademen"
          description="Amanda Massage is gevestigd aan het Weigeliapark 2 in Zoetermeer, in een verzorgde en toegankelijke praktijkruimte."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="card-surface p-8 sm:p-10">
            <div className="space-y-4 text-sm text-ink/75 sm:text-base">
              <p className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-bark" />
                <span>
                  {siteSettings.address.street}
                  <br />
                  {siteSettings.address.postalCode} {siteSettings.address.city}
                </span>
              </p>
              <a href={siteSettings.phoneHref} className="flex items-center gap-3 hover:text-bark">
                <PhoneIcon className="h-5 w-5 text-bark" />
                {siteSettings.phoneDisplay}
              </a>
              <a href={`mailto:${siteSettings.email}`} className="flex items-center gap-3 hover:text-bark">
                <MailIcon className="h-5 w-5 text-bark" />
                {siteSettings.email}
              </a>
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-mist p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/60">Faciliteiten</p>
              <ul className="mt-5 space-y-4 text-sm text-ink/75 sm:text-base">
                {practiceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-sage-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="card-surface overflow-hidden">
            <div className="relative min-h-[28rem]">
              <Image
                src="/images/praktijk-ruimte.svg"
                alt="Placeholderafbeelding van de praktijkruimte"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <GoogleMap />
          </FadeIn>

          <div className="grid gap-6">
            {practiceGallery.map((item, index) => (
              <FadeIn key={item.image} delay={index * 0.08} className="card-surface overflow-hidden">
                <div className="relative min-h-[14rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
