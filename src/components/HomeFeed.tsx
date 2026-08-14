import { FEED } from "@/data/feed";
import { Avatar } from "./ui";
import PostCard from "./PostCard";

// Home timeline order: Elpenor's post first, then all of Odysseus's posts,
// newest-first — so you open on Elpenor on the roof and scroll down into the
// past (§3). Post 8 is Elpenor; 7→1 are Odysseus in reverse narrative order.
const TIMELINE = [...FEED].sort((a, b) => {
  if (a.author === "elpenor.younger") return -1;
  if (b.author === "elpenor.younger") return 1;
  return b.id - a.id;
});

// A stories tray, the way the real home page opens.
const STORIES = ["elpenor.younger", "polites_", "eurylochos", "perimedes.rows", "alkinoos.king", "demodokos"];

export default function HomeFeed() {
  return (
    <div className="mx-auto max-w-[470px]">
      {/* stories */}
      <div className="flex gap-4 overflow-x-auto border-b border-[var(--ig-hairline)] px-3 py-4">
        {STORIES.map((h) => (
          <div key={h} className="flex w-16 shrink-0 flex-col items-center gap-1">
            <Avatar handle={h} size={56} ring />
            <span className="w-full truncate text-center text-xs text-[var(--ig-text)]">{h.split(".")[0]}</span>
          </div>
        ))}
      </div>

      {/* the feed */}
      <div>
        {TIMELINE.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
