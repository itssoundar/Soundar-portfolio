export function Experience() {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "@Sense",
      period: "May 2024 - Present",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Design System (Genesis): Built 40+ components for scalability & consistency.</li>
          <li>Chatbot Optimisation: Prevented $40k churn, enhancing ABT goals.</li>
          <li>CRM Analytics Dashboard: Designed intuitive data visualisation for insights.</li>
          <li>Ask AI - Dashboard Analytics: Improved AI-driven decision-making.</li>
          <li>Messaging Translation Flows: Streamlined multi-language communication.</li>
        </ul>
      )
    },
    {
      role: "Product Designer",
      company: "@Glance",
      period: "Oct 2023 - May 2024",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Roposo Clout Dashboard: Optimized Weight Discrepancy Flow for efficiency.</li>
          <li>Onboarding Business Flow: Redesigned onboarding, reducing drop-offs by 15%.</li>
          <li>Interactive Popup UI: Achieved a 12.5% CTR increase in app downloads.</li>
          <li>Guess the Price Flow: Crafted engaging UX with micro-interactions.</li>
          <li>Boosted overall user engagement by 20%.</li>
        </ul>
      )
    },
    {
      role: "Product Designer",
      company: "@Redbaton",
      period: "Jan 2023 - May 2023",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Web Design: Led user-centric website projects.</li>
          <li>Responsive UI: Crafted seamless, adaptive designs.</li>
          <li>Micro-Interactions: Enhanced UX with engaging animations & variants.</li>
        </ul>
      )
    },
    {
      role: "UI UX Designer",
      company: "@Metafic",
      period: "Jun 2021 - Dec 2022",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed intuitive interfaces & enhanced the design system.</li>
          <li>Led cross-functional collaboration and multi-project management.</li>
          <li>Conducted competitive research for UX optimization.</li>
        </ul>
      )
    },
    {
      role: "Freelancer",
      company: "",
      period: "2019 - Dec 2020",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Delivered end-to-end design solutions for diverse clients.</li>
          <li>Managed project timelines, client communication, and deliverables.</li>
        </ul>
      )
    }
  ];

  return (
    <section className="relative w-full bg-[#111111] text-white pt-[60px] pb-[60px] px-6 md:px-[86px] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] rounded-b-[2.5rem] md:rounded-b-[4rem] -mt-12 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.1)] mb-12">
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
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <h2 className="text-[32px] font-medium text-center mb-16 md:mb-24 tracking-[-0.02em] leading-[1.1] font-sans">
          Experiences that shaped <span className="font-serif italic font-normal text-white/90">my design lens</span>
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`py-8 md:py-10 flex flex-col gap-3 ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-[24px] font-semibold tracking-wide text-white/95 font-sans">
                  {exp.role} <span className="font-normal text-white/80 font-sans">{exp.company}</span>
                </h3>
                <span className="text-white/50 text-[18px] font-medium tracking-wider font-sans">
                  {exp.period}
                </span>
              </div>
              <div className="text-[#888888] text-[15px] md:text-[17px] leading-[1.6] max-w-[700px] font-normal tracking-wide font-sans">
                {exp.description}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy and Tools Section */}
        <div className="md:mt-32 pt-16 relative w-[100vw] left-1/2 -translate-x-1/2 pl-[24px] pr-[24px] mt-[0px]">
          <div className="relative z-10 text-center mb-16 px-6">
            <p className="text-[18px] leading-[1.6] font-medium text-white/90 max-w-[800px] mx-auto tracking-wide">
              "I thrive on discovery and problem-solving, continuously exploring new ideas to create thoughtful, <span className="font-serif italic font-normal">impactful product experiences</span>"
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center max-w-[1200px] mx-auto">
            {/* Left Tool Group */}
            <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 w-full md:w-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <h4 className="text-[#888888] text-[18px] font-medium text-center mb-8 tracking-wide">
                Plan, Strategy, Brainstorm and research
              </h4>
              <div className="flex justify-center items-center -space-x-3 md:-space-x-4">
                {[
                  { src: "/tools/1.1.png", alt: "Notion", z: "z-[50]" },
                  { src: "/tools/1.2.png", alt: "ChatGPT", z: "z-[40]" },
                  { src: "/tools/1.3.jpeg", alt: "Anthropic", z: "z-[30]" },
                  { src: "/tools/1.4.jpeg", alt: "Tool 4", z: "z-[20]" },
                  { src: "/tools/1.5.png", alt: "Miro", z: "z-[10]" },
                ].map((tool) => (
                  <div key={tool.alt} className={`relative w-14 h-14 md:w-[72px] md:h-[72px] rounded-[18px] md:rounded-[24px] shadow-[12px_0_20px_rgba(0,0,0,0.6),0_6px_12px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 ${tool.z} flex-shrink-0 bg-[#111]`}>
                    <img src={tool.src} alt={tool.alt} className="w-full h-full object-cover rounded-[18px] md:rounded-[24px]" />
                    {/* 3D Glass/Bevel Overlay */}
                    <div className="absolute inset-0 rounded-[18px] md:rounded-[24px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.15)] pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Tool Group */}
            <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 w-full md:w-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <h4 className="text-[#888888] text-[18px] font-medium text-center mb-8 tracking-wide">
                Iterate, Refine, Prototype and ship
              </h4>
              <div className="flex justify-center items-center -space-x-3 md:-space-x-4">
                {[
                  { src: "/tools/2.1.png", alt: "Figma", z: "z-[40]" },
                  { src: "/tools/2.2.jpeg", alt: "Framer", z: "z-[30]" },
                  { src: "/tools/2.3.png", alt: "Webflow", z: "z-[20]" },
                  { src: "/tools/2.4.webp", alt: "V0", z: "z-[10]" },
                ].map((tool) => (
                  <div key={tool.alt} className={`relative w-14 h-14 md:w-[72px] md:h-[72px] rounded-[18px] md:rounded-[24px] shadow-[12px_0_20px_rgba(0,0,0,0.6),0_6px_12px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 ${tool.z} flex-shrink-0 bg-[#111]`}>
                    <img src={tool.src} alt={tool.alt} className="w-full h-full object-cover rounded-[18px] md:rounded-[24px]" />
                    {/* 3D Glass/Bevel Overlay */}
                    <div className="absolute inset-0 rounded-[18px] md:rounded-[24px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.15)] pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Marquee Ticker */}
          <div className="relative z-10 mt-20 md:mt-28 -mx-6 md:-mx-[86px] py-6 border-t border-b border-white/5 overflow-hidden flex bg-[#111111]/80 backdrop-blur-md">
            <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  <span className="text-white/60 text-[18px] font-medium tracking-wide uppercase">Design thinking</span>
                  <img src="/star.png" alt="star" className="w-5 h-5 opacity-70" />
                  <span className="text-white/60 text-[18px] font-medium tracking-wide uppercase">Accessibility</span>
                  <img src="/star.png" alt="star" className="w-5 h-5 opacity-70" />
                  <span className="text-white/60 text-[18px] font-medium tracking-wide uppercase">User friendly</span>
                  <img src="/star.png" alt="star" className="w-5 h-5 opacity-70" />
                  <span className="text-white/60 text-[18px] font-medium tracking-wide uppercase">Vibe-Coding</span>
                  <img src="/star.png" alt="star" className="w-5 h-5 opacity-70" />
                  <span className="text-white/60 text-[18px] font-medium tracking-wide uppercase">Behavioural design</span>
                  <img src="/star.png" alt="star" className="w-5 h-5 opacity-70" />
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
