import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { OpeningHours } from "@/components/OpeningHours";
import { SectionHeading } from "@/components/SectionHeading";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { siteSettings } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Neem contact op met Amanda Massage in Zoetermeer of plan direct online een afspraak in via SuperSaaS.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Neem contact op of plan direct online"
          description="Stuur een bericht via het formulier of gebruik de online agenda om meteen een moment te reserveren."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <div className="grid gap-6">
            <FadeIn delay={0.08} className="card-surface p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/60">Contactgegevens</p>
              <div className="mt-6 space-y-4 text-sm text-ink/75 sm:text-base">
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
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
                  Afspraak maken
                </a>
                <Link href="/privacy" className="button-secondary">
                  Privacyverklaring
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <OpeningHours />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
