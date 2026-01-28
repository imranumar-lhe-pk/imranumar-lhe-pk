import React from "react";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container m-auto px-4 lg:px-6 xl:px-8 py-12 sm:py-16 lg:py-20 relative z-10 max-w-7xl">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {/* About Section */}
          <div
            data-aos="fade-up"
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-black mb-4">Imran Umar</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Frontend Developer focused on building modern, scalable user
              interfaces using React.js and Next.js. Experienced in Tailwind
              CSS, Material UI, and Ant Design, with hands-on work on real-world
              B2B production systems.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <a
                href="https://github.com/imranumar-lhe-pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/imran-umar-lhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              >
                <FaLinkedinIn className="text-lg sm:text-xl" />
              </a>
              <a
                href="mailto:imranumar.lhe@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
              >
                <MdEmail className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-black mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-black mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:imranumar.lhe@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300">
                  <MdEmail className="text-sm sm:text-lg" />
                </div>
                <span className="text-xs sm:text-sm">
                  imranumar.lhe@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/imran-umar-lhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300">
                  <FaLinkedinIn className="text-sm sm:text-lg" />
                </div>
                <span className="text-xs sm:text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Imran Umar. All rights reserved. Made
            with <FaHeart className="inline text-red-500 animate-pulse" /> and
            React
          </p>

          <button
            onClick={scrollToTop}
            className="group w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 touch-manipulation"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="text-lg sm:text-xl group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
