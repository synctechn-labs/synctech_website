import React from "react";
import { LayeredText } from "@/components/ui/layered-text";

export default function LayeredTextSection() {
  return (
    <section className="relative bg-[#060910] text-white py-12 overflow-hidden flex items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="w-full relative z-10">
        <LayeredText />
      </div>
    </section>
  );
}
