/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Laptop, Network } from "lucide-react";

export default function ProjectCard({ project }: { project: any }) {
    console.log(project)
  return (
    <div className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover w-full h-48"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 group-hover:text-[#FDC435] transition-colors">{project.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{project.content}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: any) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <Link
            href={project.livelink}
            target="_blank"
            className="text-[#FDC435] hover:underline text-sm flex justify-center items-center gap-1"
          >
            <Network size={26} /> Live Site
          </Link>
          <Link
            href={project.repolink}
            target="_blank"
            className="text-gray-600 hover:underline text-sm flex justify-center items-center gap-1"
          >
            <Laptop size={26} /> View Code
          </Link>
        </div>
      </div>
    </div>
  );
}
