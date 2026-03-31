import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image as ImageIcon } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: "crm-ai",
      title: <>Transforming CRM workflows with an <span className="font-serif italic font-normal text-[1.15em]">AI-Agent Builder</span></>,
      image: "/C1new.png?v=1",
      description: "Generate hiring workflows instantly through natural language prompts. Automatically create analytics dashboards from recruiter questions. Reduce manual configuration by translating user intent into structured CRM actions.",
      imageBg: "bg-[#eef2fc]",
      isBgImage: true,
      link: "/project/crm-ai",
      dimensions: "1440 x 900"
    },
    {
      id: "design-system",
      title: <>Building CRM with the <span className="font-serif italic font-normal text-[1.15em]">Genesis Design System</span></>,
      image: "/C2new.png?v=1",
      description: "Built scalable components and tokens to unify UI across CRM modules. Reduced UI inconsistencies and improved design-to-development efficiency. Enabled faster feature delivery with reusable system patterns.",
      imageBg: "bg-[#f5eefc]",
      isBgImage: true,
      link: "/project/design-system",
      dimensions: "1440 x 900"
    },
    {
      id: "conversational-b2b",
      title: <>Building CRM analytics and a custom <span className="font-serif italic font-normal text-[1.15em]">dashboard builder</span></>,
      image: "/C3.png",
      description: "Designed centralized dashboards to monitor hiring pipeline performance. Enabled self-serve analytics through a flexible dashboard builder. Surfaced insights on hiring velocity, recruiter productivity, and source effectiveness.",
      imageBg: "bg-[#eefcf5]",
      hoverBg: "hover:bg-[#FCF9F7]",
      isBgImage: true,
      link: "/project/conversational-b2b",
      dimensions: "1440 x 900"
    }
  ];

  return (
    <section id="work" className="relative w-full bg-[#f8f9fa] pb-32 px-6 md:px-[86px] pt-12 -mt-16 z-20" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1100px] mx-auto overflow-visible">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] tracking-[-0.02em] leading-[1.1] font-sans mb-4">
              Selected <span className="font-serif italic font-normal text-[#111]">Projects</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#555] max-w-[600px] leading-relaxed">
              From navigating early-stage ambiguity to building scalable systems, I design solutions that convert innovation into measurable impact.
            </p>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-32 md:gap-40 pb-24 relative items-center">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="w-full flex flex-col items-center"
              >
                {/* Project Info */}
                <div className="text-center mb-10 md:mb-12 max-w-[800px] flex flex-col items-center px-4">
                  <h3 className="text-[32px] md:text-[44px] font-medium text-[#111] tracking-[-0.02em] leading-[1.2] mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#555] text-[16px] md:text-[18px] leading-[1.6] font-normal max-w-[650px]">
                    {project.description}
                  </p>
                </div>

                <Link 
                  href={project.link}
                  className="w-full block group cursor-pointer max-w-[900px] mx-auto mt-6"
                >
                  {/* Top Bar matching reference */}
                  <div className="flex justify-between items-end mb-2 text-[#111] px-[2px]">
                    <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                      <ImageIcon size={13} className="opacity-80" />
                      <span>Image</span>
                    </div>
                    <div className="text-[12px] font-medium text-[#888] tracking-widest">
                      {project.dimensions}
                    </div>
                  </div>

                  {/* Project Image Container */}
                  <div className="w-full relative transition-transform duration-500 group-hover:-translate-y-1">
                    {/* Figma-style Bounding Box */}
                    <div className="absolute inset-0 border-[1.5px] border-[#0d99ff] z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Corner Handles */}
                      <div className="absolute -top-[4.5px] -left-[4.5px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute -top-[4.5px] -right-[4.5px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute -bottom-[4.5px] -left-[4.5px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute -bottom-[4.5px] -right-[4.5px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      
                      {/* Edge Handles */}
                      <div className="absolute top-1/2 -left-[4.5px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                      <div className="absolute top-1/2 -right-[4.5px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                      <div className="absolute -top-[4.5px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                      <div className="absolute -bottom-[4.5px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                    </div>

                    <div className={`w-full flex-shrink-0 ${project.isBgImage ? '' : project.imageBg} relative min-h-[350px] md:min-h-[550px] bg-[#f8f9fa] shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500`}>
                      {project.isBgImage ? (
                        <div 
                          className="absolute inset-0 w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                          data-testid={`bg-project-${project.id}`}
                        />
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.id} 
                          className="w-full h-full object-cover"
                          data-testid={`img-project-${project.id}`}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* View Project Button */}
                  <div className="flex justify-center mt-12 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#111] text-white font-medium text-[14px] md:text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-black transition-colors">
                      View Project
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
