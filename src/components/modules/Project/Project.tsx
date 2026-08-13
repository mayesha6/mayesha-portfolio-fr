import React from 'react'
import ProjectCoverflow from './ProjectCoverflow'
import Wave from '@/components/shared/Wave'
import { fetchWithTimeout } from '@/helpers/fetchWithTimeout'
import { fallbackProjects } from '@/data/fallbackData'
import { IProject } from '@/types'

const Project = async () => {
  let projectsList: IProject[] = [];
  try {
    const res = await fetchWithTimeout(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      cache: "no-store",
    }, 2000);
    if (res.ok) {
      const projects = await res.json();
      projectsList = projects?.data?.data || [];
      if (projectsList.length === 0) {
        projectsList = fallbackProjects;
      }
    } else {
      console.warn("Failed to fetch projects, using static fallback.");
      projectsList = fallbackProjects;
    }
  } catch (err) {
    console.warn("Error fetching projects (offline), using static fallback:", err);
    projectsList = fallbackProjects;
  }
  
  return (
    <div id="projects" className="w-full bg-secondary pt-16">
      <section className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl uppercase">
            Portfolio Showcase
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            A selection of my personal and full-stack projects, showcasing frontend expertise and scalable backends.
          </p>
        </div>

        <ProjectCoverflow projects={projectsList} />
      </section>

      {/* Bottom Wave transitioning to Services/Blogs section */}
      <Wave fillColor="text-background" className="mt-8" />
    </div>
  )
}

export default Project