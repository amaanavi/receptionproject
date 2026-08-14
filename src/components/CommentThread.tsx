import type { Comment } from "@/data/feed";
import { AUTHORS } from "@/data/feed";
import { Avatar, Verified, Icon } from "./ui";

// §5 The typography is an argument. Odysseus composes (clean sentences); the
// crew talk (lowercase). We do not restyle the crew into "correct" prose — the
// register gap is the central device.
function CommentBody({ c }: { c: Comment }) {
  const author = AUTHORS[c.handle];
  const isOdysseus = author?.role === "odysseus";
  const isCurse = c.isCurse;

  return (
    <div className="text-[var(--ig-text)]">
      <span className={`mr-1.5 font-semibold ${isCurse ? "text-[var(--ig-text-muted)]" : ""}`}>
        {c.handle}
      </span>
      {author?.role === "phaeacian" && <Verified size={12} />}
      <span className={`${isOdysseus ? "font-normal" : ""} whitespace-pre-wrap align-baseline`}>
        {" "}
        {c.text}
      </span>
    </div>
  );
}

function SingleComment({ c, reply = false }: { c: Comment; reply?: boolean }) {
  // Deleted parent — "This comment was deleted." Its replies survive (post 7).
  if (c.deleted) {
    return (
      <div className="flex gap-3 py-1.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--ig-hairline)]" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="text-sm italic text-[var(--ig-text-muted)]">This comment was deleted.</p>
          {c.replies && <Replies replies={c.replies} />}
        </div>
      </div>
    );
  }

  // The greyed "no replies" stub Instagram renders under a thread with none.
  if (c.noReplies) {
    return <p className="py-1 pl-11 text-xs text-[var(--ig-text-faint)]">no replies</p>;
  }

  return (
    <div className={`flex gap-3 ${reply ? "py-1" : "py-1.5"}`}>
      <Avatar handle={c.handle} size={reply ? 24 : 28} />
      <div className="min-w-0 flex-1">
        <div className="text-sm leading-snug">
          <CommentBody c={c} />
        </div>
        {/* Only "Reply" — no datestamps. The single frame device is the
            crew-past / Phaeacian-present contrast in the comments themselves (§1). */}
        <div className="mt-0.5 flex items-center gap-3 text-xs text-[var(--ig-text-muted)]">
          <span>Reply</span>
        </div>
        {c.replies && <Replies replies={c.replies} />}
      </div>
      {!c.isCurse && (
        <button className="mt-0.5 self-start text-[var(--ig-text-muted)]" aria-label="Like comment">
          <Icon.Heart size={12} />
        </button>
      )}
    </div>
  );
}

function Replies({ replies }: { replies: Comment[] }) {
  const real = replies.filter((r) => !r.noReplies);
  const stub = replies.find((r) => r.noReplies);
  return (
    <div className="mt-1">
      {stub && <SingleComment c={stub} />}
      {real.length > 0 && (
        <div className="mt-1 space-y-0.5 border-l border-[var(--ig-hairline)] pl-4">
          {real.map((r, i) => (
            <SingleComment key={i} c={r} reply />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentThread({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-0.5">
      {comments.map((c, i) => (
        <SingleComment key={i} c={c} />
      ))}
    </div>
  );
}
