import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className="bg-zinc-900 text-white min-h-screen p-4">
        <Link href="/" className="text-blue-500 hover:text-zinc-200 mb-4 inline-block">
          &larr; Return To Home Page
        </Link>
        <h2 className="text-3xl font-bold mb-8">Latest Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="./Show-Project/movie-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/movie-project.png" alt="Movie App" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Searching App</h3>
              <p className="text-zinc-400">Searching movie app with dark & light theme</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/crud-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/nextcrud.png" alt="Next CRUD" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Next js CRUD</h3>
              <p className="text-zinc-400">Next CRUD is an app can use to create, read, update and deleting data with search</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/dinime-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/animelist-project.png" alt="Animelist Project" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Dinimelist</h3>
              <p className="text-zinc-400">Dinimelist is an app that use for searching anime with dashboard page and login with github</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/fish-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/fishshop-project.png" alt="Fish Shop Project" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Fish Shop</h3>
              <p className="text-zinc-400">Fish Shop is a website that use to manage fishing shop</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/laundry-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/laundry-project.png" alt="Laundry Project" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Laundry System</h3>
              <p className="text-zinc-400">Laundry System is a website to operating a laundry management</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/singgoadmin-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/singgo-project.png" alt="Singgo Bali Project" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Singgo Bali Admin Page</h3>
              <p className="text-zinc-400">Singgo Bali is a food website that use to manage a transaction in a food shop</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/singgolanding-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/singgolanding-project.png" alt="Simple Apotek Project" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Singgo Bali Landing Page</h3>
              <p className="text-zinc-400">Singgo Bali is a page that use to see any information or product of singgo bali</p>
            </div>
          </div>
          </Link>
          <Link href="./Show-Project/apotek-project">
          <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all ease-in-out delay-100 hover:scale-y-1 hover:scale-110 duration-400">
            <Image src="/apotek-project.png" alt="Simple Apotek Project" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">E-Apotek</h3>
              <p className="text-zinc-400">E-Apotek is a website that use to manage a pharmacy store</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
