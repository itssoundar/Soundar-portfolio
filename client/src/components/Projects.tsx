import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Typing effect component
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, 30); // Speed of typing
      return () => clearInterval(intervalId);
    }
  }, [isInView, text]);

  return (
    <div ref={containerRef} className="inline-block relative">
      <span>{displayText}</span>
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-[#111] ml-1 align-middle translate-y-[-1px]"
      />
    </div>
  );
};

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: "crm-ai",
      title: <>Transforming CRM workflows with an <span className="font-serif italic font-normal text-[1.15em]">AI-Agent Builder</span> as an execution layer</>,
      image: "/C1new.png?v=1",
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
      image: "/C2new.png?v=1",
      bullets: [
        "Built scalable components and tokens to unify UI across CRM modules.",
        "Reduced UI inconsistencies and improved design-to-development efficiency.",
        "Enabled faster feature delivery with reusable system patterns."
      ],
      imageBg: "bg-[#f5eefc]",
      isBgImage: true,
      link: "/project/design-system"
    },
    {
      id: "conversational-b2b",
      title: <>Building CRM analytics and a custom <span className="font-serif italic font-normal text-[1.15em]">dashboard builder</span></>,
      image: "/C3.png",
      bullets: [
        "Designed centralized dashboards to monitor hiring pipeline performance.",
        "Enabled self-serve analytics through a flexible dashboard builder.",
        "Surfaced insights on hiring velocity, recruiter productivity, and source effectiveness."
      ],
      imageBg: "bg-[#eefcf5]",
      hoverBg: "hover:bg-[#FCF9F7]",
      isBgImage: true,
      link: "/project/conversational-b2b"
    }
  ];

  return (
    <section id="work" className="relative w-full bg-[#f8f9fa] pb-32 px-6 md:px-[86px] pt-20 z-20" ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-[#f8f9fa]/80 to-[#f8f9fa] pointer-events-none -translate-y-full z-10" />
      <div className="relative z-20 w-full max-w-[1100px] mx-auto overflow-visible">
        {/* Chat Interface / Section Header */}
        <div className="flex flex-col items-start mb-24 max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex justify-end mb-6"
          >
            <div className="bg-[#111] text-white px-6 py-4 rounded-2xl rounded-tr-sm shadow-md max-w-[80%]">
              <p className="text-[16px] md:text-[20px] font-sans leading-relaxed">
                Show me some of the recent projects that you've built. Focus on complex B2B solutions.
              </p>
            </div>
          </motion.div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] flex items-center justify-center flex-shrink-0 shadow-sm border border-white">
              <span className="text-[#111] font-serif italic text-lg">H</span>
            </div>
            
            <div className="pt-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mb-6 flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full border border-[#e2e8f0] w-fit shadow-sm backdrop-blur-sm"
              >
                <div className="flex space-x-1">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-[#555] rounded-full"></motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#555] rounded-full"></motion.div>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#555] rounded-full"></motion.div>
                </div>
                <span className="text-xs font-medium text-[#555] uppercase tracking-wider">Generating</span>
              </motion.div>

              <h2 className="text-[28px] md:text-[36px] font-medium text-[#111] tracking-[-0.02em] leading-[1.3] font-sans mb-4">
                <TypewriterText text="Here are a few selected projects where I tackled early-stage ambiguity to build scalable design systems." />
              </h2>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-10 md:gap-16 pb-24 relative">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.5 + (index * 0.2), // Wait for chat animation
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <Link 
                  href={project.link}
                  className={`block bg-white ${project.hoverBg || ''} rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e2e8f0]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group`}
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
                          <h3 className="text-[22px] md:text-[28px] font-medium text-[#111] tracking-[-0.01em] leading-[1.3] font-sans">
                            {project.title}
                          </h3>
                        </div>
                        
                        <ul className="space-y-4 text-[#444] text-[16px] md:text-[18px] leading-[1.6] mb-10 font-normal">
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
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
