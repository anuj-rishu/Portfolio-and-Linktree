"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  // Projects data
  const projects = [
    {
      title: "Custom Link Tree",
      description: "A modern, customizable link tree application with animated UI components, dark theme, and mobile-responsive design. Built with Next.js 13 App Router.",
      image: "/projects/linktree.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demo: "https://custom-link-tree.vercel.app",
      code: "https://github.com/anuj-rishu/Custom-Link-Tree"
    },
    {
      title: "Task Management API",
      description: "Full-featured REST API for task management with JWT authentication, data validation, and comprehensive documentation using Swagger.",
      image: "/projects/api.png",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      code: "https://github.com/anuj-rishu/task-api"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio featuring animated UI components, dark theme, and responsive design. Built with modern web technologies.",
      image: "/projects/portfolio.png",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      demo: "https://anujrishu.vercel.app",
      code: "https://github.com/anuj-rishu/portfolio"
    }
  ];

  // Skills data
  const skills = {
    frontend: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "REST APIs",
      "JWT",
      "C++"
    ],
    cloud: [
      "AWS",
      "Azure",
      "Firebase",
      "Vercel",
      "Netlify",
      "GitHub Pages"
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "MongoDB Atlas"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Profile Image with Effects */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-40 h-40 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
            
            <motion.div
              className="absolute -inset-1 rounded-full border-2 border-white/20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <div className="relative z-10 w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="w-full h-full rounded-full p-0.5 bg-black">
                <Image
                  src="https://res.cloudinary.com/dtberehdy/image/upload/v1739037009/IMG_0686_g8bws3.jpg"
                  alt="Anuj Rishu Tiwari"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-md"
              animate={{
                opacity: [0.5, 0.3, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1 
            className="text-4xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Anuj Rishu Tiwari
          </motion.h1>
          <motion.p className="text-xl text-white/80 mb-8">
            Backend Developer
          </motion.p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Link
              href="/resume"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20"
              passHref
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <FileText size={20} />
                Resume
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20"
              >
                <Mail size={20} />
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r 
                   from-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16 bg-white/5">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r 
                   from-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize text-white/90">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}