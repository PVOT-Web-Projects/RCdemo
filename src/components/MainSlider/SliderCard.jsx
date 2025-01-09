import React from "react";
import { motion } from "framer-motion";
import "./Slidercard.scss"
const SliderCard = ({ data }) => {
  return (
    <motion.div
      className="slider-card"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className="slider-card__image"
      />
      <motion.div className="slider-card__overlay">
        <motion.div>
          <motion.div layout className="slider-card__indicator"></motion.div>
          <motion.p layoutId={data.location} className="slider-card__location">
            {data.location}
          </motion.p>
          <motion.h1 layoutId={data.title} className="slider-card__title">
            {data.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SliderCard;
