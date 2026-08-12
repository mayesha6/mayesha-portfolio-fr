/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ProjectCard from './ProjectCard'

const Project = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
  });
  const projects = await res.json();
  return (
    <section className="container mx-auto my-36 px-5">
          <h1 className="text-4xl mb-4 text-center">Project Showcase</h1>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            A selection of my personal and full-stack projects, showcasing both
            frontend and backend development skills.
          </p>
    
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {projects?.data?.data?.map((project:any) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </section>
  )
}

export default Project