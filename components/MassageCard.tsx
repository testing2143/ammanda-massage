import Image from "next/image";
import Link from "next/link";

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
  href
}: {
  name: string;
  summary: string;
  image: string;
  alt: string;
  icon: keyof typeof iconMap;
  href: string;
}) {
  const Icon = iconMap[icon];

  return (
    <article className="card-surface group overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/70 bg-white/80 p-3 text-bark shadow-soft backdrop-blur">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-7 sm:p-8">
        <h3 className="font-heading text-2xl text-ink">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">{summary}</p>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bark transition group-hover:text-sage-700">
          Meer info
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
