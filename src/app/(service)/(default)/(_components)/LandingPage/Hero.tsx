"use client";

const VIDEO_SRC = "/redesign/main/fixadVid.mp4";

export default function Hero({ lang }: { lang?: string } = {}) {
  return (
    <div id="hero" className="bg-gray-100 h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        className="absolute inset-x-1/2 inset-y-1/2 w-32 lg:w-48 h-auto z-20"
        style={{
          transform: "translateX(-50%)",
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      ></div>
    </div>
  );
}
