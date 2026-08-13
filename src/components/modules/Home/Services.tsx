import React from "react";
import { Code, Terminal, Server, Smartphone, Search, HelpCircle } from "lucide-react";
import Wave from "@/components/shared/Wave";

const SERVICES = [
  {
    icon: Code,
    title: "Web Design",
    description: "Creating modern, visually appealing UI designs that enhance user engagement and prioritize seamless navigation."
  },
  {
    icon: Terminal,
    title: "MERN Development",
    description: "Building production-grade full-stack web applications with React, Express, Node.js, and MongoDB."
  },
  {
    icon: Server,
    title: "API Architecture",
    description: "Designing fast, secure, and well-documented RESTful APIs and database schemas with relational/non-relational mapping."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Optimizing pages to ensure layout fidelity, fast rendering, and smooth usage across all mobile, tablet, and desktop viewports."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Implementing semantic HTML, structured metadata, and fast loading performance to optimize organic search rankings."
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    description: "Providing continuous maintenance, bug fixing, database backups, and hosting configuration support."
  }
];

export default function Services() {
  return (
    <div className="w-full bg-background pt-16">
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl uppercase">
            What I Do
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto" />
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            I provide clean, modern web development services designed to help you launch fast, robust, and scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group glass-card p-8 rounded-2xl border border-border/40 hover:border-indigo-500/20 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col text-left space-y-4 hover:scale-[1.01]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Wave transitioning to Projects (bg-secondary) */}
      <Wave fillColor="text-secondary" />
    </div>
  );
}
