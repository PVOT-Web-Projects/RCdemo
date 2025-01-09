"use client";

import YellowButton from "@/components/buttons/yellowButton/YellowButton";
import Image from "next/image";
import { motion } from "framer-motion";

const CategoryLeftRightItemOne = ({
  title,
  text,
  url,
  logo1,
  logo2,
  image1,
  image2,
  image3,
}) => {
  return (
    <div className="category_left_right_item">
      <div className="category_left_right_item_wrapper">
        <div className="left">
          <div className="left_itemOne">
            <div className="text_effectOne">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                viewport={{ once: true }}
                className="cardOne"
              >
                <h2 className="heading">{title}</h2>
              </motion.div>
            </div>
            <p className="text">{text}</p>
            <div className="left_bottomOne">
              <YellowButton url={url} btn_text={"EXPLORE COLLECTION"} />
              <div className="logoesOne">
                {logo1 && <Image src={logo1} alt={title} />}
                {logo2 && <Image src={logo2} alt={title} />}
              </div>
            </div>
          </div>
        </div>
        <div className="rightOne">
          <div className="right_itemOne">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              className="img1One"
            >
              <Image src={image1} alt={title} />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 100,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                x: -70, // Slide in to its original position
                y: 60,
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              className="img2One"
            >
              <Image src={image2} alt={title} />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 100,
                y: 120,
              }}
              whileInView={{
                opacity: 1,
                x: -150, // Slide in to its original position
                y: 120,
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              className="img3One"
            >
              <Image src={image3} alt={title} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryLeftRightItemOne;
