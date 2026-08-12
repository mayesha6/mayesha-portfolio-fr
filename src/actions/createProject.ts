"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const projectInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...projectInfo,
    techStack: projectInfo.techStack
      .toString()
      .split(",")
      .map((tech) => tech.trim()),
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  console.log(modifiedData)
  const result = await res.json();
  console.log(result)
  if (result?.data?.id) {
    revalidateTag("PROJECT")
    redirect("/");
  }

  return result;
};
