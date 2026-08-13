import { aboutMe } from '@/data/aboutMe';
import Image from 'next/image';
import React from 'react'
import { GraduationCap, Heart, Code2, Palette, Plane, BookOpen, Camera } from 'lucide-react';
import SkillProgress from './SkillProgress';
import Wave from '@/components/shared/Wave';

const INTERESTS = [
  {
    name: "UI Design",
    icon: Palette,
    desc: "Shaping clean, user-centric interfaces and interactive prototypes.",
    color: "from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 bg-purple-500/5",
    borderColor: "hover:border-purple-500/20"
  },
  {
    name: "Traveling",
    icon: Plane,
    desc: "Exploring new horizons, cultures, and gathering creative inspiration.",
    color: "from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 bg-blue-500/5",
    borderColor: "hover:border-blue-500/20"
  },
  {
    name: "Reading Tech Blogs",
    icon: BookOpen,
    desc: "Keeping up with MERN stack upgrades and modern system design patterns.",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5",
    borderColor: "hover:border-emerald-500/20"
  },
  {
    name: "Photography",
    icon: Camera,
    desc: "Capturing details, light play, and visual stories through the lens.",
    color: "from-pink-500/10 to-rose-500/10 text-pink-600 dark:text-pink-400 bg-pink-500/5",
    borderColor: "hover:border-pink-500/20"
  }
];

const About = () => {
  const { title, bio } = aboutMe;

  // Calculate experience dynamically from February 2026
  const getExperienceMonths = () => {
    const joinDate = new Date("2026-02-01");
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - joinDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - joinDate.getMonth();
    const totalMonths = (yearsDiff * 12) + monthsDiff;
    return totalMonths + 1; // Count Feb as month 1
  };

  const experienceMonths = getExperienceMonths();
  
  return (
    <div id="about" className="w-full bg-secondary pt-16">
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        {/* Bio and Picture Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left: Premium Framed Picture */}
          <div className="flex-1 flex justify-center w-full md:w-auto order-first md:order-none">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20 blur-md group-hover:opacity-35 transition duration-500" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-border/40 shadow-2xl bg-secondary/15">
                <Image
                  src="https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761583316/8c47f6c4-c1eb-47ca-930b-16a27e356809_ubtlb2.png"
                  alt="Mayesha Mumtaz"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Bio info & stats grid */}
          <div className="flex-1 space-y-6 text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl uppercase">
                About Me
              </h2>
              <p className="text-lg font-bold text-indigo-500">{title}</p>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-base text-justify">
              {bio.trim()}
            </p>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-5 rounded-2xl border border-border/40 hover:border-indigo-500/20 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  {experienceMonths} Months
                </div>
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">Experience</div>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-border/40 hover:border-indigo-500/20 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">5+</div>
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">Projects Done</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-24 items-stretch">
          {/* Education timeline */}
          <div className="space-y-6 text-left h-full flex flex-col justify-between">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 uppercase mb-6">
              <GraduationCap className="text-indigo-500" size={22} />
              <span>Education</span>
            </h3>
            
            <div className="relative pl-6 border-l-2 border-border/60 space-y-6 ml-3 flex-grow flex flex-col justify-center">
              {/* Card 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-indigo-500 shadow-sm" />
                <div className="glass-card p-5 rounded-2xl shadow-sm hover:shadow-md border border-border/30 transition-all hover:scale-[1.01]">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="text-base font-bold text-foreground">
                      BSc in CSE
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      2020 – 2024
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs font-medium mb-3">
                    Bangladesh University of Business and Technology (BUBT)
                  </p>
                  <div className="text-xs font-semibold text-indigo-500 bg-indigo-500/5 inline-block px-2.5 py-0.5 rounded-md">
                    CGPA: 3.76
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-indigo-500 shadow-sm" />
                <div className="glass-card p-5 rounded-2xl shadow-sm hover:shadow-md border border-border/30 transition-all hover:scale-[1.01]">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="text-base font-bold text-foreground">
                      Diploma in Computer Technology
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      2016 – 2020
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs font-medium mb-3">
                    Thakurgaon Polytechnic Institute
                  </p>
                  <div className="text-xs font-semibold text-indigo-500 bg-indigo-500/5 inline-block px-2.5 py-0.5 rounded-md">
                    CGPA: 3.65
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill progress categories */}
          <div className="space-y-6 text-left h-full flex flex-col justify-between">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 uppercase mb-6">
              <Code2 className="text-indigo-500" size={22} />
              <span>Skills</span>
            </h3>
            <div className="flex-grow flex flex-col justify-between">
              <SkillProgress />
            </div>
          </div>
        </div>

        {/* Hobbies & Interests Section */}
        <div className="mt-24 text-left">
          <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 uppercase mb-8">
            <Heart className="text-indigo-500 animate-pulse" size={22} />
            <span>Hobbies & Interests</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERESTS.map((interest, i) => {
              const Icon = interest.icon;
              return (
                <div
                  key={i}
                  className={`group glass-card p-6 rounded-2xl border border-border/40 ${interest.borderColor} shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col text-left space-y-4`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${interest.color} transition-all duration-300`}>
                    <Icon size={22} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-sm sm:text-base">
                      {interest.name}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {interest.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom wave transitioning to Services section */}
      <Wave fillColor="text-background" />
    </div>
  )
}

export default About