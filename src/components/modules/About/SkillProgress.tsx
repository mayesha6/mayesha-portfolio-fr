"use client";

import React, { useState } from "react";
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
  { name: "MongoDB & Postgres", level: 88 },
  { name: "Prisma ORM", level: 90 },
  { name: "Firebase", level: 80 }
];

const DEVOPS_SKILLS = [
  { name: "Hostinger VPS", level: 85 },
  { name: "AWS (EC2/S3/IVS)", level: 85 },
  { name: "Nginx & SSL", level: 82 }
];

const CONVERSION_SKILLS = [
  { name: "PSD to HTML", level: 95 },
  { name: "XD to HTML", level: 90 }
];

interface CircleProgressProps {
  name: string;
  level: number;
  colorClass: string;
}

function CircleProgress({ name, level, colorClass }: CircleProgressProps) {
  const radius = 22;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius; // ~150.8
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-secondary/20 border border-border/20 hover:border-indigo-500/10 shadow-2xs hover:shadow-xs transition-all duration-300">
      <div className="relative flex items-center justify-center h-14 w-14">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-muted-foreground/10"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            className={`${colorClass} transition-all duration-1000 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute text-[10px] font-bold text-foreground">
          {level}%
        </span>
      </div>
      <span className="text-[10px] font-bold text-foreground/90 text-center mt-2.5 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function SkillProgress() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "devops" | "ui">("frontend");

  type TabType = {
    id: "frontend" | "backend" | "devops" | "ui";
    label: string;
    icon: React.ComponentType<{ size?: number }>;
    color: string;
    skills: { name: string; level: number }[];
  };

  const tabs: TabType[] = [
    { id: "frontend", label: "Frontend", icon: Monitor, color: "stroke-indigo-500", skills: FRONTEND_SKILLS },
    { id: "backend", label: "Backend", icon: Server, color: "stroke-pink-500", skills: BACKEND_SKILLS },
    { id: "devops", label: "DevOps", icon: Cloud, color: "stroke-indigo-500", skills: DEVOPS_SKILLS },
    { id: "ui", label: "UI Conversion", icon: Layers, color: "stroke-pink-500", skills: CONVERSION_SKILLS }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="space-y-6 text-left h-full flex flex-col justify-between">
      {/* Category Tabs list */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-secondary/30 border border-border/40">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills circular grid with fade keyframes animation */}
      <div 
        key={activeTab} 
        className="grid grid-cols-3 gap-3.5 transition-opacity duration-300 opacity-100 animate-in fade-in-50 flex-grow content-center"
      >
        {currentTab.skills.map((skill) => (
          <CircleProgress
            key={skill.name}
            name={skill.name}
            level={skill.level}
            colorClass={currentTab.color}
          />
        ))}
      </div>
    </div>
  );
}
