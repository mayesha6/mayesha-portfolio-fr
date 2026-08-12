import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-12 pb-10 ">
      <div className="absolute inset-0 z-0 bg-black" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-white text-xl font-semibold mb-1">Mayesha.</h2>
            <p className="text-sm text-gray-400">Personal Portfolio</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="text-sm text-gray-400">
            Designed by Mayesha Soumy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
