import Image from "next/image";

const presetClasses = {
  "card-portrait": {
    stage: "items-end justify-start px-5 pb-5 pt-5 sm:px-6",
    panel: "left-6 right-10 top-5 bottom-7 rounded-[2.25rem_3rem_1.5rem_2rem]",
    frame: "ml-3 w-[74%] max-w-[12.75rem] aspect-[4/5] rounded-[2rem_2rem_1.3rem_2.9rem]",
    accentA: "-left-8 top-4 h-36 w-24 rounded-[999px] rotate-[-12deg]",
    accentB: "right-4 bottom-4 h-20 w-20 rounded-[2rem]"
  },
  "card-landscape": {
    stage: "items-end justify-center px-5 pb-4 pt-5 sm:px-6",
    panel: "left-7 right-7 top-6 bottom-7 rounded-[2.25rem_2.25rem_1.6rem_1.6rem]",
    frame: "w-[90%] max-w-[19rem] aspect-[4/3] rounded-[2.1rem_2.1rem_1.35rem_1.35rem]",
    accentA: "left-5 top-6 h-20 w-28 rounded-full",
    accentB: "right-4 bottom-4 h-24 w-24 rounded-[2.25rem]"
  },
  "section-portrait": {
    stage: "items-center justify-start px-7 py-7 sm:px-10",
    panel: "left-8 right-14 top-8 bottom-8 rounded-[2.5rem_3.4rem_1.8rem_2.2rem]",
    frame: "ml-4 w-[80%] max-w-[22rem] aspect-[4/5] rounded-[2.4rem_2.4rem_1.55rem_3rem]",
    accentA: "-left-10 top-10 h-44 w-32 rounded-[999px] rotate-[-10deg]",
    accentB: "right-6 bottom-8 h-24 w-24 rounded-[2.1rem]"
  },
  "section-landscape": {
    stage: "items-center justify-center px-6 py-6 sm:px-9",
    panel: "left-8 right-8 top-7 bottom-7 rounded-[2.5rem_2.5rem_1.8rem_1.8rem]",
    frame: "w-[92%] max-w-[28rem] aspect-[6/5] rounded-[2.4rem_2.4rem_1.55rem_1.55rem]",
    accentA: "left-6 top-6 h-24 w-32 rounded-full",
    accentB: "right-5 bottom-5 h-28 w-28 rounded-[2.5rem]"
  },
  "preview-landscape": {
    stage: "items-end justify-end px-5 py-5 sm:px-6",
    panel: "left-6 right-8 top-5 bottom-6 rounded-[2.2rem_2.9rem_1.5rem_2rem]",
    frame: "w-[90%] max-w-[20rem] aspect-[6/5] rounded-[2rem_2rem_1.25rem_2.6rem]",
    accentA: "left-5 top-6 h-24 w-28 rounded-[999px]",
    accentB: "right-2 bottom-2 h-20 w-20 rounded-[1.75rem]"
  },
  "preview-portrait": {
    stage: "items-end justify-center px-5 py-5 sm:px-6",
    panel: "left-8 right-8 top-6 bottom-7 rounded-[2.25rem_2.75rem_1.5rem_2rem]",
    frame: "w-[82%] max-w-[15rem] aspect-[3/4] rounded-[2rem_2rem_1.25rem_2.6rem]",
    accentA: "left-4 top-6 h-20 w-24 rounded-full",
    accentB: "right-5 bottom-5 h-24 w-20 rounded-[999px]"
  },
  "gallery-landscape": {
    stage: "items-center justify-center px-5 py-5 sm:px-6",
    panel: "left-6 right-7 top-5 bottom-6 rounded-[1.9rem_2.25rem_1.4rem_1.4rem]",
    frame: "w-[90%] max-w-[19rem] aspect-[6/5] rounded-[1.85rem_1.85rem_1.2rem_1.2rem]",
    accentA: "left-5 top-5 h-[4.5rem] w-24 rounded-full",
    accentB: "right-4 bottom-4 h-20 w-20 rounded-[1.7rem]"
  },
  "gallery-portrait": {
    stage: "items-center justify-start px-5 py-5 sm:px-6",
    panel: "left-6 right-10 top-5 bottom-6 rounded-[1.95rem_2.35rem_1.4rem_1.8rem]",
    frame: "ml-2 w-[74%] max-w-[12.75rem] aspect-[4/5] rounded-[1.85rem_1.85rem_1.2rem_2.4rem]",
    accentA: "-left-6 top-6 h-28 w-20 rounded-[999px] rotate-[-10deg]",
    accentB: "right-4 bottom-5 h-[4.5rem] w-[4.5rem] rounded-[1.6rem]"
  },
  profile: {
    stage: "items-center justify-center px-6 py-6 sm:px-9",
    panel: "left-8 right-8 top-7 bottom-7 rounded-[2.6rem_3rem_1.8rem_2.2rem]",
    frame: "w-[88%] max-w-[23rem] aspect-[11/10] rounded-[2.5rem_2.5rem_1.6rem_3rem]",
    accentA: "left-6 top-6 h-24 w-32 rounded-full",
    accentB: "right-5 bottom-5 h-28 w-24 rounded-[999px]"
  }
} as const;

const toneClasses = {
  sage: {
    background:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(232,241,229,0.96))]",
    orbA: "bg-sage/28",
    orbB: "bg-gold/20",
    panel: "bg-white/42"
  },
  sand: {
    background:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,240,232,0.98))]",
    orbA: "bg-gold/22",
    orbB: "bg-bark/12",
    panel: "bg-white/46"
  }
} as const;

export type DecorativePhotoPreset = keyof typeof presetClasses;
export type DecorativePhotoTone = keyof typeof toneClasses;

export function DecorativePhoto({
  src,
  alt,
  sizes,
  preset,
  tone = "sage",
  className = "",
  imageClassName = ""
}: {
  src: string;
  alt: string;
  sizes: string;
  preset: DecorativePhotoPreset;
  tone?: DecorativePhotoTone;
  className?: string;
  imageClassName?: string;
}) {
  const toneStyle = toneClasses[tone];
  const presetStyle = presetClasses[preset];

  return (
    <div className={`relative overflow-hidden ${toneStyle.background} ${className}`.trim()}>
      <div className={`absolute ${presetStyle.accentA} ${toneStyle.orbA} blur-3xl`} />
      <div className={`absolute ${presetStyle.accentB} ${toneStyle.orbB} blur-2xl`} />
      <div
        className={`absolute border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[2px] ${toneStyle.panel} ${presetStyle.panel}`.trim()}
      />

      <div className={`relative flex h-full ${presetStyle.stage}`.trim()}>
        <div
          className={`relative overflow-hidden border border-white/85 bg-white shadow-[0_24px_50px_rgba(76,60,45,0.12)] ring-1 ring-bark/6 ${presetStyle.frame}`.trim()}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            quality={100}
            className={`object-cover ${imageClassName}`.trim()}
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}