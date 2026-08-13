import Hero from "@/components/modules/Home/Hero";
import ContactPage from "./contact/page";
import About from "@/components/modules/About/About";
import Project from "@/components/modules/Project/Project";
import Services from "@/components/modules/Home/Services";

export default function HomePage() {
  return (
    <div className="pb-0 overflow-hidden bg-background">
      <Hero />
      <About />
      <Services />
      <Project />
      <ContactPage />
    </div>
  );
}
