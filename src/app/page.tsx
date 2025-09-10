import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}
