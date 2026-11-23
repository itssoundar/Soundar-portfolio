import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Floating "back to home" button for case studies. It slides away while the
 * reader scrolls down (so it never covers text) and returns on scroll up.
 */
export function BackButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-6 left-4 md:left-8 z-[100] transition-all duration-300 ${
        hidden ? "-translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <Link href="/" aria-label="Back to home" tabIndex={hidden ? -1 : 0}>
        <span className="bg-white flex items-center justify-center px-6 py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.16)] border border-gray-200 hover:bg-gray-50 transition-all group mt-[20px] ml-[10px] md:ml-[40px] cursor-pointer">
          <ArrowLeft className="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
        </span>
      </Link>
    </div>
  );
}
