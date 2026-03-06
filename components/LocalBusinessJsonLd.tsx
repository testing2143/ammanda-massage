import { getLocalBusinessSchema } from "@/lib/schema";

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getLocalBusinessSchema())
      }}
    />
  );
}
