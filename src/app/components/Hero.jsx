"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <Image
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
          width={100}
          height={100}
        />
        <Image
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
          width={100}
          height={100}
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail we serve is a reflection of our obsession with
                detail — from the first muddle to the final garnish. That care
                is what turns a simple drink into something truly memorable.
              </p>
              <Link href="#cocktails">View Cocktails</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0 ">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
