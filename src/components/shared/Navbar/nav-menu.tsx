import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface NavMenuProps extends NavigationMenuProps {
  isLoggedIn?: boolean;
}

export const NavMenu = ({ isLoggedIn, orientation = "horizontal", ...props }: NavMenuProps) => (
  <NavigationMenu orientation={orientation} {...props}>
    <NavigationMenuList className={`gap-6 space-x-0 ${orientation === "vertical" ? "flex flex-col items-start" : ""} font-medium`}>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/blogs">Blogs</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/contact">Contact</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/projects">Projects</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {isLoggedIn && (
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      )}
    </NavigationMenuList>
  </NavigationMenu>
);

