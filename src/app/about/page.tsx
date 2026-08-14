import Link from "next/link";

export const metadata = {
  title: "About · NOSTOS",
};

const PARAGRAPHS = [
  "NOSTOS retells Books 9 and 10 of the Odyssey as an Instagram feed of someone following the adventures of the King of Ithaka and his men. Odysseus posts the Apologoi with the Lotus-Eaters, the Cyclops, Aiolos, the Laestrygonians, and Circe with his crew’s comment section underneath. This form follows from the poem of Books 9 and 10 as a first-person testimony, delivered by a man asking his audience for a ship. Odysseus records his crew objecting at almost every stage, begging him to take cheese and leave the cave, begging him to stop shouting at Polyphemus, their grievance about Aiolos's bag and more. The poem preserves every objection and then keeps the microphone with the man being objected to. The comment sections take it away from Odysseus and show the feelings of the crew.",
  "The deliberate anachronism is that the crew can write and record their story permanently online on social media. The mechanism stages the dissent of the poem in a direct way towards Odysseus written for public view for eternity. Homer names only four crewmen across two books and kills roughly six hundred, so the recurring commenters here are invented and declared as such with some even carrying ship numbers in their NOSTOS handles. Between the Aiolos post and the Laestrygonians, four stop writing and never appear again. No caption or comment or image says that any one person has died, though. There is a running tally in the comments that moves from twelve ships to one and 46 men. Odysseus also writes in full sentences while his crew write in lowercase and poor grammar and punctuation. That gap is the argument that the man with rhetoric survives to tell it, and the men without it are audible only in the spaces they exist in. Odysseus’s men do not have the education or intelligence to be the ones who tell their story.",
  "The last post belongs to Elpenor, not Odysseus. Elpenor is the youngest crew member, one of the only named crew members, whom the poem describes only in order to insult. He is not much of a fighter, not especially bright, not especially well respected, and assigned to carrying things rather than more important duties. He gets no likes and no replies and the feed declines to agree with the poem about him. Nothing here contradicts the poem as every objection is in NOSTOS, but it changes who is left with the last words and leaves the internet with a perfect record of the accounts of the Odyssey.",
];

const AI_NOTE =
  "As a note to the viewer, AI was used in this project singularly to create the website. I have the capability to create a website like this, but it is something which would have taken me a significantly longer amount of time. The comments and words in this project, however, are written by me. The ultimate purpose of this project is to portray the dissent and disapproval of the crew through a modern lens on a platform that would store their anger (or support) permanently. For a close reader, the passing of tragedies, death, and yearning for homecoming can be seen through the posts and comments.";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ig-canvas)] text-[var(--ig-text)]">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-[var(--ig-hairline)] bg-[var(--ig-bg)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[975px] items-center justify-between px-4 py-3">
          <Link href="/" className="logo text-2xl leading-none">Nostos</Link>
          <Link
            href="/"
            className="rounded-full border border-[var(--ig-hairline)] px-3 py-1 text-xs font-semibold text-[var(--ig-text)] transition hover:bg-[var(--ig-hairline)]"
          >
            ← Back to feed
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <h1 className="logo mb-2 text-4xl">Nostos</h1>
        <p className="mb-8 text-sm uppercase tracking-widest text-[var(--ig-text-muted)]">About this project</p>

        <div className="text-[15px] leading-relaxed sm:text-base">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="mb-5">{p}</p>
          ))}

          <hr className="my-8 border-[var(--ig-hairline)]" />

          <p className="text-[var(--ig-text-muted)]">{AI_NOTE}</p>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm font-semibold text-[#0095f6]">← Back to the feed</Link>
        </div>
      </main>
    </div>
  );
}
