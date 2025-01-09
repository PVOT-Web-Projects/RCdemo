"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Homeslider.scss";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeSlider = () => {
  useEffect(() => {
    let wheel = document.querySelector('.wheel');
    let images = gsap.utils.toArray('.wheel__card');

    const setup = () => {
      let radius = wheel.offsetWidth / 2;
      let center = wheel.offsetWidth / 2;
      let total = images.length;
      let slice = (2 * Math.PI) / total;

      images.forEach((item, i) => {
        let angle = slice * i;
        let x = center + radius * Math.sin(angle);
        let y = center + radius * Math.cos(angle);
        gsap.set(item, {
          rotation: `${-(angle + Math.PI)}rad`,
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y
        });
      });
    };

    // Set up wheel rotation and scroll trigger
    gsap.to(".wheel", {
      rotate: () => -720, // Adjust the rotation speed (larger value = more rotation)
      ease: "none",
      duration: 10, // Duration of rotation during scroll
      scrollTrigger: {
        markers: true,
        pin: true,
        start: "+=500",  // Pin the wheel at the top of the viewport
        end: "+=500",     // Scroll length after which it will unpin
        scrub: 1,          // Smooth scrolling effect
        snap: 1 / images.length,  // Snaps to the individual images
        invalidateOnRefresh: true, // Ensure it re-calculates on window resize
        onUpdate: (self) => {
          console.log("Scroll progress:", self.progress); // For debugging purposes
        },
      }
    });

    // Initialize on load
    setup();

    // Recalculate on resize
    window.addEventListener("resize", setup);
    return () => {
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <div className="App">
      <section className="slider-section">
        <div className="wheel">
          {/* Wheel images */}
          {Array(12).fill(0).map((_, idx) => (
            <div className="wheel__card" key={idx}>
              <img
                src="https://media.istockphoto.com/id/470816088/photo/hong-kong-cityscape.jpg?s=2048x2048&w=is&k=20&c=6HZHIjSRNnZGurpTwQoRJ90u4oBf73a5ttBRDGEHxwk="
                alt={`Slide ${idx}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeSlider;
