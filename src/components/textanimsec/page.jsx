import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TextanimSec = () => {
  useEffect(() => {
    raf();
  }, [isTransitioning]);
  const svgRef = useRef(null);

  useEffect(() => {
    const updateTextPath = () => {
      if (svgRef.current) {
        const width = Math.min(window.innerWidth, 800);
        const height = width * 0.5;
        svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
      }
    };

    updateTextPath();
    window.addEventListener("resize", updateTextPath);
    return () => window.removeEventListener("resize", updateTextPath);
  }, []);

  return (
    <div className="containerText">
      <div
        className={`curved-text-container ${
          isContainerTextVisible ? "" : "hidden"
        }`}
      >
        <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400">
          <defs>
            <path id="curve" d="M 50 350 Q 400 50 750 350" fill="transparent" />
          </defs>
          <motion.text>
            <motion.textPath
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              href="#curve"
              startOffset="50%"
              textAnchor="middle"
            >
              WHERE ELEGANCE MEETS DESIRE
            </motion.textPath>
          </motion.text>
        </svg>
      </div>
    </div>
  );
};

export default TextanimSec;
