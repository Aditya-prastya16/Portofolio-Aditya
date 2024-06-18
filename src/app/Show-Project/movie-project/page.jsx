'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ReturnPage } from '@/app/components/return/page';

const Page = () => {
  const [mainImage, setMainImage] = useState('/movie-project.png');

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <ReturnPage />
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Movie Website</h1>
          {/* card 1 */}
          <div className="relative">
            <Image src={mainImage} alt="Laundry Project" width={600} height={400} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">Movie Website</h2>
              <p>Movie website is a website that use to searching any film or movie using api</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex space-x-2 mt-4">
            <Image
              src="/movie-card1.png"
              alt="Thumbnail 1"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/movie-card1.png')}
            />
            <Image
              src="/movie-card2.png"
              alt="Thumbnail 2"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/movie-card2.png')}
            />
            <Image
              src="/movie-card3.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/movie-card3.png')}
            />

          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Movie Website</h2>
          <p className="mb-5">
          A movie search website built with Next.js and a movie database API, such as The Movie Database (TMDb) API, enables users to dynamically search for and retrieve detailed information about various movies. The website leverages Next.js for server-side rendering and efficient client-side routing, resulting in a fast and responsive user experience. Users can explore movie details, view ratings, read synopses, and even browse through related content seamlessly. This integration allows for a modern, interactive interface that enhances the movie discovery process by utilizing the comprehensive data provided by the API.          </p>
          <p className="font-bold mb-1">See My Website On :</p>
          <p className="font-bold mb-5 hover:text-blue-500">
          <Link target='_blank' href="https://movie-api-react-zeta.vercel.app/">
              https://movie-api-react-zeta.vercel.app/
            </Link>
          </p>
          <p className="font-bold mb-2">See My Project On :</p>
          <div className="flex items-center space-x-2">
            <Link target='_blank' href="https://github.com/Aditya-prastya16/Movie-api-react">
              <Image src="/mdi_github.png" alt="Vercel Logo" width={20} height={20} className="w-5 h-5" />
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
