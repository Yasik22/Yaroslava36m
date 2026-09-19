import React from "react";
import Nav from "@/components/lumina/Nav";
import Hero from "@/components/lumina/Hero";
import FeatureBlocks from "@/components/lumina/FeatureBlocks";
import SocialProof from "@/components/lumina/SocialProof";
import ConversionFooter from "@/components/lumina/ConversionFooter";

export default function Home() {
  return (
    <main className="bg-[#F9F9F7]">
      <Nav />
      <Hero />
      <FeatureBlocks />
      <SocialProof />
      <ConversionFooter />
    </main>
  );
}