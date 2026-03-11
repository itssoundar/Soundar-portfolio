import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Hero />
      <Experience />
      <Testimonials />
    </main>
  );
}