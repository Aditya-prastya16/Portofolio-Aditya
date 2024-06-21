'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animasi hanya dipicu sekali
    threshold: 0.3, // Animasi akan dimulai ketika 50% elemen terlihat
  });

  return (
    <motion.div
      ref={ref} // Referensi dari useInView
      initial={{ opacity: 0, y: 50 }} // Awal animasi
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animasi saat masuk
      transition={{ duration: 1.1 }} // Durasi animasi
      className="text-white p-8 font-spacesemibold mt-[5%]"
    >
      <div className="justify-center content-center mb-10 text-center">
        <p className="text-3xl md:text-5xl font-spacebold  mx-auto">
          Latest Project
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-sm md:text-xl font-spacesemibold">My Latest Project :</h1>
        <Link href="/view_project">
          <motion.p
            className="text-blue-400 text-xs md:text-base hover:text-blue-300 hover:text-bold "
            whileHover={{ scale: 1.1 }} // Increase scale on hover
          >
            See all my projects →
          </motion.p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="bg-transparent shadow-lg rounded-lg overflow-hidden flex justify-center items-center"
          whileHover={{ scale: 1.05 }} // Efek scaling saat hover
          initial={{ opacity: 0, y: 50 }} // Awal animasi
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi saat masuk
          transition={{ duration: 0.2 }} // Durasi animasi
        >
          <Image
            src="/card1.png"
            alt="Project 1"
            width={320}
            height={180}
            className="w-[80%] h-fit object-cover"
          />
        </motion.div>

        <motion.div
          className="bg-transparent shadow-lg rounded-lg overflow-hidden flex justify-center items-center"
          whileHover={{ scale: 1.05 }} // Efek scaling saat hover
          initial={{ opacity: 0, y: 50 }} // Awal animasi
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi saat masuk
          transition={{ duration: 0.4 }} // Durasi animasi
        >
          <Image
            src="/card2.png"
            alt="Project 2"
            width={320}
            height={180}
            className="w-[80%] h-fit object-cover"
          />
        </motion.div>

        <motion.div
          className="bg-transparent shadow-lg rounded-lg overflow-hidden flex justify-center items-center"
          whileHover={{ scale: 1.05 }} // Efek scaling saat hover
          initial={{ opacity: 0, y: 50 }} // Awal animasi
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi saat masuk
          transition={{ duration: 0.8 }} // Durasi animasi
        >
          <Image
            src="/card3.jpg"
            alt="Project 3"
            width={320}
            height={180}
            className="w-[80%] h-fit object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
