"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import "./newTextanim.scss"
// Word wrapper component
const Wrapper = (props) => {
  return <span className="word-wrapper">{props.children}</span>
}

// Map API "type" values to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "p",
  heading2: "p",
}

// AnimatedCharacters component
const AnimatedCharacters = ({ text, type }) => {
  // Framer Motion variant object for character animations
  const item = {
    hidden: {
      y: type === "heading1" ? "200%" : 0,
      x: type === "heading2" ? "200%" : 0,
      color: "#ffffff",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      x: 0,
      color: "#ffffff",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }

  // Split the text into words
  const splitWords = text.split(" ")

  // Create storage array and split each word into characters
  const words = splitWords.map((word) => word.split(""))

  // Add a space character at the end of each word for spacing
  words.forEach((word) => word.push("\u00A0"))

  // Get the tag name from the tagMap based on the type (heading or paragraph)
  const Tag = tagMap[type] || "span"

  return (
    <Tag>
      {words.map((word, index) => (
        <Wrapper key={index}>
          {word.map((char, idx) => (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
              key={idx}
            >
              <motion.span
                style={{ display: "inline-block" }}
                variants={item}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  )
}

// Main App Component
export default function AnimatedText() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Placeholder text data (as if from an API)
  const placeholderText = [
    { type: "heading1", text: "ROYAL" },
    { type: "heading2", text: "CROWN" },
  ]

  // Container animation variant for stagger effect
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  return (
    <motion.div
      className="TextAnimFirst"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      ref={ref}
    >
      <div className="TextAnimSec">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  )
}

