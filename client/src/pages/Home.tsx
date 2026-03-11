import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
    </main>
  );
}