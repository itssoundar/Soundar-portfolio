import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  // Track the progress to fade the background color
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["rgba(255, 255, 255, 1)", "rgba(17, 17, 17, 1)", "rgba(17, 17, 17, 1)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.main 
      style={{ backgroundColor }}
      className="min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden relative"
    >
      <Hero />
      <div ref={containerRef}>
        <Experience />
      </div>
      <Testimonials />
      <Footer />
    </motion.main>
  );
}