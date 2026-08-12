"use server";

import getUserSesssion from "@/helpers/getUserSesssion";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const session = await getUserSesssion()
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
    authorId: session?.user?.id,
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    isFeatured: Boolean(blogInfo.isFeatured)
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
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
    revalidateTag("BLOGS")
    redirect("/");
  }

  return result;
};
