import React, { useRef, useEffect } from "react";

const CarouselCard = ({ service, isActive, onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = true;
    videoRef.current.defaultMuted = true;
    videoRef.current.playsInline = true;
    if (isActive) {
      videoRef.current.play().catch(console.warn);
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <div className="w-full h-full relative rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl bg-slate-900 border border-white/10 group">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={service.video}
        poster={service.poster}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        onEnded={() => {
          if (isActive && onVideoEnd) onVideoEnd();
        }}
      />
      
      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />

      {/* Content Overlay */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <h3 
          className="text-white font-extrabold tracking-tight drop-shadow-xl leading-tight mb-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          {service.title.replace('\n', ' ')}
        </h3>
        <p className="text-white/90 text-sm lg:text-lg max-w-2xl font-light drop-shadow-md">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
