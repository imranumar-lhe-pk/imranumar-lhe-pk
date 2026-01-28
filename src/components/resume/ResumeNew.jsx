import React from "react";
import { FaBriefcase, FaGraduationCap, FaAward, FaCode } from "react-icons/fa";

const Resume = () => {
  const achievements = [
    { icon: "🧑‍💻", title: "1+ Year", desc: "Frontend experience" },
    { icon: "⚛️", title: "React & Next", desc: "Production apps" },
    { icon: "🏢", title: "B2B Platform", desc: "Falcon System" },
    { icon: "🎨", title: "Modern UI", desc: "Tailwind, MUI, AntD" },
  ];

  return (
    <div id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            My professional journey and academic background
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-4xl mb-2">{a.icon}</div>
              <h3 className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {a.title}
              </h3>
              <p className="text-sm text-gray-600">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Experience + Education */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* EXPERIENCE */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <h3 className="text-3xl font-black">Experience</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold">Frontend Developer</h4>
                  <p className="text-blue-600 font-semibold">Droider, Lahore</p>
                  <p className="text-sm text-gray-500">Sep 2024 – Present</p>
                </div>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaCode className="text-blue-600 text-2xl" />
                </div>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Built responsive UI using React & Next.js</li>
                <li>• Styled with Tailwind, MUI & Ant Design</li>
                <li>• Integrated REST APIs</li>
                <li>• Fixed cross-browser UI bugs</li>
                <li>• Production modules for B2B travel system</li>
              </ul>

              <div className="flex-grow"></div>

              <div className=" flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind",
                  "Material UI",
                  "Ant Design",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-3xl font-black">Education</h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border border-purple-100 h-full flex flex-col">
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold">BS Computer Science</h4>
                  <p className="text-purple-600 font-semibold">
                    Lahore Leads University
                  </p>
                  <p className="text-sm text-gray-500">2021 – 2025</p>
                </div>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FaAward className="text-purple-600 text-2xl" />
                </div>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Software engineering principles</li>
                <li>• Web & mobile development</li>
                <li>• Algorithms & data structures</li>
                <li>• System design fundamentals</li>
              </ul>

              <div className="flex-grow"></div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Computer Science",
                  "Web Dev",
                  "Algorithms",
                  "System Design",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-black mb-4">
            Let’s Build Something Powerful
          </h3>
          <p className="mb-6 opacity-90">
            I create scalable, modern, high-performance frontend systems.
          </p>
          <a
            href="https://www.linkedin.com/in/imran-umar-lhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
