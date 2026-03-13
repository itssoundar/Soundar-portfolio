import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { WordsFromPeople } from "@/components/WordsFromPeople";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <WordsFromPeople />
      <Footer />
    </main>
  );
}