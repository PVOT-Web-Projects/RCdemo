import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeSliderOne.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Img1 from "@/images/bgrem.png";
import Page1 from "@/components/videoOne/page2";
import Page2 from "@/components/videoOne/page3";
import Page3 from "@/components/videoOne/page4";
import Page4 from "@/components/videoOne/page5";
import Page5 from "@/components/videoOne/page4";
import { gsap } from "gsap";

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
  const pageRef = useRef(null);
  // Use a ref to track whether the page is mounted for the first time
  const isFirstRender = useRef(true);
  const swiperRef = useRef(null); // Use useRef to reference Swiper
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track the clicked image
  // const [isCarouselVisible, setIsCarouselVisible] = useState(true); // Controls carousel visibility
  const [isCarouselVisible, setIsCarouselVisible] = useState(false); // Initially hide the carousel
  const [isCardVisible, setIsCardVisible] = useState(true); // Initially show the card
  const [isContainerTextVisible, setIsContainerTextVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  // const svgRef = useRef(null);
  const pathRef = useRef(null); // Ref for the path element
  const textPathRef = useRef(null); // Ref for the textPath element

  // Array of custom image URLs
  const images = [
    "https://interiormaataassets.humbeestudio.xyz/KitchenImgThumb.png", // Image 1 URL
    "https://interiormaataassets.humbeestudio.xyz/livingroomthumb.png", // Image 2 URL
    "https://interiormaataassets.humbeestudio.xyz/interior-outdoor.png",
    "https://interiormaataassets.humbeestudio.xyz/livingroomthumb.png", // Image 3 URL
    "https://interiormaataassets.humbeestudio.xyz/interior-outdoor.png", // Image 4 URL
  ];
  useEffect(() => {
    if (svgRef.current && pathRef.current && textPathRef.current) {
      // Initial GSAP setup for the path animation
      gsap.set(pathRef.current, {
        strokeDasharray: pathRef.current.getTotalLength(),
        strokeDashoffset: pathRef.current.getTotalLength(),
      });

      // Animate the path and text to move downwards
      if (isHovered) {
        // Animate the path stroke
        gsap.from(pathRef.current, {
          strokeDashoffset: 0,
          duration: 1, // Slightly longer duration for a smoother feel
          ease: "power2.out", // Smoother ease for the stroke drawing
        });

        // Animate the text and path downward with a smooth ease
        gsap.from(pathRef.current, {
          y: 10, // Downward motion
          duration: 1, // Duration for smoother transition
          ease: "power2.out", // Smooth easing function
        });

        gsap.from(textPathRef.current, {
          y: 10, // Downward motion
          duration: 1, // Duration for smoother transition
          ease: "power2.out", // Smooth easing function
        });
      } else {
        // Reset path stroke and position
        gsap.from(pathRef.current, {
          strokeDashoffset: pathRef.current.getTotalLength(),
          y: 0, // Reset vertical position
          duration: 1, // Duration for smooth transition back to initial state
          ease: "power2.inOut", // Smooth reset easing
        });

        gsap.from(textPathRef.current, {
          y: 0, // Reset vertical position
          duration: 1, // Duration for smooth transition back
          ease: "power2.inOut", // Smooth easing function for reset
        });
      }
    }
  }, [isHovered]);
  // GSAP animation runs on selectedImage change, including first render

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Trigger animation whenever selectedImage changes
  useLayoutEffect(() => {
    if (selectedImage !== null && pageRef.current) {
      const tl = gsap.timeline();
      gsap.set(pageRef.current, {
        opacity: 0,
        scale: 0.8,
        borderRadius: "50%",
        overflow: "hidden",
        transformOrigin: "center",
      });

      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }).to(
        pageRef.current,
        {
          borderRadius: "0%",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.9"
      );
    }
  }, [selectedImage]); // Trigger animation when selectedImage changes

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
    // Create an intersection observer to detect when the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the element is in view, animate it with GSAP
            gsap.fromTo(
              svgRef.current,
              {
                rotation: -20,
                x: -100, // Start position (off-screen to the left)
                opacity: 0, // Initially invisible
              },
              {
                rotation: 0, // Final rotation (centered)
                x: 0, // Final position (centered)
                opacity: 1, // Fully visible
                duration: 1, // Duration of the animation
                ease: "power2.out", // Smooth easing
              }
            );
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    // Start observing the element
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    // Clean up observer when component unmounts
    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);
  
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
  // const handleImageClick = (event, index) => {
  //   // Get the clicked image directly from the event
  //   // const clickedImage = event.currentTarget.querySelector(".image");
  //   // Remove zoom-effect from all images
  //   // document.querySelectorAll(".image").forEach((image) => {
  //   //   image.classList.remove("zoom-effect");
  //   // });
  //   // Add zoom-effect to the clicked image
  //   // if (clickedImage) {
  //   // clickedImage.classList.add("zoom   -effect");
  //   // After the animation, update the state
  //   // setTimeout(() => {
  //   setSelectedImage(index) // Update the state with the selected image index
  //   setIsCarouselVisible(false) // Hide the carousel
  //   setIsContainerTextVisible(false) // Hide the containerText
  //     // Trigger GSAP animation immediately after clicking
  // if (pageRef.current) {
  //   const tl = gsap.timeline();
  //   gsap.set(pageRef.current, {
  //     opacity: 0,
  //     scale: 0.8,
  //     borderRadius: "50%",
  //     overflow: "hidden",
  //     transformOrigin: "center",
  //   });

  //   tl.to(pageRef.current, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1,
  //     ease: "power4.out",
  //   }).to(
  //     pageRef.current,
  //     {
  //       borderRadius: "0%",
  //       duration: 0.8,
  //       ease: "power2.out",
  //     },
  //     "-=0.9"
  //   );
  // }
  //   // }, 500);
  //   // }
  // }
  const handleImageClick = (event, index) => {
    // Get the clicked image directly from the event
    // const clickedImage = event.currentTarget.querySelector(".image");
    // Remove zoom-effect from all images
    // document.querySelectorAll(".image").forEach((image) => {
    //   image.classList.remove("zoom-effect");
    // });
    // Add zoom-effect to the clicked image
    // if (clickedImage) {
    // clickedImage.classList.add("zoom-effect");
    // After the animation, update the state
    // setTimeout(() => {
    setSelectedImage(index); // Update the state with the selected image index
    setIsCarouselVisible(false); // Hide the carousel
    setIsContainerTextVisible(false); // Hide the containerText
    // }, 500);
    // }
    if (pageRef.current) {
      const tl = gsap.timeline();
      gsap.set(pageRef.current, {
        opacity: 0,
        scale: 0.8,
        borderRadius: "50%",
        overflow: "hidden",
        transformOrigin: "center",
      });

      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }).to(
        pageRef.current,
        {
          borderRadius: "0%",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.9"
      );
    }
    // Center the image inside the inner Swiper (like the outer one)
    if (swiperRef.current) {
      // Get the Swiper instance
      const swiperInstance = swiperRef.current.swiper;
      // Ensure the slide is centered
      swiperInstance.slideTo(index, 0, false); // Go to the clicked image
      // Optionally scroll to the image (if required)
      const selectedImage = event.target; // Get the clicked image
      const elementRect = selectedImage.getBoundingClientRect();
      // Calculate scroll position to center the selected image
      const offset = (window.innerHeight - elementRect.height) / 2;
      const scrollToY = window.scrollY + elementRect.top - offset;
      // Ensure the scroll position stays within bounds
      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
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
        return (
          <div ref={pageRef}>
            <Page1 />
          </div>
        );
      case 1:
        return (
          <div ref={pageRef}>
            <Page2 />
          </div>
        );
      case 2:
        return (
          <div ref={pageRef}>
            <Page3 />
          </div>
        );
      case 3:
        return (
          <div ref={pageRef}>
            <Page4 />
          </div>
        );
      case 4:
        return (
          <div ref={pageRef}>
            <Page5 />
          </div>
        );
      default:
        return <p></p>;
    }
  };

  const imageRef = useRef(null);
  const handleExploreClick = () => {
    setSelectedImage(null); // Reset selected image
    setIsCarouselVisible(true); // Show the carousel
    setIsCardVisible(false); // Hide the card
    setIsContainerTextVisible(true); // Show the containerText

    // Check if imageRef is available
    if (imageRef && imageRef.current) {
      const element = imageRef.current;
      const elementRect = element.getBoundingClientRect();

      // Calculate the scroll position needed to center the element
      const offset = (window.innerHeight - elementRect.height) / 1.2;
      const scrollToY = window.scrollY + elementRect.top - offset;

      // Ensure the scroll position stays within document bounds
      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="containerText">
      {isCardVisible && (
        <div
          className={`curved-text-container ${
            isContainerTextVisible ? "" : "hidden"
          }`}
        >
          <svg 
          ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400">
            <defs>
              <path
                ref={pathRef}
                id="curve"
                d={
                  isHovered
                    ? // M 50 330 Q 200 180 400 330 Q 600 430 750 280
                      "M 50 290 Q 200 140 400 290 Q 600 390 750 240" // Path on hover
                    : "M 50 350 Q 400 -240 750 350" // Path when not hovered
                }
                fill="transparent"
              />
            </defs>
            <text>
              <motion.textPath
                ref={textPathRef}
                href="#curve"
                startOffset="50%" // Position text along the path
                textAnchor="middle" // Center the text
              >
                WHERE ELEGANCE MEETS DESIRE
              </motion.textPath>
            </text>
          </svg>
        </div>
      )}
      {isCardVisible && (
        <div
          className={`card-containerOne ${isCardVisible ? "visible" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cardOOne" onClick={handleExploreClick}>
            <div className="imgBx">
              <img
                src="https://interiormaataassets.humbeestudio.xyz/KitchenImgThumb.png"
                alt="Person"
                ref={imageRef}
                // onClick={() => handleExploreClick(imageRef)}
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
                  onClick={(event) => handleImageClick(event, index)} // Pass event and index
                >
                  <motion.div
                    className="image-container"
                    initial={{ scale: 0.5, rotateY: 90 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    exit={{ scale: 0.5, rotateY: -90, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <motion.img
                      initial={{ scale: 0.5 }} // Start smaller
                      animate={{ scale: 1 }} // Animate to full size
                      transition={{ duration: 0.2, ease: "easeInOut" }} // Quick smooth scaling transition
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
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>{renderPage()}</div>
      )}

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
    </div>
  );
};

export default SwiperCarousel;
