import avatar from "../assets/avatar.png";
import { useState, useEffect } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-between bg-white pb-10 px-6 md:px-[86px] pt-[40px]"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Scattered Cloud Images with Parallax */}
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[8%] left-[5%] w-[120px] h-auto opacity-70 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[15%] right-[8%] w-[100px] h-auto opacity-60 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[35%] left-[10%] w-[140px] h-auto opacity-50 pointer-events-none hidden lg:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute top-[40%] right-[12%] w-[110px] h-auto opacity-55 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute bottom-[30%] left-[8%] w-[130px] h-auto opacity-45 pointer-events-none hidden lg:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <img 
        src="/cloud.avif" 
        alt="" 
        className="absolute bottom-[25%] right-[5%] w-[120px] h-auto opacity-50 pointer-events-none hidden md:block transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * 0.45}px)` }}
      />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center pt-[110px]">
        
        {/* Top Avatar & Greeting */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img src="/Soundar.png" alt="Soundar avatar" className="w-full h-full object-cover rounded-full drop-shadow-sm" />
          </div>
          <span className="text-[#333] font-medium text-[15px] tracking-wide mt-1">
            Hey ..! I'm Soundar ,
          </span>
        </div>

        {/* Main Headline Section */}
        <div className="flex flex-col items-center text-center w-full mt-4">
          <h1 className="text-[40px] text-[#222] tracking-[-0.02em] font-medium w-full leading-[1.3]">
            Product Designer helping teams <br />
            move beyond what looks good <br />
            to <span className="inline-flex items-center text-[#888] font-light mx-1">→</span> what <span className="font-serif italic font-normal text-[#111]">users can rely on.</span>
          </h1>
          
          <p className="text-[#444] max-w-[700px] text-[20px] leading-[1.5] text-center mt-6 font-normal">
            Translating 0→1 chaos into usable, scalable design systems <br className="hidden md:block" />
            across B2B, SaaS, and AI-first products.
          </p>
        </div>

      </div>
      {/* Logos Section */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto pb-12 pt-8 overflow-hidden">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        
        {/* Ticker Container */}
        <div className="flex w-[200%] animate-ticker hover:animation-play-state-paused">
          {/* First set of logos */}
          <div className="flex w-1/2 justify-around items-center px-4 md:px-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <img 
                key={`logo-1-${num}`}
                src={`/works/worked_0${num}.png`} 
                alt={`Company ${num}`} 
                className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mx-8"
              />
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex w-1/2 justify-around items-center px-4 md:px-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <img 
                key={`logo-2-${num}`}
                src={`/works/worked_0${num}.png`} 
                alt={`Company ${num}`} 
                className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 mx-8"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}