import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <>
      <div className="text-white p-8 font-spacesemibold mt-[10%]">
        <div className="justify-center content-center mb-10 text-center">
          <p className="text-3xl font-spacebold text-[50px] mx-auto">Latest Project</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-spacesemibold">My Latest Project :</h1>
          <Link href="/view_project" className="text-blue-400 hover:text-blue-300">See all my projects →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
          <div className="bg-transparent shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <Image src="/card1.png" alt="Project 1" width={320} height={180} className="w-[80%] h-fit object-cover" />
          </div>
    
          <div className="bg-transparent shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <Image src="/card2.png" alt="Project 2" width={320} height={180} className="w-[80%] h-fit object-cover" />
          </div>
    
          <div className="bg-transparent shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <Image src="/card3.jpg" alt="Project 3" width={320} height={180} className="w-[80%] h-fit object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
