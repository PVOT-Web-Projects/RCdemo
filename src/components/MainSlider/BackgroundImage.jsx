import React from "react";
import { motion } from "framer-motion";
// import { Data, CurrentSlideData } from "@/components/MainSlider/Mainslider";
import "./BackgroundImage.scss";
const BackgroundImage = ({ transitionData, currentSlideData }) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="background-image transition"
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="background-image current"
      />
    </>
  );
};

export default BackgroundImage;
