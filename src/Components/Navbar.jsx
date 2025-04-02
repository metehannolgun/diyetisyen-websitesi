import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menüsünü kontrol etmek için state

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full z-[1000] bg-black/50 backdrop-blur-md shadow-md"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container mx-auto py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-40 cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navlinks Section */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-black/90 md:bg-transparent md:static md:flex items-center gap-4 md:gap-6 md:justify-center transition-all duration-300`}
        >
          <li className="px-3 py-2 text-center text-white border border-transparent rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
            <Link to="/danisanlar" onClick={() => setIsMenuOpen(false)}>
              Danışanlarımızdan
            </Link>
          </li>
          <li className="px-3 py-2 text-center text-white border border-transparent rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
            <Link to="/hakkımda" onClick={() => setIsMenuOpen(false)}>
              Hakkımda
            </Link>
          </li>
          <li className="px-3 py-2 text-center text-white border border-transparent rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
            <Link to="/saglikli-tarifler" onClick={() => setIsMenuOpen(false)}>
              Sağlıklı Tarifler
            </Link>
          </li>
        </ul>

        {/* Button Section */}
        <button className="hidden md:block border border-white text-white px-3 py-1.5 rounded-lg hover:bg-red-400 hover:text-white transform duration-300">
          <Link to="/contact">İletişim</Link>
          
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;


