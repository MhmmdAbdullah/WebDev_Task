import React, { useState } from "react";
import Logo from "../../assets/ikon.png"; // pastikan path sesuai

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-10 w-10 object-cover rounded-full" />
      </div>

      {/* Hamburger Button (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            {isOpen ? (
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
      </div>

      {/* Menu Items */}
      <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
        <a href="#about" className="block py-2 md:py-0 hover:underline">About</a>
        <a href="#work" className="block py-2 md:py-0 hover:underline">Work</a>
        <a href="#contact" className="block py-2 md:py-0 hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
