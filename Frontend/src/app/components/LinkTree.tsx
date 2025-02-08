import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, Instagram } from "lucide-react";
import Image from "next/image";

export function LinkTree() {
  const links = [
    {
      name: "Portfolio",
      icon: <Globe size={20} className="text-white" />,
      url: "https://www.anujrishu.me",
      color: "hover:bg-blue-500/30 hover:text-blue-200",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} className="text-white" />,
      url: "https://www.linkedin.com/in/anuj-rishu",
      color: "hover:bg-[#0077b5]/30 hover:text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: <Github size={20} className="text-white" />,
      url: "https://github.com/anuj-rishu",
      color: "hover:bg-gray-700/30 hover:text-gray-200",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} className="text-white" />,
      url: "https://twitter.com/anuj_rishu",
      color: "hover:bg-[#1DA1F2]/30 hover:text-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} className="text-white" />,
      url: "https://www.instagram.com/anuj_rishu",
      color: "hover:bg-[#E4405F]/30 hover:text-[#E4405F]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-32 h-32 mx-auto mb-4"
        >
          <Image
            src="https://res.cloudinary.com/dtberehdy/image/upload/v1739037009/IMG_0686_g8bws3.jpg"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full border-2 border-white/50 object-cover aspect-square shadow-lg"
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(255,255,255,0.4)",
                "0 0 0 10px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
        <motion.h1
          className="text-3xl font-bold mb-2 text-white"
          whileHover={{ scale: 1.05 }}
        >
          Anuj RishuTiwari
        </motion.h1>
        <motion.p
          className="text-xl text-white/90 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          || Backend Developer ||
        </motion.p>
      </motion.div>
      
      <motion.div className="space-y-4" variants={containerVariants}>
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center space-x-3 w-full py-3 px-4 
              bg-white/5 ${link.color} rounded-xl text-white/90 
              transition-all duration-300 backdrop-blur-sm 
              border border-white/10 
              hover:border-white/30 
              hover:shadow-lg hover:shadow-white/5`}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {link.icon}
            </motion.span>
            <span className="font-medium">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}