import { Link } from "wouter";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { Image as ImageIcon, Paperclip, Box, ArrowUp, Sparkles } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Chat interface appears (0.3 -> 0.45)
  // Stays during typing (0.45 -> 0.6) and button press (0.6 -> 0.65)
  // Slides down and fades out (0.65 -> 0.75)
  const chatBoxY = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.75], [100, 0, 0, 150]);
  const chatBoxOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.75], [0, 1, 1, 0]);
  const chatBoxScale = useTransform(scrollYProgress, [0.65, 0.75], [1, 0.9]);

  const textToType = "Generate a complete CRM dashboard";
  const [typedText, setTypedText] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let progress = (latest - 0.45) / 0.15; // 0.45 to 0.6
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    setTypedText(textToType.slice(0, Math.round(progress * textToType.length)));
  });

  const sendBtnScale = useTransform(scrollYProgress, [0.6, 0.62, 0.65], [1, 0.85, 1]);
  const sendBtnOpacity = useTransform(scrollYProgress, [0.6, 0.62, 0.65], [1, 0.7, 1]);

  // Small Preview Card Fades Out
  const smallCardOpacity = useTransform(scrollYProgress, [0.65, 0.68], [1, 0]);
  const smallCardScale = useTransform(scrollYProgress, [0.65, 0.68], [1, 0.95]);

  // Big Generated Card Fades In
  const bigCardOpacity = useTransform(scrollYProgress, [0.68, 0.72], [0, 1]);
  const bigCardScale = useTransform(scrollYProgress, [0.68, 0.75], [0.95, 1]);
  const bigCardY = useTransform(scrollYProgress, [0.68, 0.75], [40, 0]);
  
  // Generation Wipe Effect for Image
  const generateProgress = useTransform(scrollYProgress, [0.68, 0.75], [0, 100]);
  const clipPath = useMotionTemplate`polygon(0 0, 100% 0, 100% ${generateProgress}%, 0 ${generateProgress}%)`;

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

  const project1 = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section id="work" className="relative w-full bg-[#f8f9fa] pb-32 px-4 md:px-12 lg:px-[86px] pt-12 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
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
            <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] tracking-[-0.02em] leading-[1.1] font-sans mb-4">
              Selected <span className="font-serif italic font-normal text-[#111]">Projects</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#555] max-w-[600px] leading-relaxed">
              From navigating early-stage ambiguity to building scalable systems, I design solutions that convert innovation into measurable impact.
            </p>
          </motion.div>
        </div>

        {/* Scroll Interaction Area */}
        <div ref={containerRef} className="relative h-[200vh] w-full">
          <div className="sticky top-[15vh] w-full flex flex-col items-center justify-center pt-10 mt-16">
            <div className="relative flex flex-col items-center w-full min-h-[500px]">
              
              {/* STATE 1: SMALL PREVIEW CARD (Fades Out) */}
              <motion.div 
                className="absolute top-0 z-20 w-[340px] rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2e8f0]/60"
                style={{ opacity: smallCardOpacity, scale: smallCardScale }}
              >
                <div className="w-full aspect-[4/3] bg-[#fafafa] relative overflow-hidden flex items-center justify-center">
                    {/* Placeholder skeleton before generation */}
                    <div className="w-full h-full flex flex-col gap-4 p-6 opacity-40">
                        <div className="flex justify-between items-center pb-2">
                           <div className="flex flex-col gap-2 w-1/2">
                              <div className="h-4 bg-[#e2e8f0] rounded w-3/4" />
                              <div className="h-3 bg-[#e2e8f0] rounded w-1/2" />
                           </div>
                           <div className="h-8 w-8 bg-[#e2e8f0] rounded-full" />
                        </div>
                        <div className="w-full h-24 bg-[#e2e8f0] rounded-xl" />
                        <div className="flex gap-3 flex-1">
                           <div className="flex-1 bg-[#e2e8f0] rounded-xl" />
                           <div className="flex-1 bg-[#e2e8f0] rounded-xl" />
                        </div>
                    </div>
                </div>
              </motion.div>

              {/* STATE 2: BIG GENERATED PROJECT CARD (Fades In) */}
              <motion.div 
                className="absolute top-0 z-30 w-full max-w-[1200px] flex flex-col md:flex-row bg-white rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0]/60 overflow-hidden"
                style={{ opacity: bigCardOpacity, scale: bigCardScale, y: bigCardY }}
              >
                {/* Left Side: Generated Image with Wipe Effect */}
                <div className="w-full md:w-[55%] h-[453px] lg:h-[500px] relative flex-shrink-0 border-b md:border-b-0 md:border-r border-[#e2e8f0]/60 overflow-hidden bg-[#fafafa]">
                  
                  {/* Grid background for "generation" feel */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Wipe Reveal Image */}
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-cover bg-top z-20"
                    style={{ 
                       backgroundImage: `url(${project1.image})`,
                       clipPath: clipPath
                    }}
                  >
                     {/* Scanning Line at the edge of the wipe */}
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0d99ff] shadow-[0_0_15px_rgba(13,153,255,0.8)]" />
                  </motion.div>

                  {/* "Generating" Overlay Text (Visible before fully generated) */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 z-10 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#0d99ff]/20 shadow-[0_4px_20px_rgba(13,153,255,0.15)]"
                    style={{ opacity: useTransform(scrollYProgress, [0.73, 0.74], [1, 0]) }}
                  >
                     <Sparkles size={16} className="text-[#0d99ff] animate-pulse" />
                     <span className="text-[14px] font-medium text-[#0d99ff]">Generating UI...</span>
                  </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white">
                  <h3 className="text-[26px] md:text-[32px] lg:text-[34px] font-medium text-[#111] tracking-[-0.02em] leading-[1.25] mb-8">
                    {project1.title}
                  </h3>
                  
                  <ul className="space-y-4 mb-10">
                    {project1.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3.5 text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#333] mt-[10px] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={project1.link}>
                    <button className="px-7 py-3.5 rounded-[12px] bg-[#111] text-white font-medium text-[14px] md:text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 w-fit pointer-events-auto">
                      View Project
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Chat Box */}
              <motion.div 
                style={{ y: chatBoxY, opacity: chatBoxOpacity, x: "-50%", scale: chatBoxScale }}
                className="absolute top-[480px] lg:top-[530px] left-1/2 w-[340px] md:w-[460px] bg-[#111] rounded-[24px] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.15)] border border-[#222] flex flex-col gap-4 z-50 pointer-events-none"
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
        <div className="flex flex-col gap-12 md:gap-24 pb-24 relative z-20 mt-[30vh]">
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
                <div className="w-full md:w-[50%] lg:w-[55%] h-[280px] sm:h-[400px] md:h-auto relative overflow-hidden bg-[#f8f9fa] border-b md:border-b-0 md:border-r border-[#e2e8f0]/60">
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[50%] lg:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white">
                  <h3 className="text-[26px] md:text-[32px] lg:text-[34px] font-medium text-[#111] tracking-[-0.02em] leading-[1.25] mb-8">
                    {project.title}
                  </h3>
                  
                  <ul className="space-y-4 mb-10">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3.5 text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#333] mt-[10px] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={project.link}>
                    <button className="px-7 py-3.5 rounded-[12px] bg-[#111] text-white font-medium text-[14px] md:text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 w-fit">
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
