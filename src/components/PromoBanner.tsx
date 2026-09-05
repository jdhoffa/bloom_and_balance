import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BOOKING_URL } from "@/data/site";

const PROMO_DISMISS_KEY = "promo-intro-dismissed";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(PROMO_DISMISS_KEY) === "1") {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(PROMO_DISMISS_KEY, "1");
    } catch {
      // sessionStorage unavailable (private mode, etc.) — dismissal is in-memory only
    }
  };

  return (
    <div role="region" aria-label="Promotion" className="relative bg-lavender text-taupe">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-5 py-2.5 pr-12">
        <p className="text-center text-sm font-medium">
          Book your first 90 minutes introductory session with 50% off — use code{" "}
          <span className="font-semibold tracking-wide">FIRSTBLOOM</span>
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-taupe/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-taupe transition hover:bg-taupe hover:text-lavender focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Book now
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-taupe/70 transition hover:bg-taupe/10 hover:text-taupe focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <X className="size-4" aria-hidden />
      </button>
    </div>
  );
}
