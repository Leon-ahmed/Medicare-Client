'use client';

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9FF] px-6">
      <div className="text-center max-w-md">

        
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="MediCare Connect"
            width={70}
            height={70}
          />
        </div>

       
        <h1 className="text-6xl font-bold text-[#003D9B]">
          404
        </h1>

    
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>

     
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-[#003D9B] text-white rounded-full font-medium shadow-md hover:scale-105 active:scale-95 transition"
        >
          Go Back Home
        </Link>

         
        <p className="text-xs text-gray-400 mt-6">
          If you think this is a mistake, please contact support.
        </p>

      </div>
    </div>
  );
}