'use client';

import Link from "next/link";
import Image from "next/image";
import banner from "../../../public/banner.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="w-full">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden bg-amber-50/20 py-10 flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8">

         
          <div className="flex justify-center">
            <Image
              src={banner}
              alt="Healthcare Banner"
              className="w-full max-w-sm  rounded-2xl"
              priority
            />
          </div>

       
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex relative min-h-screen items-center">

     
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/banner.png')] bg-cover bg-center"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

    
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">

          <div className="max-w-2xl">

         
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              Your Health, Our Priority
            </motion.h1>

         
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-4 text-gray-200 text-lg"
            >
              Book appointments with trusted doctors, manage your health records,
              and get medical support anytime with MediCare Connect.
            </motion.p>

          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 flex gap-4"
            >
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
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}