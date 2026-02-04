'use client'

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const navItems = [
    { id: 1, navName: "Home", navLink: "/" },
    {
      id: 2,
      navName: "Categories",
      children: [
        { id: 1, name: "Burgers", link: "/categories/burgers" },
        { id: 2, name: "Drinks", link: "/Categories/drink-cat" },
      ],
    },
    {
      id: 3,
      navName: "About",
      navLink: "/about"
    },
    { id: 4, navName: "Locations", navLink: "/locations" },
  ];

  return (
    <nav className="bg-[#F9F9F9]  lg:h-18.25 lg:px-10   sticky top-0 z-50 hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/romeo-logo.png"
              alt="Lescy Romeo Fast Food Logo"
              width={144}
              height={51}
            />
          </div>

          {/* Nav items */}
          <ul className="flex space-x-10 cursor-pointer">
            {navItems.map((item) => (
              <li key={item.id} className="relative cursor-pointer">
                {item.navLink ? (
                  <a
                    href={item.navLink}
                    className=" cursor-pointer hover:text-[#E31E24]   transition"
                  >
                    {item.navName}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.id)}
                    className="flex items-center  hover:text-[#E31E24] font-medium transition focus:outline-none cursor-pointer"
                  >
                    {item.navName} 
                    <svg
                      className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                        openMenuId === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Dropdown */}
                {item.children && openMenuId === item.id && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow py-2 z-50  hover:text-white">
                    {item.children.map((child) => (
                      <li key={child.id} className="cursor-pointer text-center  hover:text-white"> 
                        <a
                          href={child.link}
                          className="block px-4 py-2  hover:bg-[#E31E24] hover:text-white transition"
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* nav icon for menu bar  */}
          <ul className="flex gap-3 lg:gap-10">
            <li>
              <a href="/">
              <FaUser className="text-[#121212] text-xl hover:text-[#E31E24]" />
              </a>
            </li>
             <li>
              <a href="/">
              <FaCartShopping className="text-[#121212] text-xl hover:text-[#E31E24]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
