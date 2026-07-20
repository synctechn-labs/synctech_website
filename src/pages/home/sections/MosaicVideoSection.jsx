import React from "react";

export default function MosaicVideoSection() {
  return (
    <section className="w-full bg-[#060910] p-0 m-0 leading-none overflow-hidden block">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block p-0 m-0 border-none rounded-none object-cover"
        src="https://res.cloudinary.com/wowukaao/video/upload/v1784462365/animo-mosaic-marquee-1080p_iwo4ta.webm"
      />
    </section>
  );
}
