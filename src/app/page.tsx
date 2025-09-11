import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Cocktails from "@/app/components/Cocktails";
import About from "@/app/components/About";
import Art from "@/app/components/Art";
import Menu from "@/app/components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main className="pb-[1000px]">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
}
