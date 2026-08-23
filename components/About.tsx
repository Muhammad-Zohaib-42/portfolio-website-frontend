const About = () => {
  return (
    <section className="animate-[fadeIn_0.3s_ease-in-out]">
      <h2 className="text-[1.75rem] font-bold mb-4 flex items-center gap-3">
        About Me{" "}
        <span className="text-base font-normal text-[#64748b]">
          {`// Profile & Skills`}
        </span>
      </h2>
      <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-8">
        Passionate Full-Stack MERN Developer who enjoys building complete,
        custom web applications from scratch. Dedicated to clean code
        architecture, optimized UI/UX design, and functional backends without
        relying heavily on pre-built plugins.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-[#e2e8f0] p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]">
          <h3 className="text-[1.1rem] font-semibold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-code text-[#2563eb]"></i>
            Development Stack
          </h3>
          <p className="text-[0.85rem] text-[#64748b] leading-normal">
            Specialized in building scalable solutions using modern JavaScript
            technologies across the client and server side.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "HTML",
              "CSS",
              "JavaScript (ES6+)",
              "Tailwind-CSS",
              "TypeScript",
              "React.js",
              "Redux.js",
              "Zustand",
              "GSAP",
              "Motion",
              "Next.js",
              "ShadCN",
              "Node.js",
              "Express.js",
              "MongoDB",
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

        <div className="relative bg-white border border-[#e2e8f0] p-6 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]">
          <h3 className="text-[1.1rem] font-semibold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-[#2563eb]"></i>
            Background & Experience
          </h3>
          <p className="text-[0.85rem] text-[#64748b] leading-normal">
            Completed an intensive 6-month full-stack web development <a href="/web-design-&-development-certificate.jpg" target="_blank" title="Open Certificate in new Tab" className="group text-blue-400 underline cursor-pointer">certification</a> under the PSDF program, followed by a hands-on 3-month internship at Ideoversity (Arfa Karim Software Technology Park). Gained real-world experience building scalable MERN stack applications while successfully leading a development team as Team Lead.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Team Leadership",
              "Full-Stack Development",
              "Git & GitHub",
              "PSDF Certified",
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
    </section>
  );
};

export default About;
