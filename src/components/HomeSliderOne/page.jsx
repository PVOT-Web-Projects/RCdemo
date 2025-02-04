import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeSliderOne.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Img1 from "@/images/bgrem.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const [videoVisible, setVideoVisible] = useState(false); // Track if video should be visible
  const [videoPreloaded, setVideoPreloaded] = useState(false); // Track if videos are preloaded

  const videoRefs = useRef([]);
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
  const videoUrls = [
    "https://vanras.humbeestudio.xyz/videos/kitchen_new.mp4",
    "https://vanras.humbeestudio.xyz/videos/living_new.mp4",
    "https://vanras.humbeestudio.xyz/videos/interiorOut_new.mp4",
    "https://vanras.humbeestudio.xyz/videos/living_new.mp4",
    "https://vanras.humbeestudio.xyz/videos/interiorOut_new.mp4",
  ];
  // const videoUrls = [
  //   "./video/kitchen_new.mp4",
  //   "./video/living_new.mp4",
  //   "./video/interiorOut_new.mp4",
  //   "./video/living_new.mp4",
  //   "./video/interiorOut_new.mp4",
  // ]
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Apply ScrollTrigger to the SVG element
    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        {
          rotation: -40,
          y: 10,
          // duration: 3,
          // x: -100, // Start position (off-screen to the left)
          // opacity: 0, // Initially invisible
        },
        {
          y: 0,
          rotation: 0, // Final rotation (centered)
          // x: 0, // Final position (centered)
          // opacity: 1, // Fully visible
          // duration: 3, // Duration of the animation
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: textPathRef.current, // Trigger the animation when the element comes into view
            start: "top 70%", // Start the animation when 80% of the element is in view
            end: "top 10%", // End the animation when the element is at the top 30% of the viewport
            scrub: true, // Smooth animation as the user scrolls
            // once: true, // Run the animation only once
            // markers: true,
          },
        }
      );
    }
  
    // Cleanup ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  // useEffect(() => {
  //   // Create an intersection observer to detect when the element enters the viewport
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // If the element is in view, animate it with GSAP
  //           gsap.fromTo(
  //             svgRef.current,
  //             {
  //               rotation: -20,
  //               x: -100, // Start position (off-screen to the left)
  //               opacity: 0, // Initially invisible
  //             },
  //             {
  //               rotation: 0, // Final rotation (centered)
  //               x: 0, // Final position (centered)
  //               opacity: 1, // Fully visible
  //               duration: 1, // Duration of the animation
  //               ease: "power2.out", // Smooth easing
  //             }
  //           );
  //           observer.unobserve(entry.target); // Stop observing after animation triggers
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5, // Trigger when 50% of the element is in view
  //     }
  //   );

  //   // Start observing the element
  //   if (svgRef.current) {
  //     observer.observe(svgRef.current);
  //   }

  //   // Clean up observer when component unmounts
  //   return () => {
  //     if (svgRef.current) {
  //       observer.unobserve(svgRef.current);
  //     }
  //   };
  // }, []);
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
  const handleImageClick = (event, index) => {
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
     // Show video immediately
     if (videoRefs.current[index]) {
      setVideoVisible(true); // Set video to be visible
      videoRefs.current[index].play(); // Start playing the video immediately
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
    if (selectedImage === null) return null;

    return (
      <div ref={pageRef}>
        <div className="VideoOneContainer">
          <div className="VideoInnerContainer">
            {/* Pre-rendering video */}
            <video
              ref={(el) => (videoRefs.current[selectedImage] = el)}
              src={videoUrls[selectedImage]}
              type="video/mp4"
              preload="auto" // Preload the video
              muted // Mute the video to avoid sound playback on load
              autoPlay
              playsInline
              loop
              className="videoOneVid"
            />
            <div className="VideoInnerContainerText">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <p>WHERE ELEGANCE</p>
                <p>MEETS DESIRE</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const imageRef = useRef(null);
  const handleExploreClick = () => {
    setSelectedImage(null); // Reset selected image
    setIsCarouselVisible(true); // Show the carousel
    setIsCardVisible(false); // Hide the card
    setIsContainerTextVisible(true); // Show the containerText
    setVideoVisible(false); // Hide video when closing the exploration
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
          <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400">
            <defs>
              <motion.path
                ref={pathRef}
                id="curve"
                d={
                  isHovered
                    ? // M 50 330 Q 200 180 400 330 Q 600 430 750 280
                      "M 50 290 Q 200 140 400 290 Q 600 310 750 240" // Path on hover
                    : "M 100 400 A 300 350 0 0 1 700 400" // Path when not hovered
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
                {/* drinking the acid water from the sky */}
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
          <motion.div className="cardOOne" onClick={handleExploreClick}>
            <div className="imgBx">
              <img
                src="https://interiormaataassets.humbeestudio.xyz/KitchenImgThumb.png"
                alt="Person"
                ref={imageRef}
                // onClick={() => handleExploreClick(imageRef)}
              />
            </div>
          </motion.div>
        </div>
      )}
      {isCarouselVisible && (
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
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      // ) : (
      //   <div>{renderPage()}</div>
      )}
  {selectedImage !== null && !isCarouselVisible && renderPage()}
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
