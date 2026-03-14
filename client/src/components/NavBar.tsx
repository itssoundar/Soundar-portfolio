import { Button } from "@/components/ui/button";
import { Download, Menu, X, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Prevent background scrolling when resume modal is open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isResumeOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    const isHome = window.location.pathname === "/";
    if (isHome) {
      e.preventDefault();
      const section = document.getElementById(targetId);
      if (section) {
        const navHeight = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const ResumeModal = () => {
    if (!isResumeOpen) return null;
    
    return createPortal(
      <div 
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" 
        onClick={() => setIsResumeOpen(false)}
      >
        <div 
          className="bg-white rounded-2xl w-full max-w-5xl h-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
            <h3 className="font-medium font-sans text-lg">Resume Preview</h3>
            <button 
              onClick={() => setIsResumeOpen(false)} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 w-full bg-gray-50 h-full overflow-hidden">
            <iframe 
              src="/Soundar_resume2026.pdf" 
              className="w-full h-full border-none"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-50">
      <nav className="bg-white/95 backdrop-blur-md flex items-center justify-between px-3 py-2.5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
        <a href="/" className="pl-5 text-[15px] font-medium tracking-[0.03em] text-[#111] hover:opacity-80 transition-opacity font-sans">
          DZNWITHSOUNDAR
        </a>
        
        <div className="flex items-center gap-8 pr-1">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#444] font-sans">
            <a href="/#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-black transition-colors">Work</a>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-black transition-colors">About</a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-black transition-colors">Contact</a>
          </div>
          
          {/* Desktop Resume Button */}
          <Button 
            onClick={() => setIsResumeOpen(true)}
            className="hidden md:flex rounded-[14px] px-6 h-11 bg-black text-white hover:bg-[#222] font-medium text-[14px] items-center gap-2 transition-all"
          >
            <Eye className="w-4 h-4" />
            View Resume
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#111]" /> : <Menu className="w-6 h-6 text-[#111]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+12px)] left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4 text-[16px] font-medium text-[#444] font-sans">
            <a href="/#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-xl">Work</a>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-xl">About</a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-black transition-colors px-4 py-2 hover:bg-gray-50 rounded-xl">Contact</a>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <Button 
              onClick={() => {
                setIsResumeOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full rounded-[14px] h-12 bg-black text-white hover:bg-[#222] font-medium text-[15px] flex items-center justify-center gap-2 transition-all"
            >
              <Eye className="w-4 h-4" />
              View Resume
            </Button>
          </div>
        </div>
      )}
      
      <ResumeModal />
    </div>
  );
}