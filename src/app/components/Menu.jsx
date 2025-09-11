"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { allCocktails } from "@/app/constant/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    const parallexTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 50%",
        scrub: true,
      },
    });

    parallexTimeline
      .from("#m-left-leaf", { x: -100, y: 100 })
      .from("#m-right-leaf", { x: 100, y: 300 }, 0);
  }, [currentIndex]);
  const totalCocktails = allCocktails.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffSet) => {
    return allCocktails[
      (currentIndex + indexOffSet + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const Prevcocktail = getCocktailAt(-1);
  const Nextcocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <Image
        src="/images/slider-left-leaf.png"
        width={100}
        height={100}
        alt="left-leaf"
        id="m-left-leaf"
      />
      <Image
        src="/images/slider-right-leaf.png"
        width={150}
        height={150}
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{Prevcocktail.name}</span>
            <Image
              src="/images/right-arrow.png"
              width={20}
              height={20}
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{Nextcocktail.name}</span>
            <Image
              src="/images/left-arrow.png"
              width={20}
              height={20}
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <Image
            width={700}
            height={700}
            src={currentCocktail.image}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for: </p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
