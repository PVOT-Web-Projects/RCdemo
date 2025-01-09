import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeSliderOne.scss";
import Image from "next/image";
import Img1 from "@/images/bgrem.png";
import Page1 from "@/components/Home_page_Banner_Kitchen/page";
import Page2 from "@/components/Home_page_Banner_Bedroom/page";
import Page3 from "@/components/Home_page_Banner_Living/page";
import Page4 from "@/components/Home_page_Banner_Washroom/page";

// Constants for the multiplier in the custom wheel effect
// const multiplier = {
//   translate: 0.1,
//   rotate: 0.01,
// };
const multiplier = {
  translate: 0.3,
  rotate: 0.02,
};
const SwiperCarousel = () => {
  const swiperRef = useRef(null); // Use useRef to reference Swiper
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track the clicked image
  const [isCarouselVisible, setIsCarouselVisible] = useState(true); // Controls carousel visibility

  // Array of custom image URLs
  const images = [
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D", // Image 1 URL
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?cs=srgb&dl=pexels-pixabay-262048.jpg&fm=jpg", // Image 2 URL
    "https://media.istockphoto.com/id/1182454305/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=0-ocZf1KjzxD1riEB_c6z8coPPHDc4KnZzjYwj85EBQ=", // Image 3 URL
    "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D", // Image 4 URL
  ];
  // Calculate wheel effect on each slide
  const calculateWheel = () => {
    const slides = document.querySelectorAll(".single");
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
      let ty =
        Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

      if (ty < 0) {
        ty = 0;
      }

      const transformOrigin = r < 0 ? "left top" : "right top";
      slide.style.transform = `translate(0, ${ty}px) rotate(${
        -r * multiplier.rotate
      }deg)`;
      slide.style.transformOrigin = transformOrigin;
    });
  };

  const raf = () => {
    if (!isTransitioning) {
      requestAnimationFrame(raf);
      calculateWheel();
    }
  };

  useEffect(() => {
    raf();
  }, [isTransitioning]);

  // Auto-slide functionality: Move to the next slide every 3 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   }, 3000); // Change slide every 3 seconds

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  // Manual slide control (previous and next buttons)
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const onSlideChange = () => {
    setIsTransitioning(true);
  };

  const onSlideTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Handle click on an image
  const handleImageClick = (index) => {
    setSelectedImage(index); // Update the state with the selected image index
    setIsCarouselVisible(false); // Hide the carousel when an image is clicked
  };
  const imageTexts = [
    "Beautiful Kitchen Design", // Text for Image 1
    "Cozy Bedroom Inspiration", // Text for Image 2
    "Spacious Living Room Ideas", // Text for Image 3
    "Modern Washroom Design", // Text for Image 4
  ];
  const renderPage = () => {
    switch (selectedImage) {
      case 0:
        return <Page1 />;
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      // case 4: return <Page5 />;
      default:
        return <p>Select an image to view more details.</p>;
    }
  };
  // Handle Explore button click to show the carousel again
  const handleExploreClick = () => {
    setSelectedImage(null); // Reset selected image
    setIsCarouselVisible(true); // Show the carousel
    // window.scrollTo(0, 0); // Prevent page scroll down
    // Scroll to a position 120vh (or any other value) down the page
    window.scrollTo({
      top: window.innerHeight + 20, // Scroll to 120vh (can adjust by adding offset if needed)
      // behavior: "smooth",
    });
  };

  return (
    <div className="containerText">
      {/* <div>
      <Image src={Img1} alt="none" className="Img1Ref"/>
      </div> */}
      {isCarouselVisible ? (
        <div className={`carouselOne ${isCarouselVisible ? "" : "hidden"}`}>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            onSlideChange={onSlideChange}
            onSlideTransitionEnd={onSlideTransitionEnd}
            speed={1500}
            simulateTouch={false}
            touchMoveStopPropagation={true}
            breakpoints={{
              575: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="single" onClick={() => handleImageClick(index)}>
                  <div className="image-container">
                    <img
                      src={imageUrl}
                      alt={`Random Image ${index + 1}`}
                      className="image"
                     />
                    <div className="hover-text">
                      <span className="hovertextInner">
                        {imageTexts[index]}
                      </span>{" "}
                    </div>
                    {/* <div className="hover-overlay">
                      <span className="hover-overlay-text">Explore</span>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Show the selected page
        <div className={`homePageBanner ${isCarouselVisible ? "hidden" : ""}`}>
          {renderPage()}
        </div>
      )}

      {!isCarouselVisible && (
        <div className="explore-button-container">
          <button onClick={handleExploreClick} className="explore-button">
            <span className="button-content-explore">Explore More</span>
          </button>
        </div>
      )}

      {/* Manual navigation buttons only when carousel is visible */}
      {/* {selectedImage === null && ( */}
      {isCarouselVisible && (
        <div className="swiper-buttons">
          <button onClick={goToPrevSlide} className="swiper-button">
          <span className="button-content-explore">Prev</span>
            {/* Prev */}
          </button>
          <button onClick={goToNextSlide} className="swiper-button">
          <span className="button-content-explore">Next</span>
            {/* Next */}
          </button>
        </div>
      )}
    </div>
  );
};

export default SwiperCarousel;
