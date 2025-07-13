'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  demo?: string
  code: string
}

const projects: Project[] = [
  {
    title: "College Club Event Management System",
    description: "A comprehensive web-based solution for managing college clubs, events, and member activities. This system streamlines club administration, event planning, and member engagement for educational institutions.",
    image: "https://res.cloudinary.com/dtberehdy/image/upload/v1742203267/portfolio/college%20cliub.png",
    tech: ["React.js", "Node js", "Tailwind CSS", "MongoDB", "AWS S3" ,"AWS EC2" , "AWS SES" ],
    // demo: "https://event-management.vercel.app",
    code: "https://github.com/anuj-rishu/Event-College-Club-Management-System",
  },
  {
    title: "Telegram Bot for SRM Academia",
    description: "A Telegram bot that provides SRM University students with easy access to their academic information, including attendance, marks, class schedules, and real-time notifications.",
    image: "https://res.cloudinary.com/dtberehdy/image/upload/v1742233437/telegram%20bot.png",
    tech: ["Telegram API", "Node.js", "MongoDB","Docker", "Ngnix", "AWS EC2"],
    demo: "https://t.me/srm_academia_bot",
    code: "https://github.com/anuj-rishu/Telegram-Bot-For-SRM-Academia",
  },
  {
    title: "SRM Roomie",
    description: "SRM Roomie – a Tinder-inspired hostel roommate finder for students! Create a profile, match with your ideal roommate based on preferences, and book your hostel room hassle-free. Find your perfect match at SRM! .",
    image: "https://res.cloudinary.com/dtberehdy/image/upload/v1742233575/Roomie.png",
    tech: ["Next.js", "Node.js", "Tailwind CSS", "Framer Motion" ,"MongoDB", "Digital Ocean", "AWS SES"],
    demo: "https://srmroomie.srminsider.live",
    // code: "https://github.com/anuj-rishu/SrmRoomie",
  },
  {
    title: "SellOut-SIH034",
    description: "A WhatsApp-based chatbot to discover museums and book tickets, built for Smart India Hackathon (SIH034).",
    image: "https://res.cloudinary.com/dtberehdy/image/upload/v1744475910/SellOut-SIH034.png",
    tech: ["WhatsApp Web js", "Node.js", "Mongodb", "Docker" ,"MongoDB", "AWS EC2"],
    // demo: "#",
    code: "https://github.com/anuj-rishu/SellOut-SIH034-",
  },
]

export function Projects() {
  return (
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
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const MAX_LENGTH = 150

  const shouldTruncate = project.description.length > MAX_LENGTH
  const displayText = shouldTruncate && !isExpanded
    ? `${project.description.slice(0, MAX_LENGTH)}...`
    : project.description

  return (
    <motion.div
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="relative">
          <motion.p 
            className="text-white/70 mb-2"
            animate={{ height: isExpanded ? 'auto' : '4.5rem' }}
          >
            {displayText}
          </motion.p>
          
          {shouldTruncate && (
            <motion.button
              className="flex mt-7 items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </motion.button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/70"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
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
  )
}
