import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/imran-umar-resume.pdf";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 pt-28 pb-12 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-48 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-sm rounded-full shadow-lg border-2 border-green-200 w-fit hover:shadow-xl transition-all duration-300 mx-auto lg:mx-0"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-800">
                Available for Hire
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Imran Umar
                </span>
              </h1>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <TypeAnimation
                  data-aos="fade-up"
                  data-aos-delay="200"
                  sequence={["Front-End Developer", 2000]}
                  speed={50}
                  wrapper="h2"
                  repeat={Infinity}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
                />
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Crafting scalable, real-world interfaces with{" "}
                <span className="font-semibold text-gray-900">React</span>, &
                the <span className="font-semibold text-gray-900">Next.js</span>
              </p>
            </div>

            {/* Stats Cards */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6"
            >
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  1+
                </h3>
                <p className="text-xs text-gray-600 font-semibold">Years Exp</p>
                <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"></div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  Frontend
                </h3>
                <p className="text-xs text-gray-600 font-semibold">Modules</p>
                <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300"></div>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 col-span-2 sm:col-span-1">
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-1">
                  UI & API
                </h3>
                <p className="text-xs text-gray-600 font-semibold">
                  Integration
                </p>
                <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-pink-600 to-orange-600 rounded-full transition-all duration-300"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/imran-umar-lhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiMail className="group-hover:rotate-12 transition-transform" />
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-300 hover:border-purple-600 overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiDownload className="group-hover:animate-bounce" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
            >
              <span className="text-gray-600 font-semibold text-sm sm:text-base">
                Connect:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/imranumar-lhe-pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 border-2 border-gray-200 hover:border-gray-900"
                >
                  <AiFillGithub className="text-2xl text-gray-900 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/imran-umar-lhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 border-2 border-gray-200 hover:border-blue-600"
                >
                  <FaLinkedinIn className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="flex-1 w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>

              {/* Main Image Container */}
              <div className="relative z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="bg-white rounded-xl sm:rounded-[22px] p-2 sm:p-3">
                  <img
                    src="https://i.postimg.cc/59DPp1fC/new.png"
                    alt="Imran Umar - Senior Software Engineer"
                    className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge - Fixed z-index with premium styling */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-20 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 border-2 border-gray-100 animate-float hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg sm:text-2xl">💼</span>
                    <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-3 sm:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Status
                    </p>
                    <p className="text-xs sm:text-sm font-black text-gray-900">
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
