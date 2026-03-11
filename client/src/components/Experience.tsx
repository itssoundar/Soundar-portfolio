export function Experience() {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "@Sense",
      period: "May 2024 - Present",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "Product Designer",
      company: "@Glance",
      period: "Oct 2023 - May 2024",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "Product Designer",
      company: "@Redbaton",
      period: "Jan 2023 - May 2023",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "UI UX Designer",
      company: "@Metafic",
      period: "Jun 2021 - Dec 2022",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    },
    {
      role: "Freelancer",
      company: "",
      period: "2019 - Dec 2020",
      description: "Over the past year, I have advanced from a product designer to a design system manager, which has allowed me to expand my understanding of the overall strategic vision."
    }
  ];

  return (
    <section className="relative w-full bg-[#111111] text-white py-24 md:py-32 px-6 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-12 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {/* Subtle cloud background similar to the reference */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("/cloud.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[900px] mx-auto">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-medium text-center mb-16 md:mb-24 tracking-tight">
          Experiences that shaped <span className="font-serif italic text-white/90">my design lens</span>
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`py-8 md:py-10 flex flex-col gap-3 ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold tracking-wide text-white/95">
                  {exp.role} <span className="font-normal text-white/80">{exp.company}</span>
                </h3>
                <span className="text-white/50 text-[0.85rem] md:text-[0.9rem] font-medium tracking-wider">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#888888] text-[14px] md:text-[15px] leading-[1.6] max-w-[600px] font-normal tracking-wide">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
