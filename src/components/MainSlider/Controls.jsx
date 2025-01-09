import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "@/components/MainSlider/Progress";
import "./Control.scss"
const Controls = ({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}) => {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div className="controls">
      <SliderButton handleClick={handlePrev}>
        {/* <IoIosArrowBack className="icon" /> */}
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        {/* <IoIosArrowForward className="icon" /> */}
      </SliderButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  );
};

export default Controls;

const SliderButton = ({ children, handleClick }) => {
  return (
    <button className="slider-button" onClick={handleClick}>
      {children}
    </button>
  );
};
