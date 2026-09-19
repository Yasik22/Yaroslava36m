import React, { useRef } from "react";
import { Image } from "@/components/ui/image";

export default function Hero() {
  const tiltRef = useRef(null);

  const handleMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * 12).toFixed(2)}deg) rotateY(${(px * 16).toFixed(2)}deg)`;
  };
  const handleLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="bg-[#F9F9F7] text-[#121212]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24 pt-32 pb-24 md:pt-44 md:pb-36">
        <p className="text-[#545454] text-xs tracking-[0.2em] uppercase mb-10">
          Lumina — Intelligent Paper
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
              Where the page
              <br />
              meets the cloud.
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-[1.7] text-[#545454] max-w-xl">
              A notebook that thinks with you. Capture by hand, sync to every device, and let your
              ideas flow from paper to pixel without a single lost thought.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="#order"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#121212] text-[#D4FF00] text-sm font-medium tracking-wide hover:bg-black transition-colors"
              >
                Order Lumina
              </a>
              <a
                href="#craft"
                className="inline-flex items-center justify-center h-12 px-8 border border-[#121212]/20 text-[#121212] text-sm font-medium tracking-wide hover:border-[#121212] transition-colors"
              >
                Explore the craft
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 lg:-ml-10">
            <div
              ref={tiltRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{ transition: "transform 0.4s ease", transformStyle: "preserve-3d" }}
            >
              <Image
                src="https://media.base44.com/images/public/6aae597050ae3c345913e786/01356ec67_generated_image.png"
                alt="Lumina smart notebook resting on a dark slate desk"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
                fittingType="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}