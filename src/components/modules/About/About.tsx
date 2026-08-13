import { aboutMe } from '@/data/aboutMe';
import Image from 'next/image';
import React from 'react'
import { GraduationCap, Heart, Award } from 'lucide-react';
import SkillProgress from './SkillProgress';
import Wave from '@/components/shared/Wave';

const About = () => {
  const { title, bio, skills, hobbies, portfolioHighlights } = aboutMe;
  
  return (
    <div className="w-full bg-secondary pt-16">
      <section className="container mx-auto max-w-5xl px-6 pb-20">
        {/* Bio and Picture Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl uppercase">About Me</h2>
            <p className="text-lg font-semibold text-primary">{title}</p>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
            <p className="mt-6 text-muted-foreground leading-relaxed text-justify text-base">
              {bio}
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20 blur group-hover:opacity-30 transition duration-500" />
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761583316/8c47f6c4-c1eb-47ca-930b-16a27e356809_ubtlb2.png"
                  alt="Mayesha Mumtaz"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education & Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-24">
          {/* Education timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 uppercase mb-6">
              <GraduationCap className="text-indigo-500" size={22} />
              <span>Education</span>
            </h3>
            
            <div className="relative pl-6 border-l-2 border-border space-y-8 ml-3">
              {/* Card 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-indigo-500 shadow-sm" />
                <div className="glass-card p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
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
                  <div className="text-xs font-semibold text-foreground bg-secondary/50 inline-block px-2.5 py-0.5 rounded-md">
                    CGPA: 3.76
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-indigo-500 shadow-sm" />
                <div className="glass-card p-5 rounded-2xl shadow-sm hover:shadow-md transition-all">
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
                  <div className="text-xs font-semibold text-foreground bg-secondary/50 inline-block px-2.5 py-0.5 rounded-md">
                    CGPA: 3.65
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill progress bars */}
          <SkillProgress skills={skills} />
        </div>

        {/* Portfolio Highlights */}
        <div className="mt-24">
          <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 uppercase mb-6">
            <Award className="text-indigo-500" size={22} />
            <span>Highlights</span>
          </h3>
          <div className="glass-card p-6 rounded-2xl">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {portfolioHighlights.trim()}
            </p>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mt-24">
          <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 uppercase mb-6">
            <Heart className="text-indigo-500" size={22} />
            <span>Hobbies & Interests</span>
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {hobbies.map((hobby, i) => (
              <li
                key={i}
                className="bg-pink-500/5 hover:bg-pink-500/10 hover:text-pink-500 border border-transparent hover:border-pink-500/20 text-foreground/80 px-4 py-2 rounded-xl text-sm font-semibold shadow-xs transition-all cursor-default"
              >
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom wave transitioning to Services section */}
      <Wave fillColor="text-background" />
    </div>
  )
}

export default About