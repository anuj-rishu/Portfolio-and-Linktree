"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "SQL",
      "MongoDB",
      "Prisma",
      "Python",
      "REST APIs",
      "JWT",
      "C++",
    ],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "Firebase", "Vercel", "Netlify", "GitHub Pages"],
  },
  {
    title: "Tools",
    skills: [
      "Docker",
      "Kubernates",
      "MongoDB Atlas",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

interface SkillCardProps {
  category: {
    title: string;
    skills: string[];
  };
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      key={category.title}
      className="bg-white/5 rounded-xl p-6 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-lg font-semibold mb-4 capitalize text-white/90">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r 
                       from-blue-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
