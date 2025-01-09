import React from "react";
import { motion } from "framer-motion";
import "./Progress.scss"
const Progress = ({ curIndex, length }) => {
  return (
    <>
      <div className="progress-bar">
        <div
          style={{
            width: (((curIndex + 1) / length) * 100).toString() + "%",
          }}
          className="progress-bar-filled"
        ></div>
      </div>
      <span key={curIndex} className="progress-text-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={curIndex}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="progress-text"
        >
          0{curIndex + 1}
        </motion.div>
      </span>
    </>
  );
};

export default Progress;
