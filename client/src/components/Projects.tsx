import { Link } from "wouter";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { Image as ImageIcon, Paperclip, Box, ArrowUp, Component } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 12%", "end end"]
  });

  // Chat interface appears (0.15 -> 0.25) - Starts later so the user sees the bare Figma bounding box first
  // Stays during typing (0.25 -> 0.40) and button press (0.40 -> 0.42)
  // Slides down and fades out (0.45 -> 0.55)
  const chatBoxY = useTransform(scrollYProgress, [0.00, 0.15, 0.25, 0.45, 0.55], [150, 150, 0, 0, 50]);
  const chatBoxOpacity = useTransform(scrollYProgress, [0.00, 0.15, 0.25, 0.45, 0.55], [0, 0, 1, 1, 0]);
  const chatBoxScale = useTransform(scrollYProgress, [0.45, 0.55], [1, 0.9]);

  const textToType = "Generate a complete CRM dashboard...";
  const [typedText, setTypedText] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let progress = (latest - 0.25) / 0.15; // 0.25 to 0.40
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    setTypedText(textToType.slice(0, Math.round(progress * textToType.length)));
  });

  const sendBtnScale = useTransform(scrollYProgress, [0.40, 0.41, 0.42], [1, 0.85, 1]);
  const sendBtnOpacity = useTransform(scrollYProgress, [0.40, 0.41, 0.42], [1, 0.7, 1]);

  // Initial Image and Figma fades out (0.45 -> 0.55)
  const initialImageOpacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);
  const initialImageScale = useTransform(scrollYProgress, [0.45, 0.55], [1, 0.8]);

  // Expanding Card Animation (0.55 -> 0.75)
  const expandProgress = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const containerWidthTemplate = useMotionTemplate`calc(420px + (100% - 420px) * ${expandProgress})`;
  const containerRadiusTemplate = useMotionTemplate`calc(16px + (32px - 16px) * ${expandProgress})`;
  
  // Img Width matching lg:w-[55%]
  const imgWidthTemplate = useMotionTemplate`calc(100% - 45% * ${expandProgress})`;
  // Img Height from 560px to 100%
  const imgHeightTemplate = useMotionTemplate`calc(560px + (100% - 560px) * ${expandProgress})`;
  
  // Content Width matching lg:w-[45%]
  const contentWidthTemplate = useMotionTemplate`calc(45% * ${expandProgress})`;
  
  // Figma opacity (0.45 -> 0.55)
  const figmaOpacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);
  const figmaScale = useTransform(scrollYProgress, [0.45, 0.55], [1, 1.05]);
  const expandedImageOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  
  // Shimmer Opacity (0.55 -> 0.65 to show, 0.80 -> 0.90 to hide)
  const shimmerOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.80, 0.90], [0, 1, 1, 0]);
  // Content Opacity (0.85 -> 0.95)
  const contentOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  const containerStyle = {
    width: containerWidthTemplate,
    minHeight: "320px",
    backgroundColor: useTransform(scrollYProgress, [0.55, 0.75], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]),
    borderColor: useTransform(scrollYProgress, [0.55, 0.75], ["rgba(226, 232, 240, 0)", "rgba(226, 232, 240, 0.6)"]),
    boxShadow: useTransform(scrollYProgress, [0.55, 0.75], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 24px rgba(0,0,0,0.06)"]),
    borderRadius: containerRadiusTemplate,
    borderWidth: useTransform(scrollYProgress, [0.55, 0.56], ["0px", "1px"]),
    borderStyle: "solid",
    overflow: useTransform(scrollYProgress, (latest) => latest > 0.50 ? "hidden" : "visible"),
  } as any;

  const projects = [
    {
      id: "crm-ai",
      title: <>Transforming CRM workflows with an <span className="font-serif italic font-normal">AI-Agent Builder</span> as an execution layer</>,
      image: "/project-hero.png",
      bullets: [
        "Generate hiring workflows instantly through natural language prompts.",
        "Automatically create analytics dashboards from recruiter questions.",
        "Reduce manual configuration by translating user intent into structured CRM actions."
      ],
      link: "/project/crm-ai",
    },
    {
      id: "design-system",
      title: <>Building CRM with the <span className="font-serif italic font-normal">Genesis Design System</span></>,
      image: "/C2new.png?v=1",
      bullets: [
        "Built scalable components and tokens to unify UI across CRM modules.",
        "Reduced UI inconsistencies and improved design-to-development efficiency.",
        "Enabled faster feature delivery with reusable system patterns."
      ],
      link: "/project/design-system",
    },
    {
      id: "conversational-b2b",
      title: <>Building CRM analytics and a custom <span className="font-serif italic font-normal">dashboard builder</span></>,
      image: "/C3.png",
      bullets: [
        "Designed centralized dashboards to monitor hiring pipeline performance.",
        "Enabled self-serve analytics through a flexible dashboard builder.",
        "Surfaced insights on hiring velocity, recruiter productivity, and source effectiveness."
      ],
      link: "/project/conversational-b2b",
    }
  ];

  const project1 = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section id="work" className="relative w-full bg-[#f8f9fa] pb-32 px-4 md:px-12 lg:px-[86px] pt-12 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1200px] mx-auto overflow-visible">
        
        {/* Scroll Interaction Area */}
        <div ref={containerRef} className="relative h-[150vh] w-full">
          <div className="sticky top-[8vh] md:top-[12vh] w-full flex flex-col items-center justify-start pt-4 md:pt-10">
            
            {/* Section Header (Now inside sticky so it stays during morph) */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-12">
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

            <div className="relative flex flex-col items-center w-full">
              
              {/* Expanding Card */}
              <motion.div 
                className="relative mx-auto flex flex-col md:flex-row z-20 transition-transform duration-500 hover:-translate-y-1 items-stretch"
                style={containerStyle}
              >
                {/* Shimmer Overlay */}
                <motion.div
                  className="absolute inset-0 z-40 bg-white"
                  style={{ opacity: shimmerOpacity }}
                >
                  <div className="w-full h-full shimmer-effect" />
                </motion.div>

                {/* Left Side: Image / Figma Preview */}
                <motion.div 
                  className="relative flex-shrink-0 flex items-center justify-center"
                  style={{ 
                    width: imgWidthTemplate, 
                    height: imgHeightTemplate,
                    overflow: useTransform(scrollYProgress, (latest) => latest > 0.48 ? "hidden" : "visible"),
                    backgroundColor: useTransform(scrollYProgress, [0.52, 0.72], ["rgba(248, 249, 250, 0)", "rgba(248, 249, 250, 1)"]),
                    borderRightWidth: useTransform(scrollYProgress, [0.52, 0.53], ["0px", "1px"]),
                    borderColor: "rgba(226, 232, 240, 0.6)",
                  }}
                >
                  
                  {/* Figma Overlay */}
                  <motion.div 
                    style={{ opacity: figmaOpacity, scale: figmaScale }} 
                    className="absolute w-[420px] h-[560px] z-30 pointer-events-none"
                  >
                     {/* Top Bar */}
                     <div className="absolute -top-[30px] left-0 right-0 flex justify-between items-end mb-2 text-[#111] px-[2px]">
                        <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                           <ImageIcon size={13} className="opacity-80" />
                           <span>Image</span>
                        </div>
                        <div className="text-[12px] font-medium text-[#888] tracking-widest">
                           720 x 960
                        </div>
                     </div>
                     {/* Handles */}
                     <div className="absolute inset-0 border-[1.5px] border-[#0d99ff]">
                        <div className="absolute -top-[4px] -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                        <div className="absolute -top-[4px] -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                        <div className="absolute -bottom-[4px] -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                        <div className="absolute -bottom-[4px] -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                        <div className="absolute top-1/2 -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                        <div className="absolute top-1/2 -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                        <div className="absolute -top-[4px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                        <div className="absolute -bottom-[4px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                     </div>
                  </motion.div>

                  {/* Initial Shrunk Image */}
                  <motion.img 
                    src={project1.image}
                    alt="Project preview"
                    className="absolute z-20 w-[420px] h-[560px] object-cover object-center"
                    style={{ opacity: initialImageOpacity, scale: figmaScale }}
                  />

                  {/* Full Expanded Image */}
                  <motion.img 
                    src={project1.image}
                    alt="Project expanded"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 z-10"
                    style={{ opacity: expandedImageOpacity }}
                  />
                </motion.div>

                {/* Right Side: Content */}
                <motion.div 
                  className="overflow-hidden flex flex-col justify-center bg-white flex-shrink-0"
                  style={{ width: contentWidthTemplate, opacity: contentOpacity }}
                >
                  <div className="w-[100vw] md:w-[calc(1200px*0.45)] p-6 md:p-8 lg:p-12 flex flex-col justify-center h-full">
                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-[#111] tracking-[-0.02em] leading-[1.25] mb-4">
                      {project1.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-5">
                      {project1.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#555] text-[14px] leading-[1.5]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#333] mt-[7px] flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={project1.link}>
                      <button className="px-5 py-2.5 rounded-[10px] bg-[#111] text-white font-medium text-[14px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 w-fit pointer-events-auto">
                        View Project
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Chat Box */}
              <motion.div 
                style={{ y: chatBoxY, opacity: chatBoxOpacity, x: "-50%", scale: chatBoxScale }}
                className="absolute top-[280px] left-1/2 w-[340px] md:w-[460px] bg-[#111] rounded-[24px] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.2)] border border-[#222] flex flex-col gap-3 z-40 pointer-events-none"
              >
                {/* Top Row: Project Badge & Text */}
                <div className="flex items-center gap-3 overflow-hidden pl-1">
                   <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#222] rounded-[10px] border border-[#333] flex-shrink-0">
                      <Component size={14} className="text-[#aaa]" />
                      <span className="text-[13px] font-medium text-[#eee]">Project</span>
                   </div>
                   <div className="text-[15px] text-[#fff] font-sans flex-1 whitespace-nowrap overflow-hidden flex items-center">
                      {typedText}
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[2px] h-[1em] bg-[#fff] ml-[2px]" />
                   </div>
                </div>
                
                {/* Bottom Row: Icons & Send */}
                <div className="flex items-center justify-between mt-1 px-1">
                   <button className="p-2 -ml-2 text-[#888] transition-colors rounded-full">
                      <Paperclip size={18} />
                   </button>
                   <div className="flex items-center gap-2">
                     <button className="p-2 text-[#888] transition-colors rounded-full">
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

            </div>
          </div>
        </div>

        {/* Remaining Project Cards */}
        <div className="flex flex-col gap-8 md:gap-16 pb-24 relative z-20 mt-12 md:mt-16">
          {remainingProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1
                }}
                className="w-full bg-white rounded-[24px] md:rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0]/60 overflow-hidden flex flex-col md:flex-row group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              >
                {/* Left Side: Image */}
                <div className="w-full md:w-[50%] lg:w-[55%] h-[260px] sm:h-[320px] md:h-auto relative overflow-hidden bg-[#f8f9fa] border-b md:border-b-0 md:border-r border-[#e2e8f0]/60">
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-cover bg-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[50%] lg:w-[45%] p-6 md:p-8 flex flex-col justify-center bg-white">
                  <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-[#111] tracking-[-0.02em] leading-[1.25] mb-4">
                    {project.title}
                  </h3>
                  
                  <ul className="space-y-2 mb-5">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#555] text-[14px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#333] mt-[7px] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={project.link}>
                    <button className="px-5 py-2.5 rounded-[10px] bg-[#111] text-white font-medium text-[14px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 w-fit">
                      View Project
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
