// Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../Data/projectData';
import ShineBorder from './shine-border';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-wrap items-center justify-center bg-transparent p-4  sm:mt-2 sm:mb-4"
    >

<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="text-2xl sm:text-5xl font-bold text-center text-white w-full mb-4"
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
  <ShineBorder
    className="text-center text-2xl font-bold capitalize"
    color={["#0000FF", "#1E90FF", "#87CEFA"]}
  >
    My Projects
  </ShineBorder>
</motion.h1>
{projects.map((project, index) => (
  <ShineBorder
    key={index}
    className="m-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"
    borderRadius={12}  
    borderWidth={1}    
    duration={10}      
    color={["#007BFF", "#00B0FF", "#1BA9FF"]}
  >
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-gray-900 rounded-lg w-auto overflow-hidden shadow-lg"
    >
      <img className="w-full h-64  text-justify object-cover rounded-md  " src={project.thumbnail} alt={project.title} />
      <div className=" pl-2 pr-2 py-3 bg-gray-800 mt-4 rounded-md ">
<div className="font-bold text-md mb-2 text-white bg-indigo-500 inline-block p-1 pr-4 pl-3 rounded whitespace-normal">{project.title}</div>
        <p className="text-white text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
<a 
  href={project.link}  target='_blank' rel='noreferrer noopener'
  className= " text-white bg-indigo-500   transform hover:scale-110 font-bold text-sm py-1 px-3 rounded"
>
  VIEW PROJECT
</a>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{project.tag1}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{project.tag2}</span>

      </div>
    </motion.div>
  </ShineBorder>
))}
    </motion.div>
  );
}

export default Projects;