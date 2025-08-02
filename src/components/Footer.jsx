import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { SiReact, SiVite } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-10 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:from-gray-900 dark:to-gray-900"
    >
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://github.com/piyusht9900" target="_blank" rel="noreferrer">
          <div className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FaGithub size={18} className="text-gray-800 dark:text-white" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/piyush-thakur-101650271" target="_blank" rel="noreferrer">
          <div className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-700 transition">
            <FaLinkedin size={18} className="text-blue-700 dark:text-white" />
          </div>
        </a>
        <a href="https://instagram.com/piyushthakur9833" target="_blank" rel="noreferrer">
          <div className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-600 transition">
            <FaInstagram size={18} className="text-pink-600 dark:text-white" />
          </div>
        </a>
        <a href="https://wa.me/919321581067" target="_blank" rel="noreferrer">
          <div className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-600 transition">
            <FaWhatsapp size={18} className="text-green-600 dark:text-white" />
          </div>
        </a>
        <a href="mailto:psthakur4520@gmail.com">
          <div className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-600 transition">
            <FaEnvelope size={18} className="text-red-600 dark:text-white" />
          </div>
        </a>
      </div>

      {/* Footer Text */}
      <p className="mb-1 text-gray-800 dark:text-gray-300">
        &copy; 2025 Piyush Thakur. All Rights Reserved.
      </p>

      {/* Built with text and animated icons */}
      <p className="flex justify-center items-center gap-2 text-l text-gray-700 dark:text-gray-400">
        Built with{" "}
        <span className="animate-spin-slow transform rotate-12">
          <SiReact className="text-blue-500" size={30} />
        </span>
        using{" "}
        <span className="animate-bounce">
          <SiVite className="text-yellow-500" size={25} />
        </span>
      </p>

      {/* Custom animation styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </footer>
  );
}
