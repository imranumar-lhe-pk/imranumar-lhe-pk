import React from "react";
import muiIcon from "../../assets/icon.svg";
import antDesignIcon from "../../assets/ant-design.svg";

const Skills = ({ darkMode }) => {
  // Categorized skills (priority order, no arbitrary percentages)
  const skillGroups = [
    {
      title: "Core Frontend",
      color: "from-blue-600 to-cyan-500",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      title: "UI & Styling",
      color: "from-purple-600 to-pink-500",
      items: ["Tailwind CSS", "Material UI", "Ant Design", "Responsive Design"],
    },
    {
      title: "Integration & Workflow",
      color: "from-emerald-600 to-teal-500",
      items: ["REST APIs", "Git", "GitHub", "Postman", "Chrome DevTools"],
    },
    {
      title: "Collaboration Tools",
      color: "from-orange-500 to-amber-500",
      items: ["ClickUp", "Linear", "Slack", "Figma"],
    },
    {
      title: "Basic Exposure",
      color: "from-gray-500 to-gray-700",
      items: ["Java"],
    },
  ];

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
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-500",
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
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "from-red-500 to-orange-500",
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
            Specialized in building scalable, production-ready interfaces with
            modern frontend technologies
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-12 sm:mb-16 lg:mb-20">
          {/* Categorized Skills */}
          <div data-aos="fade-right" className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 sm:h-7 bg-slate-900 rounded-full"></span>
                Technical Skills
              </h3>

              <div className="space-y-7">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-4"
                  >
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 sm:pt-1.5">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 rounded-md bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
                        Building responsive, scalable and production-ready
                        interfaces using{" "}
                        <span className="font-semibold text-gray-900">
                          React.js
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-gray-900">
                          Next.js
                        </span>
                        .
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
                        UI Implementation
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Turning{" "}
                        <span className="font-semibold text-gray-900">
                          Figma
                        </span>{" "}
                        and UI designs into clean, reusable and maintainable
                        components.
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
                        API Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Integrating REST APIs and managing frontend data flows,
                        loading states and error handling.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-orange-200 hover:-translate-y-1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg sm:text-2xl">🧪</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Testing and Debugging
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Improving cross-browser compatibility, fixing UI issues
                        and optimizing frontend performance.
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
