'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [mainImage, setMainImage] = useState('/singgo-project.png');

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
    <Link href="/view_project" className="flex items-center text-blue-500 mb-4">
    <span className="mr-2">&lt;&lt;</span> Return To Home Page
  </Link>      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Singgo Bali Admin Page</h1>
          {/* card 1 */}
          <div className="relative">
            <Image src={mainImage} alt="Laundry Project" width={600} height={400} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">Singgo Dashboard</h2>
              <p>Singgo Bali Dashboard is an website that use to take a note about transaction</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex space-x-2 mt-4">
            <Image
              src="/singgoadmin-card1.png"
              alt="Thumbnail 1"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/singgoadmin-card1.png')}
            />
            <Image
              src="/singgoadmin-card2.png"
              alt="Thumbnail 2"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/singgoadmin-card2.png')}
            />
            <Image
              src="/singgoadmin-card3.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/singgoadmin-card3.png')}
            />
            <Image
              src="/singgoadmin-card4.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/singgoadmin-card4.png')}
            />
           
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Singgo Dashboard Website</h2>
          <p className="mb-5">
          The Singgo Bali Dashboard is a web application for employees, featuring a secure login system and various functionalities. It includes features for tracking and managing daily sales, handling transactions, and providing a comprehensive daily sales summary. These tools ensure efficient operations and accurate records. The dashboard also offers real-time updates, user-friendly interfaces, and data analytics for insightful reporting, aiding management in making informed decisions. Overall, it streamlines operations and enhances productivity within the company.          </p>
          <p className="font-bold mb-1">See My Website On :</p>
          <p className="font-bold mb-5 hover:text-red-500">
          <Link target='_blank' href="#">
            Sorry, this site hasn &apos; t been published yet !!! 
          </Link>
          </p>
          <p className="font-bold mb-2">See My Project On :</p>
          <div className="flex items-center space-x-2">
            <Link target='_blank' href="https://github.com/Aditya-prastya16/singgo-bali">
              <Image src="/mdi_github.png" alt="Vercel Logo" width={20} height={20} className="w-5 h-5" />
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
