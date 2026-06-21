'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import {Handset} from '@gravity-ui/icons';
import {MapPin} from '@gravity-ui/icons';
import {Envelope} from '@gravity-ui/icons';
import {LogoFacebook} from '@gravity-ui/icons';
import {LogoLinkedin} from '@gravity-ui/icons';
export default function Footer() {
  return (
    <footer className="bg-[#003D9B] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

       
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="MediCare Connect"
                width={50}
                height={50}
              />
              <h2 className="text-xl font-semibold">
                MediCare Connect
              </h2>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed">
              Connecting patients with trusted doctors and hospitals
              through a modern healthcare management platform.
            </p>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/find-doctors"
                  className="hover:text-gray-300"
                >
                  Find Doctors
                </Link>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact Information
            </h3>

            <div className="space-y-2 text-gray-200 text-sm">
              <p className="flex gap-1 items-center"><MapPin></MapPin> Dhaka, Bangladesh</p>
              <p className="flex gap-1 items-center"> <Handset></Handset> +880 1234-567890</p>
              <p className="flex gap-1 items-center"> <Envelope></Envelope> support@medicareconnect.com</p>
            </div>
          </div>

        
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Emergency Hotline
            </h3>

            <div className="mb-6">
              <p className="text-xl font-bold text-white flex gap-1 items-center">
               <Handset></Handset> 999
              </p>
              <p className="text-sm text-gray-200">
                24/7 Emergency Support
              </p>
            </div>

            <h4 className="font-medium mb-3">
              Follow Us
            </h4>

            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:scale-110 transition  ">
            <LogoFacebook className="w-7 h-7"></LogoFacebook>
              </a>

              <a href="#" className="hover:scale-110 transition">
                 <LogoLinkedin className="w-7 h-7"></LogoLinkedin>
              </a>

              <a href="#" className="hover:scale-110 transition  w-8 h-8 font-bold " >
                X
              </a>
            </div>
          </div>

        </div>

      
        <div className="border-t border-blue-400 mt-10 pt-6 text-center text-sm text-gray-200">
          &copy;2026  MediCare Connect. All rights reserved.
        </div>

      </div>
    </footer>
  );
}