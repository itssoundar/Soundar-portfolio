import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { WordsFromPeople } from "@/components/WordsFromPeople";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <WordsFromPeople />
      <Footer />
    </main>
  );
}