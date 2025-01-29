import React from "react";
import { motion } from "framer-motion"
import "./videoOne.scss";
const VideoOne = () => {
  return (
    <div className="VideoOneContainer">
     <div className="VideoInnerContainer">
     <video
    //  ./video/Living room interior - Royal Crown.mp4
        src="https://interiormaataassets.humbeestudio.xyz/videos/Living%20room%20interior%20-%20Royal%20Crown.mp4"
        type="video/mp4"
        autoPlay
        playsInline
        loop
        muted
        className="videoOneVid"
      />
      <div className="VideoInnerContainerText">
      <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* <h2>Center Right</h2> */}
          <p>WHERE ELEGANCE</p>
          <p>MEETS DESIRE</p>
        </motion.div>
      </div>
    
     </div>
    </div>
  );
};

export default VideoOne;
