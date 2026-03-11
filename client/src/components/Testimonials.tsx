export function Testimonials() {
  const testimonials = [
    {
      name: "Justin H.",
      role: "Head of Product | Apex",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      text: "I am beyond impressed with the results and would highly recommend Design Studio to anyone looking to elevate their brand and online presence.",
      rotation: "-rotate-3",
      translateY: "translate-y-2"
    },
    {
      name: "Alex",
      role: "CEO | Copy Hero",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
      text: "Design studio makes me more productive and gets the job done in a fraction of the time. I'm glad I found Design studio.",
      rotation: "rotate-0",
      translateY: "-translate-y-4"
    },
    {
      name: "Maria A.",
      role: "Marketing Lead | Cars International",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
      text: "Design studio has helped my team and I stay on the same page. Previously, we were all over the board. Using Design studio has definitely saved us time and money.",
      rotation: "rotate-3",
      translateY: "translate-y-2"
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 md:py-32 px-6 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-[#222] tracking-[-0.02em] leading-[1.1]">
            <span className="font-serif italic font-normal text-[#111]">Words</span> from people
          </h2>
          <p className="text-[#666] text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mt-6 tracking-wide">
            No contracts, no hidden costs. Just tell us what you need and we'll deliver accordingly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto mt-12 md:mt-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full ${testimonial.rotation} ${testimonial.translateY} transition-transform hover:rotate-0 hover:translate-y-0 duration-500`}
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6 shadow-sm">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-[#666] text-[14px] md:text-[15px] leading-[1.7] flex-grow font-medium mb-8 italic">
                {testimonial.text}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100/60">
                <h4 className="font-bold text-[#222] text-[15px] tracking-tight">{testimonial.name}</h4>
                <p className="text-[#888] text-[12px] mt-1 tracking-wide">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
