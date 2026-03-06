"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { navigation, siteSettings } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-mist/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Image src="/logo.svg" alt="Amanda Massage logo" width={186} height={52} priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${isActive ? "text-bark" : "text-ink/68 hover:text-bark"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteSettings.phoneHref} className="text-sm font-semibold text-bark">
            {siteSettings.phoneDisplay}
          </a>
          <a
            href={siteSettings.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Afspraak maken
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bark/15 bg-white/80 text-bark lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-bark/8 bg-white/95 lg:hidden">
          <div className="container-shell py-6">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-medium transition ${isActive ? "bg-sage/10 text-bark" : "text-ink/72 hover:bg-mist hover:text-bark"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] bg-mist p-4">
              <a href={siteSettings.phoneHref} className="text-sm font-semibold text-bark">
                {siteSettings.phoneDisplay}
              </a>
              <a
                href={siteSettings.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Afspraak maken
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
