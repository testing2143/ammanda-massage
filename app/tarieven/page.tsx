import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { PriceTable } from "@/components/PriceTable";
import { SectionHeading } from "@/components/SectionHeading";
import { siteSettings } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Tarieven",
  description:
    "Bekijk de placeholdertarieven voor klassieke massage, hot stone massage en zwangerschapsmassage bij Amanda Massage.",
  path: "/tarieven"
});

export default function TarievenPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Tarieven"
          title="Heldere tarieven voor iedere behandeling"
          description="De onderstaande prijzen zijn placeholders en kunnen direct worden vervangen zodra de definitieve bedragen zijn aangeleverd."
        />

        <FadeIn className="mt-10">
          <PriceTable />
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Praktische info</p>
            <h2 className="mt-4 font-heading text-3xl text-ink sm:text-4xl">Goed om te weten</h2>
            <p className="mt-4 text-base leading-8 text-ink/75">
              {siteSettings.paymentNote} Definitieve tarieven, acties of speciale voorwaarden kunnen hier eenvoudig worden toegevoegd zodra de klant deze aanlevert.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Boeken of vragen</p>
            <h2 className="mt-4 font-heading text-3xl text-ink sm:text-4xl">Wilt u direct een moment plannen?</h2>
            <p className="mt-4 text-base leading-8 text-ink/75">
              Maak online een afspraak via de agenda of neem contact op als u wilt overleggen welke behandeling het beste past.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="button-primary">
                Afspraak maken
              </a>
              <Link href="/contact" className="button-secondary">
                Neem contact op
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
