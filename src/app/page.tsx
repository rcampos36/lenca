import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { OurStory } from "@/components/OurStory";
import { LaDolceVita } from "@/components/LaDolceVita";
import { ContentCarousel } from "@/components/ContentCarousel";
import { OurMenu } from "@/components/OurMenu";
import { WineSelection } from "@/components/WineSelection";
import { OurChef } from "@/components/OurChef";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <OurStory />
      <LaDolceVita />
      <OurChef />
      <ContentCarousel />
      <OurMenu />
      <WineSelection />
    </main>
  );
}
