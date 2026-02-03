'use client'

import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSend } from "react-icons/fi";  

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     setLoading(true);


  //    try {
  //     const response = await fetch('https://future-shpere-backend.vercel.app/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ 
  //         email, 
  //       }),
  //     })

  //     const data = await response.json()

  //     if (response.ok) {
  //       toast.success('Message sent successfully!')
  //       setEmail('') 
  //     } else {
  //      toast.error(data.message || 'Something went wrong')
  //     }
  //   } catch (error) {
  //     toast.error('Unable to send message. Please try again later.')
  //   } finally {
  //     setLoading(false)
  //   }
  // }




   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
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
    <footer
      className="text-[#f5f5f5]  lg:px-[80px] py-12 bg-[#F9F9F9] px-6"
      style={{
 

      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center">

        {/* Logo + Text */}
        <div>
             <a href="/">
       <img src="/romeo-logo.png" alt="" />
     </a>

          <p className="max-w-sm text-[#121212] text-[16px] font-normal">
           Our Mission at Lescy Romeo is to provide premium foods in the most easy and convenient way
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[20px] font-medium mb-6 text-[#121212] ">Opening Hours</h4>
          <p className="text-[#121212]  font-light  text-[16px]">We are open From 8am - 9pm on weekdays and open from 9am-9pm on Saturdays and Sundays. </p>
        </div>

        {/* Contact */}
        <div>
         <h4 className="text-[20px] font-medium mb-6 text-[#121212]">Locations</h4>
          <div className="mb-2 text-[#121212] font-medium flex items-start gap-2">
            <div className="h-2 mt-2  w-3 rounded-[1px] bg-[#E31E24]"></div>
            <span>
                Mattoris Supermarket, Chief G.U. Ake Road, Eliozu
            </span>
          </div>
         <div className="mb-2 text-[#121212] font-medium flex items-start gap-2">
          <div className="h-2 mt-2  w-3 rounded-[1px] bg-[#E31E24]"></div>
            <span>
                Mattoris Supermarket, Chief G.U. Ake Road, Eliozu
            </span>
          </div>
        </div>

        {/* Newsletter */}
        <div>
         <h4 className="text-[20px] font-medium mb-6 text-[#121212] "> Join Our Newsletter </h4>

          {/* Input + Send Icon */}
          <form className="relative w-full" onSubmit={handleSubmit}>
           

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-4 pl-10 rounded-[20px] text-[#333] focus:outline-none border-[1.5px] border-[#B2B2B2]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                boxShadow: '0px 4px 4px 0px #00000040'
              }}
              required
            />
            <button  className={` h-[46px] w-[50px] cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 flex justify-center items-center ]  ${loading ? 'animate-spin hover:scale-0' : ''} `}
            
            style={{background: " "}}>
               <FiSend className=" text-2xl  text-[#E31E24]  " />  
            </button>
             
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/share/1LGnnyNW44/?mibextid=wwXIfr" className="p-2 bg-[#121212] rounded-[10px] hover:bg-white/30 transition">
              <FaFacebookF className="text-[#fff]"  size={18} />
            </a>
            <a href="#" className="p-2 bg-[#121212] rounded-[10px] hover:bg-white/30 transition">
              <FaInstagram className="text-[#fff]"  size={18} />
            </a>
            <a href="#" className="p-2 bg-[#121212] rounded-[10px] transparent hover:bg-white/30 transition">
              <FaLinkedinIn className="text-[#fff]" size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/30 pt-6 text-sm text-[#f5f5f5]/80 text-center">
        &copy; {new Date().getFullYear()} Futuresphere Business & Innovation Hub. All rights reserved.
      </div>
    </footer>
  );
};