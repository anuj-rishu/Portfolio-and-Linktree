import React from 'react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      className="text-center text-white/80 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; {new Date().getFullYear()} Anuj Rishu Link Tree. All rights reserved.</p>

    </motion.footer>
  )
}