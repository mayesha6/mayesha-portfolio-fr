import { Github, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-1">
            <h2 className="text-xl font-black tracking-tight text-foreground">
              Mayesha<span className="text-primary">.</span>
            </h2>
            <p className="text-xs text-muted-foreground">MERN Stack Developer</p>
          </div>

          {/* Social media icons in place of menu */}
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/mayesha6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 hover:bg-indigo-500 hover:text-white border border-border/50 text-foreground transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.facebook.com/mayesha.soumy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 hover:bg-indigo-500 hover:text-white border border-border/50 text-foreground transition-all cursor-pointer"
              aria-label="Facebook Profile"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mayesha-mumtaz-6607b4315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 hover:bg-indigo-500 hover:text-white border border-border/50 text-foreground transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <div className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Mayesha Mumtaz Soumy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
