import React from "react";
import { FaUser, FaCode, FaBullseye, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section

  
    id="about"
    className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900">


    
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        About Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg mb-8">
        Hey there! 👋 I'm{" "}
        <span className="text-blue-500 font-semibold">Piyush</span>, a Computer
        Science Engineering graduate passionate about building full-stack web
        applications that solve real-world problems. I’ve completed a Full-Stack
        Java Development course with expertise in{" "}
        <span className="text-purple-400">Java, Spring Boot, React.js, MySQL</span>{" "}
        and more.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 mt-4">
        🚀 I like to build projects and solve problems
      </button>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {/* Card 1: Who I Am */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 w-80 shadow-[0_0_15px_#60a5fa] hover:scale-105 transition-transform">
          <div className="flex items-center text-blue-400 text-2xl mb-4 gap-2">
            <FaUser />
            <h3 className="text-2xl font-semibold text-blue-400">Who I Am</h3>
          </div>
          <ul className="text-sm text-gray-700 dark:text-gray-300 text-left list-disc pl-5">
            <li>Passionate full-stack Java developer</li>
            <li>Problem solver with scalable solutions</li>
            <li>Curious & always learning</li>
          </ul>
        </div>

        {/* Card 2: What I Do */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 w-80 shadow-[0_0_15px_#a78bfa] hover:scale-105 transition-transform">
          <div className="flex items-center text-purple-400 text-2xl mb-4 gap-2">
            <FaCode />
            <h3 className="text-2xl font-semibold text-purple-400">What I Do</h3>
          </div>
          <ul className="text-sm text-gray-700 dark:text-gray-300 text-left list-disc pl-5">
            <li>Build responsive full-stack apps</li>
            <li>Write efficient backend logic</li>
            <li>Collaborate on GitHub projects</li>
          </ul>
        </div>

        {/* Card 3: My Goals */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 w-80 shadow-[0_0_15px_#4ade80] hover:scale-105 transition-transform">
          <div className="flex items-center text-green-400 text-2xl mb-4 gap-2">
            <FaBullseye />
            <h3 className="text-2xl font-semibold text-green-400">My Goals</h3>
          </div>
          <ul className="text-sm text-gray-700 dark:text-gray-300 text-left list-disc pl-5">
            <li>Create impactful software</li>
            <li>Stay updated with tech trends</li>
            <li>Grow in a full-stack role</li>
          </ul>
        </div>

        {/* Card 4: My Philosophy */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 w-80 shadow-[0_0_15px_#fbbf24] hover:scale-105 transition-transform">
          <div className="flex items-center text-orange-400 text-2xl mb-4 gap-2">
            <FaLightbulb />
            <h3 className="text-2xl font-semibold text-orange-400">My Philosophy</h3>
          </div>
          <ul className="text-sm text-gray-700 dark:text-gray-300 text-left list-disc pl-5">
            <li>Technology should simplify lives</li>
            <li>Clean code is kind code</li>
            <li>Teamwork makes dreams work</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
