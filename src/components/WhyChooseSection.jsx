'use client';

import { FaUserMd, FaCalendarCheck, FaShieldAlt, FaClock } from "react-icons/fa";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <FaUserMd />,
      title: "Expert Doctors",
      desc: "Access verified and experienced healthcare professionals anytime.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Easy Appointments",
      desc: "Book appointments in just a few clicks without any hassle.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Records",
      desc: "Your medical data is safe, encrypted, and fully protected.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      desc: "Get healthcare assistance anytime, anywhere you need it.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D9B]">
            Why Choose MediCare Connect
          </h2>
          <p className="mt-3 text-gray-600">
            A smarter way to manage your healthcare with trust, speed, and security.
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition bg-[#F9FAFF]"
            >
              <div className="text-[#003D9B] text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}