import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return <svg fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" {...props} />;
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 14c0-5 4.2-9 10-9 0 5.8-4 10-9 10" />
      <path d="M5 19c2.2-4.1 5.8-6.7 10.7-8.1" />
    </IconBase>
  );
}

export function HandsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 12.5V8.2a1.2 1.2 0 0 1 2.4 0V12" />
      <path d="M10 12V7.1a1.2 1.2 0 0 1 2.4 0v4.4" />
      <path d="M12.4 11.7V8.6a1.2 1.2 0 0 1 2.4 0v4.8" />
      <path d="M14.8 12.6v-1a1.2 1.2 0 0 1 2.4 0v2.1c0 3-1.7 5.6-4.8 6.3l-1.4.3c-2.3.5-4.5-.9-5-3.2l-.9-4.4a1.2 1.2 0 1 1 2.3-.5l.8 2.6" />
    </IconBase>
  );
}

export function StoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6.3 14.9c0-3.6 2.7-6.4 6-6.4s5.4 2.7 5.4 5.7-2.4 5.3-5.7 5.3-5.7-1.8-5.7-4.6Z" />
      <path d="M8.5 9.1c1.1-2.1 3.2-3.6 5.8-4.1" />
    </IconBase>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-6.7-4.5-8.7-8.1A4.9 4.9 0 0 1 7.7 4c1.7 0 3.3.9 4.3 2.3A5.3 5.3 0 0 1 16.3 4a4.9 4.9 0 0 1 4.4 7.9C18.7 15.5 12 20 12 20Z" />
    </IconBase>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </IconBase>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7.5 4.8 5.6 6.3a2.2 2.2 0 0 0-.6 2.8c2 4 5.2 7.3 9.3 9.4a2.2 2.2 0 0 0 2.8-.6l1.5-1.9a2 2 0 0 0-.3-2.8l-1.9-1.5a2 2 0 0 0-2.8.2l-.8.8a12.5 12.5 0 0 1-3.5-3.5l.8-.8a2 2 0 0 0 .2-2.8L10.3 5a2 2 0 0 0-2.8-.2Z" />
    </IconBase>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4.5 7 7.5 5 7.5-5" />
    </IconBase>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v4.5l3 1.8" />
    </IconBase>
  );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
    </IconBase>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m5 12.5 4.2 4.1L19 7.2" />
    </IconBase>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}
