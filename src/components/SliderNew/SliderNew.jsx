"use client";
import "./SliderNew.scss";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Img1 from "@/images/RoyalCrownNew.png";
import Img2 from "@/images/CrownNew.png";
import Img3 from "@/images/XylemNew.png";
import Img4 from "@/images/QbissNew.png";
import Img5 from "@/images/CrownXCLNew.png";


const Category = () => {
  const slideRef = useRef(null);
  const timerRef = useRef(null);

  // Function for Next button click
  const handleNext = () => {
    const items = slideRef.current.children;
    const firstItem = items[0];

    // Animate the first card out to the left (off-screen)
    gsap.to(firstItem, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Move the first card to the end
        slideRef.current.appendChild(firstItem);
        // Reset its position and opacity to prepare for sliding back in from the right
        gsap.set(firstItem, { x: 200, opacity: 0 });
        // Animate it back into view smoothly
        gsap.to(firstItem, { x: 0, opacity: 1, duration: 0.5 });
      },
    });
  };

  // Function for Previous button click
  const handlePrev = () => {
    const items = slideRef.current.children;
    const lastIndex = items.length - 1;
    const lastItem = items[lastIndex];

    // Set the last card to the left (off-screen)
    gsap.set(lastItem, { x: -200, opacity: 0, y: 0 });
    // Move the last card to the start
    slideRef.current.prepend(lastItem);
    // Animate it into view
    gsap.to(lastItem, { x: 0, opacity: 1, duration: 0.5 });
  };

  // Set up automatic slide transitions
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        handleNext(); // Same animation logic for automatic transitions
      }, 5000);
    };

    startTimer();

    // Clear the timer when the component is unmounted
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const slides = [
    {
      name: "ROYAL CROWN",
      description:
        "Royal Crown Laminates takes pride in its rich legacy of innovation, cutting-edge technology, and expertise, offering over 450 trendsetting surface designs. Our collection of modern laminates boasts a wide range of finishes and textures in 1mm thickness, empowering you to effortlessly realize your dream decor.",
      background: Img1,
      url: "/royal-crown",
    },
    {
      name: "CROWN",
      description:
        "Crown's Lean Line offers an exquisite and cost-effective range of laminates in a variety of designs, colors, and textures, all in 0.8mm thickness. Manufactured at our highly advanced production facility, the Lean Line guarantees a consistent and exceptional level of quality.",
      background: Img2,
      url: "/crown",
    },
    {
      name: "XYLEM",
      description:
        "Step into the world of Xylem, where innovation is at the heart of everything we do. Xylem represents our premium-grade decorative laminates, meticulously crafted to elevate your surroundings. Each laminate embodies inspiring, high quality, and artistic excellence designed to define your unique style. From curating unique designs to creating exclusive laminates, we are on a mission to bring your vision to life.",
      background: Img3,
      url: "/xylem",
    },
    {
      name: "QBISS",
      description:
        "Qbiss is a high-pressure structural laminate made from multiple layers of kraft papers, with a thickness range from 2mm to 25mm. Its decorative face on both sides makes it suitable for interior applications like washroom cubicles, locker doors, wall panels, and laboratory furniture. With a density of 1.45gm/cm3, our compacts are exceptionally resilient and require no substrate support in thicknesses over 6mm.",
      background: Img4,
      url: "/qbiss",
    },
    {
      name: "CROWN XCL",
      description:
        "XCL - Exterior Compact Laminate is a highly durable, versatile material made from layers of kraft papers, offering thickness options from 2mm to 25mm. With decorative surfaces on both sides and a UV protective film, it is perfect for Building Facades/Cladding, Balconies, Verandah, Outdoor Benches, etc. Boasting a density of 1.45gm/cm3, our compacts are exceptionally sturdy, resistant to damage, and exhibit outstanding structural stability, eliminating the need for substrate support in thicknesses above 6mm.",
      background: Img5,
      url: "/crown-xcl",
    },
  ];

  return (
    <div className="containerSlider">
      <div className="sliderInner" ref={slideRef}>
        {slides.map((slide, index) => (
          <div key={index} className="itemSlider">
            <div className="contentSlider">
              <div className="nameSlider">{slide.name}</div>
              <div className="descriptionSlider">{slide.description}</div>
              <Link href={slide.url} className="yello_btn">
                <span className="button-content">{`GO TO ${slide.name}`}</span>
              </Link>
            </div>

            {/* Use next/image here instead of backgroundImage */}
            <div className="imageWrapper">
              <Image
                src={slide.background}
                alt={slide.name}
                layout="fill"
                objectFit="cover"
                priority={index === 0} // Optional: prioritize the first image for faster loading
              />
            </div>
          </div>
        ))}
      </div>
       <div className="buttonSlider">
        <button className="prev" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Category;
