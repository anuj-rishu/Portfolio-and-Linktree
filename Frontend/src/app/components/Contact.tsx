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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        toast.loading('Sending message...', { id: 'sending' });
        try {
            await axios.post('https://link-tree-backend-c9mp.vercel.app/api/send', formData);
            setLoading(false);
            toast.success('Message sent successfully!', {
                id: 'sending',
                icon: '🎉',
                duration: 3000,
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setLoading(false);
            toast.error('Failed to send message', {
                id: 'sending',
                icon: '❌',
            });
            console.error('Error:', error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Toaster position="top-center" />
            <motion.div
                className="text-center space-y-2 mb-8"
                variants={itemVariants}
            >
                <motion.h2
                    className="text-3xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    className="text-white/90 font-medium"
                    variants={itemVariants}
                >
                    Let's connect and create something amazing together
                </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/90 
                        placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 
                        focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/90 
                        placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 
                        focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <textarea
                        name="message"
                        placeholder="Your message"
                        onChange={handleChange}
                        value={formData.message}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/90 
                        placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 
                        focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-6 bg-white/10 text-white font-medium rounded-xl
                        transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed 
                        hover:bg-white/20 hover:shadow-lg hover:shadow-white/5 border border-white/10
                        hover:border-white/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {loading ? (
                            <Circles
                                height="24"
                                width="24"
                                color="#ffffff"
                                ariaLabel="sending-message"
                                wrapperStyle={{ display: 'inline-block', verticalAlign: 'middle' }}
                            />
                        ) : (
                            'Send Message'
                        )}
                    </motion.button>
                </motion.div>
            </form>
        </motion.div>
    );
}