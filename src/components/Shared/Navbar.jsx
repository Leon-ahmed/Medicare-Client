'use client'
import { useState } from "react";
import { Avatar, Link } from "@heroui/react";
import logo from "../../../public/logo.png"
import Image from "next/image";
import Navlink from "@/components/Shared/Navlink";
export default function Navbar() {
    const user = null
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#F4F7FF] backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-1 text-[#003D9B] font-medium text-xl   " > <Image src={logo} alt="logo" height={50} width={50}   style={{
    width: "auto",
    height: "auto",
  }}  ></Image>   MediCare Connect</div>
                </div>

              
              
                  <button
                    className="md:hidden "
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="sr-only">Menu</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                  
                <ul className="hidden items-center gap-4 md:gap-3 lg:gap-4 md:flex">
                    <li>
                        <Navlink href="/">Home</Navlink>
                    </li>
                    <li>
                        <Navlink href="/find-doctors">Find Doctors</Navlink>
                    </li>
                    <li>
                        <Navlink href="/about-us">About Us</Navlink>
                    </li>
                    <li>
                        <Navlink href="/contact-us">Contact Us</Navlink>
                    </li>
                    <li>
                        {
                            user ?(<><Navlink href="/dashboard">Dashboard</Navlink></>):(<></>)
                        }
                    </li>
                    
                </ul>

                <div className="hidden md:flex gap-2">
                  {
                    user ?(  

           
          <>
            <Avatar>
        <Avatar.Image alt="User Image" src={user?.image}
        referrerPolicy="no-referrer" />
        {/* <Avatar.Fallback>{user.name[0]}</Avatar.Fallback> */}
             
          
             </Avatar>

            <button
              type="button"
              className=""
            
            >
              Logout
            </button>
          </>)  :  (<> <div className="space-x-2">
                     <Link href="/login" className="p-2    text-[#003D9B] transition-all ease-in-out hover:scale-105 active:scale-95   ">Login</Link>
                     <Link href="/register"    className="p-2 bg-[#003D9B] text-white rounded-full font-medium   transition-all ease-in-out hover:scale-105 active:scale-95   ">Register</Link>
            
            </div> </>)
                  }
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 text-center p-4">
                             <li>
                        <Navlink href="/">Home</Navlink>
                    </li>
                    <li>
                        <Navlink href="/find-doctors">Find Doctors</Navlink>
                    </li>
                    <li>
                        <Navlink href="/about-us">About Us</Navlink>
                    </li>
                    <li>
                        <Navlink href="/contact-us">Contact Us</Navlink>
                    </li>
                    <li>
                        {
                            user ?(<><Navlink href="/dashboard">Dashboard</Navlink></>):(<></>)
                        }
                    </li>
                    </ul>

                    <hr className="w-11/12 mx-auto pb-4" />
                      
                      
                <div>
                         {
                    user ?(  

           <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-3">   
       
                           <Avatar>
        <Avatar.Image alt="User Image" src={user?.image}
        referrerPolicy="no-referrer" />
        {/* <Avatar.Fallback>{user.name[0]}</Avatar.Fallback> */}
             
          
             </Avatar>
            <button
              type="button"
              className="p-2 bg-[#003D9B] text-white rounded-md mb-4 transition-all ease-in-out hover:scale-3d active:scale-95 "
            
            >
              Logout
            </button>
           </div>
        )  :  (<> <div className="flex flex-col w-8/12 mx-auto py-4  gap-3">
                       <button className="p-2 border border-[#003D9B] text-[#003D9B] transition-all ease-in-out hover:scale-105 active:scale-95   ">Login</button>
                       <button className="p-2 bg-[#003D9B] text-white   transition-all ease-in-out hover:scale-105 active:scale-95   ">Register</button>
            
            </div> </>)
                  }
                </div>



                </div>
            )}
        </nav>
    );
}