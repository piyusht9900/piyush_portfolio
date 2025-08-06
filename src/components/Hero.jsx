import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Hero({ contactRef }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero">
      <div
        className={`min-h-screen transition-colors duration-1000 relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-b from-black to-gray-900 text-white"
            : "bg-gradient-to-b from-blue-100 to-blue-100 text-black-900"
        }`}
      >
        {/* Background Effects for Dark Mode */}
        {isDark && (
          <>
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="twinkle"
                style={{
                  width: "2px",
                  height: "2px",
                  backgroundColor: "white",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  position: "absolute",
                }}
              />
            ))}
            <div className="shooting-star shooting-star-1" />
            <div className="shooting-star shooting-star-2" />
          </>
        )}

        {/* Hero Content */}
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="pt-20 text-3xl sm:text-4xl md:text-5xl font-bold typing-animation mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Hi, I'm Piyush Thakur
          </h1>

          <RotatingTitles />

          {/* Contact Info */}
          <div className="mb-6 text-gray-700 dark:text-gray-300 text-center space-y-2 text-sm sm:text-base">
            <p className="flex justify-center items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              +91 9321581067
            </p>
            <p className="flex justify-center items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              psthakur4520@gmail.com
            </p>
            <p className="flex justify-center items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              Uran, Navi Mumbai
            </p>
            <br />

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-3 flex-wrap">
              <a
                href="/public/resume/Piyush_Thakur_Resume.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              >
                <Download size={16} /> View Resume
              </a>

              <button
                onClick={() =>
                  contactRef?.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-900 hover:text-white px-4 py-2 rounded transition"
              >
                <FaEnvelope /> Contact Me
              </button>
            </div>

            <br />

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/piyusht9900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-thakur-101650271"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/piyushthakur9833"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-400 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919321581067"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-green-100 dark:hover:bg-gray-700"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:psthakur4520@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 dark:text-red-400 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-red-100 dark:hover:bg-gray-700"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Rotating Titles Component
function RotatingTitles() {
  const titles = [
    "Full-Stack Developer",
    "React Developer",
    "UI Designer",
    "Tech Explorer",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setVisible(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-xl sm:text-2xl md:text-3xl mb-6 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      } text-black dark:text-white`}
    >
      {titles[index]}
    </p>
  );
}
