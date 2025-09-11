import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Cocktails from "@/app/components/Cocktails";
import About from "@/app/components/About";
import Art from "@/app/components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main className="pb-52">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}
