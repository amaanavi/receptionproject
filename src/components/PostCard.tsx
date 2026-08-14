"use client";

import { useState } from "react";
import type { Comment, Post } from "@/data/feed";
import { AUTHORS } from "@/data/feed";
import { Avatar, Verified, Icon, formatCount } from "./ui";
import Carousel from "./Carousel";
import CommentThread from "./CommentThread";

function countComments(comments: Comment[]): number {
  let n = 0;
  for (const c of comments) {
    if (c.noReplies) continue;
    n += 1; // a deleted placeholder still counts as a comment slot
    if (c.replies) n += countComments(c.replies);
  }
  return n;
}

export default function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false); // caption
  const [showComments, setShowComments] = useState(false);
  const author = AUTHORS[post.author];
  const isElpenor = post.author === "elpenor.younger";
  const likeTotal = post.likes + (liked ? 1 : 0);
  const captionClass = isElpenor ? "font-normal" : "";
  const total = countComments(post.comments);

  // Collapsed preview: the first two top-level comments (Instagram style).
  const preview = post.comments.filter((c) => !c.deleted && !c.noReplies).slice(0, 2);

  return (
    <article className="border-b border-[var(--ig-hairline)] pb-3 pt-1">
      {/* header */}
      <header className="flex items-center gap-3 px-3 py-2.5">
        <Avatar handle={post.author} size={34} ring />
        <div className="min-w-0 flex-1 leading-tight">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-semibold">{post.author}</span>
            {(author?.role === "odysseus" || author?.role === "phaeacian") && <Verified size={13} />}
            <span className="text-[var(--ig-text-muted)]">·</span>
            <button className="text-sm font-semibold text-[#0095f6]">Follow</button>
          </div>
          <div className="flex items-center gap-1 text-xs text-[var(--ig-text)]">
            {post.pinned && (<><Icon.Pin size={11} /><span className="font-medium">Pinned</span><span className="text-[var(--ig-text-muted)]">·</span></>)}
            <span>📍 {post.location}</span>
          </div>
        </div>
        <button className="text-[var(--ig-text)]" aria-label="More options"><Icon.More /></button>
      </header>

      {/* image(s) */}
      <Carousel images={post.images} />

      {/* action bar */}
      <div className="flex items-center gap-4 px-3 pt-3">
        <button onClick={() => setLiked((v) => !v)} aria-label="Like" className="transition active:scale-90"><Icon.Heart filled={liked} /></button>
        <button onClick={() => setShowComments(true)} aria-label="Comment"><Icon.Comment /></button>
        <button aria-label="Share"><Icon.Share /></button>
        <button onClick={() => setSaved((v) => !v)} className="ml-auto" aria-label="Save">
          <span className={saved ? "text-[var(--ig-text)]" : ""}><Icon.Bookmark /></span>
        </button>
      </div>

      {/* likes */}
      <div className="px-3 pt-2 text-sm font-semibold">
        {post.likes === 0 && !liked ? <span>0 likes</span> : <span>{formatCount(likeTotal)} likes</span>}
      </div>

      {/* caption */}
      <div className="px-3 pt-1 text-sm leading-snug">
        <div className={captionClass}>
          <span className="mr-1.5 font-semibold">{post.author}</span>
          <span className="whitespace-pre-wrap align-baseline">{post.caption[0]}</span>
        </div>
        {post.caption.length > 1 && !expanded ? (
          <button onClick={() => setExpanded(true)} className="mt-0.5 text-[var(--ig-text-muted)]">… more</button>
        ) : (
          post.caption.slice(1).map((p, i) => (
            <p key={i} className={`mt-2 whitespace-pre-wrap ${captionClass}`}>{p}</p>
          ))
        )}
      </div>

      {/* comments */}
      <div className="px-3 pt-2">
        {post.noComments ? null : showComments ? (
          <>
            <button onClick={() => setShowComments(false)} className="mb-1 text-sm text-[var(--ig-text-muted)]">Hide comments</button>
            <CommentThread comments={post.comments} />
          </>
        ) : (
          <>
            {total > 0 && (
              <button onClick={() => setShowComments(true)} className="text-sm text-[var(--ig-text-muted)]">
                View all {total} comments
              </button>
            )}
            <div className="mt-1 space-y-0.5">
              {preview.map((c, i) => (
                <div key={i} className={`text-sm leading-snug ${AUTHORS[c.handle]?.role === "odysseus" ? "" : "font-normal"}`}>
                  <span className="mr-1.5 font-semibold">{c.handle}</span>
                  <span className="align-baseline">{c.text}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="px-3 pt-2">
        <p className="text-[11px] uppercase tracking-wide text-[var(--ig-text-faint)]">{post.ref}</p>
      </div>
    </article>
  );
}
