import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allTestimonials = [
  {
    text: "I am beyond impressed with the results and would highly recommend Design Studio to anyone looking to elevate their brand and online presence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    name: "Justin H.",
    role: "Head of Product | Apex",
    rotation: -4,
  },
  {
    text: "Design studio makes me more productive and gets the job done in a fraction of the time. I'm glad I found Design studio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    name: "Alex",
    role: "CEO | Copy Hero",
    rotation: -1,
  },
  {
    text: "Design studio has helped my team and I stay on the same page. Previously, we were all over the board. Using Design studio has definitely saved us time and money.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    name: "Maria A.",
    role: "Marketing Lead | Cars International",
    rotation: 3,
  },
  {
    text: "This platform's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
    rotation: -2,
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
    rotation: 2,
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
    rotation: -3,
  }
];

export function WordsFromPeople() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  
  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? Math.max(0, allTestimonials.length - 3) : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev >= allTestimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = allTestimonials.slice(startIndex, startIndex + 3);

  // If we don't have enough to show 3 (at the end of the array), wrap around
  if (visibleTestimonials.length < 3) {
    const needed = 3 - visibleTestimonials.length;
    visibleTestimonials.push(...allTestimonials.slice(0, needed));
  }

  return (
    <section className="bg-white relative overflow-hidden pt-[60px] pb-[60px] px-6 md:px-[86px]">
      <div className="w-full mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif font-medium text-[#222] tracking-[-0.02em] leading-[1.1] mb-6">
            Words from people
          </h2>
          <p className="text-[#666] text-[16px] md:text-[18px] leading-[1.6] max-w-2xl font-medium tracking-wide">
            No contracts, no hidden costs. Just tell us what you need and we'll deliver<br className="hidden md:block" /> accordingly.
          </p>
        </div>

        <div className="relative">
          {/* Desktop/Tablet View (Multiple Cards) */}
          <div className="hidden md:flex flex-row justify-center items-stretch gap-6 min-h-[380px]">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={`${startIndex}-${i}`}
                  className="relative w-[340px] bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-sm group cursor-default"
                  initial={{ opacity: 0, scale: 0.9, rotate: testimonial.rotation }}
                  animate={{ opacity: 1, scale: 1, rotate: testimonial.rotation }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10, 
                    rotate: 0,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    rotate: testimonial.rotation
                  }}
                >
                  {/* Hover Background Image */}
                  <div 
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] pointer-events-none" 
                    style={{ 
                      backgroundImage: "url('/testimonial_bg.png')", 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }} 
                  />
                  
                  <blockquote className="m-0 p-0 h-full flex flex-col relative z-10 text-left min-h-[260px]">
                    <div className="mb-6">
                      <div className="inline-flex rounded-[16px] bg-[#f4f4f4] p-1.5 border border-white shadow-sm">
                        <img
                          src={testimonial.image}
                          alt={`Avatar of ${testimonial.name}`}
                          className="h-[48px] w-[48px] rounded-[12px] object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-[#666] group-hover:text-[#222] text-[17px] leading-[1.6] m-0 transition-colors duration-300 flex-grow italic mb-8 font-medium">
                      "{testimonial.text}"
                    </p>
                    <footer className="flex flex-col mt-auto transition-colors duration-300">
                      <cite className="font-semibold text-[#111] text-[16px] not-italic tracking-tight transition-colors duration-300 mb-1">
                        {testimonial.name}
                      </cite>
                      <span className="text-[#777] text-[14px] tracking-wide transition-colors duration-300">
                        {testimonial.role}
                      </span>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile View (Stacked Cards Effect) */}
          <div className="md:hidden flex justify-center items-start pt-8 min-h-[460px] relative w-full">
            <AnimatePresence initial={false} custom={direction}>
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  layout
                  custom={direction}
                  initial={(d: number) => ({
                    y: d > 0 ? 60 : -60,
                    opacity: 0,
                    scale: d > 0 ? 0.8 : 1.1,
                  })}
                  animate={{
                    y: i * 24,
                    scale: 1 - i * 0.06,
                    opacity: i === 0 ? 1 : i === 1 ? 0.6 : 0.2,
                    zIndex: 10 - i,
                  }}
                  exit={(d: number) => ({
                    y: d > 0 ? -60 : 60,
                    opacity: 0,
                    scale: d > 0 ? 1.1 : 0.8,
                    zIndex: d > 0 ? 10 : 0,
                  })}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  className="absolute w-[90%] max-w-[350px] bg-white rounded-[20px] p-8 border border-gray-200/80 shadow-md group cursor-default"
                  style={{ transformOrigin: "top center" }}
                >
                  {/* Hover Background Image */}
                  <div 
                    className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 rounded-[20px] pointer-events-none" 
                    style={{ 
                      backgroundImage: "url('/testimonial_bg.png')", 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }} 
                  />
                  
                  <blockquote className="m-0 p-0 h-full flex flex-col relative z-10 text-left min-h-[260px]">
                    <div className="mb-6">
                      <div className="inline-flex rounded-[16px] bg-[#f4f4f4] p-1.5 border border-white shadow-sm">
                        <img
                          src={testimonial.image}
                          alt={`Avatar of ${testimonial.name}`}
                          className="h-[48px] w-[48px] rounded-[12px] object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-[#666] text-[16px] leading-[1.6] m-0 transition-colors duration-300 flex-grow italic mb-8 font-medium">
                      "{testimonial.text}"
                    </p>
                    <footer className="flex flex-col mt-auto transition-colors duration-300">
                      <cite className="font-semibold text-[#111] text-[16px] not-italic tracking-tight transition-colors duration-300 mb-1">
                        {testimonial.name}
                      </cite>
                      <span className="text-[#777] text-[14px] tracking-wide transition-colors duration-300">
                        {testimonial.role}
                      </span>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 hover:shadow-md transition-all duration-300 focus:outline-none"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-300 hover:shadow-md transition-all duration-300 focus:outline-none"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
