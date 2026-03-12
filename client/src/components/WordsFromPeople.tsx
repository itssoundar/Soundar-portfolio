import { motion } from "framer-motion";

const testimonials = [
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
];

export function WordsFromPeople() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif font-medium text-[#222] tracking-[-0.02em] leading-[1.1] mb-6">
            Words from people
          </h2>
          <p className="text-[#666] text-[16px] md:text-[18px] leading-[1.6] max-w-2xl font-medium tracking-wide">
            No contracts, no hidden costs. Just tell us what you need and we'll deliver<br className="hidden md:block" /> accordingly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 mt-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="relative w-full max-w-[350px] md:w-[340px] bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group cursor-default"
              initial={{ rotate: testimonial.rotation }}
              whileHover={{ 
                scale: 1.02, 
                y: -10, 
                rotate: 0,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{
                rotate: testimonial.rotation
              }}
            >
              {/* Hover Background Image */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px] overflow-hidden pointer-events-none" 
                style={{ 
                  backgroundImage: "url('/testimonial_bg.png')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} 
              />
              
              <div className="relative z-10 flex flex-col h-full min-h-[280px]">
                <div className="mb-6 rounded-2xl overflow-hidden w-14 h-14 bg-gray-100 border-4 border-white shadow-sm ring-1 ring-gray-100/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-[#666] group-hover:text-[#222] text-[15px] leading-[1.7] italic mb-8 flex-grow transition-colors duration-300">
                  {testimonial.text}
                </p>
                
                <div className="flex flex-col mt-auto pt-4 transition-colors duration-300">
                  <cite className="font-bold text-[#111] text-[15px] not-italic tracking-tight mb-1">
                    {testimonial.name}
                  </cite>
                  <span className="text-[#888] group-hover:text-[#555] text-[13px] font-medium tracking-wide">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
