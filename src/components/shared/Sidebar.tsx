"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LogOut, BookOpen, Edit3, FolderKanban, FilePlus } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();
  const session = useSession();

  const links = [
    { href: "/dashboard/dashboardProjects", label: "Projects", icon: FolderKanban },
    { href: "/dashboard/createProject", label: "Add Project", icon: FilePlus },
    { href: "/dashboard/dashboardBlogs", label: "Blogs", icon: BookOpen },
    { href: "/dashboard/createBlog", label: "Add Blog", icon: Edit3 },
  ];

  return (
    <>
      {/* Desktop Sidebar (md and up) */}
      <section className="hidden md:flex flex-col w-64 h-screen border-r border-white/10 bg-black text-white shrink-0 sticky top-0">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-white/10">
          <Link href="/" className="text-xl font-black tracking-tight text-white block">
            Mayesha<span className="text-indigo-500">.</span>
          </Link>
        </div>

        {/* Home navigation link */}
        <div className="p-4 border-b border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200"
          >
            <Home size={18} />
            <span>Home Website</span>
          </Link>
        </div>

        {/* Dashboard links */}
        <nav className="flex-grow p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout section */}
        {session.status === "authenticated" && (
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 cursor-pointer"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </section>

      {/* Mobile Bottom Navigation Tab Bar (under md) */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-black/95 backdrop-blur-md border-t border-white/10 z-50 flex items-center md:hidden overflow-x-auto overflow-y-hidden scrollbar-none px-4 shadow-2xl">
        <div className="flex flex-row items-center gap-6 w-full min-w-max justify-between sm:justify-start">
          <Link
            href="/"
            className="flex flex-col items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
          {session.status === "authenticated" && (
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex flex-col items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
