import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "I start by diving deep into the problem space, aligning user needs with business goals to define a clear, actionable strategic direction before any pixels are pushed.",
    img: "https://images.unsplash.com/photo-1512758117904-938861001201?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "02",
    title: "Architecture & Wireframing",
    desc: "Structuring the experience. I create intuitive user flows and low-fidelity wireframes to establish a solid, logical foundation and validate concepts early.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "03",
    title: "Visual Design & Systems",
    desc: "Translating structure into polished, accessible interfaces. I build robust, scalable design systems that ensure aesthetic consistency across the entire product ecosystem.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "04",
    title: "Prototyping & Handoff",
    desc: "Bringing designs to life with meaningful micro-interactions, followed by comprehensive documentation to ensure a seamless, pixel-perfect developer handoff.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine the current step based on scroll progress
    const step = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(latest * steps.length * 0.99))
    );
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  // Calculate a progress bar scale
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="bg-white relative z-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-[86px] pt-24 md:pt-32 pb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] tracking-[-0.02em] leading-[1.1] font-sans">
            How I <span className="font-serif italic font-normal">work</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#555] mt-4 max-w-[500px]">
            A structured approach to transforming ambiguity into intuitive, scalable digital experiences.
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative w-full" style={{ height: `${steps.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-[86px] flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center h-full relative min-h-[300px] md:min-h-[400px]">
              
              {/* Progress Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#f0f0f0] hidden md:block">
                 <motion.div 
                   className="absolute top-0 left-0 w-full bg-[#111] origin-top"
                   style={{ scaleY: progressScale, height: '100%' }}
                 />
              </div>

              <div className="md:pl-12 relative w-full h-[300px] md:h-[400px]">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full ${isActive ? 'opacity-100 translate-y-[-50%] scale-100' : 'opacity-0 translate-y-[-30%] scale-95 pointer-events-none'}`}
                    >
                      <span className="text-[#888] font-serif italic text-[24px] mb-4 block">{step.num}</span>
                      <h3 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium text-[#111] leading-[1.1] mb-6 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[16px] md:text-[18px] text-[#555] leading-[1.6] max-w-[480px]">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full md:w-1/2 h-[350px] md:h-[500px] lg:h-[600px] relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#f8f9fa] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
               {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                    >
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5" />
                    </div>
                  )
               })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
