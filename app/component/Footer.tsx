'use client'

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSend } from "react-icons/fi";  

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);


    // try {
    //   const formData = new FormData(); 
    //   formData.append("email", email); 
  
    //   const response = await fetch(
    //     "https://script.google.com/macros/s/AKfycbzlv9uvQMIWZYyWX5rDsAezg8H1dxfdP0lu7j-BZTLUXft5LuVoFARcQ-fT1P0n6Ek/exec",
    //     {
    //       method: "POST",
    //       body: formData, 
    //     }
    //   );
  
    //   const data = await response.json();
  
    //   if (data.result === "success") {
    //     toast.success("Message sent successfully!"); 
    //     setEmail(""); 
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // } catch (error) {
    //   toast.error("Unable to send message");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <footer className="w-full bg-[#F9F9F9] py-12">
      {/* CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-center lg:text-left place-items-center lg:place-items-start">

          {/* Logo + Text */}
          <div className="flex flex-col items-center lg:items-start">
            <a href="/">
              <img src="/romeo-logo.png" alt="Lescy Romeo" />
            </a>

            <p className="max-w-sm text-[#121212] text-[16px] font-normal mt-4">
              Our Mission at Lescy Romeo is to provide premium foods in the most easy and convenient way
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-[20px] font-medium mb-4 text-[#121212]">
              Opening Hours
            </h4>
            <p className="text-[#121212] font-light text-[16px]">
              We are open from 8am – 9pm on weekdays and 9am – 9pm on weekends.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[20px] font-medium mb-4 text-[#121212]">
              Locations
            </h4>

            <div className="space-y-2">
              <div className="flex gap-2 items-start">
                <span className="mt-2 h-2 w-3 bg-[#E31E24] rounded-[1px]" />
                <p className="text-[#121212] font-medium">
                  Mattoris Supermarket, Chief G.U. Ake Road, Eliozu
                </p>
              </div>

              <div className="flex gap-2 items-start">
                <span className="mt-2 h-2 w-3 bg-[#E31E24] rounded-[1px]" />
                <p className="text-[#121212] font-medium">
                  Mattoris Supermarket, Chief G.U. Ake Road, Eliozu
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-sm">
            <h4 className="text-[20px] font-medium mb-4 text-[#121212]">
              Join Our Newsletter
            </h4>

            <form onSubmit={handleSubmit} className="relative w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 pl-10 rounded-[20px] text-[#333] focus:outline-none border-[1.5px] border-[#B2B2B2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <FiSend
                  className={`text-2xl text-[#E31E24] ${
                    loading ? "animate-spin" : ""
                  }`}
                />
              </button>
            </form>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start gap-4 mt-5">
              <a href="#" className="p-2 bg-[#121212] rounded-[10px]">
                <FaFacebookF className="text-white" size={18} />
              </a>
              <a href="#" className="p-2 bg-[#121212] rounded-[10px]">
                <FaInstagram className="text-white" size={18} />
              </a>
              <a href="#" className="p-2 bg-[#121212] rounded-[10px]">
                <FaLinkedinIn className="text-white" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-[#121212]/20 pt-6 text-sm text-center text-[#121212]/70">
          &copy; {new Date().getFullYear()} Futuresphere Business & Innovation Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};