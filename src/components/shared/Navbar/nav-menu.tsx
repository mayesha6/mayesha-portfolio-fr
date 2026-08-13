"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuProps extends NavigationMenuProps {
  isLoggedIn?: boolean;
}

export const NavMenu = ({ isLoggedIn, orientation = "horizontal", ...props }: NavMenuProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
  ];

  if (isLoggedIn) {
    links.push({ href: "/dashboard", label: "Dashboard" });
  }

  const isVertical = orientation === "vertical";

  return (
    <NavigationMenu orientation={orientation} {...props}>
      <NavigationMenuList className={`gap-2 ${isVertical ? "flex flex-col items-start w-full" : "flex flex-row items-center"} font-medium`}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavigationMenuItem key={link.href} className="w-full">
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  } ${isVertical ? "w-full text-left" : ""}`}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

