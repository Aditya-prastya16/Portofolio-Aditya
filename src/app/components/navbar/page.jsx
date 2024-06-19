import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.5 // Animation starts when 50% of the element is in view
  });

  return (
    <>
      <div className="navbar">
        <nav ref={ref} className="my-6 mx-4 text-lg flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} 
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image src="/Logo.png" alt="Company Logo" width={100} height={100} />
          </motion.div>
          <ul className="hidden md:flex space-x-10 font-semibold">
            <motion.li 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#Home" className="text-white hover:text-gray-300">Home</a>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#About" className="text-white hover:text-gray-300">About</a>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#Project" className="text-white hover:text-gray-300">Project</a>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#Contact" className="text-[#414141] bg-[#DBFF00] px-5 py-2 rounded-2xl hover:text-gray-300">Contact</a>
            </motion.li>
          </ul>
          <motion.button 
            className="md:hidden text-white focus:outline-none"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
