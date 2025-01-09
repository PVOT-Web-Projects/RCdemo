import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "@/components/MainSlider/BackgroundImage";
import Slides from "@/components/MainSlider/Slides";
import SlideInfo from "@/components/MainSlider/SlideInfo";
import Controls from "@/components/MainSlider/Controls";
import "./Mainslider.scss";

// Slider data (No TypeScript annotations here)
const sliderData = [
  {
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    location: "Switzerland Alps",
    description: "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "SAINT ANTÖNEN",
  },
  {
    img: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "The Grand Canyon",
    description: "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Masai Mara",
    description: "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Angkor Wat",
    description: "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D",
    title: "Bali",
    description: "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Indonesia",
  },
];

// Initialize state with the first slide as initial data
const initData = sliderData[0];

export default function Home() {
  const [data, setData] = useState(sliderData.slice(1)); // Remaining slides after the first one
  const [transitionData, setTransitionData] = useState(initData); // Transition data starts with the first slide
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData, // Set the initial slide
    index: 0, // Start at index 0
  });

  return (
    <main className="main-container">
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="overlay-container">
          {/* Optional header could go here */}
          <div className="content-container">
            <div className="left-section">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="right-section">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
