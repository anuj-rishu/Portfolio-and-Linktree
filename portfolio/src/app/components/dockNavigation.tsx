"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Mail, FileText,} from "lucide-react";
import { usePathname } from "next/navigation";

export function DockNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },

    { href: "/resume", icon: FileText, label: "Resume" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center items-center pb-8 z-50">
      <div
        className="absolute inset-x-0 bottom-0 h-32 
                    bg-gradient-to-t from-black via-black/50 to-transparent 
                    pointer-events-none"
      />

      <motion.div
        className="relative px-8 py-3 bg-white/10 backdrop-blur-xl 
                   border border-white/20 rounded-2xl shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link href={item.href} key={item.href}>
                <motion.div
                  className="relative group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className={`p-2 rounded-xl transition-colors duration-200
                             ${
                               isActive
                                 ? "bg-white/20 text-white"
                                 : "text-white/60 hover:text-white"
                             }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 
                             bg-black/90 text-white text-xs px-2 py-1 rounded-md
                             opacity-0 group-hover:opacity-100 transition-opacity
                             whitespace-nowrap pointer-events-none"
                  >
                    {item.label}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 
                               bg-white rounded-full -translate-x-1/2"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
