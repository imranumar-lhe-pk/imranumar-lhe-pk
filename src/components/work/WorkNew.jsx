import React, { useState, useEffect } from "react";
import { RxExternalLink } from "react-icons/rx";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import falconLogin from "../../assets/falcon-login.png";
import shotWizvend from "../../assets/shot-wizvend.png";
import shotBasata from "../../assets/shot-basata.png";
import shotAetherbot from "../../assets/shot-aetherbot.png";
import FalconCaseStudy from "./FalconCaseStudy";

const projects = [
  {
    id: "wizvend",
    title: "WizVend — Multilingual Website and Custom CMS",
    monogram: "W",
    img: shotWizvend,
    subtitle: "Amazon Growth Agency Platform",
    accent: "from-amber-500 to-orange-600",
    soft: "from-amber-50 to-orange-50",
    role: "Full-Stack Developer",
    type: "Live Production Website",
    link: "https://wizvend.com/en",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n", "SEO", "REST APIs"],
    desc: `Designed and developed a multilingual marketing website and custom CMS
    for an Amazon growth agency. The platform supports English and German
    content, SEO-friendly routing, responsive pages and admin-controlled blogs,
    resources, FAQs, hero content and lead management.`,
    overview: `This project includes both the public marketing website and a
    custom admin dashboard/CMS. The CMS lets non-technical staff manage hero
    content, blogs, resources, service FAQs, gated downloads and leads, with
    SEO-friendly internationalized (English/German) routing and a responsive UI.`,
    contributions: [
      "Developed the multilingual public marketing website (English & German)",
      "Built a custom admin dashboard / CMS for hero content, blogs, resources and FAQs",
      "Implemented SEO-friendly internationalized (i18n) routing",
      "Created custom form APIs and lead-management flows",
      "Built reusable, responsive components across the site",
    ],
    tech: "Next.js, TypeScript, Tailwind CSS, i18n, SEO, REST APIs",
    impact: [
      "Enabled non-technical staff to manage site content through the CMS",
      "SEO-friendly, country-specific multilingual content",
      "Responsive, production-ready marketing experience",
    ],
  },
  {
    id: "basata",
    title: "Basata — AI Healthcare Operations Platform",
    monogram: "B",
    img: shotBasata,
    subtitle: "AI-Powered Healthcare Operations Platform",
    accent: "from-teal-500 to-emerald-600",
    soft: "from-teal-50 to-emerald-50",
    role: "Frontend Developer with minor Java contributions",
    type: "Live Production SaaS",
    link: "https://www.basata.ai/",
    tags: ["React.js", "Tailwind CSS", "REST APIs", "Java — Basic"],
    desc: `An AI-powered healthcare operations platform that automates referrals,
    faxes, call workflows and EHR-integrated administrative processes. My
    contribution was primarily frontend development, with limited Java backend
    and system configuration support.`,
    overview: `An AI-powered platform that automates healthcare back-office work —
    referrals, faxes, call-centre workflows and EHR-integrated processes. I
    contributed primarily to frontend development, with a limited set of Java
    backend and system-configuration tasks.`,
    contributions: [
      "Contributed primarily to frontend UI development",
      "Integrated responsive UI modules with backend services",
      "Supported a limited set of Java backend configuration and integration tasks",
      "Bug fixing and feature support in a production codebase",
    ],
    tech: "React.js, Tailwind CSS, REST APIs, Java (Basic), System Configuration",
    impact: [
      "Contributed to a live, production healthcare platform",
      "Helped deliver responsive frontend workflows",
    ],
  },
  {
    id: "aetherbot",
    title: "AetherBot — AI Assistant Platform",
    monogram: "A",
    img: shotAetherbot,
    subtitle: "AI Assistant SaaS & Embeddable Widget",
    accent: "from-indigo-500 to-fuchsia-600",
    soft: "from-indigo-50 to-fuchsia-50",
    role: "Frontend Developer",
    type: "Live Production Website",
    link: "https://www.aetherbot.dev/",
    tags: ["React.js", "Tailwind CSS", "REST APIs", "Responsive UI"],
    desc: `An AI assistant SaaS platform offering multilingual, 24/7 customer
    support. I contributed to the responsive frontend interface and helped
    develop the embeddable AI assistant widget used on client websites.`,
    overview: `A SaaS AI assistant platform providing multilingual, around-the-clock
    customer support. I contributed to the frontend implementation and helped
    develop the embeddable widget used on client websites.`,
    contributions: [
      "Contributed to the responsive frontend interface",
      "Helped develop the embeddable AI assistant widget",
      "Implemented API-driven content and multilingual support UI",
      "Cross-browser fixes and UI polish",
    ],
    tech: "React.js, Tailwind CSS, REST APIs, Responsive Web Design",
    impact: [
      "Helped deliver a multilingual 24/7 support experience",
      "Contributed reusable frontend components and the embeddable widget",
    ],
  },
  {
    id: "falcon",
    title: "Falcon — Enterprise B2B Travel Platform",
    monogram: "F",
    subtitle: "Enterprise B2B Travel Management Platform",
    img: falconLogin,
    accent: "from-blue-600 to-purple-600",
    soft: "from-blue-50 to-purple-50",
    role: "Frontend Developer",
    type: "Restricted Production System",
    nda: true,
    tags: ["Next.js", "React.js", "TypeScript", "REST APIs", "RBAC", "Multi-tenant UI"],
    desc: `A multi-tier B2B travel management platform connecting DMCs, Master
    OTAs and Slave OTAs. I built frontend modules for inventory, bookings,
    wallets and role-based workflows using React.js, Next.js and REST APIs.`,
  },
];

