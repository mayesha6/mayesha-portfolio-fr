"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full bg-background border dark:border-slate-700/70 z-30">
      <div className="flex h-full items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-[#25282B]"
        >
          Mayesha.
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" isLoggedIn={!!session?.user} />

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          {!session?.user && (
            <Button className="rounded-full px-5 py-2 text-sm md:text-base">
              <Link href="/login" className="block w-full text-center">
                Login
              </Link>
            </Button>
          )}

          {session?.user && (
            <span className="text-sm font-medium">
              {session.user.name || session.user.email}
            </span>
          )}

          <div className="md:hidden">
            <NavigationSheet isLoggedIn={!!session?.user} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
