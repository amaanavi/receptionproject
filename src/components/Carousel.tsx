"use client";

import { useState } from "react";
import type { FeedImage } from "@/data/feed";
import Media from "./Media";
import { Icon } from "./ui";

export default function Carousel({ images }: { images: FeedImage[] }) {
  const [i, setI] = useState(0);
  const many = images.length > 1;
  const go = (n: number) => setI((p) => Math.min(images.length - 1, Math.max(0, p + n)));

  return (
    <div className="relative select-none bg-black">
      <div className="relative aspect-square w-full overflow-hidden">
        {/* Each slide carries its alt text — required on every image (§3). */}
        <div className="flex h-full w-full transition-transform duration-300 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {images.map((img, idx) => (
            <figure key={idx} className="relative h-full w-full shrink-0" title={img.alt}>
              <Media image={img} />
            </figure>
          ))}
        </div>

        {many && i > 0 && (
          <button onClick={() => go(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-1 text-white backdrop-blur transition hover:bg-black/55">
            <Icon.Chevron dir="left" size={22} />
          </button>
        )}
        {many && i < images.length - 1 && (
          <button onClick={() => go(1)} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-1 text-white backdrop-blur transition hover:bg-black/55">
            <Icon.Chevron dir="right" size={22} />
          </button>
        )}

        {many && (
          <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs font-medium text-white">
            {i + 1}/{images.length}
          </div>
        )}
      </div>

      {many && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, idx) => (
            <span key={idx} className={`h-1.5 w-1.5 rounded-full transition ${idx === i ? "bg-[#3897f0]" : "bg-white/60"}`} />
          ))}
        </div>
      )}
    </div>
  );
}
