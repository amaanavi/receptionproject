import { AUTHORS } from "@/data/feed";

// Deterministic warm avatar colour from a handle.
export function avatarColors(handle: string): [string, string] {
  const palettes: [string, string][] = [
    ["#c98a5e", "#8a4b2f"],
    ["#7b9a6d", "#3f5c3a"],
    ["#c9a24b", "#8a6a1f"],
    ["#6d8a9a", "#33505c"],
    ["#b96d6d", "#7a3535"],
    ["#8a7b9a", "#4f3f5c"],
    ["#c9765e", "#8a3b2f"],
  ];
  let n = 0;
  for (let i = 0; i < handle.length; i++) n = (n * 31 + handle.charCodeAt(i)) >>> 0;
  return palettes[n % palettes.length];
}

export function displayName(handle: string): string {
  return AUTHORS[handle]?.name || handle;
}

export function formatCount(n: number): string {
  return n.toLocaleString("en-US");
}

export function Avatar({ handle, size = 32, ring = false }: { handle: string; size?: number; ring?: boolean }) {
  const author = AUTHORS[handle];
  // The curse account: faceless, no ring, no colour.
  if (author?.role === "curse") {
    return (
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--ig-icon-muted)] text-white"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        aria-hidden
      >
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6Z" />
        </svg>
      </span>
    );
  }
  const [a, b] = avatarColors(handle);
  const initial = (author?.name || handle).charAt(0).toUpperCase();
  const inner = (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
      style={{ width: size, height: size, fontSize: size * 0.44, background: `linear-gradient(140deg, ${a}, ${b})` }}
      aria-hidden
    >
      {initial}
    </span>
  );
  if (!ring) return inner;
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full p-[2px]"
      style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
    >
      <span className="rounded-full bg-[var(--ig-bg)] p-[2px]">{inner}</span>
    </span>
  );
}

export function Verified({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#3897f0" aria-label="Verified" role="img">
      <path d="M12 1.5l2.6 2 3.2-.4 1 3.1 2.7 1.8-1.2 3 1.2 3-2.7 1.8-1 3.1-3.2-.4-2.6 2-2.6-2-3.2.4-1-3.1L1 15l1.2-3L1 9l2.7-1.8 1-3.1 3.2.4 2.6-2z" />
      <path d="M10.6 15.2l-2.9-2.9 1.4-1.4 1.5 1.5 3.9-3.9 1.4 1.4-5.3 5.3z" fill="#fff" />
    </svg>
  );
}

export const Icon = {
  Heart: ({ filled = false, size = 24 }: { filled?: boolean; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#ed4956" : "none"} stroke={filled ? "#ed4956" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  Comment: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-4.2-.9L3 20l1.1-4.1A8.3 8.3 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 9 8.4z" />
    </svg>
  ),
  Share: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),
  Bookmark: ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  More: ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" />
    </svg>
  ),
  Pin: ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2l8 8-5 1-3 3v6l-2 2-2-6-6 3 3-6-6-2 2-2h6l3-3 1-5z" />
    </svg>
  ),
  Chevron: ({ dir = "left", size = 26 }: { dir?: "left" | "right"; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === "right" ? "rotate(180deg)" : undefined }}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  Grid: ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  Carousel: ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 4h11a1 1 0 0 1 1 1v11h-2V6H8V4zM4 8h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </svg>
  ),
};
