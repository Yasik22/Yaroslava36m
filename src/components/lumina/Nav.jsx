import React, { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#F9F9F7]/85 backdrop-blur-md border-b border-[#121212]/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-tight text-[#121212]">
          Lumina
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[#545454]">
          <a href="#craft" className="hover:text-[#121212] transition-colors">The Craft</a>
          <a href="#proof" className="hover:text-[#121212] transition-colors">Press</a>
          <a href="#order" className="hover:text-[#121212] transition-colors">Order</a>
        </nav>
        <a
          href="#order"
          className="inline-flex items-center h-10 px-5 bg-[#121212] text-[#F9F9F7] text-sm hover:bg-black transition-colors"
        >
          Buy Now
        </a>
      </div>
    </header>
  );
}