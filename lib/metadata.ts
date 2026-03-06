import type { Metadata } from "next";

import { siteSettings } from "@/lib/constants";

const defaultTitle =
  "Amanda Massage Zoetermeer - Klassieke, Hot Stone & Zwangerschapsmassage";

const createPageTitle = (title?: string) =>
  title ? `${title} | ${siteSettings.name}` : defaultTitle;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Amanda Massage"
  },
  description: siteSettings.description,
  applicationName: siteSettings.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteSettings.siteUrl,
    siteName: siteSettings.name,
    title: defaultTitle,
    description: siteSettings.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteSettings.description,
    images: ["/opengraph-image"]
  },
  category: "health"
};

export function buildMetadata({
  title,
  description,
  path
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: createPageTitle(title),
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
    },
    twitter: {
      title: createPageTitle(title),
      description,
      images: ["/opengraph-image"]
    }
  };
}
