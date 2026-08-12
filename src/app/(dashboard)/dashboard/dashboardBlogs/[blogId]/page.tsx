/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

export const generateStaticParams = async () => {
  try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
     if (!res.ok) return [];
     const blogs = await res.json();
     return (
         blogs?.data?.data?.slice(0, 2).map((blog: any)=> ({
             blogId: String(blog.id)
         })) || []
     );
  } catch (error) {
     console.error("Failed to fetch posts in generateStaticParams (dashboard):", error);
     return [];
  }
}

export const generateMetadata = async ({params}: {params: Promise<{blogId : string}>}) => {
    
    const {blogId} = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json()
    return {
        title: blog?.data?.title,
        description: blog?.data?.content
    }
};
const BlogDetailsPage = async ({params}: {params: Promise<{blogId : string}>}) => {
    
    const {blogId} = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json()
    return (
        <div>
            <BlogDetailsCard blog={blog.data}/>
        </div>
    );
};

export default BlogDetailsPage;