export function Experience() {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "@Sense",
      period: "May 2024 - Present",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "Product Designer",
      company: "@Glance",
      period: "Oct 2023 - May 2024",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "Product Designer",
      company: "@Redbaton",
      period: "Jan 2023 - May 2023",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "UI UX Designer",
      company: "@Metafic",
      period: "Jun 2021 - Dec 2022",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "Freelancer",
      company: "",
      period: "2019 - Dec 2020",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    }
  ];

  return (
    <section className="relative w-full bg-[#111111] text-white py-24 md:py-32 px-6 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] rounded-b-[2.5rem] md:rounded-b-[4rem] -mt-12 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.1)] mb-12">
      {/* Top Background Image with Fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-[500px] md:h-[700px] pointer-events-none opacity-40 md:opacity-60"
        style={{
          backgroundImage: 'url("/work_exp.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[900px] mx-auto">
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-center mb-16 md:mb-24 tracking-[-0.02em] leading-[1.1]">
          Experiences that shaped <span className="font-serif italic font-normal text-white/90">my design lens</span>
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`py-8 md:py-10 flex flex-col gap-3 ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold tracking-wide text-white/95">
                  {exp.role} <span className="font-normal text-white/80">{exp.company}</span>
                </h3>
                <span className="text-white/50 text-[0.85rem] md:text-[0.9rem] font-medium tracking-wider">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#888888] text-[14px] md:text-[15px] leading-[1.6] max-w-[600px] font-normal tracking-wide">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy and Tools Section */}
        <div className="mt-24 md:mt-32 pt-16 relative w-[100vw] left-1/2 -translate-x-1/2">
          <div className="relative z-10 text-center mb-16 px-6">
            <p className="text-[1.2rem] md:text-[1.4rem] leading-[1.6] font-medium text-white/90 max-w-[800px] mx-auto tracking-wide">
              "I thrive on discovery and problem-solving, continuously exploring new ideas to create thoughtful, <span className="font-serif italic font-normal">impactful product experiences</span>"
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center px-6 max-w-[900px] mx-auto">
            {/* Left Tool Group */}
            <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 w-full md:w-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-2xl">
              <h4 className="text-[#888888] text-[14px] font-medium text-center mb-8 tracking-wide">
                Plan, Strategy, Brainstorm and research
              </h4>
              <div className="flex justify-center items-center gap-4 md:gap-5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <span className="text-black font-bold text-2xl font-serif">N</span>
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden p-1.5 transform hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A6.0651 6.0651 0 0 0 19.0192 19.818a5.9847 5.9847 0 0 0 3.9977-2.9001 6.0462 6.0462 0 0 0-.735-7.0968z" fill="#000" /><path d="M12.2133 1.9443v2.859M5.0069 6.1039l2.476 1.4294M2.5308 14.423l2.476-1.4294M7.483 18.7118v-2.859M14.6894 14.5521l-2.476-1.4294M17.1654 6.2325l-2.476 1.4295M10.8718 12.3361h2.2562" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="w-14 h-14 bg-[#FF7B54] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="white"/></svg>
                </div>
                <div className="w-14 h-14 bg-[#0066FF] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg width="32" height="16" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C9.5244 14 11.7348 12.6599 12.9861 10.6481L15.0139 3.3519C16.2652 1.34011 18.4756 0 21 0C24.866 0 28 3.13401 28 7C28 10.866 24.866 14 21 14H18V11H21C23.2091 11 25 9.20914 25 7C25 4.79086 23.2091 3 21 3C19.2625 3 17.7533 3.97495 16.9691 5.43486L14.9413 12.731C13.69 14.7428 11.4796 16.0829 8.95519 16.0829C5.08918 16.0829 1.95519 12.9489 1.95519 9.0829C1.95519 5.21689 5.08918 2.0829 8.95519 2.0829H10V-0.9171C10 -0.9171 7 0 7 0Z" fill="white"/></svg>
                </div>
                <div className="w-14 h-14 bg-[#FFD02F] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="36" height="36"><path d="M18.8 4H22l-7 16h-3.2l7-16zM12 4h3.2l-7 16H5l7-16zM5.2 4H8.4L1.4 20H-1.8L5.2 4z" fill="#000"/></svg>
                </div>
              </div>
            </div>

            {/* Right Tool Group */}
            <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 w-full md:w-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-2xl">
              <h4 className="text-[#888888] text-[14px] font-medium text-center mb-8 tracking-wide">
                Iterate, Refine, Prototype and ship
              </h4>
              <div className="flex justify-center items-center gap-4 md:gap-5">
                <div className="w-14 h-14 bg-[#FF5C00] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="6" height="6" rx="1" fill="white"/><rect x="14" y="4" width="6" height="6" rx="1" fill="white"/><rect x="4" y="14" width="6" height="6" rx="1" fill="white"/><path d="M14 14H20V20H14V14Z" fill="white"/></svg>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF4B4B] to-[#7B2CBF] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/></svg>
                </div>
                <div className="w-14 h-14 bg-[#000000] border border-white/10 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-xl tracking-tighter">V0</span>
                </div>
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                  <svg width="36" height="36" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5H0V9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5V28.5Z" fill="#F24E1E"/><path d="M0 47.5V28.5H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0H38V19H19V0Z" fill="#A259FF"/><path d="M19 19H38V38H19V19Z" fill="#F24E1E"/><path d="M38 47.5C38 52.7467 33.7467 57 28.5 57C23.2533 57 19 52.7467 19 47.5V28.5H38V47.5Z" fill="#1ABCFE"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee Ticker */}
          <div className="relative z-10 mt-20 md:mt-28 -mx-6 py-6 border-t border-b border-white/5 overflow-hidden flex bg-[#111111]/80 backdrop-blur-md">
            <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  <span className="text-white/60 text-sm font-medium tracking-wide uppercase">Design thinking</span>
                  <span className="text-white/40">✦</span>
                  <span className="text-white/60 text-sm font-medium tracking-wide uppercase">Accessibility</span>
                  <span className="text-white/40">✦</span>
                  <span className="text-white/60 text-sm font-medium tracking-wide uppercase">User friendly</span>
                  <span className="text-white/40">✦</span>
                  <span className="text-white/60 text-sm font-medium tracking-wide uppercase">Vibe-Coding</span>
                  <span className="text-white/40">✦</span>
                  <span className="text-white/60 text-sm font-medium tracking-wide uppercase">Behavioural design</span>
                  <span className="text-white/40">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
