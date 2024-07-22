import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-auto mb-auto bg-transparent px-4 sm:px-0 lg:px-16 xl:px-32">
      <motion.h1 
        className="text-2xl sm:text-5xl font-bold mb-5 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome!
      </motion.h1>
      <motion.p 
        className="text-lg sm:text-2xl text-white text-center text-justify"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm Anuj Tiwari, 3rd-year IT student with a focus on backend development. 
        Explore my projects showcasing database management, server-side scripting, and more. 
        Join me on my journey as I hone my skills and contribute to the world of web development... !!
      </motion.p>
    </div>
  )
}

export default About