/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Laptop, Network } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function ProjectCardDashboard({
  project,
  user,
}: {
  project: any;
  user?: any;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/project/${project.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token || ""}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Project deleted successfully!");
        router.refresh();
      } else {
        toast.error(data?.message || "Failed to delete project!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while deleting!");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
     
      <div className="absolute top-3 right-3 z-20 flex gap-2">
        <Link
          href={`/dashboard/updateProjectById/${project.id}`}
          className="bg-[#FDC435] text-white text-xs px-3 py-1 rounded-md hover:bg-[#d09c17] transition-colors"
        >
          Edit
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              disabled={isDeleting}
              className="bg-red-500 text-white text-xs px-3 py-1 rounded-md hover:bg-red-600 disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this project?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. It will permanently delete your
                project.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Confirm Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      
      {project.thumbnail ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
          No Image
        </div>
      )}

  
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#FDC435] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.content}
        </p>

   
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

    
        <div className="flex justify-between">
          {project.livelink ? (
            <Link
              href={project.livelink}
              target="_blank"
              className="text-[#FDC435] hover:underline text-sm flex items-center gap-1"
            >
              <Network size={20} /> Live Site
            </Link>
          ) : (
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Network size={20} /> No Live Link
            </span>
          )}

          {project.repolink ? (
            <Link
              href={project.repolink}
              target="_blank"
              className="text-gray-600 hover:underline text-sm flex items-center gap-1"
            >
              <Laptop size={20} /> View Code
            </Link>
          ) : (
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Laptop size={20} /> No Repo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
