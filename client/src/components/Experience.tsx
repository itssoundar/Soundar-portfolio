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
            <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 w-full md:w-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-2xl flex flex-col items-center">
              <h4 className="text-[#888888] text-[14px] font-medium text-center mb-8 tracking-wide">
                Plan, Strategy, Brainstorm and research
              </h4>
              <div className="flex justify-center items-center -space-x-3 md:-space-x-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[50]">
                  <img src="/tools/1.1.png" alt="Notion" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[40]">
                  <img src="/tools/1.2.png" alt="ChatGPT" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[30]">
                  <img src="/tools/1.3.jpeg" alt="Anthropic" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[20]">
                  <img src="/tools/1.4.jpeg" alt="Tool 4" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[10]">
                  <img src="/tools/1.5.png" alt="Miro" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Right Tool Group */}
            <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 w-full md:w-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-2xl flex flex-col items-center">
              <h4 className="text-[#888888] text-[14px] font-medium text-center mb-8 tracking-wide">
                Iterate, Refine, Prototype and ship
              </h4>
              <div className="flex justify-center items-center -space-x-3 md:-space-x-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[40]">
                  <img src="/tools/2.1.png" alt="Figma" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[30]">
                  <img src="/tools/2.2.jpeg" alt="Framer" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[20]">
                  <img src="/tools/2.3.png" alt="Webflow" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 z-[10]">
                  <img src="/tools/2.4.webp" alt="V0" className="w-full h-full object-cover rounded-2xl" />
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
