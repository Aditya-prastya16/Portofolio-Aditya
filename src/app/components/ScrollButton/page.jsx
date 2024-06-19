// ScrollToTopButton.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import ikon ChevronUp dari FontAwesome

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-8 right-8 z-50 bg-gray-800 text-white px-4 py-4 rounded-full shadow-lg focus:outline-none ${isVisible ? 'block' : 'hidden'}`}
    >
      <FontAwesomeIcon icon={faChevronUp} className="h-6 w-6" /> {/* Menggunakan FontAwesomeIcon dengan ikon faChevronUp */}
    </motion.button>
  );
};

export default ScrollToTopButton;
