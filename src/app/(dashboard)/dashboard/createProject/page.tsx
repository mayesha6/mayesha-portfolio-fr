import CreateProjectForm from "@/components/modules/Project/CreateProjectForm";
import React from "react";
export const metadata = {
  title: "Create Project | Mayesha",
};
const CreateProject = () => {
  return (
    <div className="w-full">
      <h1 className="my-5 text-center text-xl">Create Project</h1>
      <CreateProjectForm/>
    </div>
  );
};

export default CreateProject;
