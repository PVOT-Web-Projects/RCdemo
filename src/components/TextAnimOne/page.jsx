"use client"
import React, { useEffect, useState } from 'react';
import './TextAnim.scss';  // Assuming styles are in this file
// import { AnimatePresence, motion } from "framer-motion";
import { TextEffectOne } from 'react-text-animate'

const TextAnimOne = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const text = "Gradual Spacing";
  // const gradual = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: { opacity: 1, x: 0 },
  // };
  
  const scrollDownByTenPercent = () => {
    const tenPercentOfHeight = window.innerHeight * 1;
    window.scrollBy({
      top: tenPercentOfHeight,
      behavior: "smooth",
    });
    setIsVisible(false);
  };
  return (
    <div className="TextAnimOne">
      {/* <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            // className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence> */}
      <TextEffectOne text="ROYAL" style={{fontSize: "200px", textAlign: "center"}}  staggerDuration={0.1 } rotation={-10} fromLast={true} />
      <TextEffectOne text="CROWN" style={{fontSize: "200px", textAlign: "center"}}  staggerDuration={0.2 } rotation={-10} fromLast={true} />
      <div class="scroll-down-wrap no-border">
        {/* {isVisible && ( */}
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
        {/* )} */}
      </div>
    </div>
    
  );
};

export default TextAnimOne;
