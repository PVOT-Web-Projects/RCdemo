import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
// import { IoMdBookmark } from "react-icons/io";
// import { Data, CurrentSlideData } from "@/components/MainSlider/Mainslider";
import "./Slideinfo.scss";
const SlideInfo = ({ transitionData, currentSlideData }) => {
  return (
    <>
      <motion.span layout className="indicator" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className="action-buttons">
        <button className="bookmark-button">
          {/* <IoMdBookmark className="icon" /> */}
        </button>
        <button className="discover-button">
          DISCOVER LOCATION
        </button>
      </motion.div>
    </>
  );
};

export default SlideInfo;
