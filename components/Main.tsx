"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "./Header";
import About from "./About";

const Portfolio = dynamic(() => import('./Portfolio'), {
  loading: () => <div className="h-screen text-slate-400">Loading portfolio...</div>
})

const Contact = dynamic(() => import('./Contact'), {
  loading: () => <div className="h-screen text-slate-400">Loading Contact...</div>
})

const Main = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  return (
    <main className="w-full lg:w-[76%] h-auto lg:h-screen flex flex-col bg-[#f8fafc] overflow-y-auto">
      {/* Top Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Area */}
      <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {/* ABOUT SECTION */}
        {activeTab === "about" && <About />}

        {/* PORTFOLIO SECTION */}
        {activeTab === "portfolio" && <Portfolio />}

        {/* CONTACT SECTION */}
        {activeTab === "contact" && <Contact />}
      </div>
    </main>
  );
};

export default Main;
