import type { MetadataRoute } from "next";

import { siteSettings } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteSettings.siteUrl}/sitemap.xml`
  };
}
