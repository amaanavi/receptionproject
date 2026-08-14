import type { FeedImage } from "@/data/feed";
import Illustration from "./Illustration";

// Real photograph if provided, otherwise the consistent line-art placeholder.
export default function Media({ image }: { image: FeedImage }) {
  if (image.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />;
  }
  return <Illustration name={image.illustration || ""} />;
}
