"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "@/app/constant/index";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <Link href="#home" className="flex items-center gap-2">
          <Image width={30} height={30} src="/images/logo.png" alt="logo" />"
          <p>Velvet Pour</p>
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
