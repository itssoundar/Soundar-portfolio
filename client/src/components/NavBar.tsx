import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function NavBar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-50">
      <nav className="bg-white/95 backdrop-blur-md flex items-center justify-between px-3 py-2.5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
        <a href="/" className="pl-5 text-[15px] font-medium tracking-[0.03em] text-[#111] hover:opacity-80 transition-opacity font-sans">
          DZNWITHSOUNDAR
        </a>
        
        <div className="flex items-center gap-8 pr-1">
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#444] font-sans">
            <a href="#works" className="hover:text-black transition-colors">Works</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            <a href="#life-stories" className="hover:text-black transition-colors">Life & Stories</a>
          </div>
          
          <Button className="rounded-[14px] px-6 h-11 bg-black text-white hover:bg-[#222] font-medium text-[14px] flex items-center gap-2 transition-all">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>
      </nav>
    </div>
  );
}