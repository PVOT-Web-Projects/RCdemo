"use client";
import React from "react";
import "./timelinehome.scss";
import { motion } from "framer-motion";

const TimelineHome = () => {
  return (
    <div className="Timelinecontainer">
      <div className="Timelinecontainer1">
        <motion.div
          className="TimelinetextContainer1"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* We are known for providing high density laminates with unparalleled
          services in terms of quality and reliability. We are known for
          providing high density laminates with unparalleled services in terms
          of quality and reliability. */}
          Our extensive network of 15,000 dealers/sub-dealers/retailers and over
          30 distributors across India ensures that our products are readily
          available, allowing us to better serve you. Our success extends beyond
          India, as we proudly export our products to Europe, Asia, Latin
          America, Australia and North America, marking our presence on the
          international stage. From Ahmedabad to the world, we are reaching new
          horizons.
        </motion.div>
        <motion.div
          className="Timelinecircle1"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="Timelinecontainer2">
        <motion.div
          className="Timelinecircle2"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="TimelineContainer3">
        <motion.div
          className="TimelinetextContainer3"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 100, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="TimeTextNewinner">
            {" "}
            {/* We are known for providing high density laminates with unparalleled
            services in terms of quality and reliability. We are known for
            providing high density laminates with unparalleled services in terms
            of quality and reliability. */}
            We have made substantial investments in wind and solar power to
            effectively minimise our carbon footprint. Our product mixes are
            continuously evolving to proactively reduce our impact on the
            environment. As proud members of FSC, Green-guard, and other
            organisations, we are committed to sustainability.
          </p>
        </motion.div>

        <motion.div
          className="Timelinecircle3"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default TimelineHome;
