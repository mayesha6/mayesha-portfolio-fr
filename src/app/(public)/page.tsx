import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";
import ContactPage from "./contact/page";
import About from "@/components/modules/About/About";
import Project from "@/components/modules/Project/Project";
import Services from "@/components/modules/Home/Services";
import Wave from "@/components/shared/Wave";
import { fetchWithTimeout } from "@/helpers/fetchWithTimeout";
import { fallbackPosts } from "@/data/fallbackData";

export default async function HomePage() {
  let postsList: IPost[] = [];
  try {
    const res = await fetchWithTimeout(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
      next: {
        tags: ["BLOGS"]
      }
    }, 2000);
    if (res.ok) {
      const blogs = await res.json();
      postsList = blogs?.data?.data || [];
    } else {
      console.warn("Failed to fetch posts, using static fallback.");
      postsList = fallbackPosts;
    }
  } catch (err) {
    console.warn("Error fetching posts (offline), using static fallback:", err);
    postsList = fallbackPosts;
  }

  return (
    <div className="pb-0 overflow-hidden bg-background">
      <Hero />
      <About />
      <Services />
      <Project />
      
      {/* Featured Posts Section */}
      <section className="w-full bg-background pt-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl uppercase">
              Featured Posts
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
            <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
              Stay up to date with my latest technical thoughts, web design tutorials, and insights.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {postsList.slice(0, 3).map((blog: IPost) => {
              return (
                <BlogCard key={blog.id} post={blog} />
              )
            })}
          </div>
        </div>

        {/* Wave transitioning to Contact (bg-secondary/30) */}
        <Wave fillColor="text-secondary" className="mt-20" />
      </section>
      
      <ContactPage />
    </div>
  );
}
