"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { LinkTree } from "./LinkTree";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div 
        className="max-w-4xl mx-auto px-4 py-8 flex flex-col min-h-screen"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 100%)"
        }}
      >
        <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              {currentPage === "home" ? <LinkTree /> : <Contact />}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}