'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <ul className={`md:flex md:space-x-10 font-semibold ${isOpen ? 'block' : 'hidden'} md:block bg-opacity-90 absolute md:static bg-color-primary md:bg-transparent top-16 left-0 w-full md:w-auto`}>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#Home" className="text-white hover:text-gray-300 block py-2 md:py-1">Home</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#About" className="text-white hover:text-gray-300 block py-2 md:py-1">About</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#Project" className="text-white hover:text-gray-300 block py-2 md:py-1">Project</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#Contact" className="md:text-[#414141] text-color-secondary md:bg-[#DBFF00] py-2 md:py-1 md:px-5 rounded-2xl hover:text-gray-300 block">Contact</a>
            </motion.li>
          </ul>
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
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
