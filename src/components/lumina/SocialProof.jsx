import React from "react";

const PRESS = [
  "Architectural Digest",
  "Wired",
  "Kinfolk",
  "Monocle",
  "Fast Company",
  "Design Milk",
  "Wallpaper*",
];

const QUOTES = [
  {
    quote: "A fluidity of thought I haven't felt since the first tablet. Lumina disappears into the work.",
    author: "Mara Ellison",
    role: "Creative Director, Studio North",
  },
  {
    quote: "Clarity of vision, rendered in paper and pixel. The smartest object on my desk.",
    author: "Devon Park",
    role: "Architect, Park & Co.",
  },
  {
    quote: "It returned me to deep work. The page holds my attention the way a screen never could.",
    author: "Iris Tanaka",
    role: "Novelist",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="bg-[#F9F9F7] text-[#121212] py-24 md:py-32">
      <div className="overflow-hidden border-y border-[#121212]/10 py-10">
        <div className="flex lumina-marquee whitespace-nowrap gap-16">
          {[...PRESS, ...PRESS].map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-[#545454]/50 tracking-tight"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24 mt-24 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {QUOTES.map((q, i) => (
            <figure key={i} className="text-center">
              <blockquote className="font-display text-2xl md:text-3xl leading-[1.3] tracking-tight">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-[#545454]">
                <span className="block text-[#121212] font-medium">{q.author}</span>
                <span className="block mt-1">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}