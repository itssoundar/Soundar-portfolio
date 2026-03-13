import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "I am beyond impressed with the results and would highly recommend Design Studio to anyone looking to elevate their brand and online presence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    name: "Justin H.",
    role: "Head of Product | Apex",
  },
  {
    text: "Design studio makes me more productive and gets the job done in a fraction of the time. I'm glad I found Design studio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    name: "Alex",
    role: "CEO | Copy Hero",
  },
  {
    text: "Design studio has helped my team and I stay on the same page. Previously, we were all over the board. Using Design studio has definitely saved us time and money.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    name: "Maria A.",
    role: "Marketing Lead | Cars International",
  },
  {
    text: "This platform's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this tool, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.02,
                    y: -4,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-6 md:p-8 rounded-[20px] border border-gray-200/80 shadow-sm w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 relative overflow-hidden" 
                >
                  <blockquote className="m-0 p-0 h-full flex flex-col relative z-10 gap-6 md:gap-8">
                    <p className="text-[#555] group-hover:text-[#222] text-[18px] leading-[1.6] m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-4 transition-colors duration-300">
                      <img
                        width={44}
                        height={44}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-11 w-11 rounded-full object-cover transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold text-[#111] text-[18px] not-italic tracking-tight transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-[#666] text-[18px] tracking-wide mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function Testimonials() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#ffffff] pt-[60px] pb-[60px] px-6 md:px-[86px]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="w-full z-10 mx-auto max-w-[1200px]"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start justify-between w-full">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-32 max-w-xl shrink-0 lg:pt-12">
            <h2 id="testimonials-heading" className="text-[32px] font-medium tracking-[-0.02em] leading-[1.1] text-[#222] font-sans">
              See what <span className="text-[#111]">others</span><br className="hidden lg:block" />
              say about me
            </h2>
            <p className="mt-6 text-[#666] text-[18px] leading-[1.6] max-w-md tracking-wide font-sans">
              I have helped many businesses make a killer design for their product. Wanna be the next?
            </p>
            <a href="#contact" className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#B2F042] px-8 py-4 text-[18px] font-semibold text-black transition-all hover:scale-105 hover:bg-[#a0dc3b] shadow-sm">
              Contact
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </a>
          </div>

          {/* Right Side */}
          <div 
            className="flex w-full lg:w-auto flex-1 justify-center lg:justify-end [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] md:max-h-[700px] overflow-hidden"
            role="region"
            aria-label="Scrolling Testimonials"
          >
            <TestimonialsColumn testimonials={testimonials} duration={40} className="w-full max-w-[640px] lg:w-[600px]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