/* ---- project cover: real homepage screenshot, gradient monogram fallback ---- */
const Cover = ({ project, big }) => (
  <div
    className={`relative w-full ${
      big ? "h-64 lg:h-full min-h-[280px]" : "h-48"
    } bg-gradient-to-br ${project.accent} overflow-hidden`}
  >
    {/* decorative blobs (show behind / as fallback) */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-12 -left-8 w-44 h-44 bg-black/10 rounded-full blur-2xl"></div>
    <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px] opacity-40"></div>

    {/* monogram fallback */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className={`font-black text-white/90 drop-shadow-lg ${
          big ? "text-8xl" : "text-6xl"
        }`}
      >
        {project.monogram}
      </span>
    </div>

    {/* real homepage screenshot (covers the gradient) */}
    {project.img && (
      <img
        src={project.img}
        alt={`${project.title} homepage`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    )}

    {/* badge */}
    <div className="absolute top-4 left-4">
      {project.nda ? (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 text-white text-xs font-semibold backdrop-blur">
          <HiOutlineShieldCheck className="text-sm" /> NDA Protected
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-xs font-semibold backdrop-blur">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Live
        </span>
      )}
    </div>
  </div>
);

const GenericCaseStudy = ({ project }) => (
  <div>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-blue-600 hover:underline"
      >
        Visit live site <RxExternalLink />
      </a>
    )}

    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
      <p className="text-gray-600">{project.overview}</p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-3">My Role</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {project.contributions.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
      <p className="text-gray-600">{project.tech}</p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-3">Impact</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {project.impact.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </section>
  </div>
);

const Buttons = ({ project, onOpen }) => (
  <div className="flex flex-wrap items-center gap-3">
    <button
      onClick={() => onOpen(project)}
      className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm bg-gradient-to-r ${project.accent} shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all`}
    >
      Case Study
      <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-gray-700 text-sm border border-gray-200 hover:bg-gray-50 transition-all"
      >
        Visit Site <RxExternalLink />
      </a>
    )}
  </div>
);

const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((t) => (
      <span
        key={t}
        className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium"
      >
        {t}
      </span>
    ))}
  </div>
);

const Work = () => {
  const [active, setActive] = useState(null);
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <>
      <section
        id="works"
        className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Heading */}
          <div data-aos="fade-up" className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-bold tracking-widest text-blue-600 uppercase shadow-sm">
              Selected Work
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Real production platforms I built and contributed to — from
              ground-up builds to enterprise systems.
            </p>
          </div>

          {/* Featured (large) */}
          <div
            data-aos="fade-up"
            className="mb-10 rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 grid lg:grid-cols-2"
          >
            <Cover project={featured} big />
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${featured.accent} bg-clip-text text-transparent`}
                >
                  Highlighted Build
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                {featured.title}
              </h3>
              <p className="text-base font-semibold text-gray-500 mb-5">
                {featured.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {featured.desc}
              </p>
              <div className="mb-6">
                <Tags tags={featured.tags} />
              </div>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                  My Role
                </p>
                <p className="font-semibold text-gray-900">{featured.role}</p>
              </div>
              <Buttons project={featured} onOpen={setActive} />
            </div>
          </div>

          {/* Grid (rest) */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((project, i) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform duration-500">
                    <Cover project={project} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent mb-3`}
                  >
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="mb-4">
                    <Tags tags={project.tags} />
                  </div>

                  <div className="mb-5">
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-0.5">
                      My Role
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {project.role}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Buttons project={project} onOpen={setActive} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center px-4">
          <div className="bg-white max-w-5xl w-full max-h-[90vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden animate-fadeIn">
            <div className="sticky top-0 bg-white z-10 border-b p-4 flex items-center justify-between">
              <h3 className="font-bold">{active.title} – Case Study</h3>
              <button
                onClick={() => setActive(null)}
                className="text-gray-500 hover:text-red-600 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto p-8">
              {active.id === "falcon" ? (
                <FalconCaseStudy />
              ) : (
                <GenericCaseStudy project={active} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
