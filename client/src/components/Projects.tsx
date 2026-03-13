export function Projects() {
  return (
    <section className="relative w-full bg-white pb-24 px-6 md:px-[86px] pt-12">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto overflow-visible">
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