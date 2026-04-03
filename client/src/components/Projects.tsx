import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { Image as ImageIcon, Paperclip, Box, ArrowUp, PenTool, Layers, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the main timeline for the pinned section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2, // Smooth scrubbing
        // CSS position: sticky is handling the pinning
      }
    });

    const textToType = "Can you tell me what are the project you have worked in you journey.";

    // Stage 1 — Chat enters
    tl.to(chatRef.current, {
      y: 0, // Move into view, positioning handled by CSS bottom
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    
    // Stage 2 — Typing (fake via onUpdate)
    .to({}, { 
      duration: 2.5,
      onUpdate: function() {
        if (typingTextRef.current) {
          const progress = this.progress();
          const charCount = Math.round(progress * textToType.length);
          typingTextRef.current.innerText = textToType.slice(0, charCount);
          
          // Auto-scroll to bottom of the chat text area as it types
          if (typingTextRef.current.parentElement) {
            const container = typingTextRef.current.parentElement;
            container.scrollTop = container.scrollHeight;
          }
        }
      }
    })

    // Send button press animation
    .to(sendBtnRef.current, {
      scale: 0.85,
      opacity: 0.7,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    })

    // Stage 3 — Image fades + depth
    .to(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
    }, "+=0.2")

    // Stage 4 — Chat exits (NO SCALE, just moves down and fades)
    .to(chatRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    }, "<")

    // Stage 5 — Project card enters (from scale 0.8 to 1)
    .fromTo(card1Ref.current, 
      {
        scale: 0.8,
        opacity: 0,
        filter: "grayscale(100%)" // Start as wireframe/loading state
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      },
      "<+=0.2" // Slight delay after image starts fading to ensure no overlap
    )

    // Stage 6 — Card refinement (remove grayscale)
    .to(card1Ref.current, {
      filter: "grayscale(0%)",
      duration: 1,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Separate ScrollTrigger for the next cards (Stage 8)
  useEffect(() => {
    const nextCards = document.querySelectorAll(".next-card");
    
    if (nextCards.length > 0) {
      gsap.fromTo(nextCards, 
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".next-cards-container",
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const renderCardContent = (project: typeof projects[0]) => (
    <div className="w-full bg-white rounded-[24px] md:rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0]/60 overflow-hidden flex flex-col md:flex-row md:h-[480px]">
      {/* Left Side: Image */}
      <div className="w-full md:w-[50%] lg:w-[52%] h-[280px] sm:h-[400px] md:h-full relative overflow-hidden bg-[#f8f9fa] border-b md:border-b-0 md:border-r border-[#e2e8f0]/60">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-[50%] lg:w-[48%] p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white h-full">
        <h3 className="text-[24px] md:text-[28px] lg:text-[30px] font-medium text-[#111] tracking-[-0.02em] leading-[1.25] mb-6">
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
        
        {/* Scroll Interaction Container - Tall enough for scrubbing */}
        <div ref={containerRef} className="h-[400vh] relative w-full">
          
          {/* Pinned Section */}
          <div className="sticky-content sticky top-[5vh] md:top-[10vh] w-full min-h-[85vh] flex flex-col pt-4">
            
            {/* Initial State: Heading & Subtext */}
            <div className="flex flex-col items-center text-center mb-8 md:mb-12 flex-shrink-0">
              <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] tracking-[-0.02em] leading-[1.1] font-sans mb-4">
                Selected <span className="font-serif italic font-normal text-[#111]">Projects</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#555] max-w-[600px] leading-relaxed">
                From navigating early-stage ambiguity to building scalable systems, I design solutions that convert innovation into measurable impact.
              </p>
            </div>

            {/* Visual Transformation Area */}
            <div className="relative w-full flex-1 flex justify-center items-center mt-4">
              
              {/* Stage 4: Card 1 reveals precisely where the image was */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div 
                  ref={card1Ref}
                  className="w-[90%] md:w-full max-w-[1000px] opacity-0 pointer-events-auto"
                >
                  {renderCardContent(projects[0])}
                </div>
              </div>

              {/* Stage 1 & 3: Background Image and Chat Layer */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div 
                  ref={imageRef}
                  className="flex flex-col items-center justify-center relative w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] -translate-y-16 sm:translate-y-0"
                >
                  {/* Floating elements behind/around the main image */}
                  <div className="absolute top-12 sm:top-10 left-[-2%] sm:-left-8 md:-left-16 lg:-left-24 flex flex-col gap-2 sm:gap-4 z-10">
                    <div className="bg-white pl-2 pr-5 py-2.5 rounded-[100px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 w-fit border border-[#f0f0f0] scale-[0.65] sm:scale-90 lg:scale-100 origin-left">
                      <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white shrink-0 shadow-inner">
                        <PenTool size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-[#111] leading-tight">End-to-end Product Design</span>
                        <span className="text-[11px] text-[#666] leading-tight mt-0.5">CRM, AI tools, analytics dashboards</span>
                      </div>
                    </div>
                    <div className="bg-white pl-2 pr-5 py-2.5 rounded-[100px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 w-fit border border-[#f0f0f0] scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-left">
                      <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white shrink-0 shadow-inner">
                        <Layers size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-[#111] leading-tight">Design Systems</span>
                        <span className="text-[11px] text-[#666] leading-tight mt-0.5">Built scalable UI systems<br/>across products</span>
                      </div>
                    </div>
                    <div className="bg-white pl-2 pr-5 py-2.5 rounded-[100px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 w-fit border border-[#f0f0f0] scale-[0.65] sm:scale-75 lg:scale-100 origin-left flex">
                      <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white shrink-0 shadow-inner">
                        <TrendingUp size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-[#111] leading-tight">Workflow Optimization</span>
                        <span className="text-[11px] text-[#666] leading-tight mt-0.5">Improved task efficiency<br/>and usability</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side floating cards */}
                  <div className="absolute -top-24 sm:top-4 right-0 sm:right-0 md:-right-12 lg:-right-16 flex flex-col gap-6 z-10 rotate-6 origin-right scale-[0.65] sm:scale-90 lg:scale-100">
                    <div className="bg-white p-3.5 md:p-5 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col w-[130px] sm:w-[150px] md:w-[170px] border border-[#f0f0f0]">
                      <span className="text-[9px] md:text-[10px] text-[#666] font-medium tracking-wide mb-2 bg-[#f8f9fa] w-fit px-2.5 py-1 rounded-full border border-[#eee]">Impact</span>
                      <span className="text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#111] leading-none tracking-tight mb-2">+32%</span>
                      <span className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-[#111] leading-snug mb-1">Conversion Increase</span>
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#666] leading-snug mb-3 md:mb-4">Optimized onboarding for SaaS CRM</span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-[8px] bg-[#111] flex items-center justify-center text-white mt-auto">
                        <TrendingUp size={14} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-32 sm:bottom-28 md:bottom-24 right-0 sm:right-4 md:-right-8 lg:-right-12 flex flex-col gap-6 z-10 -rotate-3 origin-right scale-[0.65] sm:scale-90 lg:scale-100">
                    <div className="bg-white p-3.5 md:p-5 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col w-[130px] sm:w-[150px] md:w-[170px] border border-[#f0f0f0]">
                      <span className="text-[9px] md:text-[10px] text-[#666] font-medium tracking-wide mb-2 bg-[#f8f9fa] w-fit px-2.5 py-1 rounded-full border border-[#eee]">Impact</span>
                      <span className="text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#111] leading-none tracking-tight mb-2">-25%</span>
                      <span className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-[#111] leading-snug mb-1">Reduced Drop-off</span>
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#666] leading-snug mb-3 md:mb-4">Simplified multi-step workflows</span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-[8px] bg-[#111] flex items-center justify-center text-white mt-auto">
                        <TrendingUp size={14} className="rotate-180" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-20 mt-0 md:mt-12 flex-1 flex flex-col justify-center max-h-[300px] sm:max-h-full w-full pointer-events-none">
                    <img 
                      src="/Soundar1.png" 
                      alt="Process Preview"
                      className="h-[250px] sm:h-[280px] md:h-[380px] w-auto object-contain object-bottom mx-auto transform -translate-y-32 sm:-translate-y-12 md:-translate-y-12 lg:-translate-y-16"
                    />
                    {/* Bottom gradient fade specifically for the image */}
                    <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent pointer-events-none z-30" />
                  </div>
              </div>
              
              {/* Chat Box Wrapper - Absolute bottom center */}
              <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-full max-w-[640px] sm:px-4 pointer-events-none">
                <div 
                  ref={chatRef}
                  className="w-full bg-[#151515]/95 backdrop-blur-xl rounded-[16px] sm:rounded-[20px] md:rounded-[32px] p-3 sm:p-4 md:p-5 shadow-[0_32px_80px_rgba(0,0,0,0.4)] border border-[#333] flex flex-col gap-2 sm:gap-3 opacity-0 pointer-events-auto transform translate-y-12"
                >
                  {/* Top Row: Text */}
                  <div className="flex-1 min-w-0 max-h-[100px] sm:max-h-[140px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="text-[12px] sm:text-[15px] md:text-[16px] text-[#fff] font-sans w-full tracking-wide leading-[18px] sm:leading-[26px] md:leading-[28px] text-left">
                      <span className="inline-flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-1.5 sm:px-2 h-[18px] sm:h-[26px] md:h-7 bg-[#252525] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] border border-[#333] align-middle mr-1.5 sm:mr-2 md:mr-2.5 -mt-1">
                        <ImageIcon size={8} className="text-[#aaa] sm:hidden" />
                        <ImageIcon size={10} className="text-[#aaa] hidden sm:block md:hidden" />
                        <ImageIcon size={12} className="text-[#aaa] hidden md:block" />
                        <span className="text-[9px] sm:text-[12px] md:text-[13px] font-medium text-[#eee]">Project</span>
                      </span>
                      <span ref={typingTextRef} className="whitespace-pre-wrap break-words align-middle" style={{ lineHeight: '1.6' }}></span>
                      <span className="inline-block w-[2px] h-[1.2em] bg-[#fff] ml-[2px] animate-pulse align-middle -mt-[2px]"></span>
                    </div>
                  </div>
                  
                  {/* Bottom Row: Actions */}
                  <div className="flex items-center justify-between mt-1">
                    <button className="text-[#666] hover:text-[#aaa] transition-colors flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full hover:bg-[#222]">
                      <Paperclip size={16} className="sm:hidden" />
                      <Paperclip size={18} className="hidden sm:block" />
                    </button>
                    
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button className="text-[#666] hover:text-[#aaa] transition-colors flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full hover:bg-[#222]">
                          <Box size={16} className="sm:hidden" />
                          <Box size={18} className="hidden sm:block" />
                      </button>
                      <button 
                          ref={sendBtnRef}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#111] flex items-center justify-center shadow-sm transform-origin-center hover:scale-105 transition-transform"
                      >
                          <ArrowUp size={14} strokeWidth={3} className="sm:hidden" />
                          <ArrowUp size={18} strokeWidth={3} className="hidden sm:block" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 5: Expansion - Sequential Cards */}
      <div className="next-cards-container flex flex-col items-center gap-12 md:gap-24 relative z-20 mt-12 md:mt-24 pb-24">
        {projects.slice(1).map((project) => (
          <div
            key={project.id}
            className="next-card w-[90%] md:w-full max-w-[1000px]"
          >
            {renderCardContent(project)}
          </div>
        ))}
      </div>
        
      </div>
    </section>
  );
}