import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anime";
import Image from "next/image";
import logo from "@/images/svgLogos/newww.svg";
import styles from "./style.module.css";


export default function Preloader({ counter }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [loadedFrames, setLoadedFrames] = useState(0);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Update loadedFrames when counter changes
    setLoadedFrames(counter);
  }, [counter]);
  useEffect(() => {
    // Once the loadedFrames reaches 100, the loading is complete
    if (loadedFrames === 100) {
      setLoadingCompleted(true);
    }
  }, [loadedFrames]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.35, ease: [0.76, 0, 0.24, 1], delay: 2.95 },
    },
  };

  const circleStrokeLength = 2 * Math.PI * 95; // Circumference of the circle
// Calculate the progress based on loadedFrames
const strokeDashoffset = circleStrokeLength * (1 - loadedFrames / 100);
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      <motion.div variants={opacity} initial="initial" animate="enter">
      <div className={styles.loader}></div>
        {/* <div className={styles.logoImageOuter}> */}
          {/* <Image className={styles.logoImage} src={logo} alt="image" /> */}
        {/* </div> */}
        
        {/* <div className={styles.loadingCounter}>{loadedFrames}</div> */}
      </motion.div>
      <div className={styles.svgLogoCenter}>
      <Image src={logo} alt="none" className={styles.svgLogoCenterInner}/>
      
 
      <div className={styles.circleCenter}>
        
        <svg className={styles.border} height="200" width="200">
      
          <circle
            className={styles.circle}
            cx="100"
            cy="100"
            r="95"
            stroke="#5b3524"
            strokeWidth="3"
            fillOpacity="0"
            strokeDasharray={circleStrokeLength}
            strokeDashoffset={strokeDashoffset} // This makes the circle progress
            transform="rotate(-90deg)" // Rotate the circle to start from the top
            // strokeDashoffset={circleStrokeLength * (loadedFrames / 100)}
         
         />
         
        </svg>
      </div>
      </div>
      <div className={styles.LoaderText}>
        <div>
          <p>Unveiling Layers of Luxury</p>
        </div>
      </div>
      <div>
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
        ></motion.path>
      </div>
    </motion.div>
  );
}
