'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [mainImage, setMainImage] = useState('/laundry-card1.png');

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <Link href="/view_project" className="flex items-center text-lime-400 mb-4">
        <span className="mr-2">&lt;&lt;</span> Return To Home Page
      </Link>
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Laundry Management System</h1>
          {/* card 1 */}
          <div className="relative">
            <Image src={mainImage} alt="Laundry Project" width={600} height={400} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">E-Laundry</h2>
              <p>Laundry System is a website to operate a laundry management system.</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex space-x-2 mt-4">
            <Image
              src="/laundry-project.png"
              alt="Thumbnail 1"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/laundry-project.png')}
            />
            <Image
              src="/laundry-card2.png"
              alt="Thumbnail 2"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/laundry-card2.png')}
            />
            <Image
              src="/laundry-card3.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/laundry-card3.png')}
            />
            <Image
              src="/laundry-card4.png"
              alt="Thumbnail 4"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/laundry-card4.png')}
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Index Page</h2>
          <p className="mb-4">
          The laundry management website is a website that is used to manage the laundry system which aims to make it easier for users to manage several transactions at the laundry such as managing customers, managing laundry branches, managing new packages sold at the laundry, managing employees at the laundry, managing transactions that occur at the laundry to see progress data from the laundry
          </p>
          <p className="font-bold mb-2">See My Project On :</p>
          <div className="flex items-center space-x-2">
            <Link target='_blank' href="https://github.com/Aditya-prastya16/Laundry-project-revisi-">
              <Image src="/mdi_github.png" alt="Vercel Logo" width={20} height={20} className="w-5 h-5" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
