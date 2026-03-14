import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-white overflow-hidden flex flex-col items-center pt-[40px] pb-[40px] px-6 md:px-[86px]">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-[32px] font-medium text-[#222] tracking-[-0.02em] leading-[1.1] mb-6 font-sans">
            If something here caught your eye, sparked a<br />
            thought, <span className="font-serif italic font-normal text-[#111]">lets talk!</span>
          </h2>
          <p className="text-[#666] text-[14px] md:text-[18px] leading-[1.6] max-w-[500px] mx-auto tracking-wide font-sans">
            From concept to launch, we create seamless digital<br />
            experiences that resonate with your audience.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full flex flex-col gap-4 mb-10 md:mb-16"
        >
          {/* Email */}
          <a href="mailto:rsoundar1998@gmail.com" className="flex items-center justify-between group border-b border-[#e5e5e5] pb-4">
            <div className="flex items-center gap-3 text-[#666] group-hover:text-[#222] transition-colors">
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[18px] font-medium">Email</span>
            </div>
            <span className="text-[18px] text-[#666] group-hover:text-[#222] transition-all">
              rsoundar1998@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a href="#" className="flex items-center justify-between group border-b border-[#e5e5e5] pb-4">
            <div className="flex items-center gap-3 text-[#666] group-hover:text-[#222] transition-colors">
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[18px] font-medium">LinkedIn</span>
            </div>
            <span className="text-[18px] text-[#666] group-hover:text-[#222] transition-all">
              /in/soundarr/
            </span>
          </a>

          {/* Resume */}
          <a href="#" className="flex items-center justify-between group border-b border-[#e5e5e5] pb-4">
            <div className="flex items-center gap-3 text-[#666] group-hover:text-[#222] transition-colors">
              <FileText className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[18px] font-medium">Resume</span>
            </div>
            <span className="text-[18px] text-[#666] group-hover:text-[#222] transition-all">
              Download CV
            </span>
          </a>
        </motion.div>

        {/* Footer Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#444] text-[18px] flex items-center gap-2">
            Crafting scalable design systems 
            <img 
              src="/hi-hand.png" 
              alt="Avatar" 
              className="w-6 h-6 object-contain inline-block -mt-1"
            /> 
            and fueled by matcha!
          </p>
          <p className="text-[#888] text-[18px]">
            © 2026 DznwithSoundar
          </p>
        </motion.div>

      </div>
      {/* Background Image at Bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[400px] md:h-[500px] pointer-events-none z-0 mix-blend-multiply animate-bg-pulse"
        style={{
          backgroundImage: 'url("/Footer_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)'
        }}
      />
    </footer>
  );
}
