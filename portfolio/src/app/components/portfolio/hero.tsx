"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
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
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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

        <motion.h1
          className="text-4xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Anuj Rishu Tiwari
        </motion.h1>
        <motion.p className="text-xl text-white/80 mb-8">
          Backend Developer
        </motion.p>

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
  );
}
