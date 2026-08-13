"use client";

import Link from "next/link";
import Image from "next/image";
import { Laptop, ExternalLink } from "lucide-react";
import { IProject } from "@/types";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="group glass-card border border-border/40 hover:border-indigo-500/20 shadow-md hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-semibold tracking-wider uppercase">View Project Details</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.content}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="bg-secondary/80 text-foreground/80 border border-border/50 px-2 py-0.5 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border/40">
          <Link
            href={project.livelink}
            target="_blank"
            className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink size={16} />
            <span>Live Preview</span>
          </Link>
          <Link
            href={project.repolink}
            target="_blank"
            className="text-muted-foreground hover:text-foreground text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Laptop size={16} />
            <span>GitHub Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
