import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { privacyTopics } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description:
    "Lees hoe Amanda Massage omgaat met contactgegevens en functionele cookies op de website.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Privacy"
          title="Zorgvuldig omgaan met uw gegevens"
          description="Deze privacytekst is een compacte basisversie voor de website en kan later worden uitgebreid met een volledige AVG-verklaring."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {privacyTopics.map((topic, index) => (
            <FadeIn key={topic.title} delay={index * 0.08} className="card-surface p-8">
              <h2 className="font-heading text-2xl text-ink">{topic.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/75 sm:text-base">{topic.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
