import Project from "@/components/modules/Project/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Mayesha",
  description:
    "browse all projects on web development, Next JS, React JS and more.",
};

const ProjectsPage = async () => {
  return <Project />;
};

export default ProjectsPage;
