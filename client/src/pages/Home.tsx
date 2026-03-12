import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}