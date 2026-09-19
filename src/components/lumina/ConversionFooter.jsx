import React from "react";

const LINKS = [
  { heading: "Product", items: ["The Smart Spine", "Infinite Sync", "Accessories", "Compare"] },
  { heading: "Company", items: ["About", "Press", "Careers", "Sustainability"] },
  { heading: "Support", items: ["Help Center", "Warranty", "Contact", "Setup Guide"] },
  { heading: "Legal", items: ["Privacy", "Terms", "Cookie Policy", "Accessibility"] },
];

export default function ConversionFooter() {
  return (
    <footer id="order" className="bg-[#121212] text-[#F9F9F7]">
      <div className="px-6 md:px-16 lg:px-24 pt-32 md:pt-48 pb-32 md:pb-40 text-center">
        <p className="text-[#D4FF00] text-xs tracking-[0.2em] uppercase mb-8">Available now</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-4xl mx-auto">
          Commit your legacy to the page.
        </h2>
        <a
          href="#"
          className="mt-12 inline-flex items-center justify-center h-14 px-12 bg-[#D4FF00] text-[#121212] text-base font-semibold tracking-wide hover:brightness-105 transition"
        >
          Buy Now — $249
        </a>
        <p className="mt-6 text-sm text-[#F9F9F7]/50">
          Free shipping. 60-night trial. Carbon-neutral delivery.
        </p>
      </div>
      <div className="border-t border-[#F9F9F7]/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {LINKS.map((col) => (
              <div key={col.heading}>
                <p className="text-xs tracking-[0.2em] uppercase text-[#F9F9F7]/40 mb-5">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-[#F9F9F7]/80 hover:text-[#D4FF00] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-[#F9F9F7]/10 flex flex-col md:flex-row justify-between gap-4">
            <p className="font-display text-2xl">Lumina</p>
            <p className="text-xs text-[#F9F9F7]/40">
              © 2026 Lumina. Designed for deep work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}