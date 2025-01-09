import React from "react";
import SliderCard from "./SliderCard";
import "./slides.scss"
const Slides = ({ data }) => {
  return (
    <div className="slides-container">
      {data.map((item) => (
        <SliderCard key={item.img} data={item} />
      ))}
    </div>
  );
};

export default Slides;
