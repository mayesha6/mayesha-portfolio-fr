import React from "react";

interface WaveProps {
  fillColor?: string;
  className?: string;
  flipY?: boolean;
}

export default function Wave({ fillColor = "text-background", className = "", flipY = false }: WaveProps) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}>
      <svg
        className={`relative block w-full h-[35px] sm:h-[60px] md:h-[80px] ${fillColor} ${flipY ? "rotate-180" : ""}`}
        viewBox="0 0 1400 100"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,100c0,0,419-178,693-49.5S1400,0,1400,0v100H0z" />
      </svg>
    </div>
  );
}
