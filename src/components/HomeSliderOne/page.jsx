import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeSliderOne.scss";
import { motion } from "framer-motion";
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
  // const [isCarouselVisible, setIsCarouselVisible] = useState(true); // Controls carousel visibility
  const [isCarouselVisible, setIsCarouselVisible] = useState(false); // Initially hide the carousel
  const [isCardVisible, setIsCardVisible] = useState(true); // Initially show the card
  const [isContainerTextVisible, setIsContainerTextVisible] = useState(true);

  // Array of custom image URLs
  const images = [
    "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/KitchenNew/0060.webp", // Image 1 URL
    "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/BedRoom/0110.webp", // Image 2 URL
    "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/Livingroom/0099.webp",
    "https://interiormaataassets.humbeestudio.xyz/mainsiteassets/Washroom/0098.webp", // Image 3 URL
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
  const svgRef = useRef(null);

  useEffect(() => {
    const updateTextPath = () => {
      if (svgRef.current) {
        const width = Math.min(window.innerWidth, 800);
        const height = width * 0.5;
        svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
      }
    };

    updateTextPath();
    window.addEventListener("resize", updateTextPath);
    return () => window.removeEventListener("resize", updateTextPath);
  }, []);
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
  // const handleImageClick = (index) => {
  //   setSelectedImage(index); // Update the state with the selected image index
  //   setIsCarouselVisible(false); // Hide the carousel when an image is clicked
  // };
  const handleImageClick = (event, index) => {
    // Get the clicked image directly from the event
    const clickedImage = event.currentTarget.querySelector(".image");
    // Remove zoom-effect from all images
    document.querySelectorAll(".image").forEach((image) => {
      image.classList.remove("zoom-effect");
    });
    // Add zoom-effect to the clicked image
    if (clickedImage) {
      clickedImage.classList.add("zoom-effect");
      // After the animation, update the state
      setTimeout(() => {
        setSelectedImage(index); // Update the state with the selected image index
        setIsCarouselVisible(false); // Hide the carousel
        setIsContainerTextVisible(false); // Hide the containerText
      }, 500);
    }
  };
  const imageTexts = [
    "Beautiful Kitchen Design", // Text for Image 1
    "Cozy Bedroom Inspiration", // Text for Image 2
    "Spacious Living Room Ideas", // Text for Image 3
    "Modern Washroom Design", // Text for Image 4
    "Minimalist Bedroom Design", // Text for Image 5
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
      case 4:
        return <Page2 />;
      default:
        return <p></p>;
    }
  };
  // Handle Explore button click to show the carousel again
  const handleExploreClick = () => {
    setSelectedImage(null); // Reset selected image
    setIsCarouselVisible(true); // Show the carousel
    setIsCardVisible(false); // Hide the card
    setIsContainerTextVisible(true); // Show the containerText
    // window.scrollTo(0, 0); // Prevent page scroll down
    // Scroll to a position 120vh (or any other value) down the page
    window.scrollTo({
      top: window.innerHeight + 20, // Scroll to 120vh (can adjust by adding offset if needed)
      // behavior: "smooth",
    });
  };

  return (
    <div className="containerText">
      {isCardVisible && (
        <div
          className={`curved-text-container ${
            isContainerTextVisible ? "" : "hidden"
          }`}
        >
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400">
            <defs>
              <path
                id="curve"
                d="M 50 350 Q 400 50 750 350"
                fill="transparent"
              />
            </defs>
            <motion.text>
              <motion.textPath
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                href="#curve"
                startOffset="50%"
                textAnchor="middle"
              >
                WHERE ELEGANCE MEETS DESIRE
              </motion.textPath>
            </motion.text>
          </svg>
        </div>
      )}
      {isCardVisible && (
        <div className={`card-containerOne ${isCardVisible ? "visible" : ""}`}>
          <div className="cardOOne" onClick={handleExploreClick}>
            <div className="imgBx">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Person"
              />
            </div>
            <div className="details">
              <p>OPEN NOW</p>
            </div>
          </div>
        </div>
      )}
      {isCarouselVisible ? (
        <div className={`carouselOne ${isCarouselVisible ? "" : "hidden"}`}>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            onSlideChange={onSlideChange}
            onSlideTransitionEnd={onSlideTransitionEnd}
            speed={1500}
            simulateTouch={true}
            draggable={true} // Enable mouse dragging
            touchMoveStopPropagation={true}
            breakpoints={{
              575: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="single"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: 0.1 }}
                  onClick={(event) => handleImageClick(event, index)} // Pass event and index
                >
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
                    {/* <div className="hover-text1">
                      <span className="hovertextInner">Explore More</span>{" "}
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Show the selected page
        <motion.div
          className={`homePageBanner ${isCarouselVisible ? "hidden" : ""}`}
          // initial={{ opacity: 0, scaleX: 0 }}
          //   animate={{ opacity: 1, scaleX: 1 }}
          //   exit={{
          //     opacity: 0,
          //     scaleX: 0,
          //     transition: { duration: 1, ease: "easeInOut" },
          //   }}
          //   transition={{ duration: 1 }}
          //   style={{ originX: 0.5 }} // Ensure it opens from the center
        >
          <motion.div
            // initial={{ opacity: 0, scaleX: 0 }}
            // animate={{ opacity: 1, scaleX: 1 }}
            // exit={{
            //   opacity: 0,
            //   scaleX: 0,
            //   transition: { duration: 1, ease: "easeInOut" },
            // }}
            // transition={{ duration: 1 }}
            // style={{ originX: 1}}
          >
            {renderPage()}
          </motion.div>
        </motion.div>
      )}

      {/* {!isCarouselVisible && ( */}
      {!isCardVisible && !isCarouselVisible && (
        <div className="explore-button-container">
          <div
            onClick={handleExploreClick}
            scroll={false}
            className="explore-button"
          >
            <span className="button-content-explore">Close</span>
          </div>
        </div>
      )}

      {/* Manual navigation buttons only when carousel is visible */}
      {/* {selectedImage === null && ( */}
      {/* {isCarouselVisible && (
        <div className="swiper-buttons">
          <button onClick={goToPrevSlide} className="swiper-button">
            <span className="button-content-explore">Prev</span>
          </button>
          <button onClick={goToNextSlide} className="swiper-button">
            <span className="button-content-explore">Next</span>
          </button>
        </div>
      )}  */}
    </div>
  );
};

export default SwiperCarousel;
