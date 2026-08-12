/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const UpdateProjectById = () => {
  const { projectId } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`
        );
        const data = await res.json();
        setProject(data?.data);
      } catch (error) {
        toast.error("Failed to load project data!");
      } finally {
        setLoading(false);
      }
    };
    if (projectId) fetchProject();
  }, [projectId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: project.title,
            content: project.content,
            thumbnail: project.thumbnail,
            livelink: project.livelink,
            repolink: project.repolink,
            techStack: project.techStack,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Project updated successfully!");
        router.push(`/projects`);
      } else {
        toast.error(data?.message || "Failed to update project!");
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
      <h2 className="text-2xl font-semibold mb-6">Edit Project</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium">Title</label>
          <Input
            value={project?.title || ""}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
        </div>

        <div>
          <label className="font-medium">Description</label>
          <Textarea
            rows={6}
            value={project?.content || ""}
            onChange={(e) =>
              setProject({ ...project, content: e.target.value })
            }
          />
        </div>

        <div>
          <label className="font-medium">Thumbnail URL</label>
          <Input
            value={project?.thumbnail || ""}
            onChange={(e) =>
              setProject({ ...project, thumbnail: e.target.value })
            }
          />
        </div>

        <div>
          <label className="font-medium">Live Site Link</label>
          <Input
            value={project?.livelink || ""}
            onChange={(e) =>
              setProject({ ...project, livelink: e.target.value })
            }
          />
        </div>

        <div>
          <label className="font-medium">Repository Link</label>
          <Input
            value={project?.repolink || ""}
            onChange={(e) =>
              setProject({ ...project, repolink: e.target.value })
            }
          />
        </div>

        <div>
          <label className="font-medium">Tech Stack (comma separated)</label>
          <Input
            value={project?.techStack?.join(", ") || ""}
            onChange={(e) =>
              setProject({
                ...project,
                techStack: e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter((t) => t !== ""),
              })
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

export default UpdateProjectById;
