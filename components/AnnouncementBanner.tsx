import { siteSettings } from "@/lib/constants";

export function AnnouncementBanner() {
  if (!siteSettings.announcement.enabled) {
    return null;
  }

  return (
    <div className="border-y border-gold/20 bg-gold/10">
      <div className="container-shell flex min-h-12 items-center justify-center py-3 text-center text-sm font-medium text-bark">
        {siteSettings.announcement.text}
      </div>
    </div>
  );
}
