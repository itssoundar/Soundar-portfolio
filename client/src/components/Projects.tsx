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

  // Timeline mapped to scroll progress (0 to 1):
  // 0.00 - 0.05: Initial frame (Center) fades in
  // 0.10 - 0.15: Chatbox slides up and fades in
  // 0.15 - 0.30: Text types out
  // 0.30 - 0.35: Send button pressed
  // 0.35 - 0.40: Chatbox drops down and fades out, bounding box fades out
  // 0.40 - 0.45: Frame 1 moves left, Frame 3 moves right, scaling down slightly
  // 0.45 - 0.50: Frame 1 image fades in
  // 0.50 - 0.55: Frame 2 image fades in (replacing placeholder)
  // 0.55 - 0.60: Frame 3 image fades in
  // 0.70 - 0.80: All frames slide up and fade out

  const f2Opacity = useTransform(scrollYProgress, [0, 0.05, 0.7, 0.8], [0, 1, 1, 0]);
  
  const chatBoxY = useTransform(scrollYProgress, [0.1, 0.15, 0.35, 0.4], [50, 0, 0, 50]);
  const chatBoxOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.35, 0.4], [0, 1, 1, 0]);

  const seedImageOpacity = useTransform(scrollYProgress, [0.35, 0.4], [1, 0]);
  const boundingBoxOpacity = useTransform(scrollYProgress, [0.35, 0.4], [1, 0]);

  const textToType = "Generate a set of CRM dashboard variations for different roles.";
  const [typedText, setTypedText] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let progress = (latest - 0.15) / 0.15; 
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    setTypedText(textToType.slice(0, Math.round(progress * textToType.length)));
  });

  const sendBtnScale = useTransform(scrollYProgress, [0.3, 0.32, 0.35], [1, 0.85, 1]);
  const sendBtnOpacity = useTransform(scrollYProgress, [0.3, 0.32, 0.35], [1, 0.7, 1]);

  const framesScale = useTransform(scrollYProgress, [0.4, 0.45], [1, 0.85]);

  const f1X = useTransform(scrollYProgress, [0.4, 0.45], ["0%", "-105%"]);
  const f3X = useTransform(scrollYProgress, [0.4, 0.45], ["0%", "105%"]);

  const f1Opacity = useTransform(scrollYProgress, [0.38, 0.42, 0.7, 0.8], [0, 1, 1, 0]);
  const f3Opacity = useTransform(scrollYProgress, [0.38, 0.42, 0.7, 0.8], [0, 1, 1, 0]);

  const gen1Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const gen2Opacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const gen3Opacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);

  const framesContainerY = useTransform(scrollYProgress, [0.7, 0.8], [0, -100]);

  const projects = [
    {
      id: "crm-ai",
      title: <>Transforming CRM workflows with an <span className="font-serif italic font-normal">AI-Agent Builder</span> as an execution layer</>,
      image: "/C1new.png?v=1",
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

  return (
    <section id="work" className="relative w-full bg-[#111] pb-32 px-4 md:px-12 lg:px-[86px] pt-24 z-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#111]/80 to-[#111] pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1200px] mx-auto overflow-visible">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-medium text-white tracking-[-0.03em] leading-[1.1] font-sans mb-4">
              Selected <span className="font-serif italic font-normal text-white">Projects</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#aaa] max-w-[600px] leading-relaxed">
              Design decisions don't happen in isolation. I unify layout, logic, and motion into cohesive systems built to scale.
            </p>
          </motion.div>
        </div>

        {/* Scroll Interaction Area */}
        <div ref={containerRef} className="relative h-[250vh] w-full">
          <div className="sticky top-[15vh] w-full flex flex-col items-center pt-10 min-h-[60vh]">
            
            <div className="relative w-[280px] md:w-[320px] h-[373px] md:h-[426px] mx-auto">
              
              {/* Scalable Container for Frames */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{ y: framesContainerY, scale: framesScale }}
              >
                {/* Frame 1 (Moves Left) */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full flex flex-col"
                  style={{ x: f1X, opacity: f1Opacity }}
                >
                   <div className="flex justify-between items-end mb-2 text-white px-[2px]">
                      <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                         <ImageIcon size={13} className="opacity-80" />
                         <span>Image</span>
                      </div>
                      <div className="text-[12px] font-medium text-[#666] tracking-widest">
                         720 x 960
                      </div>
                   </div>

                   <div className="w-full h-full relative bg-[#1a1a1a] overflow-hidden border border-[#333]">
                      <motion.div 
                         className="absolute inset-0 w-full h-full bg-cover bg-center"
                         style={{ backgroundImage: `url(${projects[0].image})`, opacity: gen1Opacity }}
                      />
                   </div>
                </motion.div>

                {/* Frame 3 (Moves Right) */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full flex flex-col"
                  style={{ x: f3X, opacity: f3Opacity }}
                >
                   <div className="flex justify-between items-end mb-2 text-white px-[2px]">
                      <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                         <ImageIcon size={13} className="opacity-80" />
                         <span>Image</span>
                      </div>
                      <div className="text-[12px] font-medium text-[#666] tracking-widest">
                         720 x 960
                      </div>
                   </div>

                   <div className="w-full h-full relative bg-[#1a1a1a] overflow-hidden border border-[#333]">
                      <motion.div 
                         className="absolute inset-0 w-full h-full bg-cover bg-center"
                         style={{ backgroundImage: `url(${projects[2].image})`, opacity: gen3Opacity }}
                      />
                   </div>
                </motion.div>

                {/* Frame 2 (Center, Initial Frame) - Rendered last so it sits on top initially */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full flex flex-col"
                  style={{ opacity: f2Opacity }}
                >
                   <div className="flex justify-between items-end mb-2 text-white px-[2px]">
                      <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                         <ImageIcon size={13} className="opacity-80" />
                         <span>Image</span>
                      </div>
                      <div className="text-[12px] font-medium text-[#666] tracking-widest">
                         720 x 960
                      </div>
                   </div>

                   <div className="w-full h-full relative bg-[#1a1a1a] overflow-hidden border border-[#333]">
                      {/* Bounding Box */}
                      <motion.div 
                        className="absolute inset-0 border-[1.5px] border-[#0d99ff] z-20 pointer-events-none"
                        style={{ opacity: boundingBoxOpacity }}
                      >
                         {/* Corner Handles */}
                         <div className="absolute -top-[4px] -left-[4px] w-2 h-2 bg-black border-[1.5px] border-[#0d99ff]"></div>
                         <div className="absolute -top-[4px] -right-[4px] w-2 h-2 bg-black border-[1.5px] border-[#0d99ff]"></div>
                         <div className="absolute -bottom-[4px] -left-[4px] w-2 h-2 bg-black border-[1.5px] border-[#0d99ff]"></div>
                         <div className="absolute -bottom-[4px] -right-[4px] w-2 h-2 bg-black border-[1.5px] border-[#0d99ff]"></div>
                         {/* Edge Handles */}
                         <div className="absolute top-1/2 -left-[4px] w-2 h-2 bg-black border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                         <div className="absolute top-1/2 -right-[4px] w-2 h-2 bg-black border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                         <div className="absolute -top-[4px] left-1/2 w-2 h-2 bg-black border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                         <div className="absolute -bottom-[4px] left-1/2 w-2 h-2 bg-black border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                      </motion.div>
                      
                      {/* Initial Placeholder (Seed) Image */}
                      <motion.div 
                         className="absolute inset-0 w-full h-full bg-cover bg-center"
                         style={{ 
                           backgroundImage: `url(${projects[1].image})`, 
                           opacity: seedImageOpacity,
                           filter: "blur(6px) brightness(0.6)" // Dim and blur it slightly like a source inspiration
                         }}
                      />

                      {/* Generated Image */}
                      <motion.div 
                         className="absolute inset-0 w-full h-full bg-cover bg-center"
                         style={{ backgroundImage: `url(${projects[1].image})`, opacity: gen2Opacity }}
                      />
                   </div>
                </motion.div>
              </motion.div>

              {/* Chat Box */}
              <motion.div 
                style={{ y: chatBoxY, opacity: chatBoxOpacity, x: "-50%" }}
                className="absolute -bottom-8 left-1/2 w-[340px] md:w-[480px] bg-[#1a1a1a] rounded-[24px] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.4)] border border-[#333] flex flex-col gap-3 z-30"
              >
                <div className="text-[14px] md:text-[15px] text-[#fff] font-sans leading-relaxed flex items-start gap-3">
                   <span className="inline-flex items-center justify-center w-8 h-8 bg-[#2a2a2a] rounded-[10px] border border-[#444] shrink-0 mt-0.5">
                      <ImageIcon size={16} className="text-[#aaa]" />
                   </span>
                   <div className="pt-1">
                     <span className="text-[#888] mr-2">Dashboards</span>
                     {typedText}
                     <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[2px] h-[1em] bg-[#fff] align-middle ml-[2px] translate-y-[-1px]" />
                   </div>
                </div>
                
                <div className="flex justify-between items-center mt-1">
                   <button className="p-2 -ml-2 text-[#666] hover:text-[#fff] transition-colors rounded-full hover:bg-[#2a2a2a]">
                      <Paperclip size={18} />
                   </button>
                   <div className="flex items-center gap-2">
                      <button className="p-2 text-[#666] hover:text-[#fff] transition-colors rounded-full hover:bg-[#2a2a2a]">
                         <Box size={18} />
                      </button>
                      <motion.button 
                         className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.2)]"
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

        {/* Project Cards - Horizontal Layout */}
        <div className="flex flex-col gap-12 md:gap-24 pb-24 relative z-20 -mt-[60vh] md:-mt-[90vh]">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="w-full bg-[#1a1a1a] rounded-[24px] md:rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-[#333] overflow-hidden flex flex-col md:flex-row group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1"
              >
                {/* Left Side: Image */}
                <div className="w-full md:w-[50%] lg:w-[55%] h-[280px] sm:h-[400px] md:h-auto relative overflow-hidden bg-[#222] border-b md:border-b-0 md:border-r border-[#333]">
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[50%] lg:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <h3 className="text-[26px] md:text-[32px] lg:text-[34px] font-medium text-white tracking-[-0.02em] leading-[1.25] mb-8">
                    {project.title}
                  </h3>
                  
                  <ul className="space-y-4 mb-10">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3.5 text-[#aaa] text-[15px] md:text-[16px] leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#555] mt-[10px] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={project.link}
                  >
                    <button className="px-7 py-3.5 rounded-[12px] bg-white text-[#111] font-medium text-[14px] md:text-[15px] shadow-[0_4px_14px_rgba(255,255,255,0.1)] hover:bg-[#f0f0f0] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)] transition-all duration-300 w-fit">
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
