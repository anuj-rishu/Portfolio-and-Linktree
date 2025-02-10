"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Contact from "../components/contact";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 
    to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Back button with enhanced styling */}
       

        {/* Page Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 
                       bg-gradient-to-r from-white via-white/90 to-white/70 
                       bg-clip-text text-transparent"
          >
            Let's Connect
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have an exciting project or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact Form Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Contact />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-auto"></div>
    </div>
  );
}
