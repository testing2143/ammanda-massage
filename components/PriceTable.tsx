import { priceRows } from "@/lib/constants";

export function PriceTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft backdrop-blur-sm">
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-sage/10 text-left text-sm uppercase tracking-[0.18em] text-bark/70">
              <th className="px-8 py-5 font-semibold">Massage</th>
              <th className="px-8 py-5 font-semibold">Duur</th>
              <th className="px-8 py-5 font-semibold">Prijs</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row) => (
              <tr key={`${row.massage}-${row.duration}`} className="border-t border-bark/8 text-sm text-ink/80 sm:text-base">
                <td className="px-8 py-5 font-medium text-ink">{row.massage}</td>
                <td className="px-8 py-5">{row.duration}</td>
                <td className="px-8 py-5 font-semibold text-bark">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 p-5 md:hidden">
        {priceRows.map((row) => (
          <div key={`${row.massage}-${row.duration}`} className="rounded-[1.5rem] bg-mist px-5 py-4">
            <p className="font-semibold text-ink">{row.massage}</p>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm text-ink/70">
              <span>{row.duration}</span>
              <span className="font-semibold text-bark">{row.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
