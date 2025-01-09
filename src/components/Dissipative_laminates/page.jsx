"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./laminates.scss";

export default function DissipativeLaminates({ data }) {
  return (
    <>
      <div className="laminatesHero">
        <div className="laminatesWrapper">
          <motion.div
            className="laminatesHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>{data.header}</p>
          </motion.div>
          <div className="laminatesBody">
            <div className="laminateBodyDescription">
              <p>{data.description}</p>
            </div>

            <div className="laminatesBoxOuter">
              <div className="laminatesBoxInner">
                {data.boxes.map((box, index) => (
                  <div className="laminatesBox1" key={index}>
                    <div>
                      <Image src={box.icon} alt="" className="laminateIconImage" />
                    </div>
                    <div>
                      <p className="laminatesBoxHeader">{box.title}</p>
                    </div>
                    <div>
                      {Array.isArray(box.details) ? (
                        <ul>
                          {box.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{box.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
