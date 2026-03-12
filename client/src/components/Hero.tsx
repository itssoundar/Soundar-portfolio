import avatar from "../assets/avatar.png";
import { useState, useEffect } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-between bg-white selection:bg-gray-200"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-[#fdfdfd] pointer-events-none" />
      {/* Sky blue gradient overlay - top 20% */}
      <div className="absolute top-0 left-0 right-0 h-[20vh] bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-transparent pointer-events-none opacity-55" />
      {/* Scattered Cloud Images with Parallax */}
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[8%] left-[5%] w-[120px] h-auto opacity-70 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[15%] right-[8%] w-[100px] h-auto opacity-60 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[35%] left-[10%] w-[140px] h-auto opacity-50 pointer-events-none hidden lg:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[40%] right-[12%] w-[110px] h-auto opacity-55 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute bottom-[30%] left-[8%] w-[130px] h-auto opacity-45 pointer-events-none hidden lg:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute bottom-[25%] right-[5%] w-[120px] h-auto opacity-50 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.45}px)` }}
      />
      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center pt-[15vh] px-4 md:px-8">
        
        {/* Top Avatar & Greeting */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img src="/hi-hand.png" alt="Hi hand wave" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          <span className="text-[#333] font-medium text-[15px] tracking-wide mt-1">
            Hey ..! I'm Soundar ,
          </span>
        </div>

        {/* Main Headline Section */}
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] text-[#222] tracking-[-0.02em] font-medium leading-[1.1]">
            Multidisciplinary Designer
          </h1>
          
          <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] text-[#222] tracking-[-0.02em] font-medium leading-[1.2] mt-3">
            Believes in <span className="font-serif italic font-normal text-[#111]">Functional & Aesthetic</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-5 mt-6 w-full">
            <h2 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-serif italic font-normal text-[#111] leading-[1.1] md:text-right pr-2">
              For Brands & Products
            </h2>
            <p className="text-[#4a4a4a] max-w-[340px] text-[13px] md:text-[14.5px] leading-[1.6] text-center md:text-left pt-1 font-normal tracking-wide">
              an AI Product Designer crafting agent builders,
              conversational interfaces, and scalable design
              systems for AI-first products.
            </p>
          </div>
        </div>

      </div>
      {/* Logos Section */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto pb-12 pt-8 px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          
          {/* Mock Logo 1 */}
          <div className="flex flex-col font-bold text-[18px] leading-[0.85] text-[#555]">
            <span className="tracking-tight text-[#888]">glance</span>
            <span className="tracking-tighter text-[1.4em] text-[#666]">roposo</span>
          </div>
          
          {/* Mock Logo 2 */}
          <div className="flex flex-col text-[#333] items-start">
            <span className="font-extrabold text-[24px] tracking-[-0.05em] leading-none text-[#555]">Hconr.</span>
            <span className="text-[6.5px] tracking-[0.15em] text-[#888] uppercase font-bold mt-[4px]">Global Talent Exchange</span>
          </div>

          {/* Mock Logo 3 */}
          <div className="flex items-center gap-[1px] font-bold text-[20px] text-[#555] tracking-tight">
            <span>Cl</span>
            <span className="text-[1.1em] mt-[-2px] text-[#888]">✿</span>
            <span>vertex</span>
          </div>

          {/* Mock Logo 4 */}
          <div className="flex flex-col items-center text-[#333]">
            <span className="font-medium text-[26px] lowercase tracking-[-0.04em] leading-none text-[#555]">helpall</span>
            <span className="text-[6px] tracking-[0.12em] text-[#888] uppercase mt-[5px] font-semibold">move society forward</span>
          </div>

          {/* Mock Logo 5 */}
          <div className="flex items-center gap-2 text-[#555]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
              <path d="M2 22L22 2L12 22L2 22Z" fill="currentColor"/>
              <path d="M2 2L22 2L12 12L2 2Z" fill="currentColor" opacity="0.3"/>
            </svg>
            <span className="font-semibold text-[22px] tracking-[-0.03em] text-[#777]">SayF</span>
          </div>

        </div>
      </div>
      {/* Projects Section */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto py-24 md:py-32 px-6 overflow-visible">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-[#222] tracking-[-0.02em] leading-[1.1]">
            Selected <span className="font-serif italic font-normal text-[#111] text-[40px]">Projects</span>
          </h2>
          <p className="text-[#666] text-[14px] md:text-[15px] leading-[1.6] max-w-[600px] mt-6 tracking-wide">
            From early-stage ambiguity to scalable systems, I design solutions that translate innovation into real impact
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 pb-24 relative">
          {/* Project Card 1 */}
          <div className="sticky top-24 md:top-32 bg-gradient-to-b from-[#f0f4f8] to-[#e8ecf1] rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 z-10 border border-white/50 h-auto md:h-auto overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Project Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-white aspect-square md:aspect-auto md:h-[400px] shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="CRM AI Agent Builder" 
                    className="w-full h-full object-cover"
                    data-testid="img-project-crm"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <h3 className="text-[1.8rem] md:text-[2rem] font-medium text-[#222] tracking-[-0.02em] leading-[1.2] mb-4">
                  Transforming CRM workflows with an <span className="font-serif italic font-normal">AI-Agent Builder</span>
                </h3>
                
                <ul className="space-y-3 text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Generate hiring workflows instantly through natural language prompts.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Automatically create analytics dashboards from recruiter questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Reduce manual configuration by translating user intent into structured CRM actions.</span>
                  </li>
                </ul>

                {/* Gradient Accent */}
                <div className="mt-8 h-12 rounded-full bg-gradient-to-r from-[#d4a5a5] via-[#e8b8a8] to-[#f0d5c8] opacity-40 blur-sm" data-testid="accent-gradient-1"></div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="sticky top-32 md:top-40 bg-gradient-to-b from-[#f0f4f8] to-[#e8ecf1] rounded-3xl p-8 md:p-12 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_-4px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300 z-20 border border-white/50 h-auto md:h-auto overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Project Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-white aspect-square md:aspect-auto md:h-[400px] shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Design System Project" 
                    className="w-full h-full object-cover"
                    data-testid="img-project-design"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <h3 className="text-[1.8rem] md:text-[2rem] font-medium text-[#222] tracking-[-0.02em] leading-[1.2] mb-4">
                  Building scalable <span className="font-serif italic font-normal">design systems</span> for AI-first products
                </h3>
                
                <ul className="space-y-3 text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Comprehensive component library with accessibility standards built-in.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Design tokens and patterns for consistent multi-product ecosystems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Rapid iteration cycles supporting 50+ feature releases annually.</span>
                  </li>
                </ul>

                {/* Gradient Accent */}
                <div className="mt-8 h-12 rounded-full bg-gradient-to-r from-[#a8d5e8] via-[#b8e0f0] to-[#c8e8f8] opacity-40 blur-sm" data-testid="accent-gradient-2"></div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="sticky top-40 md:top-48 bg-gradient-to-b from-[#f0f4f8] to-[#e8ecf1] rounded-3xl p-8 md:p-12 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_-4px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300 z-30 border border-white/50 mb-12 h-auto md:h-auto overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Project Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-white aspect-square md:aspect-auto md:h-[400px] shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Conversational Interface Project" 
                    className="w-full h-full object-cover"
                    data-testid="img-project-conversational"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <h3 className="text-[1.8rem] md:text-[2rem] font-medium text-[#222] tracking-[-0.02em] leading-[1.2] mb-4">
                  Crafting seamless <span className="font-serif italic font-normal">conversational interfaces</span> for B2B
                </h3>
                
                <ul className="space-y-3 text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Designed an intuitive chat-based interface for complex enterprise workflows.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Improved user engagement by reducing cognitive load during task execution.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#888] flex-shrink-0">•</span>
                    <span>Integrated intelligent suggested actions based on contextual user data.</span>
                  </li>
                </ul>

                {/* Gradient Accent */}
                <div className="mt-8 h-12 rounded-full bg-gradient-to-r from-[#d4e5a5] via-[#e8f0b8] to-[#f0f8c8] opacity-40 blur-sm" data-testid="accent-gradient-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}