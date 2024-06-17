import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faGithub,faApper } from '@fortawesome/free-brands-svg-icons'; 
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="mt-10 mx-auto px-4">
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

      <div className="mt-[5%]">
        <div className="bg-[#DBFF00] flex flex-col md:flex-row justify-between items-center p-10">
          <div className="mb-4 md:mb-0">
            <p className="underline text-xl font-spacesemibold">Aditya Prastya</p>
          </div>
          <div className="text-center font-spacesemibold space-x-5 mb-4 md:mb-0"> 
            <Link href="#Home">Home</Link>
            <Link href="#About">About</Link>
            <Link href="#Project">Project</Link>
            <Link href="#Contact">Contact</Link>
          </div>
          <div className="flex space-x-5">
            <a target="_blank" href="https://wa.me/6281246419072?text=Hello,%20Aditya%20Prastya">
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl md:text-3xl text-yellow-700" />
            </a>
            <a target="_blank" href="https://www.instagram.com/aditya.prastyaa/">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-3xl text-yellow-700" />
            </a>
            <a target="_blank" href="https://github.com/Aditya-prastya16">
              <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-3xl text-yellow-700" />
            </a>
            <a target="_blank" href="mailto:adtyap87@gmail.com"> 
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl md:text-3xl text-yellow-700" /> {/* Corrected the icon usage */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
