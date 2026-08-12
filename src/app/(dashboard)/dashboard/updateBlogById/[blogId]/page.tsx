/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const UpdateBlogById = () => {
  const { blogId } = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
        const data = await res.json();
        setBlog(data?.data);
      } catch (error) {
        toast.error("Failed to load post data!");
      } finally {
        setLoading(false);
      }
    };
    if (blogId) fetchBlog();
  }, [blogId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: blog.title,
          content: blog.content,
          thumbnail: blog.thumbnail,
          tags: blog.tags,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Post updated successfully!");
        router.push(`/blogs/${blogId}`);
      } else {
        toast.error(data?.message || "Failed to update post!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Edit Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium">Title</label>
          <Input
            value={blog?.title || ""}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>

        <div>
          <label className="font-medium">Content</label>
          <Textarea
            rows={6}
            value={blog?.content || ""}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          />
        </div>

        <div>
          <label className="font-medium">Thumbnail URL</label>
          <Input
            value={blog?.thumbnail || ""}
            onChange={(e) => setBlog({ ...blog, thumbnail: e.target.value })}
          />
        </div>

        <div>
          <label className="font-medium">Tags (comma separated)</label>
          <Input
            value={blog?.tags?.join(", ") || ""}
            onChange={(e) =>
              setBlog({ ...blog, tags: e.target.value.split(",").map((t) => t.trim()) })
            }
          />
        </div>

        <Button
          type="submit"
          disabled={saving}
          className="rounded-full w-full py-2"
        >
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};

export default UpdateBlogById;
