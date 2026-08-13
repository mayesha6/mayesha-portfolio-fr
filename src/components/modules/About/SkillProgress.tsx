import React from "react";
import { Monitor, Server, Layers, Cloud } from "lucide-react";

const FRONTEND_SKILLS = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML5/CSS3", level: 95 },
  { name: "Bootstrap", level: 85 }
];

const BACKEND_SKILLS = [
  { name: "Node.js", level: 88 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB & PostgreSQL", level: 88 },
  { name: "Prisma ORM", level: 90 },
  { name: "Firebase", level: 80 }
];

const DEVOPS_SKILLS = [
  { name: "Hostinger VPS & AWS (EC2, S3, IVS)", level: 85 },
  { name: "Nginx & SSL Configuration", level: 82 }
];

const CONVERSION_SKILLS = [
  { name: "PSD to HTML", level: 95 },
  { name: "XD to HTML", level: 90 }
];

export default function SkillProgress() {
  return (
    <div className="space-y-8 text-left">
      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase mb-6 flex items-center gap-2">
          <Monitor className="text-indigo-500" size={20} />
          <span>Frontend Development</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FRONTEND_SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-foreground/95">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/10">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase mb-6 flex items-center gap-2">
          <Server className="text-pink-500" size={20} />
          <span>Backend & Database</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BACKEND_SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-foreground/95">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/10">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase mb-6 flex items-center gap-2">
          <Cloud className="text-indigo-500" size={20} />
          <span>DevOps & Cloud</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DEVOPS_SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-foreground/95">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/10">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase mb-6 flex items-center gap-2">
          <Layers className="text-pink-500" size={20} />
          <span>UI Conversions</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONVERSION_SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-foreground/95">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/10">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
