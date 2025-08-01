import React from "react";

const skills = [
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS3", logo: "/logos/css3.svg" },
  { name: "JavaScript", logo: "/logos/javaScript.svg" },
  { name: "React.js", logo: "/logos/react.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  { name: "jQuery", logo: "/logos/jQuery.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Servlets", logo: "/logos/Servelet.png" },
  { name: "JSP", logo: "/logos/Jsp.png" },
  { name: "Spring", logo: "/logos/Spring.png" },
  { name: "MySQL", logo: "/logos/Mysql.png" },
  { name: "Postman", logo: "/logos/Postman.png" },
];

export default function Skills() {
  return (
    <div
      id="skills"
     className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900"
    >
      <h3 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight">
        Skills
      </h3>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center mx-6 w-24"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-1"
              />
              <span className="text-xs text-center dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
