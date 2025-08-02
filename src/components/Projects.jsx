import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiMysql,
  SiFirebase,
  SiMqtt,
  SiArduino,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Shopify | Responsive Online Shopping Website",
      stackIcons: [
        { Icon: SiHtml5, color: "#e44d26" },
        { Icon: SiCss3, color: "#264de4" },
        { Icon: SiJavascript, color: "#f0db4f" },
        { Icon: SiReact, color: "#61dafb" },
        { Icon: SiBootstrap, color: "#7952b3" },
      ],
      bg: "/images/shopify.jpeg",
      github: "https://github.com/piyusht9900/shopify.git",
      description:
        "A modern online shopping platform with responsive design, secure cart system, and smooth user experience.",
    },
    {
      id: 2,
      name: "Online Voting System | Secure & Real-Time Results",
      stackIcons: [
        { Icon: FaJava, color: "#f89820" },
        { Icon: SiMysql, color: "#00758f" },
        { Icon: SiBootstrap, color: "#7952b3" },
      ],
      bg: "/images/online-electronic-voting_74855-4448.avif",
      github: "https://github.com/piyusht9900/online_voting_system.git",
      description:
        "Secure electronic voting system with real-time result tracking, voter login, and admin dashboard.",
    },
    {
      id: 3,
      name: "IoT-Based Smart Logistics & Transport Management System",
      stackIcons: [
        { Icon: SiArduino, color: "#00979d" },
        { Icon: SiNodedotjs, color: "#3c873a" },
        { Icon: SiFirebase, color: "#ffcb2b" },
        { Icon: SiMqtt, color: "#660066" },
      ],
      bg: "/images/IoT.jpg",
      github: "https://github.com/piyusht9900/Iot_based_smart_logistics_system.git",
      description:
        "Real-time logistics monitoring using GPS, RFID, and Firebase with smart vehicle tracking and status updates.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mt-4 mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 transform transition duration-300 hover:scale-105"
            style={{
              boxShadow:
                "0 10px 25px rgba(96, 165, 250, 0.25), 0 6px 10px rgba(168, 85, 247, 0.2)",
            }}
          >
            <img
              src={project.bg}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                {project.name}
              </h3>
              <div className="flex space-x-4 mb-3 text-3xl">
                {project.stackIcons.map(({ Icon, color }, index) => (
                  <Icon key={index} style={{ color }} />
                ))}
              </div>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
