import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // Import Lenis
// import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/components/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/components/Home_page_Banner/Banner.module.scss";
import "./scroll.css";
gsap.registerPlugin(ScrollTrigger);

const Animation = ({ loadImage, counter }) => {
  const [info, setInfo] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);
  const [loadingCounter, setLoadingCounter] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  console.log(loadingCounter);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0, // Increase for more smoothness (0 - 1)
      smooth: true, // Ensure smooth scrolling is enabled
      direction: "vertical", // Scrolling direction, use 'horizontal' for horizontal scroll
      gestureDirection: "vertical", // Direction for touch gestures
      mouseMultiplier: 1, // Adjust how sensitive the scroll reacts to the mouse
      smoothTouch: true, // Enable smooth scroll for touch devices
      touchMultiplier: 2, // Increase this value for a smoother effect on touch devices
    });

    // RAF (Request Animation Frame) loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on unmount
    };
  }, []);
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;


    const setCanvasSize = () => {
      // const originalWidth = 1632;
      // const originalHeight = 918;
      // const aspectRatio = originalWidth / originalHeight;
      // const availableWidth = window.innerWidth;
      const aspectRatio = 1632 / 918;
      const availableWidth = window.innerWidth;

      if (availableWidth < 200) {
        canvas.width = 1632 / 2;
        canvas.height = 918 / 2;
        canvas.style.width = "1301px";
        canvas.style.height = "100vh";
      } else {
        canvas.width = 1632;
        canvas.height = 918;
        canvas.style.width = "100%";
        canvas.style.height = "100vh";
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    // https://interiormaataassets.humbeestudio.xyz/mainsiteassets/desktop/0001.webp
    const frameCount = 91;
    const currentFrame = (index) =>
      `https://interiormaataassets.humbeestudio.xyz/mainsiteassets/KitchenNew/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.webp`;

    let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
    }
// old code
    // const loadImages = async () => {
    //   try {
    //     const loadImagePromises = imgL.map((imageUrl, index) => {
    //       return new Promise((resolve) => {
    //         const img = new Image();
    //         img.src = imageUrl;
    //         img.onload = () => {
    //           setLoadingCounter(index + 1);
    //           resolve();
    //         };
    //       });
    //     });

    //     await Promise.all(loadImagePromises);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error loading images:", error);
    //   }
    // };
// new code
    const loadImages = async () => {
      const loadBatch = async (startIndex) => {
        const batchSize = 10;
        const promises = [];
    
        for (let i = startIndex; i < Math.min(startIndex + batchSize, frameCount); i++) {
          promises.push(new Promise((resolve) => {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
              imagesRef.current[i] = img;
              resolve();
            };
          }));
        }
    
        await Promise.all(promises);
        setLoadingCounter((prev) => prev + batchSize);
      };
    
      for (let i = 0; i < frameCount; i += 10) {
        await loadBatch(i);
      }
    
      setLoading(false);
    };
    
    // const loadImages = async () => {
    //   const batchSize = 10; // Number of images to load at once
    //   const totalFrames = frameCount;
      
    //   const loadBatch = (startIndex) => {
    //     const endIndex = Math.min(startIndex + batchSize, totalFrames);
    //     const loadImagePromises = [];
    
    //     for (let i = startIndex; i < endIndex; i++) {
    //       loadImagePromises.push(new Promise((resolve) => {
    //         const img = new Image();
    //         img.src = currentFrame(i);
    //         img.onload = () => {
    //           imagesRef.current[i] = img; // Store the loaded image
    //           setLoadingCounter(prev => prev + 1);
    //           resolve();
    //         };
    //       }));
    //     }
    
    //     return Promise.all(loadImagePromises);
    //   };
    
    //   try {
    //     for (let i = 0; i < totalFrames; i += batchSize) {
    //       await loadBatch(i);
    //       // Allow some time between batches to avoid overwhelming the browser
    //       await new Promise(resolve => setTimeout(resolve, 50)); // Adjust as necessary
    //     }
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error loading images:", error);
    //   }
    // };
    
    loadImages();
    console.log(imgL);
    console.log("Counter", loadingCounter);

    const animationTimeline = gsap.timeline({
      onUpdate: () => {
        render();
        const progress = animationTimeline.progress();
        const frame = Math.floor(progress * (frameCount - 1));
        airpodsRef.current.frame = frame;
        console.log(`Scroll Progress: ${progress}, Frame: ${frame}`);
      },
      // onComplete: () => setAnimationEnded(true),
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: false, // Increase scrub value for smoother transitions effect it will take 2 seconds to scroll use true for default effect
        //       smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        // effects: true, // looks for data-speed and data-lag attributes on elements
        // smoothTouch: 100,
        end: "+=1200%",
        onUpdate: (self) => {
          const progress = self.progress;
          airpodsRef.current.frame = Math.floor(progress * (frameCount - 1));
          console.log(
            `Scroll Progress: ${progress}, Frame: ${airpodsRef.current.frame}`
          );
          render();
        },
      },
    });
    imagesRef.current[0].onload = render;
    // animationTimeline.to(airpodsRef.current, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   ease: "none",
    //   duration: 1,
    // });

    // imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // console.log(loadImage(loading));

  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollPosition / totalScroll) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => window.removeEventListener("scroll", updateScrollPercentage);
  }, []);

  const loadingProgress = (loadingCounter / 250) * 100;
  // console.log(counter(loadingProgress));
  const scrollDownByTenPercent = () => {
    const tenPercentOfHeight = window.innerHeight * 1.7;
    window.scrollBy({
      top: tenPercentOfHeight,
      behavior: "smooth",
    });
    setIsVisible(false);
  };

  //  code for video show and hide
  // useEffect(() => {
  //   // Function to handle scroll direction and video visibility
  //   const handleScroll = () => {
  //     const video = document.querySelector(`.${styles.videoBg}`);
  //     if (window.scrollY > 0) {
  //       // Check if window has scrolled down
  //       video.style.visibility = "hidden";
  //     } else {
  //       video.style.visibility = "visible";
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [buttonRef, buttonInView] = useInView();

  const buttonVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    upsideDown: { opacity: 0, y: 180, transition: { duration: 0.3 } },
  };

  return (
    <section>
      <section ref={sectionRef}>
        <canvas
          className={styles.canvas_factory_settings}
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100vh",
            willChange: "transform", // Hint the browser for optimization
          }}
        ></canvas>
      </section>
      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className={styles.text1}
      >
        <HeadingTextAnimation
          heading={"Your Imagination."}
          justifyContent={"center"}
        />
        <HeadingTextAnimation
          heading={"Our Innovation."}
          justifyContent={"center"}
        />
      </motion.div> */}

      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className={styles.interiormaata}
      >
        <HeadingTextAnimation
          heading={"interior माता"}
          justifyContent={"center"}
        />
      </motion.div> */}

      {/* <div class="scroll-down-wrap no-border">
        {isVisible && (
          <div className="section-down-arrow" onClick={scrollDownByTenPercent}>
            <svg
              class="nectar-scroll-icon"
              viewBox="0 0 30 45"
              enableBackground="new 0 0 30 45"
            >
              <path
                class="nectar-scroll-icon-path"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeMiterlimit="10"
                d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
              ></path>
            </svg>
            <div className="scroll">Scroll to explore</div>
          </div>
        )}
      </div> */}

      {/* <video
        className={styles.videoBg}
        width="750"
        height="500"
        autoPlay
        loop
        muted
      >
        <source src="./video/final_frame_video.mp4" type="video/mp4" />
      </video> */}

      {/* <MusicPlayer /> */}
      {/* {scrollPercentage >= 45 && (
        <div className={styles.buttonOuter} ref={buttonRef}>
          <motion.button
            className={styles.buttonX}
            role="button"
            initial="hidden"
            animate={
              window.innerWidth < 768
                ? scrollPercentage >= 55
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 1024
                ? scrollPercentage >= 62
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 1400
                ? scrollPercentage >= 65
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 500
                ? scrollPercentage >= 58
                  ? "upsideDown"
                  : "visible"
                : window.innerWidth < 1600
                ? scrollPercentage >= 60
                  ? "upsideDown"
                  : "visible"
                : scrollPercentage >= 63
                ? "upsideDown"
                : "visible"
            }
            variants={buttonVariants}
          >
            <a href="tel:+917404040286" className={styles.textX}>
              Contact Us | +917404040286
            </a>
          </motion.button>
        </div>
      )} */}
    </section>
  );
};

export default Animation;