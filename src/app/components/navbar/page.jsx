import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="my-6 mx-4 text-lg flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/Logo.png" alt="Company Logo" width={100} height={100} />
          </div>
          <ul className="hidden md:flex space-x-10 font-semibold">
            <li>
              <a href="#Home" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#About" className="text-white hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#Project" className="text-white hover:text-gray-300">Project</a>
            </li>
            <li>
              <a href="#Contact" className="text-[#414141] bg-[#DBFF00] px-5 py-2 rounded-2xl hover:text-gray-300">Contact</a>
            </li>
          </ul>
          <button className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
    </>
  )
}

export default Navbar
