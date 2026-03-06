import { siteSettings } from "@/lib/constants";

export function GoogleMap() {
  const query = `${siteSettings.address.street}, ${siteSettings.address.postalCode} ${siteSettings.address.city}`;

  return (
    <div className="card-surface overflow-hidden">
      <iframe
        title="Google Maps locatie Amanda Massage"
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`}
        className="h-[24rem] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
