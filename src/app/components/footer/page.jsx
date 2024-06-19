import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animasi hanya dipicu sekali
    threshold: 0.5, // Animasi akan dimulai ketika 50% elemen terlihat
  });
  return (
    <>
      <motion.div
        ref={ref} // Referensi dari useInView
        initial={{ opacity: 0, y: 50 }} // Awal animasi
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animasi saat masuk
        transition={{ duration: 0.5 }} // Durasi animasi
        className="mt-[5%]"
      >
        <div className="mt-[5%]">
          <div className="bg-[#DBFF00] flex flex-col md:flex-row justify-between items-center p-10">
            <div className="mb-4 md:mb-0">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
                transition={{ duration: 2.5 }}
                className="underline text-xl font-spacesemibold"
              >
                Aditya Prastya
              </motion.p>
            </div>
            <div className="text-center font-spacesemibold space-x-5 mb-4 md:mb-0">
              <Link href="#Home">Home</Link>
              <Link href="#About">About</Link>
              <Link href="#Project">Project</Link>
              <Link href="#Contact">Contact</Link>
            </div>
            <div className="flex space-x-5">
              <Link
                target="_blank"
                href="https://wa.me/6281246419072?text=Hello,%20Aditya%20Prastya"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-2xl md:text-3xl text-yellow-700"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/aditya.prastyaa/"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl md:text-3xl text-yellow-700"
                />
              </Link>
              <Link target="_blank" href="https://github.com/Aditya-prastya16">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl md:text-3xl text-yellow-700"
                />
              </Link>
              <Link target="_blank" href="mailto:adtyap87@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl md:text-3xl text-yellow-700"
                />{" "}
                {/* Corrected the icon usage */}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
