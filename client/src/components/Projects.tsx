import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ImageIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>;
const PaperclipIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
const CubeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>;
const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>;

const TypewriterText = ({ text, start, onComplete }: { text: string, start: boolean, onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!start) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        setTimeout(() => {
           if(onComplete) onComplete();
        }, 400);
      }
    }, 25);

    return () => clearInterval(intervalId);
  }, [start, text, onComplete]);

  return (
    <span className="relative">
      {displayText}
      {start && displayText.length < text.length && (
        <motion.span 
           animate={{ opacity: [1, 0] }} 
           transition={{ repeat: Infinity, duration: 0.6 }} 
           className="inline-block w-[2px] h-[1.2em] bg-[#888] ml-1 align-middle translate-y-[-1px]" 
        />
      )}
    </span>
  );
};

export function Projects() {
  const [phase, setPhase] = useState(0); 
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  useEffect(() => {
    if (isInView && phase === 0) {
      setTimeout(() => setPhase(1), 500);
    }
  }, [isInView, phase]);

  useEffect(() => {
    if (phase === 2) {
      setTimeout(() => setPhase(3), 1200);
    }
  }, [phase]);

  const projects = [
    {
      id: "crm-ai",
      title: <>Transforming CRM workflows with an <span className="font-serif italic font-normal text-white">AI-Agent Builder</span> as an execution layer</>,
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
      title: <>Building CRM with the <span className="font-serif italic font-normal text-white">Genesis Design System</span></>,
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
      title: <>Building CRM analytics and a custom <span className="font-serif italic font-normal text-white">dashboard builder</span></>,
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
    <section id="work" className="relative w-full bg-[#0f0f0f] pb-32 px-6 md:px-12 pt-32 z-20 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f8f9fa] to-[#0f0f0f] opacity-10 pointer-events-none -translate-y-full z-10" />
      
      <div className="flex flex-col items-center text-center mb-24 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="text-[#888] text-[10px] md:text-[12px] tracking-[0.2em] uppercase mb-6 font-mono">
            Agentic Intelligence
          </div>
          <h2 className="text-[36px] md:text-[56px] font-medium text-[#f5f5f5] tracking-[-0.03em] leading-[1.1] font-serif mb-6">
            Thinking, in Systems
          </h2>
          <p className="text-[15px] md:text-[18px] text-[#888] max-w-[540px] leading-[1.6] font-sans mx-auto">
            Design decisions don't happen in isolation. I unify color, layout, and voice into cohesive product worlds, built to scale.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto relative flex justify-center items-start min-h-[600px] z-10 pb-16">
        <motion.div layout className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center">
          {projects.map((project, i) => {
            if (phase < 3 && i !== 0) return null;
            const isGenerating = phase < 3;

            return (
               <motion.div
                 layout
                 key={project.id}
                 initial={i !== 0 ? { opacity: 0, x: -40 } : false}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: i !== 0 ? i * 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
                 className="w-full md:w-[calc(33.333%-1.5rem)] max-w-[400px] shrink-0 flex flex-col group"
               >
                 {/* Top Bar */}
                 <motion.div layout className="flex items-center justify-between text-[#555] text-[11px] mb-3 px-1 font-mono tracking-wide">
                   <div className="flex items-center gap-2">
                     <ImageIcon />
                     <span>Image</span>
                   </div>
                   <span>720 x 960</span>
                 </motion.div>

                 {/* Image Wrapper */}
                 <motion.div layout className="relative w-full aspect-[4/5] rounded-[16px] overflow-visible">
                   <div className={`absolute inset-0 rounded-[16px] overflow-hidden ${project.imageBg || 'bg-[#161616]'} border border-[#2a2a2a] shadow-[0_0_40px_rgba(0,0,0,0.2)]`}>
                     {project.isBgImage ? (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isGenerating ? 0.02 : 1 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 w-full h-full bg-cover bg-center origin-center group-hover:scale-[1.03] transition-transform duration-700"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                     ) : (
                        <motion.img 
                          src={project.image} 
                          alt="Project Image" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isGenerating ? 0.02 : 1 }}
                          transition={{ duration: 1 }}
                          className="w-full h-full object-cover object-left-top origin-center group-hover:scale-[1.03] transition-transform duration-700"
                        />
                     )}

                     {/* Placeholder Grid Lines / Loading */}
                     <AnimatePresence>
                       {isGenerating && (
                         <motion.div
                           exit={{ opacity: 0 }}
                           className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] z-10"
                         >
                           <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="w-16 h-16 text-[#222]">
                             <CubeIcon className="w-16 h-16" />
                           </motion.div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>

                   {/* Prompt Box */}
                   <AnimatePresence>
                     {i === 0 && phase < 3 && (
                        <motion.div
                           key="prompt-box"
                           exit={{ opacity: 0, y: 15, scale: 0.95 }}
                           transition={{ duration: 0.3 }}
                           className="absolute -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 w-[calc(100%+32px)] md:w-[130%] min-w-[320px] max-w-[480px] z-50"
                        >
                           <div className="bg-[#151515] border border-[#2a2a2a] rounded-[24px] p-4 flex flex-col gap-4 shadow-[0_24px_48px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                              <div className="flex items-start gap-3">
                                <div className="flex items-center gap-1.5 bg-[#222] border border-[#333] rounded-lg px-2.5 py-1.5 shrink-0 mt-0.5">
                                  <SparkleIcon className="w-3.5 h-3.5 text-[#ccc]" />
                                  <span className="text-[#ccc] text-[11px] font-medium tracking-wide">Projects</span>
                                </div>
                                <div className="text-[#eee] text-[14px] leading-[1.6] flex-1 pt-1 min-h-[44px]">
                                  <TypewriterText
                                     text="Create a set of comprehensive case studies for complex B2B systems."
                                     start={phase >= 1}
                                     onComplete={() => setPhase(2)}
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-1 pl-1 pr-1">
                                 <PaperclipIcon className="text-[#555] w-5 h-5 transition-colors" />
                                 <div className="flex items-center gap-3">
                                    <CubeIcon className="text-[#555] w-5 h-5 transition-colors" />
                                    <motion.button
                                       animate={{
                                         backgroundColor: phase >= 2 ? "#fff" : "#222",
                                         color: phase >= 2 ? "#000" : "#555"
                                       }}
                                       className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                                    >
                                       <ArrowUpIcon className="w-4 h-4" />
                                    </motion.button>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )}
                   </AnimatePresence>
                 </motion.div>

                 {/* Content */}
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: isGenerating ? 0 : 1, y: isGenerating ? 10 : 0 }}
                   transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                   className="mt-8 px-1 flex flex-col gap-5"
                 >
                   <h3 className="text-[#f5f5f5] text-[20px] font-medium leading-[1.3] tracking-[-0.01em]">
                     {project.title}
                   </h3>
                   <ul className="space-y-3 text-[#888] text-[13px] leading-[1.6]">
                      {project.bullets.map((b, idx) => (
                         <li key={idx} className="flex gap-3 items-start">
                           <span className="bg-[#444] mt-2 w-1.5 h-1.5 rounded-full shrink-0"></span>
                           <span>{b}</span>
                         </li>
                      ))}
                   </ul>
                   <div className="pt-2">
                     <Link href={project.link} className="inline-flex items-center gap-2 text-[12px] text-white font-medium group/link tracking-wide uppercase">
                       <span className="border-b border-[#333] group-hover/link:border-white transition-colors pb-0.5">View Case Study</span>
                       <ArrowUpIcon className="w-3.5 h-3.5 rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                     </Link>
                   </div>
                 </motion.div>
               </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
