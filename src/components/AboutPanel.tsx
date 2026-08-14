"use client";

import { useState } from "react";

const PARAGRAPHS = [
  "NOSTOS retells Books 9 and 10 of the Odyssey as an Instagram feed of someone following the adventures of the general and his men. Odysseus posts the Apologoi with the Lotus-Eaters, the Cyclops, Aiolos, the Laestrygonians, and Circe with his crew’s comment section underneath. This form follows from the poem of Books 9 and 10 as a first-person testimony, delivered by a man asking his audience for a ship. Odysseus records his crew objecting at almost every stage, begging him to take cheese and leave the cave, begging him to stop shouting at Polyphemus, their grievance about Aiolos's bag and more. The poem preserves every objection and then keeps the microphone with the man being objected to. The comment sections take it away from Odysseus and show the feelings of the crew.",
  "The deliberate anachronism is that the crew can write and record their story permanently online on social media. The mechanism stages the dissent of the poem in a direct way towards Odysseus written for public view for eternity. Homer names only four crewmen across two books and kills roughly six hundred, so the recurring commenters here are invented and declared as such with some even carrying ship numbers in their NOSTOS handles. Between the Aiolos post and the Laestrygonians, four stop writing and never appear again. No caption or comment or image says that any one person has died, though, as Odysseus was not one for indulging that kind of thing. There is a running tally in the comments that moves from twelve ships to one and 46 men. Odysseus also writes in full sentences while his crew write in lowercase and poor grammar and punctuation. That gap is the argument that the man with rhetoric survives to tell it, and the men without it are audible only in the spaces they exist in. Odysseus’s men do not have the education or intelligence to be the ones who tell their story.",
  "The last post belongs to Elpenor, not Odysseus. Elpenor is the youngest crew member, the only named crew member, whom the poem describes only in order to insult. He is not much of a fighter, not especially bright, not especially well respected, and assigned to carrying things rather than more important duties. He gets no likes and no replies and the feed declines to agree with the poem about him. Nothing here contradicts the poem as every objection is in NOSTOS, but it changes who is left with the last words and leaves the internet with a perfect record of the accounts of the Odyssey.",
];

const AI_NOTE =
  "As a note to the viewer, AI was used in this project singularly to create the website. I have the capability to create a website like this, but it is something which would have taken me a significantly longer amount of time. The comments and words in this project, however, are written by me. The ultimate purpose of this project is to portray the dissent and disapproval of the crew through a modern lens on a platform that would store their anger (or support) permanently. For a close reader, the passing of tragedies, death, and yearning for homecoming can be seen through the posts and comments.";

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
            className="my-4 w-full max-w-2xl rounded-2xl bg-[var(--ig-bg)] p-6 text-[15px] leading-relaxed text-[var(--ig-text)] shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <h2 className="logo text-2xl">Nostos</h2>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-xl text-[var(--ig-text-muted)]">✕</button>
            </div>

            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="mb-4">{p}</p>
            ))}

            <hr className="my-5 border-[var(--ig-hairline)]" />

            <p className="text-[var(--ig-text-muted)]">{AI_NOTE}</p>
          </div>
        </div>
      )}
    </>
  );
}
