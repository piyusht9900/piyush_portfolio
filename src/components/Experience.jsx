import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 text-center text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Experience
      </h2>

      <div className="relative max-w-3xl mx-auto pl-6 space-y-12">
        {/* Item 1 */}
        <div className="relative transform transition duration-300 hover:scale-105">
          <div
            className="bg-white dark:bg-gray-800 text-left p-6 rounded-xl"
            style={{
              boxShadow:
                '0 10px 25px rgba(96, 165, 250, 0.25), 0 6px 10px rgba(168, 85, 247, 0.2)',
            }}
          >
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
              Full Stack Java Development (CNC Web World)
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">
              June 2024 - May 2025
            </span>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Completed Full Stack in JAVA Development course at CNC Web World, gaining skills in front-end, back-end, databases, and web app development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring Boot', 'MySQL'].map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative transform transition duration-300 hover:scale-105">
          <div
            className="bg-white dark:bg-gray-800 text-left p-6 rounded-xl"
            style={{
              boxShadow:
                '0 10px 25px rgba(96, 165, 250, 0.25), 0 6px 10px rgba(168, 85, 247, 0.2)',
            }}
          >
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
              Management Services Intern (JNPA)
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">
              Dec 2023 - Jan 2024
            </span>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Intern in Management Services at JNPA, assisting with operations, project management, data analysis, process optimization, and resource management.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Project Mgmt', 'Data Analysis', 'Operations'].map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
