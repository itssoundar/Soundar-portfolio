import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-between pb-10 px-6 md:px-[86px] pt-[40px] overflow-hidden"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0 animate-bg-pulse"
        style={{
          backgroundImage: 'url(/hero-bg.jpg?v=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center pt-[110px]">
        
        {/* Top Avatar & Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-10"
        >
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img src="/Soundar.png" alt="Soundar avatar" className="w-full h-full object-cover rounded-full drop-shadow-sm" />
          </div>
          <span className="text-[#333] font-medium text-[18px] tracking-wide mt-1">
            Hey ..! I'm Soundar ,
          </span>
        </motion.div>

        {/* Main Headline Section */}
        <div className="flex flex-col items-center text-center w-full mt-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] md:text-[56px] text-[#222] tracking-[-0.02em] font-medium w-full leading-[1.3] font-sans max-w-[320px] md:max-w-none mx-auto"
          >
            Product Designer helping teams <br className="hidden md:block" />
            move beyond what looks good <br className="hidden md:block" />
            to <span className="inline-flex items-center text-[#888] font-light mx-1">→</span> what <span className="font-serif italic font-normal text-[#111]">users can rely on.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#444] max-w-[700px] text-[16px] md:text-[18px] leading-[1.5] text-center mt-6 font-normal font-sans"
          >
            Translating 0→1 chaos into usable, scalable design systems <br className="hidden md:block" />
            across B2B, SaaS, and AI-first products.
          </motion.p>
        </div>

      </div>
      {/* Logos Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-full max-w-[1200px] mx-auto pb-12 pt-8 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}
      >
        {/* Ticker Container */}
        <div className="flex w-max animate-ticker hover:animation-play-state-paused min-h-[80px] md:min-h-[70px] items-center">
          {/* First set of logos */}
          <div className="flex justify-around items-center py-6 md:py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`logo-1-${num}`} className="px-3 md:px-[40px]">
                <img 
                  src={`/works/worked_0${num}.png`} 
                  alt={`Company ${num}`} 
                  className="h-20 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain flex-shrink-0 grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex justify-around items-center py-6 md:py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`logo-2-${num}`} className="px-3 md:px-[40px]">
                <img 
                  src={`/works/worked_0${num}.png`} 
                  alt={`Company ${num}`} 
                  className="h-20 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain flex-shrink-0 grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
