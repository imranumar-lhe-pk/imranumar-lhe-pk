// import React from "react";
// import { data } from "../../data/data";
// import { RxExternalLink } from "react-icons/rx";
// import { FiGithub } from "react-icons/fi";

// const Work = () => {
//   return (
//     <div id="works" className="py-16 sm:py-20 bg-white">
//       <div className="container m-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
//         {/* Heading */}
//         <div data-aos="fade-up" className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 lg:mb-6">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
//             Showcasing my best work in web and mobile application development
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
//           {data.map((project, index) => (
//             <div
//               key={project.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
//             >
//               {/* Image Container */}
//               <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                 <img
//                   src={project.img}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white text-sm sm:text-base"
//                   >
//                     <span>View Project</span>
//                     <RxExternalLink className="text-lg sm:text-xl" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-4 sm:p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-bold rounded-full">
//                     {project.title}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//                   {project.desc}
//                 </p>
//               </div>

//               {/* Decorative Element */}
//               <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div data-aos="fade-up" className="text-center mt-12 sm:mt-16">
//           <p className="text-sm sm:text-base text-gray-600 mb-6">
//             Want to see more of my work?
//           </p>
//           <a
//             href="https://github.com/hassanumar-lhe-pk"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
//           >
//             <FiGithub className="text-xl sm:text-2xl" />
//             <span>View GitHub Profile</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

import React, { useState, useEffect } from "react";
import { RxExternalLink } from "react-icons/rx";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import falconLogin from "../../assets/falcon-login.png";
import FalconCaseStudy from "./FalconCaseStudy";

const Work = () => {
  const [openFalcon, setOpenFalcon] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openFalcon ? "hidden" : "auto";
  }, [openFalcon]);

  const project = {
    id: "falcon",
    title: "Falcon – DMC Connect Platform",
    subtitle: "Enterprise B2B Travel Management System",
    img: falconLogin,
    role: "Frontend Developer (React.js)",
    type: "Live Production System (Restricted Access)",
    desc: `Falcon is a multi-tier enterprise travel platform connecting DMCs, 
    Master OTAs, and Slave OTAs into a unified ecosystem. The system manages 
    real-time inventory, travel packages, bookings, wallet, accounting, and 
    reporting across multiple user roles in a large-scale B2B environment.`,
  };

  return (
    <>
      <section id="works" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A real-world enterprise platform I actively contributed to in a
              production environment.
            </p>
          </div>

          {/* Project Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-full group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/70 text-white rounded-full text-sm font-semibold backdrop-blur">
                  <HiOutlineShieldCheck className="text-lg" />
                  NDA Protected
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  {project.subtitle}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-sm text-gray-500 mb-1">My Role</p>
                    <p className="font-bold text-gray-900">{project.role}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-sm text-gray-500 mb-1">Project Type</p>
                    <p className="font-bold text-gray-900">{project.type}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setOpenFalcon(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    View Case Study <RxExternalLink />
                  </button>

                  <span className="text-sm text-gray-500">
                    Screens limited due to client confidentiality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openFalcon && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center px-4">
          <div className="bg-white max-w-5xl w-full max-h-[90vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 border-b p-4 flex items-center justify-between">
              <h3 className="font-bold">Falcon – Case Study</h3>
              <button
                onClick={() => setOpenFalcon(false)}
                className="text-gray-500 hover:text-red-600 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Scroll Area */}
            <div className="overflow-y-auto p-8">
              <FalconCaseStudy />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
