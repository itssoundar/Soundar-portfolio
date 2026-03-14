import { Link } from "wouter";

export function Projects() {
  const projects = [
    {
      id: "crm-ai",
      title: <>Transforming CRM workflows with an <span className="font-serif italic font-normal text-[1.15em]">AI-Agent Builder</span> as an execution layer</>,
      image: "/C1new.png",
      bullets: [
        "Generate hiring workflows instantly through natural language prompts.",
        "Automatically create analytics dashboards from recruiter questions.",
        "Reduce manual configuration by translating user intent into structured CRM actions."
      ],
      imageBg: "bg-[#eef2fc]",
      isBgImage: true,
      link: "/project/crm-ai"
    },
    {
      id: "design-system",
      title: <>Building CRM with the <span className="font-serif italic font-normal text-[1.15em]">Genesis Design System</span></>,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      bullets: [
        "Built scalable components and tokens to unify UI across CRM modules.",
        "Reduced UI inconsistencies and improved design-to-development efficiency.",
        "Enabled faster feature delivery with reusable system patterns."
      ],
      imageBg: "bg-[#f5eefc]",
      link: "/project/design-system"
    },
    {
      id: "conversational-b2b",
      title: <>Building CRM analytics and a custom <span className="font-serif italic font-normal text-[1.15em]">dashboard builder</span></>,
      image: "/C3new.png",
      bullets: [
        "Designed centralized dashboards to monitor hiring pipeline performance.",
        "Enabled self-serve analytics through a flexible dashboard builder.",
        "Surfaced insights on hiring velocity, recruiter productivity, and source effectiveness."
      ],
      imageBg: "bg-[#eefcf5]",
      cardBg: "bg-[#faf2ed]",
      hoverBg: "hover:bg-[#FCF9F7]",
      isBgImage: true,
      link: "/project/conversational-b2b"
    }
  ];

  return (
    <section className="relative w-full bg-[#f8f9fa] pb-32 px-6 md:px-[86px] pt-12 -mt-16 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1100px] mx-auto overflow-visible">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[24px] md:text-[36px] font-medium text-[#111] tracking-[-0.02em] leading-[1.1] font-sans">
            Selected <span className="font-serif italic font-normal text-[#111]">Projects</span>
          </h2>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-10 md:gap-16 pb-24 relative">
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link}>
<span 
                className={`block sticky ${project.cardBg || 'bg-white'} ${project.hoverBg || ''} rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e2e8f0]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-${10 + index * 10} group`}
                style={{ top: `${96 + index * 32}px` }}
              >
                <div className="flex flex-col md:flex-row gap-[24px] items-stretch cursor-pointer">
                  {/* Project Image Container */}
                  <div className={`w-full md:w-[45%] flex-shrink-0 ${project.isBgImage ? '' : project.imageBg} rounded-[20px] overflow-hidden relative min-h-[300px] md:min-h-[380px]`}>
                    {project.isBgImage ? (
                      <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
                        style={{ backgroundImage: `url(${project.image})` }}
                        data-testid={`bg-project-${project.id}`}
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.id} 
                        className="absolute top-6 left-6 md:top-8 md:left-8 w-[calc(100%-24px)] md:w-[calc(100%-32px)] h-auto object-cover object-left-top rounded-tl-[12px] shadow-[-8px_-8px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.03] origin-top-left"
                        data-testid={`img-project-${project.id}`}
                      />
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="w-full md:w-[55%] flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-[18px] md:text-[24px] font-medium text-[#111] tracking-[-0.01em] leading-[1.3] font-sans">
                        {project.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-4 text-[#444] text-[14px] md:text-[16px] leading-[1.6] mb-10 font-normal">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-[12px] bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] text-white font-medium text-[14px] md:text-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),_0_4px_12px_rgba(0,0,0,0.2)] border border-[#222] transition-all duration-300 group-hover:scale-[1.02]">
                        View Project
                      </div>
                    </div>
                  </div>
                </div>
              </span>
</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
