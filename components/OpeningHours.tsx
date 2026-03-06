import { openingHours } from "@/lib/constants";
import { ClockIcon } from "@/components/icons";

export function OpeningHours({ className = "" }: { className?: string }) {
  return (
    <div className={`card-surface p-8 sm:p-10 ${className}`.trim()}>
      <div className="flex items-center gap-3 text-bark">
        <span className="rounded-full bg-sage/15 p-3 text-sage-700">
          <ClockIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Openingstijden</p>
          <h3 className="font-heading text-2xl text-ink">Momenten voor rust</h3>
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        {openingHours.map((entry) => (
          <li key={entry.day} className="flex flex-col gap-2 rounded-2xl bg-white/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-base font-semibold text-ink">{entry.day}</span>
            <span className="text-sm text-ink/70 sm:text-right">{entry.slots.map((slot) => slot.label).join(" & ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
