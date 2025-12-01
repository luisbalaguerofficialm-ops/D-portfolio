import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-4 md:py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl hover:text-cyan-400 md:text-4xl font-extrabold  text-blue-500 tracking-tight"
        >
          DANIEL BANKZ.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center  text-blue-500  gap-8 text-lg">
          <Link
            to="/Project"
            href="#"
            className="hover:text-cyan-300 underline transition"
          >
            Work
          </Link>
          <Link to="/AboutMe" className="hover:text-cyan-300 transition">
            About Me
          </Link>
          <Link
            to="/ContactMe"
            className="hover:text-cyan-300 underline transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4 flex flex-col items-start transition-all">
          <a
            href="#"
            className="w-full text-left py-2 hover:text-cyan-300 transition"
            onClick={toggleMenu}
          >
            Work
          </a>
          <Link
            to="/AboutMe"
            className="w-full text-left py-2 hover:text-cyan-300 transition"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            to="/ContactMe"
            className="w-full text-left py-2 hover:text-cyan-300 transition"
            onClick={toggleMenu}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
