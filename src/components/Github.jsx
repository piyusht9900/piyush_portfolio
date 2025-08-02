import React from "react";
import { Star, Users, FolderGit2 } from "lucide-react";

const Github = () => {
  const githubData = {
    username: "Piyush Thakur",
    handle: "@piyusht9900",
    description:
      "Founder & Designer • Web Developer • B.E  • DSA • JAVA ",
    followers: 17,
    repos: 57,
    projects: [
      {
        name: "shopify",
        description:
          "A modern online shopping platform with responsive design, secure cart system, and smooth user experience.",
        stars: 7,
        forks: 0,
        language: "CSS",
      },
      {
        name: "piyush_portfolio",
        description:
          "Personal portfolio website built with HTML, CSS, and JavaScript. Features modern design, responsive layout, and dynamic interactions.",
        stars: 7,
        forks: 0,
        language: "CSS",
      },
      {
        name: "online_voting_system",
        description:
          "Secure electronic voting system with real-time result tracking, voter login, and admin dashboard.",
        stars: 9,
        forks: 1,
        language: "Java",
      },
      {
        name: "IoT_based_smart_logistics",
        description:
          "Real-time logistics monitoring using GPS, RFID, and Firebase with smart vehicle tracking and status updates.",
        stars: 10,
        forks: 1,
        language: "Jupyter Notebook",
      },
    ],
  };

  return (
    <section
      id="github"
      className="scroll-mt-24 pt-10 py-16 px-4 text-left text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:from-gray-900 dark:to-gray-900"
      
    >
        <h2 className="text-4xl text-center font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Github Contributions
      </h2>

      <div className="min-h-screen text-inherit font-sans">
        <div className="max-w-5xl mx-auto">
          {/* Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {githubData.projects.map((project, idx) => (
              <div
  key={idx}
  className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-[0_10px_25px_rgba(96,165,250,0.25),_0_6px_10px_rgba(168,85,247,0.2)] hover:scale-[1.02] transition-all duration-0 ease-in-out hover:dark:bg-[#1f2937]"
>

                <h3 className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{project.language}</span>
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FolderGit2 className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Footer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-[0_10px_25px_rgba(96,165,250,0.25),_0_6px_10px_rgba(168,85,247,0.2)] hover:scale-[1.02] transition-all duration-0 ease-in-out hover:dark:bg-[#1f2937]"
>
            <div className="flex items-center gap-4">
              <img
                src="public/images/letter-p.png"
                alt="profile"
                className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-600"
              />
              <div>
                <h4 className="text-gray-900 dark:text-white text-lg font-semibold">
                  {githubData.username}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {githubData.handle}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  {githubData.description}
                </p>
                <div className="flex gap-6 mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {githubData.followers} Followers
                  </span>
                  <span className="flex items-center gap-1">
                    <FolderGit2 className="w-4 h-4" />
                    {githubData.repos} Repos
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                <a href="https://github.com/piyusht9900">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition duration-300">
                  View Profile
                </button></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
