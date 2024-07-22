import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loader-spinner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center mt-auto mb-auto bg-transparent p-4"
    >
      <ToastContainer />
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white font-bold text-2xl sm:text-5xl mb-7"
      >
        Contact Us
      </motion.h1>
      <motion.form 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full md:w-1/2"
      >
        <input 
          className="p-2 border rounded border-white text-white bg-transparent" 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          className="p-2 border rounded border-white text-white bg-transparent" 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          className="p-2 border rounded border-white text-white bg-transparent" 
          name="message"
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white text-black font-bold self-center rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <Circles
              height="24"
              width="24"
              color="#000"
              ariaLabel="loading"
            />
          ) : (
            'Submit'
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
