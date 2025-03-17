'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Trophy } from 'lucide-react'

const hackathons = [
  {
    title: "CODE_ZERO",
    position: "Winner",
    project: "EVENT TICKETING PLATFORM",
    description: "Developed an innovative healthcare system using AI for smart diagnosis and patient monitoring. Won first place among 100+ teams.",
    tech: ["React", "Node.js"],
    image: "https://res.cloudinary.com/dtberehdy/image/upload/v1742234133/certificate.png",
    date: "February 2025",
    prize: "₹10,000"
  },
  
]

export function Hackathons() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r 
                   from-blue-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hackathon Achievements
      </motion.h2>

      <div className={`grid grid-cols-1 md:grid-cols-${hackathons.length === 1 ? '1' : '2'} gap-8 ${hackathons.length === 1 ? 'max-w-md mx-auto' : ''}`}>
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.title}
            className="group bg-white/5 rounded-xl overflow-hidden border border-white/10"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={hackathon.image}
                alt={hackathon.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Trophy className="text-yellow-400" size={16} />
                <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  {hackathon.position}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {hackathon.title}
                </h3>
                <span className="text-sm text-white/60">{hackathon.date}</span>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                {hackathon.project}
              </h4>
              
              <p className="text-white/70 mb-4 line-clamp-2">
                {hackathon.description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400 font-semibold">Prize:</span>
                <span className="text-white/90">{hackathon.prize}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {hackathon.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}