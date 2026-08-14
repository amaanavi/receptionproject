"use client";

import { useState } from "react";

export default function AboutPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-[var(--ig-hairline)] px-3 py-1 text-xs font-semibold text-[var(--ig-text)] transition hover:bg-[var(--ig-hairline)]"
      >
        About this project
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:p-8" onClick={() => setOpen(false)}>
          <div
            className="my-4 w-full max-w-2xl rounded-2xl bg-[var(--ig-bg)] p-6 text-sm leading-relaxed text-[var(--ig-text)] shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-lg font-semibold">NOSTOS — a note for the reader</h2>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-xl text-[var(--ig-text-muted)]">✕</button>
            </div>

            <p className="mb-4 text-[var(--ig-text-muted)]">
              An eight-post feed of <i>Odyssey</i> 9–10 — the Apologoi, Odysseus&apos;s own first-person
              account of the Cyclops, Aiolos, the Laestrygonians and Circe, told to the Phaeacians
              in exchange for a ship home.
            </p>

            <Section title="The mechanic">
              Seven crew comment across posts 2–5. Between post 5 and post 6, four of them stop writing and
              never write again. No caption, comment or image ever states that anyone has died. Antiphos is
              last heard in post 3 (the cave). Stichios and Ophelestes are last heard in post 5 (crushed at
              Telepylos with the other eleven ships). Perimedes posts a running ship-count under every post;
              at post 6 it reads &ldquo;one ship,&rdquo; and then he stops. The deaths are in the poem — not
              stating them is the argument in miniature.
            </Section>

            <Section title="The count">
              @perimedes.rows and the two ship-numbered handles quietly announce their own ending from post 2.
              Twelve, twelve, twelve, twelve — one. Then Elpenor falls off a roof and the last subtraction is
              left to you.
            </Section>

            <Section title="The typography">
              Odysseus writes in complete sentences with capitals and paragraph breaks — he is composing.
              The crew write in lowercase run-ons — they are talking. The register gap is the central device:
              the man with rhetoric is the man who survives to tell it, and the men without it are audible only
              in the gaps he leaves. The crew&apos;s lowercase is voice, not error.
            </Section>

            <Section title="Reverse chronology">
              Posts are in narrative order; the feed shows them newest-first, so your first sight is Elpenor on
              the roof and you scroll down into the past. The Apologoi are already a retrospective told out of
              order — a feed that shows the ending first and buries the beginning is doing what the poem does.
            </Section>

            <Section title="Provenance">
              Named in the text: Odysseus, Eurylochos, Polites, Elpenor, Polyphemos, Alkinoös, Arete, Nausikaa,
              Demodokos. Invented: @perimedes.rows, @antiphos.oikos, @stichios.shipfour, @ophelestes.ix. Homer
              names four of the crew and kills roughly six hundred; the project cannot stage crew dissent without
              giving the crew names, and that it has to is itself the finding. Declared anachronism: the crew can
              write.
            </Section>

            <p className="mt-6 text-xs text-[var(--ig-text-faint)]">
              A reception project · Odyssey 9–10 · eight-post feed. Line references appear beneath each post.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-[var(--ig-text)]">{children}</p>
    </div>
  );
}
