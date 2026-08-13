import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border/40 py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-1">
            <h2 className="text-xl font-black tracking-tight text-foreground">
              Mayesha<span className="text-primary">.</span>
            </h2>
            <p className="text-xs text-muted-foreground">Frontend & MERN Stack Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Mayesha Mumtaz Soumy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
