'use client';

import Image from "next/image";
import Link from "next/link";
import illus from "../../public/four.svg"
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFF] px-6">

      <div className="text-center max-w-md w-full">

    
        <div className="flex justify-center mb-6">
          <Image
            src={illus}
            alt="Page Not Found Illustration"
            width={380}
            height={380}
            priority
            className="w-full max-w-sm"
          />
        </div>
 
        <h1 className="text-5xl font-bold text-[#003D9B]">
          404
        </h1>

     
        <h2 className="mt-3 text-xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>

       
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-[#003D9B] text-white rounded-full font-medium hover:scale-105 transition"
        >
          Back to Home
        </Link>

   
        <p className="mt-6 text-xs text-gray-400">
          
        </p>

      </div>

    </div>
  );
}