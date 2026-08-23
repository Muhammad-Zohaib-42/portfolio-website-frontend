import Image from "next/image";
import StatusBadge from "./StatusBadge";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[24%] bg-white border-r border-[#e2e8f0] flex flex-col p-6 lg:py-8 lg:px-6 overflow-y-auto h-auto lg:h-screen">
      <div className="relative w-[90px] h-[90px] shrink-0 rounded-full overflow-hidden mb-4 border-2 border-[#e2e8f0] bg-linear-to-tr from-purple-400 to-blue-400">
        <Image
          src="/zohaib.webp"
          alt="Muhammad Zohaib"
          fill
          sizes="90px"
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-xl font-bold mb-1">Muhammad Zohaib</h1>
      <div className="text-[0.85rem] text-[#64748b] font-medium mb-4">
        Full-Stack MERN Developer
      </div>

      <StatusBadge />

      <ul className="w-full mb-6 border-t border-b border-[#e2e8f0] py-4 space-y-3">
        <a target="_blank" href="mailto:muhammadzohaibranjha42@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20connect!" className="flex items-center gap-2.5 text-[0.8rem] text-[#64748b]" title="muhammadzohaibranjha42@gmail.com">
          <i className="fa-solid fa-envelope text-[#2563eb] w-4 text-center truncate"></i>
          <span className="truncate hover:text-[#2563eb] transition-all">muhammadzohaibranjha42@gmail.com</span>
        </a>
        <a href="tel:+923705308459" className="flex items-center gap-2.5 text-[0.8rem] text-[#64748b]">
          <i className="fa-solid fa-phone text-[#2563eb] w-4 text-center"></i>
          <span className="hover:text-[#2563eb] transition-all">+92 370 5308459</span>
        </a>
        <li className="flex items-center gap-2.5 text-[0.8rem] text-[#64748b]">
          <i className="fa-solid fa-cake-candles text-[#2563eb] w-4 text-center"></i>
          July 4, 2003
        </li>
        <li className="flex items-center gap-2.5 text-[0.8rem] text-[#64748b]">
          <i className="fa-solid fa-location-dot text-[#2563eb] w-4 text-center"></i>
          Lahore, Pakistan
        </li>
      </ul>

      <div className="flex gap-2.5 mb-6">
        <a
          href="https://github.com/Muhammad-Zohaib-42"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className="w-9 h-9 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#0f172a] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-zohaib-180471334/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="w-9 h-9 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#0f172a] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>

      <a
        href="/Muhammad-Zohaib-Resume.pdf"
        download
        className="w-full bg-[#2563eb] text-white border-none p-2.5 rounded-lg font-semibold cursor-pointer flex items-center justify-center gap-2 no-underline hover:bg-[#1d4ed8] transition-colors mt-auto"
      >
        <i className="fa-solid fa-download"></i> Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
