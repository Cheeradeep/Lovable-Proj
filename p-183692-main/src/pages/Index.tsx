import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Process />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
