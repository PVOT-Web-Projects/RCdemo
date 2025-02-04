"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "@/images/hero_banner.png"; 
import Textanim from "@/components/newTextAnim/page"
import "./heroBanner.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [width, setWidth] = useState(0); 
  console.log("width", width);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    };
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  let Y;
    if (width > 1600) {
      Y = 220;
    } else if (width < 1600) {
      Y = 195;
    }
    const scrollDownByTenPercent = () => {
      const tenPercentOfHeight = window.innerHeight * 1;
      window.scrollBy({
        top: tenPercentOfHeight,
        behavior: "smooth",
      });
      setIsVisible(false);
    };
  return (
    <div className="hero_banner">
      <div className="banner_image">
        {/* <Image src={banner} alt="banner" /> */}
        <div className="banner_text">
          <div className="text_effect">
            <Textanim />
            {/* <motion.div
              className="card"
              initial={{
                opacity: 1,
                y: Y,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              // viewport={{ once: true }}
            >
              <h2>
                THE <br /> CROWN <br /> EXPERIENCE
              </h2>
            </motion.div> */}
          </div>

          {/* <p>
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
            dolor Lorem ipsum dolor Lorem ipsum dolor
          </p> */}
          {/* <div className="link">
            <div className="linkInner" onClick={scrollDownByTenPercent} >Let's Start</div>
          </div> */}
          
        </div>
        {/* <div class="scroll-down-wrap no-border">
          <div className="section-down-arrow" onClick={scrollDownByTenPercent}>
            <svg
              class="nectar-scroll-icon"
              viewBox="0 0 30 45"
              enableBackground="new 0 0 30 45"
            >
              <path
                class="nectar-scroll-icon-path"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
              ></path>
            </svg>
            <div className="scroll">Scroll to explore</div>
          </div>
      </div> */}
      </div>
    </div>
  );
};
export default HeroBanner;
