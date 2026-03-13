export function Projects() {
  return (
    <section className="relative w-full bg-white pb-24 px-6 md:px-[86px] pt-12 -mt-16 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-white/80 to-white pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1200px] mx-auto overflow-visible">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[32px] font-medium text-[#222] tracking-[-0.02em] leading-[1.1]">
            Selected <span className="font-serif italic font-normal text-[#111]">Projects</span>
          </h2>
          <p className="text-[#666] text-[18px] leading-[1.6] max-w-[600px] mt-6 tracking-wide">
            From early-stage ambiguity to scalable systems, I design solutions that translate innovation into real impact
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 pb-24 relative">
          {/* Project Card 1 */}
          <a href="/project/crm-ai" className="block sticky top-24 md:top-32 bg-[#f4f6fa] rounded-[28px] p-6 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 z-10 border border-white/80 h-auto md:h-auto overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center cursor-pointer">
              {/* Project Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-[#e2e8f0] p-4 aspect-square md:aspect-auto md:h-[360px] shadow-sm transition-shadow duration-300 flex items-center justify-center">
                  <img 
                    src="/Case1.png" 
                    alt="CRM AI Agent Builder" 
                    className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                    data-testid="img-project-crm"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-[26px] font-medium text-[#111] tracking-[-0.02em] leading-[1.3]">
                    Transforming CRM workflows with an <span className="font-serif italic font-normal">AI-Agent Builder</span> as an execution layer
                  </h3>
                </div>
                
                <ul className="space-y-3 text-[#333] text-[16px] leading-[1.6] mb-8 font-medium">
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Generate hiring workflows instantly through natural language prompts.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Automatically create analytics dashboards from recruiter questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Reduce manual configuration by translating user intent into structured CRM actions.</span>
                  </li>
                </ul>

                <div>
                  <div className="inline-flex items-center justify-center px-8 py-3 rounded-[14px] bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] text-white font-medium text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.2)] border border-[#555] border-b-black transition-all duration-300 group-hover:scale-[1.02]">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Project Card 2 */}
          <a href="/project/design-system" className="block sticky top-32 md:top-40 bg-[#f4f6fa] rounded-[28px] p-6 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 z-20 border border-white/80 h-auto md:h-auto overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center cursor-pointer">
              {/* Project Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-[#e2e8f0] p-4 aspect-square md:aspect-auto md:h-[360px] shadow-sm transition-shadow duration-300 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Design System Project" 
                    className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                    data-testid="img-project-design"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-[26px] font-medium text-[#111] tracking-[-0.02em] leading-[1.3]">
                    Building scalable <span className="font-serif italic font-normal">design systems</span> for AI-first products
                  </h3>
                </div>
                
                <ul className="space-y-3 text-[#333] text-[16px] leading-[1.6] mb-8 font-medium">
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Comprehensive component library with accessibility standards built-in.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Design tokens and patterns for consistent multi-product ecosystems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Rapid iteration cycles supporting 50+ feature releases annually.</span>
                  </li>
                </ul>

                <div>
                  <div className="inline-flex items-center justify-center px-8 py-3 rounded-[14px] bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] text-white font-medium text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.2)] border border-[#555] border-b-black transition-all duration-300 group-hover:scale-[1.02]">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Project Card 3 */}
          <a href="/project/conversational-b2b" className="block sticky top-40 md:top-48 bg-[#f4f6fa] rounded-[28px] p-6 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 z-30 border border-white/80 mb-12 h-auto md:h-auto overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center cursor-pointer">
              {/* Project Image */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden bg-[#e2e8f0] p-4 aspect-square md:aspect-auto md:h-[360px] shadow-sm transition-shadow duration-300 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Conversational Interface Project" 
                    className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                    data-testid="img-project-conversational"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-[26px] font-medium text-[#111] tracking-[-0.02em] leading-[1.3]">
                    Crafting seamless <span className="font-serif italic font-normal">conversational interfaces</span> for B2B
                  </h3>
                </div>
                
                <ul className="space-y-3 text-[#333] text-[16px] leading-[1.6] mb-8 font-medium">
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Designed an intuitive chat-based interface for complex enterprise workflows.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Improved user engagement by reducing cognitive load during task execution.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#666] flex-shrink-0">•</span>
                    <span>Integrated intelligent suggested actions based on contextual user data.</span>
                  </li>
                </ul>

                <div>
                  <div className="inline-flex items-center justify-center px-8 py-3 rounded-[14px] bg-gradient-to-b from-[#3a3a3a] to-[#0a0a0a] text-white font-medium text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.2)] border border-[#555] border-b-black transition-all duration-300 group-hover:scale-[1.02]">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}