import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";
import ContactPage from "./contact/page";
import About from "@/components/modules/About/About";
import Project from "@/components/modules/Project/Project";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"]
    }
  })
  if (!res.ok) {
  console.error("Failed to fetch posts:", await res.text());
  return <div>Error loading posts</div>; 
}
  const blogs = await res.json()
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl mt-36">Featured Posts</h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10 container mx-auto px-5">
        {blogs.data.data.slice(0,3).map((blog : IPost)=>{
          return(
            <BlogCard key={blog.id} post={blog}/>
          )
        })}
      </div>
      
      <About />
      <Project/>
      <ContactPage/>
    </div>
  );
}
