import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import { FaMobileAlt } from "react-icons/fa";
import { LuDatabase } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { FiServer } from "react-icons/fi";
import muiIcon from "../../assets/icon.svg";
import antDesignIcon from "../../assets/ant-design.svg";

import { FaRegFileCode } from "react-icons/fa6";
/* Reusable Tech Icon */
const TechIcon = ({ src, gradient }) => (
  <div
    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} p-[2px] shadow-md`}
  >
    <div className="w-full h-full bg-white rounded-md flex items-center justify-center">
      <img
        src={src}
        alt=""
        className="w-5 h-5 object-contain"
        loading="lazy"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
      />
    </div>
  </div>
);

const Skills = ({ darkMode }) => {
  const techStack = [
    {
      name: "React Js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Next Js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "from-cyan-400 to-teal-500",
    },
    {
      name: "MUI",
      icon: muiIcon, // local SVG
      color: "from-cyan-400 to-teal-500",
    },
    {
      name: "Ant Design",
      icon: antDesignIcon, // local SVG
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container m-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 lg:mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Specialized in building scalable applications with modern
            technologies
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-12 sm:mb-16 lg:mb-20">
          {/* Core Skills with Progress Bars */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-lg"></span>
                Core Technologies
              </h3>
              <div className="space-y-6">
                <ProgressBar
                  logoNode={
                    <TechIcon
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      gradient="from-blue-400 to-cyan-500"
                    />
                  }
                  name="React.js"
                  value={80}
                />

                <ProgressBar
                  logoNode={
                    <TechIcon
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      gradient="from-gray-700 to-gray-900"
                    />
                  }
                  name="Next.js"
                  value={90}
                />

                <ProgressBar
                  logoNode={
                    <TechIcon
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      gradient="from-yellow-400 to-yellow-500"
                    />
                  }
                  name="JavaScript (ES6+)"
                  value={85}
                />

                <ProgressBar
                  logoNode={
                    <TechIcon
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      gradient="from-blue-500 to-blue-600"
                    />
                  }
                  name="TypeScript"
                  value={80}
                />

                <ProgressBar
                  logoNode={
                    <TechIcon
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                      gradient="from-cyan-400 to-teal-500"
                    />
                  }
                  name="Tailwind CSS"
                  value={95}
                />

                <ProgressBar
                  logoNode={
                    <TechIcon
                      src={muiIcon}
                      gradient="from-cyan-400 to-teal-500"
                    />
                  }
                  name="MUI"
                  value={90}
                />
                <ProgressBar
                  logoNode={
                    <TechIcon
                      src={antDesignIcon}
                      gradient="from-blue-500 to-indigo-600"
                    />
                  }
                  name="Ant Design"
                  value={75}
                />
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-blue-100 hover:border-purple-200 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-6 sm:h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full shadow-lg"></span>
                What I Do Best
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-blue-200 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg sm:text-2xl">🖥️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Frontend Development
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Building responsive, production-ready interfaces using{" "}
                        {""}
                        <span className="font-semibold text-gray-900">
                          React
                        </span>
                        , & the{" "}
                        <span className="font-semibold text-gray-900">
                          Next.js
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-purple-200 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg sm:text-2xl">🎨</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        UI Implementation{" "}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Converting{" "}
                        <span className="font-semibold text-gray-900">
                          Figma/UI
                        </span>{" "}
                        designs into clean, reusable components{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-green-200 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg sm:text-2xl">🔌</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        API Integration{" "}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Integrating REST APIs and handling frontend data flows
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-orange-200 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg sm:text-2xl"> 🧪</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        UI Testing & Debugging
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Cross-browser testing, bug fixing, and UI performance
                        improvements{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div data-aos="fade-up" className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group relative"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${tech.color} rounded-xl sm:rounded-2xl p-1 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
                >
                  <div className="w-full h-full bg-white rounded-lg sm:rounded-xl flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  <span className="text-xs font-semibold text-gray-700 bg-white px-2 sm:px-3 py-1 rounded-full shadow-lg">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
