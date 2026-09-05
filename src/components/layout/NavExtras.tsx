import { useState } from "react";
import { Link } from "react-router-dom";
import { Radio } from "lucide-react";
import { ModalShell } from "@/components/common/ModalShell";
import { YumpuEmbed } from "@/components/common/YumpuEmbed";

interface NavExtrasProps {
  /** 'dark' sits on the orange sidebar; 'light' sits on the white mobile drawer. */
  variant?: "dark" | "light";
  onNavigate?: () => void;
}

/** The sidebar's promo extras below the main links: MUBC Radio + the two reader cards. */
export function NavExtras({ variant = "dark", onNavigate }: NavExtrasProps) {
  const [saturaOpen, setSaturaOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col gap-3 px-3 pb-5">
      <Link
        to="/brissy-32"
        onClick={onNavigate}
        className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
          isDark
            ? "bg-white/15 text-white hover:bg-white/25"
            : "bg-accent text-white hover:bg-accent-hover"
        }`}
      >
        <Radio className="size-4" aria-hidden="true" />
        MUBC Radio
      </Link>

      <Link
        to="/the-new-idea"
        onClick={onNavigate}
        className={`group overflow-hidden rounded-xl border shadow-card transition-transform hover:scale-[1.02] ${
          isDark ? "border-white/20" : "border-border"
        }`}
      >
        <img
          src="/assets/images/books/the-new-idea_thumbnail.jpg"
          alt="The New Idea"
          className="aspect-[4/3] w-full object-cover"
        />
        <span
          className={`block px-3 py-2 text-center text-xs font-medium ${
            isDark ? "bg-black/20 text-white/90" : "bg-surface text-text"
          }`}
        >
          The New Idea
        </span>
      </Link>

      <button
        type="button"
        onClick={() => setSaturaOpen(true)}
        className={`group overflow-hidden rounded-xl border text-left shadow-card transition-transform hover:scale-[1.02] ${
          isDark ? "border-white/20" : "border-border"
        }`}
      >
        <img
          src="/assets/images/main/satura.jpg"
          alt="Satura"
          className="aspect-[4/3] w-full object-cover"
        />
        <span
          className={`block px-3 py-2 text-center text-xs font-medium ${
            isDark ? "bg-black/20 text-white/90" : "bg-surface text-text"
          }`}
        >
          Satura
        </span>
      </button>

      <ModalShell
        open={saturaOpen}
        onClose={() => setSaturaOpen(false)}
        title="Satura"
      >
        <div className="p-4">
          <YumpuEmbed id="MaqzR6wXbHfthyAS" title="Satura" />
        </div>
      </ModalShell>
    </div>
  );
}
