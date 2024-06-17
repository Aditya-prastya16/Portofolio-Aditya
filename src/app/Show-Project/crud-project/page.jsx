'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [mainImage, setMainImage] = useState('/movie-project.png');

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
          <h1 className="text-3xl font-bold mb-4">Laundry System</h1>
          {/* card 1 */}
          <div className="relative">
            <Image src={mainImage} alt="Laundry Project" width={600} height={400} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">Laundry System</h2>
              <p>Laundry System is a website to operate a laundry management system.</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex space-x-2 mt-4">
            <Image
              src="/movie-project.png"
              alt="Thumbnail 1"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/movie-project.png')}
            />
            <Image
              src="/laundry-project.png"
              alt="Thumbnail 2"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/laundry-project.png')}
            />
            <Image
              src="/movie-project-3.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/movie-project-3.png')}
            />
            <Image
              src="/movie-project-4.png"
              alt="Thumbnail 4"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick('/movie-project-4.png')}
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Index Page</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Egestas libero urna urna ullamcorper. Ac sed ullamcorper
            ullamcorper risus enim dictumst urna in dui. Augue elementum suspendisse lacus sit ac. Consectetur
            et scelerisque facilisis neque commodo vestibulum elit. Lectus quam sit quam orci eu nullam duis.
            Sit sit sagittis sed diam nam quam. Lorem at dui tellus leo ullamcorper sed. Ultrices tempus nisl
            aliquam nulla blandit risus aliquet. Habitasse nulla in nisi faucibus. Consequat morbi nibh sed sed
            nunc mi convallis condimentum. Laoreet volutpat quam id elementum sed faucibus consequat. Diam
            accumsan aliquam imperdiet mauris dignissim. Tempor hendrerit nulla arcu tristique sed. Et turpis
            tellus congue platea amet dolor semper cursus.
          </p>
          <p className="font-bold mb-2">See My Project On :</p>
          <div className="flex items-center space-x-2">
            <Image src="/mdi_github.png" alt="Vercel Logo" width={20} height={20} className="w-5 h-5" />
            <Image src="/logos_vercel.png" alt="Vercel Logo" width={20} height={20} className="w-14 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
