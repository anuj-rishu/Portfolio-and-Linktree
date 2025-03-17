"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "anujtiwari4454@outlook.com",
      link: "mailto:anujtiwari4454@outlook.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      content: "@anuj-rishu",
      link: "https://github.com/anuj-rishu",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Lucknow, Uttar Pardesh",
      link: "https://maps.google.com",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Sending message...", { id: "sending" });

    try {
      await axios.post(
        "https://link-tree-backend-c9mp.vercel.app/api/send",
        formData
      );
      setLoading(false);
      toast.success("Message sent successfully!", {
        id: "sending",
        icon: "🎉",
        duration: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send message", {
        id: "sending",
        icon: "❌",
      });
    }
  };

  return (
    <div className="min-h-screen text-white px-4">
      <Toaster position="top-center" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        ></motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:ring-2 
                           focus:ring-white/30 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:ring-2 
                           focus:ring-white/30 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:ring-2 
                           focus:ring-white/30 transition-all resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-white/10 rounded-xl font-medium text-white
                         hover:bg-white/20 transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="block bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10
                         hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{info.title}</h3>
                    <p className="text-white/70">{info.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}