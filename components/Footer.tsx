import Image from "next/image";
import Link from "next/link";

import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { openingHours, siteSettings } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/70 bg-[#f3ede2]/90">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.8fr_0.85fr]">
        <div>
          <Image src="/logo.svg" alt="Amanda Massage logo" width={186} height={52} />
          <p className="mt-4 max-w-md text-sm leading-7 text-ink/72">
            Massagepraktijk in Zoetermeer met aandacht voor rust, comfort en herstel. U kunt niet bij ons terecht voor erotische massages.
          </p>
          <div className="mt-6 space-y-3 text-sm text-ink/72">
            <a href={siteSettings.phoneHref} className="flex items-center gap-3 hover:text-bark">
              <PhoneIcon className="h-4 w-4 text-bark" />
              {siteSettings.phoneDisplay}
            </a>
            <a href={`mailto:${siteSettings.email}`} className="flex items-center gap-3 hover:text-bark">
              <MailIcon className="h-4 w-4 text-bark" />
              {siteSettings.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPinIcon className="h-4 w-4 shrink-0 text-bark" />
              {siteSettings.address.street}, {siteSettings.address.postalCode} {siteSettings.address.city}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-sage/15 p-3 text-sage-700">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/60">Openingstijden</p>
              <h3 className="font-heading text-2xl text-ink">Beschikbaarheid</h3>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-ink/72">
            {openingHours.map((entry) => (
              <li key={entry.day} className="flex items-start justify-between gap-4 rounded-2xl bg-white/65 px-4 py-3">
                <span className="font-semibold text-ink">{entry.day}</span>
                <span className="text-right">{entry.slots.map((slot) => slot.label).join(" & ")}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-[2rem] border border-bark/10 bg-white/70 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/60">BMS</p>
            <div className="mt-4 flex items-center gap-4">
              <Image src="/bms-logo.svg" alt="BMS logo placeholder" width={72} height={72} />
              <p className="text-sm leading-7 text-ink/72">Aangesloten bij BMS. Vervang dit placeholderlogo door het officiele keurmerk zodra het beschikbaar is.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-bark">
              <a href={siteSettings.socials.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={siteSettings.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-bark/8 py-5">
        <div className="container-shell flex flex-col gap-3 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Â© {new Date().getFullYear()} Amanda Massage - Alle rechten voorbehouden</p>
          <a href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" className="font-semibold text-bark">
            Online afspraak maken
          </a>
        </div>
      </div>
    </footer>
  );
}
