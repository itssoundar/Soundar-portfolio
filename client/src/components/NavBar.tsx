import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Button className="hidden md:flex rounded-[14px] px-6 h-11 bg-black text-white hover:bg-[#222] font-medium text-[14px] items-center gap-2 transition-all">
            <Download className="w-4 h-4" />
            Download Resume
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
            <Button className="w-full rounded-[14px] h-12 bg-black text-white hover:bg-[#222] font-medium text-[15px] flex items-center justify-center gap-2 transition-all">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}