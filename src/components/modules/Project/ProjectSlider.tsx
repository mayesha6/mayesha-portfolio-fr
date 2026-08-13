"use client";

import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IProject } from "@/types";

export default function ProjectSlider({ projects }: { projects: IProject[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollLimits);
      // Run once initially
      checkScrollLimits();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollLimits);
      }
    };
  }, [projects]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground text-sm">
        No projects to display.
      </div>
    );
  }

  return (
    <div className="relative group/slider max-w-6xl mx-auto px-4">
      {/* Slider Controls */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-secondary transition-all cursor-pointer focus:outline-none"
          aria-label="Previous projects"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-secondary transition-all cursor-pointer focus:outline-none"
          aria-label="Next projects"
        >
          <ChevronRight size={20} className="text-foreground" />
        </button>
      )}

      {/* Project Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-1 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 snap-start"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
