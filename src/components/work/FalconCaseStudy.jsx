import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import falconLogin from "../../assets/falcon-login.png";

const FalconCaseStudy = () => {
  return (
    <div>
      {/* NDA */}
      <div className="flex items-center justify-center gap-3 mb-10 text-sm bg-gray-100 rounded-xl px-4 py-3 text-gray-700">
        <HiOutlineShieldCheck className="text-lg text-purple-600" />
        Due to NDA and confidentiality, only limited screens are shown.
      </div>

      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
        <img
          src={falconLogin}
          alt="Falcon Login"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
        <p className="text-gray-600">
          Falcon is a multi-tier enterprise travel platform connecting DMCs,
          Master OTAs, and Slave OTAs into a unified ecosystem. It centralizes
          inventory, bookings, wallets, accounting, and reporting.
        </p>
      </section>

      {/* Role */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">My Role</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Built responsive dashboards in React</li>
          <li>Role-based UI & authentication flows</li>
          <li>Admin & OTA management screens</li>
          <li>REST API integrations</li>
          <li>Performance optimizations</li>
          <li>Production collaboration</li>
        </ul>
      </section>

      {/* Tech */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
        <p className="text-gray-600">
          <strong>Frontend:</strong> React.js, REST APIs
          <br />
          <strong>Backend:</strong> Node.js Microservices
          <br />
          <strong>System:</strong> RBAC, Multi-tenant architecture
        </p>
      </section>

      {/* Impact */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Impact</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Centralized operations</li>
          <li>Reduced manual workflows</li>
          <li>Scalable enterprise system</li>
        </ul>
      </section>
    </div>
  );
};

export default FalconCaseStudy;
