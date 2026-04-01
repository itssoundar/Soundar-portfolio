import { Link } from "wouter";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Image as ImageIcon, Paperclip, Box, ArrowUp } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll over the interactive pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Stage 1: Chat appears (0.05 -> 0.2)
  // Stage 4: Chat moves away (downward) and fades out (0.45 -> 0.6)
  const chatY = useTransform(scrollYProgress, [0.05, 0.2, 0.45, 0.6], [40, 0, 0, 60]);
  const chatOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.45, 0.6], [0, 1, 1, 0]);

  // Stage 2: Typing Interaction (0.2 -> 0.4)
  const textToType = "Generate a complete CRM dashboard";
  const [typedText, setTypedText] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let progress = (latest - 0.2) / 0.2; 
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    setTypedText(textToType.slice(0, Math.round(progress * textToType.length)));
  });

  // Stage 3: Send button animates (0.42 -> 0.48)
  const sendBtnScale = useTransform(scrollYProgress, [0.42, 0.45, 0.48], [1, 0.85, 1]);
  const sendBtnOpacity = useTransform(scrollYProgress, [0.42, 0.45, 0.48], [1, 0.7, 1]);

  // Stage 4: Image fades out without any scale or position changes (0.45 -> 0.6)
  const imageLayerOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
  
  // Stage 4: Card 1 transitions - Fades in EXACTLY over the image, scaling 80% -> 100% (0.45 -> 0.65)
  const card1Scale = useTransform(scrollYProgress, [0.45, 0.65], [0.8, 1]);
  const card1Opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

  // To prevent interaction with card1 while it's hidden
  const [card1Active, setCard1Active] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCard1Active(latest >= 0.45);
  });

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

  const renderCardContent = (project: typeof projects[0]) => (
    <div className="w-full bg-white rounded-[24px] md:rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0]/60 overflow-hidden flex flex-col md:flex-row group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500">
      {/* Left Side: Image */}
      <div className="w-full md:w-[50%] lg:w-[55%] h-[280px] sm:h-[400px] md:h-auto relative overflow-hidden bg-[#f8f9fa] border-b md:border-b-0 md:border-r border-[#e2e8f0]/60">
        <div 
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
          <button className="px-7 py-3.5 rounded-[12px] bg-[#111] text-white font-medium text-[14px] md:text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 w-fit pointer-events-auto">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <section id="work" className="relative w-full bg-[#f8f9fa] pb-32 px-4 md:px-12 lg:px-[86px] pt-12 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
      
      <div className="relative z-20 w-full max-w-[1200px] mx-auto overflow-visible">
        
        {/* Scroll Interaction Container */}
        <div ref={containerRef} className="h-[250vh] relative w-full">
          
          {/* Pinned Section */}
          <div className="sticky top-[12vh] w-full flex flex-col items-center pt-8">
            
            {/* Initial State: Heading & Subtext */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] tracking-[-0.02em] leading-[1.1] font-sans mb-4">
                Selected <span className="font-serif italic font-normal text-[#111]">Projects</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#555] max-w-[600px] leading-relaxed">
                From navigating early-stage ambiguity to building scalable systems, I design solutions that convert innovation into measurable impact.
              </p>
            </div>

            {/* Visual Transformation Area */}
            <div className="relative w-full flex justify-center items-center">
              
              {/* Stage 4: Card 1 reveals precisely where the image was */}
              <motion.div 
                style={{ opacity: card1Opacity, scale: card1Scale }}
                className={`w-full relative z-10 transition-all duration-300 ${card1Active ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {renderCardContent(projects[0])}
              </motion.div>

              {/* Stage 1 & 3: Background Image and Chat Layer */}
              <motion.div 
                style={{ opacity: imageLayerOpacity }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
              >
                {/* Figma Preview Container */}
                <div className="w-[300px] md:w-[400px] relative">
                  {/* Top Bar */}
                  <div className="flex justify-between items-end mb-2 text-[#111] px-[2px]">
                    <div className="flex items-center gap-2 text-[12px] font-medium tracking-wide">
                      <ImageIcon size={13} className="opacity-80" />
                      <span>Image</span>
                    </div>
                    <div className="text-[12px] font-medium text-[#888] tracking-widest">
                      720 x 960
                    </div>
                  </div>

                  {/* Image with Outline */}
                  <div className="w-full aspect-[3/4] relative">
                    <div className="absolute inset-0 border-[1.5px] border-[#0d99ff] z-20 pointer-events-none">
                      <div className="absolute -top-[4px] -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute -top-[4px] -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute -bottom-[4px] -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute -bottom-[4px] -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff]"></div>
                      <div className="absolute top-1/2 -left-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                      <div className="absolute top-1/2 -right-[4px] w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-y-1/2"></div>
                      <div className="absolute -top-[4px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                      <div className="absolute -bottom-[4px] left-1/2 w-2 h-2 bg-white border-[1.5px] border-[#0d99ff] -translate-x-1/2"></div>
                    </div>
                    <div 
                      className="w-full h-full bg-cover bg-center bg-[#eef2fc]"
                      style={{ backgroundImage: `url(${projects[0].image})` }}
                    />
                  </div>

                  {/* Chat Box Overlay (Stage 1 & 2) */}
                  <motion.div 
                    style={{ y: chatY, opacity: chatOpacity }}
                    className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 w-[340px] md:w-[460px] bg-[#111] rounded-[20px] p-3 shadow-[0_24px_48px_rgba(0,0,0,0.25)] border border-[#222] flex flex-col gap-3 z-40 pointer-events-auto"
                  >
                    <div className="flex items-center gap-2 px-1">
                       <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#222] rounded-[8px] border border-[#333]">
                          <ImageIcon size={14} className="text-[#aaa]" />
                          <span className="text-[13px] font-medium text-[#eee]">Project</span>
                       </div>
                       <div className="text-[15px] text-[#fff] font-sans flex-1 truncate flex items-center">
                          {typedText}
                          <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-[2px] h-[1em] bg-[#fff] ml-[2px]" />
                       </div>
                    </div>
                    
                    <div className="flex justify-between items-center px-1">
                       <button className="text-[#888]">
                          <Paperclip size={18} />
                       </button>
                       <div className="flex items-center gap-3">
                          <button className="text-[#888]">
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
              </motion.div>

            </div>
          </div>
        </div>

        {/* Stage 5: Expansion - Sequential Cards */}
        <div className="flex flex-col gap-12 md:gap-24 relative z-20 mt-12 md:mt-24">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15 
              }}
              className="w-full"
            >
              {renderCardContent(project)}
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}