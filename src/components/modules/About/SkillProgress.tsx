import React from "react";

const SKILL_LEVELS: { [key: string]: number } = {
  "HTML5": 95,
  "CSS3": 90,
  "JavaScript (ES6+)": 92,
  "React.js": 95,
  "Next.js": 90,
  "Node.js": 88,
  "Express.js": 85,
  "MongoDB": 85,
  "Tailwind CSS": 95,
  "Firebase": 80,
};

interface SkillProgressProps {
  skills: string[];
}

export default function SkillProgress({ skills }: SkillProgressProps) {
  return (
    <div className="space-y-6 text-left">
      <h3 className="text-xl font-bold tracking-tight text-foreground uppercase mb-6">
        Technical Expertise
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => {
          const percentage = SKILL_LEVELS[skill] || 85; // Fallback level
          return (
            <div key={skill} className="space-y-1.5">
              <div className="flex justify-between text-sm font-semibold text-foreground/95">
                <span>{skill}</span>
                <span>{percentage}%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-border/20">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
