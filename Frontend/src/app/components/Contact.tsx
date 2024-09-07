import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { Circles } from "react-loader-spinner";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        toast('Sending message...');
        try {
          await axios.post('https://backend.links.anujrishu.me/api/send', formData);
          setLoading(false);
          toast.success('Message Sent Successfully');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } catch (error) {
          setLoading(false);
          console.error('Error sending message:', error);
          toast.error('Failed to send message');
        }
      };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster />
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <form 
      className="space-y-4"
      onSubmit={handleSubmit}
      
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input
            type="text"
            name='name'
            placeholder="Your name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <textarea
            placeholder="Your message"
             name="message"
            onChange={handleChange}
            value={formData.message}
            required
            rows={4}
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
          ></textarea>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            type="submit"
            className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
            disabled={loading}
          >
     {loading ? (
            <Circles
            height="20"
            width="20"
            color="#ffffff" 
            ariaLabel="circles-loading"
            wrapperStyle={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          ) : (
            'Send Message'
          )}
            
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}