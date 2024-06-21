'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.5, // Animation starts when 50% of the element is in view
  });

  return (
    <div className="container mt-[5%] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1.4 }}
          className="order-2 md:order-1 mx-10 font-spacesemibold text-[40px] md:text-[80px] leading-tight text-center md:text-left"
        >
          <p className="text-white">Designing</p>
          <p className="text-white">
            <span className="text-[#DBFF00]">&</span>Deploying Website
          </p>
          <div className="flex flex-row space-x-10 mt-[5%]">
            <div className="ml-2 flex">
              <Link
                href="https://drive.google.com/file/d/1Skq8wf9LxPr-adgKNFm1MQQgeT_PJgkF/view"
                className="flex items-center"
                target="_blank"
              >
                <button className="bg-[#DBFF00] px-6 md:px-6 py-2 rounded-lg text-[#414141] font-spacesemibold text-sm md:text-base transform transition-transform duration-300 hover:scale-105">
                  Download CV
                </button>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-[#2563EB]"></span>
              <p className="px-2 py-1 rounded-lg text-white font-spacesemibold text-sm md:text-base">
                Available For Hire
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1.4 }}
          className="order-1 md:order-2 flex mt-[5%] justify-center items-center md:justify-end"
        >
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={600}
            height={600}
            className="md:w-auto md:h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
