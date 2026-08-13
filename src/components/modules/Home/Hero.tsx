import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import TypingHeader from "./TypingHeader";
import Wave from "@/components/shared/Wave";

export default async function Hero() {
  return (
    <div id="home" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 bg-background">
      {/* Background Decorative Blur Blobs (Premium Design System) */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-float" />

      <section className="container mx-auto px-6 max-w-6xl z-10 flex-grow flex items-center">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8 w-full">
          {/* Info Side */}
          <div className="flex-1 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              <Sparkles size={14} />
              <span>Available for Hire</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-foreground">
              {/* Hello, my name is{" "} */}
              <span className="text-gradient font-semibold block mt-2 pb-2">
                Mayesha Mumtaz
              </span>
            </h1>

            <TypingHeader />

            <p className="text-muted-foreground text-base max-w-md leading-relaxed pt-2">
              I build full-stack web applications with clean frontends, modern styling, and scalable backends.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/50 hover:bg-secondary text-foreground font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer soft glowing rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20 blur group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-background shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761590871/e789a464-ae43-49ea-b6ee-6f1aad2d2d94_gwdliu.jpg"
                  alt="Mayesha's Profile Picture"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Wave transitioning to About section */}
      <Wave fillColor="text-secondary" className="mt-auto" />
    </div>
  );
}
