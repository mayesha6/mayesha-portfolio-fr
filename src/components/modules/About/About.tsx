import { aboutMe } from '@/data/aboutMe';
import Image from 'next/image';
import React from 'react'

const About = () => {
    const { name, title, bio, skills, hobbies, portfolioHighlights } = aboutMe;
  return (
    <section className="container mx-auto my-36 max-w-7xl px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{name}</h1>
              <p className="text-xl text-gray-600 mb-6">{title}</p>
              <p className="mb-6 text-gray-700 leading-relaxed text-justify">
                {bio}
              </p>
            </div>
    
            <div className="flex-1 flex justify-center">
              <Image
                src="https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761583316/8c47f6c4-c1eb-47ca-930b-16a27e356809_ubtlb2.png"
                alt="Mayesha's Profile Picture"
                width={400}
                height={400}
                className="rounded-full shadow-xl object-cover border-4 border-[#FDC435]"
                priority
              />
            </div>
          </div>
    
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-[#FDC435] inline-block pb-2">
              Education
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl shadow-md border-l-4 border-[#FDC435]">
                <h3 className="text-xl font-bold text-gray-800">
                  BSc in Computer Science and Engineering
                </h3>
                <p className="text-gray-600">
                  <strong>Institute:</strong> Bangladesh University of Business and
                  Technology (BUBT)
                </p>
                <p className="text-gray-600">
                  <strong>Duration:</strong> 2020 – 2024
                </p>
                <p className="text-gray-600">
                  <strong>CGPA:</strong> 3.76
                </p>
              </div>
    
              <div className="p-6 bg-gray-50 rounded-2xl shadow-md border-l-4 border-[#FDC435]">
                <h3 className="text-xl font-bold text-gray-800">
                  Diploma in Computer Technology
                </h3>
                <p className="text-gray-600">
                  <strong>Institute:</strong> Thakurgaon Polytechnic Institute
                </p>
                <p className="text-gray-600">
                  <strong>Duration:</strong> 2016 – 2020
                </p>
                <p className="text-gray-600">
                  <strong>CGPA:</strong> 3.65
                </p>
              </div>
            </div>
          </div>
    
          <div className="my-16">
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-[#FDC435] inline-block pb-2">
              Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-[#FDC435]/20 text-[#FDC435] px-4 py-2 rounded-full font-medium shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
    
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-[#FDC435] inline-block pb-2">
              Portfolio Highlights
            </h2>
            <p className="text-gray-700 leading-relaxed">{portfolioHighlights}</p>
          </div>
    
          <div>
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-[#FDC435] inline-block pb-2">
              Hobbies
            </h2>
            <ul className="flex flex-wrap gap-3">
              {hobbies.map((hobby, i) => (
                <li
                  key={i}
                  className="bg-[#FDC435]/20 text-[#FDC435] px-4 py-2 rounded-full font-medium shadow-sm"
                >
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </section>
  )
}

export default About