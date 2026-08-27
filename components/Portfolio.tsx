const Portfolio = () => {
  return (
    <section className="animate-[fadeIn_0.3s_ease-in-out]">
      <h2 className="text-[1.75rem] font-bold mb-4 flex items-center gap-3">
        Portfolio{" "}
        <span className="text-base font-normal text-[#64748b]">
          {`// Featured Work`}
        </span>
      </h2>
      <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-8">
        Here are some of the custom applications and web projects built with
        attention to performance, animations, and backend logic.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] flex flex-col">
          <div className="bg-[#f1f5f9] px-4 py-3 border-b border-[#e2e8f0] font-semibold text-[0.9rem] flex justify-between items-center">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-robot text-[#2563eb]"></i>
              AI Component Generator
            </span>
            <a
              href="https://ai-component-generator-topaz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563eb] hover:text-[#1d4ed8] bg-white border border-[#e2e8f0] px-3 py-1.5 rounded-md shadow-sm transition-all hover:border-[#2563eb]"
            >
              <span className="hidden lg:block">Live Preview</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[0.7rem]"></i>
            </a>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-[0.85rem] text-[#64748b] leading-normal mb-4">
              A full-stack web application built with React and Tailwind CSS that allows users to instantly generate fully functional components across multiple frameworks using the Google Gemini API. Features a fully integrated Monaco code editor for real-time code editing, a sandboxed live preview system with client-side Babel compilation, theme toggling, and instant copy/export capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Tailwind CSS",
                "Gemini API",
                "Monaco Editor",
                "Babel Standalone",
                "Live Preview Engine",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 rounded-md text-[0.75rem] font-semibold text-[#0f172a]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] flex flex-col">
          <div className="bg-[#f1f5f9] px-4 py-3 border-b border-[#e2e8f0] font-semibold text-[0.9rem] flex justify-between items-center">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-robot text-[#2563eb]"></i>
              AI Code Reviewer Platform
            </span>
            <a
              href="https://code-reviewer-liart-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563eb] hover:text-[#1d4ed8] bg-white border border-[#e2e8f0] px-3 py-1.5 rounded-md shadow-sm transition-all hover:border-[#2563eb]"
            >
              <span className="hidden lg:block">Live Preview</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[0.7rem]"></i>
            </a>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-[0.85rem] text-[#64748b] leading-normal mb-4">
              An intelligent, client-side code analysis application featuring an interactive Monaco Code Editor supporting multiple languages and frameworks. Powered directly by the Gemini API, it performs deep code diagnostics and instantly returns structured verdicts, detailed mistake breakdowns, and clean optimized solutions, rendered seamlessly via Markdown and syntax-highlighted code blocks.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Tailwind CSS",
                "Gemini API",
                "Monaco Editor",
                "React Markdown",
                "Rehype Highlight",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 rounded-md text-[0.75rem] font-semibold text-[#0f172a]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] flex flex-col">
          <div className="bg-[#f1f5f9] px-4 py-3 border-b border-[#e2e8f0] font-semibold text-[0.9rem] flex justify-between items-center">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-image text-[#2563eb]"></i>
              Web Image Editor
            </span>
            <a
              href="https://image-editor-five-tawny.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563eb] hover:text-[#1d4ed8] bg-white border border-[#e2e8f0] px-3 py-1.5 rounded-md shadow-sm transition-all hover:border-[#2563eb]"
            >
              <span className="hidden lg:block">Live Preview</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[0.7rem]"></i>
            </a>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-[0.85rem] text-[#64748b] leading-normal mb-4">
              A responsive web-based image editor built with the HTML5 Canvas API. 
              Allows users to upload images, apply custom filters and presets, reset 
              changes, and export final edits through a clean, modern interface.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Tailwind CSS",
                "Canvas API",
                "Upload Image",
                "Apply Filters",
                "Reset Changes",
                "Download Image"
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 rounded-md text-[0.75rem] font-semibold text-[#0f172a]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
