import BlogCard from "@/components/modules/Blogs/BlogCard";
import { authOptions } from "@/helpers/authOptions";
import { IPost } from "@/types";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import ProjectsPage from "../projects/page";

export const metadata: Metadata = {
  title: "All Blogs | Mayesha",
  description: "browse all blogs on web development, Next JS, React JS and more."
};

const AllBlogsPage = async () => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div>
      <div className="pt-36 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="container py-16 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5">
        {blogs.data.data.map((blog: IPost) => (
          <BlogCard
            key={blog.id}
            post={blog}
            user={session?.user || null} 
          />
        ))}
      </div>
    </div>
    <ProjectsPage/>
    </div>
  );
};

export default AllBlogsPage;
