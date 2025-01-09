import React from "react";
import { motion } from "framer-motion";
import "./Otherinfo.scss";
const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const OtherInfo = ({ data }) => {
  return (
    <motion.div initial="hidden" animate="visible" className="other-info">
      <AnimatedText
        className="location overflow-hidden text-gray-400"
        data={data?.location}
      />
      <AnimatedText
        className="title my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]"
        data={data?.title}
      />
      <AnimatedText
        className="description text-xs text-gray-400"
        data={data?.description}
      />
    </motion.div>
  );
};

export default OtherInfo;

const AnimatedText = ({ data, className }) => {
  return (
    <span className="animated-text-container">
      <motion.p className={className} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
