 import Image from "next/image";
import four from "../../../public/five.svg"
export default function AboutUsSection() {
  return (
    <section className="bg-[#F9FAFF] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D9B]">
              About MediCare Connect
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              MediCare Connect is a modern healthcare management platform that connects patients,
              doctors, and hospitals in a centralized system. It helps simplify appointment booking,
              reduce waiting time, and improve healthcare accessibility.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Doctors can manage schedules and consultations, while patients can easily book appointments
              and access healthcare services efficiently and securely.
            </p>

           
            <div className="mt-6 flex gap-4 flex-wrap">

              <div className="px-4 py-3 bg-white border rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Mission</p>
                <p className="font-semibold text-[#003D9B]">
                  Better Healthcare Access
                </p>
              </div>

              <div className="px-4 py-3 bg-white border rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Vision</p>
                <p className="font-semibold text-[#003D9B]">
                  Digital Healthcare System
                </p>
              </div>

            </div>
          </div>

      
          <div className="flex justify-center">
            <Image
              src={four}
              alt="About MediCare Connect"
              width={400}
              height={400}
              className="w-full max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}