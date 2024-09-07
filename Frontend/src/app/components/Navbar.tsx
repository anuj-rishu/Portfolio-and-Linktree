import React from "react";
import { motion } from "framer-motion";
import { Home, Mail } from "lucide-react";

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export function Navbar({ setCurrentPage, currentPage }: NavbarProps) {
  return (
    <motion.nav
      className="flex justify-center space-x-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavItem
        icon={<Home size={24} />}
        label="Home"
        onClick={() => setCurrentPage("home")}
        active={currentPage === "home"}
      />
      <NavItem
        icon={<Mail size={24} />}
        label="Contact"
        onClick={() => setCurrentPage("contact")}
        active={currentPage === "contact"}
      />
    </motion.nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active: boolean;
}

function NavItem({ icon, label, onClick, active }: NavItemProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
        active ? "bg-white text-blue-600" : "text-white hover:bg-white/20"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </motion.button>
  );
}
