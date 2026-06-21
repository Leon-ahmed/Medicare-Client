'use client';

import { FaHeart, FaBrain, FaBone, FaBaby, FaUserMd } from "react-icons/fa";

export default function SpecializationsSection() {
  const specializations = [
    {
      icon: <FaHeart />,
      title: "Cardiology",
      desc: "Heart and cardiovascular care.",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      desc: "Brain and nervous system treatment.",
    },
    {
      icon: <FaBone />,
      title: "Orthopedics",
      desc: "Bone, joint, and muscle care.",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      desc: "Healthcare for infants and children.",
    },
    {
      icon: <FaUserMd />,
      title: "Dermatology",
      desc: "Skin, hair, and nail treatment.",
    },
  ];

  return (
    <section className="bg-[#F9FAFF] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D9B]">
            Medical Specializations
          </h2>
          <p className="mt-3 text-gray-600">
            Explore different healthcare departments and find the right specialist for your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {specializations.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition rounded-2xl p-6 text-center"
            >
              <div className="text-[#003D9B] text-3xl flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}