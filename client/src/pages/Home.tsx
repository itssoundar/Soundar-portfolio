import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden relative bg-[#111111]">
      <Hero />
      <div 
        className="w-full h-[250px] md:h-[300px]" 
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #e6e6e6 30%, #888888 65%, #333333 85%, #111111 100%)'
        }}
      />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}