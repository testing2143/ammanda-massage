"use client";

import { useEffect, useState } from "react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem("amanda-cookie-notice");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-[1.75rem] border border-white/70 bg-white/95 p-5 shadow-soft backdrop-blur-sm">
      <p className="text-sm leading-7 text-ink/78">
        Deze site gebruikt alleen een functionele cookie om deze melding te onthouden.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem("amanda-cookie-notice", "accepted");
            setVisible(false);
          }}
          className="button-primary"
        >
          Begrepen
        </button>
        <a href="/privacy" className="button-secondary">
          Privacy
        </a>
      </div>
    </div>
  );
}
