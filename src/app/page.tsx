import HomeFeed from "@/components/HomeFeed";
import AboutPanel from "@/components/AboutPanel";
import { Icon } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--ig-canvas)] text-[var(--ig-text)]">
      {/* top bar — the Instagram home chrome */}
      <header className="sticky top-0 z-40 border-b border-[var(--ig-hairline)] bg-[var(--ig-bg)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[975px] items-center justify-between px-4 py-3">
          <span className="logo text-2xl leading-none">Nostos</span>
          <div className="flex items-center gap-4">
            <span className="hidden text-[var(--ig-text)] sm:block"><Icon.Heart /></span>
            <span className="hidden text-[var(--ig-text)] sm:block"><Icon.Share /></span>
            <AboutPanel />
          </div>
        </div>
      </header>

      <main className="py-2 sm:py-6">
        <HomeFeed />

        <footer className="mx-auto max-w-[470px] px-4 py-10 text-center text-xs text-[var(--ig-text-faint)]">
          <p>Twelve ships out of Troy.</p>
          <p className="mt-1">A reception project · Odyssey 9–10</p>
        </footer>
      </main>
    </div>
  );
}
