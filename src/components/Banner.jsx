'use client';

import Link from "next/link";
import Image from "next/image";
import banner from "../../public/banner.png";

export default function Banner() {
  return (
    <section className="w-full">

      {/* Mobile */}
      <div className="md:hidden bg-amber-50/20 py-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8">

        
          <div className="flex justify-center">
            <Image
              src={banner}
              alt="Healthcare Banner"
              className="w-full max-w-sm rounded-2xl"
              priority
            />
          </div>

      
          <div>
            <h1 className="text-3xl font-bold text-[#003D9B] leading-tight">
              Your Health, Our Priority
            </h1>

            <p className="mt-4 text-gray-600">
              Book appointments with trusted doctors anytime with MediCare Connect.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/find-doctors"
                className="px-6 py-3 bg-[#003D9B] text-white rounded-full text-center font-medium"
              >
                Find Doctors
              </Link>

              <Link
                href="/contact-us"
                className="px-6 py-3 border border-[#003D9B] text-[#003D9B] rounded-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>

    



    {/* Desktop */}
      <div className="hidden md:flex relative min-h-screen items-center">

     
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/banner.png')] bg-cover bg-center"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

   
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">

          <div className="max-w-2xl">

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Your Health, Our Priority
            </h1>

            <p className="mt-4 text-gray-200 text-lg">
              Book appointments with trusted doctors, manage your health records,
              and get medical support anytime with MediCare Connect.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/find-doctors"
                className="px-6 py-3 bg-[#003D9B] rounded-full font-medium hover:scale-105 transition"
              >
                Find Doctors
              </Link>

              <Link
                href="/contact-us"
                className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}