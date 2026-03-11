import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Experience />
      <div className="bg-[#111111] pb-20">
        <StaggerTestimonials />
      </div>
    </main>
  );
}