"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Mail } from "lucide-react";

export default function ResumePage() {
  const experience = [
    {
      title: "Backend Developer Intern",
      company: "Om Logistics",
      period: "2024-2025",
      location: "New Delhi, India",
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express",
        "Implemented authentication and authorization systems",
        "Optimized database queries and improved application performance",
      ],
    },
  ];

  const publications = [
  {
    title: "Global Energy Consumption Patterns and Optimization using Big Data",
    conference: "International Conference on Communication and Electronics Systems (ICCES)",
    year: "2024",
    doi: "10.1109/ICCES63552.2024.10859370",
    link: "https://ieeexplore.ieee.org/document/10859370",
    description: "Analyzing global energy consumption patterns and leveraging big data for optimization to enhance efficiency, reduce waste, and promote sustainable energy usage.",
    keywords: ["Machine Learning", "Healthcare", "Real-time Monitoring"]
  }
];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM Institute Of Science And Technology",
      period: "2022 - 2026",
      location: "Chennai",
      achievements: ["CGPA: 8.28/10", "Led technical club projects"],
    },
  ];

  const skills = {
    technical: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "C++",
      "HTML5",
      "Next.js",
      "REST APIs",
      "JWT",
      "Git",
      "MongoDB",
      "Prisma",
    ],
    cloud: ["AWS", "Azure", "Firebase", "Vercel", "Netlify", "GitHub Pages"],
    tools: [
      "VS Code",
      "Postman",
      "Docker",
      "GitHub",
      "Firebase Console",
      "MongoDB Atlas",
    ],
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Anuj Rishu Tiwari</h1>
          <p className="text-xl text-white/70 mb-6">Backend Developer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1">
              <MapPin size={16} /> New Delhi, India
            </span>
            <span className="flex items-center gap-1">
              <Mail size={16} /> anujtiwari4454@outlook.com
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r 
                     from-blue-500 to-purple-500 rounded-xl font-medium
                     hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download PDF Version
          </motion.a>
        </motion.div>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-white/70 mb-4">{job.company}</p>
                <div className="flex gap-4 text-sm text-white/60 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {job.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold  mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white/5 mt-5 rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-white/70 mb-4">{edu.institution}</p>
              <div className="flex gap-4 text-sm text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {edu.location}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>
        <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mb-12"
>
  <h2 className="text-2xl font-bold mb-6 mt-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
    Publications
  </h2>
  {publications.map((pub, index) => (
    <motion.div
      key={index}
      className="bg-white/5 mt-5 rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
      <p className="text-white/70 mb-4">{pub.conference}</p>
      <div className="flex gap-4 text-sm text-white/60 mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={16} /> {pub.year}
        </span>
        <span className="flex items-center gap-1">
          DOI: {pub.doi}
        </span>
      </div>
      <p className="text-white/80 mb-4">{pub.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {pub.keywords.map((keyword, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
          >
            {keyword}
          </span>
        ))}
        </div>
      <motion.a
        href={pub.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
        whileHover={{ scale: 1.05 }}
      >
        <span>View Publication</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </motion.a>
    </motion.div>
  ))}
</motion.section>
      </div>
 
    </div>
  );
}
