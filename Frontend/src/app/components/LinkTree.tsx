import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, Instagram } from "lucide-react";
import Image from "next/image";

export function LinkTree() {
  const links = [
    {
      name: "Portfolio",
      icon: <Globe size={20} />,
      url: "https://www.anujrishu.me",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/anuj-rishu",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/anuj-rishu",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com/anuj_rishu",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/anuj_rishu",
    },
  ];

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src="https://res.cloudinary.com/dtberehdy/image/upload/v1725698346/Linktree%20default.svg"
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-4  border-white/50"
        />
        <h1 className="text-3xl font-bold mb-2">Anuj Tiwari</h1>
        <p className="text-xl text-white/80">Mern Stack | Backend Developer</p>
      </motion.div>
      <motion.div className="space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 w-full py-3 px-4 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
            <span className="font-medium">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
