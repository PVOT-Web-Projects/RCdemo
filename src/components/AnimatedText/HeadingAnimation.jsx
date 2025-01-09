import { motion, useTransform, useScroll } from "framer-motion";

const AnimatedTextWord = ({ text, fontSize, justifyContent, className, startOpacity = 1, endOpacity = 0, startScroll = 0, endScroll = 400 }) => {
  // Use useScroll to get the scroll progress
  const { scrollY } = useScroll();

  // Map scroll values to opacity
  const opacity = useTransform(
    scrollY,
    [startScroll, endScroll], // Range of scroll (start and end)
    [startOpacity, endOpacity] // Corresponding opacity values
  );

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.2,
        damping: 12,
        stiffness: 50,
      },
    },
    hidden: {
      x: 0,
      y: 200,
      transition: {
        damping: 12,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: fontSize,
        justifyContent: justifyContent,
      }}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        variants={child}
        style={{
          display: "inline-block",
          opacity, // Controlled opacity
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedTextWord;
