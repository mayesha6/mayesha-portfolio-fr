"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-6xl mx-auto rounded-full backdrop-blur-md bg-background/75 border border-border/50 shadow-md shadow-black/5 z-50">
      <div className="flex h-full items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-foreground hover:opacity-85 transition-opacity"
        >
          Mayesha<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" isLoggedIn={!!session?.user} />

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          {session?.user ? (
            <Button
              className="rounded-full px-5 py-2 text-sm font-semibold cursor-pointer shadow-sm hover:scale-[1.02] transition-transform bg-destructive hover:bg-destructive/90 text-white"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          ) : (
            <Button asChild className="rounded-full px-5 py-2 text-sm font-semibold cursor-pointer shadow-sm hover:scale-[1.02] transition-transform">
              <Link href="/login">
                Login
              </Link>
            </Button>
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
