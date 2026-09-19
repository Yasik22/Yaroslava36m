import React from "react";
import { Image } from "@/components/ui/image";

function Caption({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-px bg-[#121212]/30 mt-2.5 shrink-0" />
      <p className="text-xs tracking-[0.1em] uppercase text-[#545454] leading-relaxed">{children}</p>
    </div>
  );
}

function Block({ index, title, body, image, alt, reverse, captions }) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div
        className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="lg:w-1/2">
          <Image
            src={image}
            alt={alt}
            className="w-full aspect-[4/3] object-cover rounded-sm shadow-xl"
            fittingType="fill"
          />
        </div>
        <div className="lg:w-1/2 lg:px-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#545454] mb-6">0{index}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            {title}
          </h2>
          <p className="mt-8 text-lg leading-[1.7] text-[#545454] max-w-md">{body}</p>
          <div className="mt-10 space-y-5">
            {captions.map((c, i) => (
              <Caption key={i}>{c}</Caption>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureBlocks() {
  return (
    <section id="craft" className="bg-[#F9F9F7] text-[#121212]">
      <Block
        index={1}
        title="The Smart Spine"
        body="A sensor-rich spine reads every stroke the moment it lands on the page — indexing your thoughts in real time, with no camera, no screen, and no distraction."
        image="https://media.base44.com/images/public/6aae597050ae3c345913e786/1853d7c70_generated_image.png"
        alt="Stylus tip touching the textured grain of paper"
        captions={["Sensor-rich paper, 0.2mm precision", "Magnetic stylus dock, 30-day charge"]}
      />
      <div className="h-px bg-[#121212]/10 max-w-[1400px] mx-auto" />
      <Block
        index={2}
        title="Infinite Sync"
        body="Every page lives in two places at once — the warm weight of paper in your hand, and the boundless reach of the cloud. Edit on any device, and search across years of notebooks in an instant."
        image="https://media.base44.com/images/public/6aae597050ae3c345913e786/2e727ba5d_generated_image.png"
        alt="Notebook alongside a fountain pen, glasses, and drafting compass"
        reverse
        captions={["End-to-end encrypted sync", "Searchable across every volume you own"]}
      />
    </section>
  );
}