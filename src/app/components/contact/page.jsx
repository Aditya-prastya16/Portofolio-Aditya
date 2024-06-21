'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5 }}
      className="mt-10 mx-auto px-4"
    >
      <div className="mb-10  mx-auto px-4">
        <h2 className="text-3xl font-spacebold text-center text-white mb-4">Contact Me</h2>
        <div className="w-full max-w-md mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
          <form action="https://formspree.io/f/xeqynrzv" method="POST" className="flex flex-col space-y-4">
            <label htmlFor="email" className="text-lg text-[#414141] font-spacesemibold">Your email:</label>
            <input id="email" type="email" name="email" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter your email" />
            <label htmlFor="message" className="text-lg text-[#414141] font-spacesemibold">Your message:</label>
            <textarea id="message" name="message" rows="6" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Write your message here"></textarea>
            <button type="submit" className="inline-flex items-center justify-center px-4 py-2 bg-[#DBFF00] rounded-lg text-[#414141] hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-spacesemibold">Send</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
