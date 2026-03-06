import Link from "next/link";

import {
  DecorativePhoto,
  type DecorativePhotoPreset
} from "@/components/DecorativePhoto";
import { ArrowRightIcon, HandsIcon, HeartIcon, StoneIcon } from "@/components/icons";

const iconMap = {
  hands: HandsIcon,
  stone: StoneIcon,
  heart: HeartIcon
} as const;

export function MassageCard({
  name,
  summary,
  image,
  alt,
  icon,
  href,
  photoPreset
}: {
  name: string;
  summary: string;
  image: string;
  alt: string;
  icon: keyof typeof iconMap;
  href: string;
  photoPreset: DecorativePhotoPreset;
}) {
  const Icon = iconMap[icon];
  const photoHeight = photoPreset === "card-landscape" ? "h-[17rem] sm:h-72" : "h-72 sm:h-[19rem]";

  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <div className={`relative overflow-hidden ${photoHeight}`.trim()}>
        <DecorativePhoto
          src={image}
          alt={alt}
          preset={photoPreset}
          sizes="(max-width: 768px) 100vw, 33vw"
          tone={photoPreset === "card-landscape" ? "sand" : "sage"}
          className="h-full"
        />
        <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/70 bg-white/88 p-3 text-bark shadow-soft backdrop-blur">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="font-heading text-2xl text-ink">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">{summary}</p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-bark transition group-hover:text-sage-700"
        >
          Meer info
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}