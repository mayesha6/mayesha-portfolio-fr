"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, LogOut, BookOpen, Edit3, FolderKanban, FilePlus } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const session = useSession();
  return (
    <section className="flex flex-row w-full md:h-screen md:w-64 md:flex-col border-r bg-black text-white">
      <nav className="flex-1 md:space-y-2 p-4 flex flex-row md:flex-col items-center">
        <Link
          href="/"
          className="md:w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black group relative"
        >
          <Home className="h-4 w-4" />
          <span className="md:inline-block hidden">Home</span>
          <span className="absolute top-full mt-2 hidden group-hover:block bg-[#fdc435] text-black text-xs rounded px-2 py-1 whitespace-nowrap">
            Home
          </span>
        </Link>

        <Link
          href="/dashboard/dashboardProjects"
          className="md:w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black group relative"
        >
          <FolderKanban className="h-4 w-4" />
          <span className="md:inline-block hidden">Projects</span>
          <span className="absolute top-full mt-2 hidden group-hover:block bg-[#fdc435] text-black text-xs rounded px-2 py-1 whitespace-nowrap">
            Projects
          </span>
        </Link>

        <Link
          href="/dashboard/createProject"
          className="md:w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black group relative"
        >
          <FilePlus className="h-4 w-4" />
          <span className="md:inline-block hidden">Create Project</span>
          <span className="absolute top-full mt-2 hidden group-hover:block bg-[#fdc435] text-black text-xs rounded px-2 py-1 whitespace-nowrap">
            Create Project
          </span>
        </Link>

        <Link
          href="/dashboard/dashboardBlogs"
          className="md:w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black group relative"
        >
          <BookOpen className="h-4 w-4" />
          <span className="md:inline-block hidden">Blogs</span>
          <span className="absolute top-full mt-2 hidden group-hover:block bg-[#fdc435] text-black text-xs rounded px-2 py-1 whitespace-nowrap">
            Blogs
          </span>
        </Link>

        <Link
          href="/dashboard/createBlog"
          className="md:w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black group relative"
        >
          <Edit3 className="h-4 w-4" />
          <span className="md:inline-block hidden">Create Blog</span>
          <span className="absolute top-full mt-2 hidden group-hover:block bg-[#fdc435] text-black text-xs rounded px-2 py-1 whitespace-nowrap">
            Create Blog
          </span>
        </Link>
      </nav>

      {session.status === "authenticated" && (
        <div className="p-4 border-t border-gray-500">
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer group relative"
            onClick={() => {
              signOut();
            }}
          >
            <LogOut className="h-4 w-4" />
            <span className="md:inline-block hidden">Logout</span>
            <span className="absolute top-full mt-2 hidden group-hover:block bg-[#fdc435] text-black text-xs rounded px-2 py-1 whitespace-nowrap">
              Logout
            </span>
          </Button>
        </div>
      )}
    </section>
  );
}
