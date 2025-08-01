import React, { useState, useEffect } from 'react';
import { FaP } from 'react-icons/fa6';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certification', label: 'Certification' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
    { id: 'github', label: 'GitHub' },
  ];

  const [index, setIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2); // toggles between text and icon
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            {/* Desktop view: animated My Portfolio */}
            <span className="hidden md:block text-2xl font-bold text-blue-600 dark:text-white animate-fade">
              {index % 2 === 0 ? 'My Portfolio' : <FaP className="inline text-white bg-blue-600 p-1 text-3xl rounded" />}
            </span>

            {/* Mobile view: only P icon */}
            <span className="md:hidden">
              <FaP className="text-white bg-blue-600 p-1 text-3xl rounded" />
            </span>
          </div>

          {/* Right Side */}
          <ul className="hidden md:flex space-x-6 text-sm sm:text-base items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative group cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            <li>
              <DarkModeToggle />
            </li>
          </ul>

          {/* Mobile: dark mode toggle + menu toggle beside each other */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl text-blue-600 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
