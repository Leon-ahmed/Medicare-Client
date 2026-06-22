'use client'
import { useState } from "react";

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

    
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D9B]">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600">
            Have questions? Reach out to our support team anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

         
          <div className="space-y-4">

            <div className="p-5 bg-[#F9FAFF] border rounded-xl">
              <p className="text-gray-500">Emergency Hotline</p>
              <p className="text-xl font-bold text-[#003D9B]">
                +880 1234-567890
              </p>
            </div>

            <div className="p-5 bg-[#F9FAFF] border rounded-xl">
              <p className="text-gray-500">Email</p>
              <p className="text-[#003D9B] font-semibold">
                support@medicareconnect.com
              </p>
            </div>

            <div className="p-5 bg-[#F9FAFF] border rounded-xl">
              <p className="text-gray-500">Location</p>
              <p className="text-[#003D9B] font-semibold">
                Dhaka, Bangladesh
              </p>
            </div>

          </div>






          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#F9FAFF] p-6 border rounded-2xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg h-32 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#003D9B] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}