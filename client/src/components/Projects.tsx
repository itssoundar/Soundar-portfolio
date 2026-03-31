import { Link } from "wouter";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Image as ImageIcon, Paperclip, Box, ArrowUp } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const chatBoxY = useTransform(scrollYProgress, [0.2, 0.35], [100, 0]);
  const chatBoxOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  const textToType = "Generate a complete CRM dashboard";
  const [typedText, setTypedText] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let progress = (latest - 0.35) / 0.2; // 0.35 to 0.55
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    setTypedText(textToType.slice(0, Math.round(progress * textToType.length)));
  });

  const sendBtnScale = useTransform(scrollYProgress, [0.55, 0.58, 0.6], [1, 0.85, 1]);
  const sendBtnOpacity = useTransform(scrollYProgress, [0.55, 0.58, 0.6], [1, 0.7, 1]);

  const interactionOpacity = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0.65, 0.75], [1, 1.05]);

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
    <section id="work" className="relative w-full bg-[#f8f9fa] pb-32 px-6 md:px-[86px] pt-12 -mt-16 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1100px] mx-auto overflow-visible">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
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

        {/* Scroll Interaction Area */}
        <div ref={containerRef} className="relative h-[130vh] w-full mb-12">
          <div className="sticky top-[20vh] w-full flex flex-col items-center justify-center pt-10">
            <motion.div 
              className="relative flex flex-col items-center"
              style={{ opacity: interactionOpacity, scale: imageScale }}
            >
              {/* Small Image Container */}
              <div className="w-[260px] md:w-[320px] flex flex-col mb-16">
                 {/* Top Bar matching reference */}
                 <div className="flex justify-between items-end mb-2 text-[#111] px-[2px]">
                    <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                       <ImageIcon size={13} className="opacity-80" />
                       <span>Image</span>
                    </div>
                    <div className="text-[12px] font-medium text-[#888] tracking-widest">
                       720 x 960
                    </div>
                 </div>

                 {/* Image Outline */}
                 <div className="w-full aspect-[3/4] relative">
                    <div className="absolute inset-0 border-[1.5px] border-[#0d99ff] z-20 pointer-events-none">
                       {/* Corner Handles */}
                       <div className="absolute -top-[4px] -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                       <div className="absolute -top-[4px] -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                       <div className="absolute -bottom-[4px] -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                       <div className="absolute -bottom-[4px] -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                       {/* Edge Handles */}
                       <div className="absolute top-1/2 -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                       <div className="absolute top-1/2 -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                       <div className="absolute -top-[4px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                       <div className="absolute -bottom-[4px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                    </div>
                    
                    <div 
                       className="w-full h-full bg-cover bg-center bg-[#eef2fc]"
                       style={{ backgroundImage: `url(/C1new.png?v=1)` }}
                    />
                 </div>
              </div>

              {/* Chat Box */}
              <motion.div 
                style={{ y: chatBoxY, opacity: chatBoxOpacity, x: "-50%" }}
                className="absolute -bottom-8 left-1/2 w-[340px] md:w-[460px] bg-[#111] rounded-[24px] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.15)] border border-[#222] flex flex-col gap-4 z-30"
              >
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#222] rounded-[10px] border border-[#333]">
                      <ImageIcon size={14} className="text-[#aaa]" />
                      <span className="text-[13px] font-medium text-[#eee]">Project</span>
                   </div>
                   <div className="text-[15px] text-[#fff] font-sans flex-1 truncate">
                      {typedText}
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[2px] h-[1em] bg-[#fff] align-middle ml-[2px] translate-y-[-1px]" />
                   </div>
                </div>
                
                <div className="flex justify-between items-center mt-2 px-1">
                   <button className="p-2 -ml-2 text-[#888] hover:text-[#fff] transition-colors rounded-full hover:bg-[#222]">
                      <Paperclip size={18} />
                   </button>
                   <div className="flex items-center gap-2">
                      <button className="p-2 text-[#888] hover:text-[#fff] transition-colors rounded-full hover:bg-[#222]">
                         <Box size={18} />
                      </button>
                      <motion.button 
                         className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center shadow-sm"
                         style={{ scale: sendBtnScale, opacity: sendBtnOpacity }}
                      >
                         <ArrowUp size={16} strokeWidth={3} />
                      </motion.button>
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
