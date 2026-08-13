import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export const NavigationSheet = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-4 flex flex-col items-start justify-start">
        <Link
          href="/"
          className="text-lg font-black tracking-tight text-foreground"
        >
          Mayesha<span className="text-primary">.</span>
        </Link>
        <NavMenu orientation="vertical" className="mt-12" isLoggedIn={isLoggedIn} />
      </SheetContent>
    </Sheet>
  );
};
