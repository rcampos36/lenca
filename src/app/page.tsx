import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LaDolceVita } from "@/components/LaDolceVita";
import { OurStory } from "@/components/OurStory";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <OurStory />
      <LaDolceVita />
    </main>
  );
}
