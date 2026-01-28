import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiMail } from "react-icons/fi";

const navItems = [
  { id: 0, name: "home", label: "Home" },
  { id: 1, name: "skills", label: "Skills" },
  { id: 2, name: "works", label: "Projects" },
  { id: 3, name: "resume", label: "Resume" },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    if (name) setActiveIndex(name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Update active section based on scroll position
      const sections = navItems.map((item) =>
        document.getElementById(item.name),
      );
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveIndex(navItems[index].name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-white/80 backdrop-blur-md shadow-md py-6"
      }`}
    >
      <div className="container m-auto px-4 lg:px-6 xl:px-8 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div
          data-aos="fade-down"
          className="cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-xl">IU</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-gray-900">Imran Umar</h1>
              <p className="text-xs text-gray-600">Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div data-aos="fade-down" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.name}`}
                  className={`relative font-bold text-sm uppercase tracking-wide transition-colors duration-300 group ${
                    item.name === activeIndex
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveIndex(item.name)}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      item.name === activeIndex
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.linkedin.com/in/imran-umar-lhe"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiMail className="group-hover:rotate-12 transition-transform" />
              Hire Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => toggleNav()}
          className="md:hidden w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 touch-manipulation active:scale-95"
          aria-label="Toggle menu"
        >
          <HiMenu size={24} />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 sm:p-6 h-full flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => toggleNav()}
              className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors duration-300 ml-auto mb-6 sm:mb-8 touch-manipulation"
              aria-label="Close menu"
            >
              <RxCross2 size={24} />
            </button>

            {/* Mobile Menu Items */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => toggleNav(item.name)}
                    href={`#${item.name}`}
                    className={`block px-4 sm:px-6 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 touch-manipulation ${
                      item.name === activeIndex
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Button */}
            <div className="mt-auto">
              <a
                href="https://www.linkedin.com/in/hassan-umar-lhe-pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiMail />
                  Hire Me
                </span>
              </a>

              {/* Mobile Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  © {new Date().getFullYear()} Hassan Umar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={() => toggleNav()}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
