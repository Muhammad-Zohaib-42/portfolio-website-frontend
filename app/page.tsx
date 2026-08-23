"use client";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen overflow-hidden bg-[#f8fafc] text-[#0f172a] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* FontAwesome CDN & Google Fonts stylesheet inclusion for Next.js */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* --- LEFT SIDEBAR --- */}
      <Sidebar />

      {/* --- RIGHT MAIN CONTENT --- */}
      <Main />
    </div>
  );
}
