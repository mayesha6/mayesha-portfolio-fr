/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCardDashboard from "@/components/modules/Project/ProjectCardDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Mayesha",
  description: "browse all projects on web development, Next JS, React JS and more."
};

const DashboardProjectsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
  });
  const projects = await res.json();
  console.log(projects.data.data)
  return (
    <section className="container mx-auto my-10 px-5">
      <h1 className="text-4xl mb-4 text-center">Project Showcase</h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
        A selection of my personal and full-stack projects, showcasing both
        frontend and backend development skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.data?.data?.map((project:any) => (
          <ProjectCardDashboard key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
}

export default DashboardProjectsPage;
