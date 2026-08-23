import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="px-6 lg:px-10 py-5 bg-white border-b border-[#e2e8f0] flex justify-end items-center">
      <nav className="flex gap-8">
        <button
          onClick={() => setActiveTab("about")}
          className={`bg-none border-none text-[0.9rem] font-semibold cursor-pointer transition-colors relative pb-1 ${
            activeTab === "about"
              ? "text-[#2563eb] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2563eb] after:rounded"
              : "text-[#64748b] hover:text-[#2563eb]"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("portfolio")}
          className={`bg-none border-none text-[0.9rem] font-semibold cursor-pointer transition-colors relative pb-1 ${
            activeTab === "portfolio"
              ? "text-[#2563eb] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2563eb] after:rounded"
              : "text-[#64748b] hover:text-[#2563eb]"
          }`}
        >
          Portfolio
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`bg-none border-none text-[0.9rem] font-semibold cursor-pointer transition-colors relative pb-1 ${
            activeTab === "contact"
              ? "text-[#2563eb] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2563eb] after:rounded"
              : "text-[#64748b] hover:text-[#2563eb]"
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
