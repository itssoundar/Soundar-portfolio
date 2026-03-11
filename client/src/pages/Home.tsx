import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Experience />
      <div className="relative z-30 -mt-[1px] bg-white rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.2)]">
        <StaggerTestimonials />
      </div>
    </main>
  );
}