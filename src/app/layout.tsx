import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOSTOS · @odysseus.laertiades",
  description:
    "Odyssey 9–10 as an eight-post Instagram feed. Odysseus's own account, told to the Phaeacians for a ship home — where the crew's deaths are never stated, only left as gaps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
