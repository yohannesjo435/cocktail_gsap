"use client";
import Image from "next/image";
import { openingHours, socials } from "../constant";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);
  return (
    <footer id="contact">
      <Image
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        width={300}
        height={300}
        id="f-right-leaf"
      />
      <Image
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        width={150}
        height={150}
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Vist our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(251)+901964187</p>
          <p>hello@gmai.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  width={20}
                  height={20}
                  alt={social.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
