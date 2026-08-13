"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IProject } from "@/types";

export default function ProjectCoverflow({ projects }: { projects: IProject[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground text-sm">
        No projects found.
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      {/* 3D Perspective Wrapper */}
      <div 
        className="relative w-full h-[520px] sm:h-[480px] flex items-center justify-center overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {projects.map((project, index) => {
          let diff = index - activeIndex;

          // Handle wrapping for infinite feel
          if (diff < -1 && activeIndex === projects.length - 1 && index === 0) {
            diff = 1;
          } else if (diff > 1 && activeIndex === 0 && index === projects.length - 1) {
            diff = -1;
          }

          const isActive = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;
          const isHidden = Math.abs(diff) > 1;

          // 3D Transform values
          let transformStyles = "";
          let zIndex = 0;
          let opacity = 0;

          if (isActive) {
            transformStyles = "translate3d(0, 0, 0) rotateY(0deg) scale(1)";
            zIndex = 30;
            opacity = 1;
          } else if (isLeft) {
            transformStyles = "translate3d(-35%, 0, -100px) rotateY(35deg) scale(0.85)";
            zIndex = 20;
            opacity = 0.6;
          } else if (isRight) {
            transformStyles = "translate3d(35%, 0, -100px) rotateY(-35deg) scale(0.85)";
            zIndex = 20;
            opacity = 0.6;
          } else if (isHidden) {
            transformStyles = diff < 0 
              ? "translate3d(-70%, 0, -200px) rotateY(45deg) scale(0.7)" 
              : "translate3d(70%, 0, -200px) rotateY(-45deg) scale(0.7)";
            zIndex = 10;
            opacity = 0;
          }

          return (
            <div
              key={project.id}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
              className="absolute w-[300px] sm:w-[350px] h-[400px] transition-all duration-500 ease-out transform-gpu origin-center cursor-pointer"
              style={{
                transform: transformStyles,
                zIndex: zIndex,
                opacity: opacity,
                pointerEvents: isHidden ? "none" : "auto",
              }}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      {/* Control Triggers */}
      <div className="flex items-center gap-6 mt-6 z-20">
        <button
          onClick={prevSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 shadow-md hover:bg-secondary transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Previous Project"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "w-8 bg-indigo-500" 
                  : "w-2.5 bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/80 shadow-md hover:bg-secondary transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Next Project"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>
      </div>
    </div>
  );
}
