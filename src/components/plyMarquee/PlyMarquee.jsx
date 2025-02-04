"use client";
const { default: Image } = require("next/image");
const { default: Marquee } = require("react-fast-marquee");
import img1 from "@/images/ply/574_HNG.jpeg";
import img2 from "@/images/ply/691X_SN.jpg";
import img3 from "@/images/ply/4001_CL.jpg";
import img4 from "@/images/ply/5009_GEM.jpg";
import img5 from "@/images/ply/5010_GEM.jpg";
import img6 from "@/images/ply/6017_MO.jpg";
import img7 from "@/images/ply/6018_MO.jpg";
import img8 from "@/images/ply/6019_SN.jpg";
import img9 from "@/images/ply/6032_TW.jpg";
import img10 from "@/images/ply/RC_575_HNG.jpg";
import img11 from "@/images/ply/574_HNG.jpeg";
import img12 from "@/images/ply/RC_576_TW.jpg";
import img13 from "@/images/ply/RC_583_TW.jpg";
import img14 from "@/images/ply/RC_664X_SF.jpg";
import img15 from "@/images/ply/RC_69X_SFS.jpg";
import img16 from "@/images/ply/RC_670X_SFS.jpg";
import img17 from "@/images/ply/RC_4004_TF.jpg";
import img18 from "@/images/ply/RC_4005_TF.jpg";
import img19 from "@/images/ply/RC_4006_TF.jpg";
import img20 from "@/images/ply/RC_6007.jpg";
import img21 from "@/images/ply/RC_6008.jpg";
import img22 from "@/images/ply/RC_6025_TO.jpg";
import img23 from "@/images/ply/RC_6026_TO.jpg";
import img24 from "@/images/ply/RC_6029_SN.jpg";
import img25 from "@/images/ply/RC_6031_SN.jpg";

import "./plyMarquee.scss";
import "./marquee.css";
import { motion } from "framer-motion";
const PlyMarquee = () => {
  return (
    <div className="ply_marquee">
      <div className="MarqueeTextFirst">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Catalogue
        </motion.div>
        {/* <p>Catalogue</p> */}
      </div>
      <div className="MarqueeTextSecond">
        <p>
          Experience the epitome of modern minimalist aesthetic with our luxury
          laminates, tailored to ful-fill every desire, ensuring your interiors
          exude a sophisticated charm that captivates and endures.
          {/* It's a modern minimalist aesthetic look, our luxury laminates cater to
          every desire, ensuring your interiors exude a refined charm that
          captivates and endures. */}
        </p>
        <p className="MarqueeTextSecondInner">
          Elevate your space with the ultimate expression of luxury and grace.
        </p>
      </div>
      <div className="MarqueMainSection">
        <Marquee class="r3f_marquee" speed={60} pauseOnHover={true}>
          <div className="ply_list">
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">576</p>
                  <p className="text">tw</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">Ganges</div>
                  <div className="ply_wood">wood</div>
                </div>
              </div>
              <Image
                loading="lazy" // This will lazy load images that aren't critical
                src={img12}
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6008</p>
                  <p className="text">tw</p>
                </div>
                <div className="info_right">
                  <p className="ply_name">Bloomberg</p>
                  <p className="ply_wood">chestnut</p>
                </div>
              </div>
              <Image
                loading="lazy" // This will lazy load images that aren't critical
                src={img21}
                alt="ply"
              />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6007</p>
                  <p className="text">tw</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">Bloomberg</div>
                  <div className="ply_wood">chestnut</div>
                </div>
              </div>
              <Image
                src={img20}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6032</p>
                  <p className="text">tw</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">sumatra</div>
                  <div className="ply_wood">teak</div>
                </div>
              </div>
              {/* baaki */}
              <Image
                src={img9}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">583</p>
                  <p className="text">tw</p>
                </div>
                <div className="info_right">
                  <p className="ply_name">sumatra</p>
                  <p className="ply_wood">teak</p>
                </div>
              </div>
              <Image
                src={img13}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6029</p>
                  <p className="text">sn</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">steel</div>
                  <div className="ply_wood">oak</div>
                </div>
              </div>
              <Image
                src={img24}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6031</p>
                  <p className="text">sn</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">steel</div>
                  <div className="ply_wood">oak</div>
                </div>
              </div>
              <Image
                src={img25}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6019</p>
                  <p className="text">sn</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">sun</div>
                  <div className="ply_wood">shine</div>
                </div>
              </div>
              <Image
                src={img8}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">691x</p>
                  <p className="text">sn</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">badung</div>
                  <div className="ply_wood">teak</div>
                </div>
              </div>
              <Image
                src={img2}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6025</p>
                  <p className="text">to</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">naulo</div>
                  {/* <div className="ply_wood"></div> */}
                </div>
              </div>
              <Image
                src={img22}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6026</p>
                  <p className="text">to</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">naulo</div>
                  {/* <div className="ply_wood">true wood</div> */}
                </div>
              </div>
              <Image
                src={img23}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6017</p>
                  <p className="text">mo</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">fish</div>
                  <div className="ply_wood">bone</div>
                </div>
              </div>
              <Image
                src={img6}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>

            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">6018</p>
                  <p className="text">mo</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">fish</div>
                  <div className="ply_wood">bone</div>
                </div>
              </div>
              <Image
                src={img7}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">574</p>
                  <p className="text">hng</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">sion</div>
                  <div className="ply_wood">ash</div>
                </div>
              </div>
              <Image
                src={img11}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">575</p>
                  <p className="text">hng</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">sion</div>
                  <div className="ply_wood">ash</div>
                </div>
              </div>
              <Image
                src={img10}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">5009</p>
                  <p className="text">gem</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">harea</div>
                  {/* <div className="ply_wood">true wood</div> */}
                </div>
              </div>
              <Image
                src={img4}
                layout="intrinsic"
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">5010</p>
                  <p className="text">gem</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">harea</div>
                  {/* <div className="ply_wood">true wood</div> */}
                </div>
              </div>
              <Image
                src={img5}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">4004</p>
                  <p className="text">tf</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">tariq</div>
                  {/* <div className="ply_wood">true wood</div> */}
                </div>
              </div>
              <Image
                src={img17}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">4005</p>
                  <p className="text">tf</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">tariq</div>
                  {/* <div className="ply_wood">true wood</div> */}
                </div>
              </div>
              <Image
                src={img18}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">4006</p>
                  <p className="text">tf</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">black</div>
                  <div className="ply_wood">smith</div>
                </div>
              </div>
              <Image
                src={img19}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">4001</p>
                  <p className="text">cl</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">serra</div>
                  <div className="ply_wood">kombi</div>
                </div>
              </div>
              <Image
                src={img3}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">664x</p>
                  <p className="text">sf</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">fab</div>
                  <div className="ply_wood">stone</div>
                </div>
              </div>
              <Image
                src={img14}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            {/*  */}
            <div className="ply_item top1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">669x</p>
                  <p className="text">sfs</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">white</div>
                  <div className="ply_wood">terrazo</div>
                </div>
              </div>
              <Image
                src={img15}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
            <div className="ply_item bottom1">
              <div className="ply_info">
                <div className="info_left">
                  <p className="num">670x</p>
                  <p className="text">sfs</p>
                </div>
                <div className="info_right">
                  <div className="ply_name">grey</div>
                  <div className="ply_wood">terrazo</div>
                </div>
              </div>
              <Image
                src={img16}
                loading="lazy" // This will lazy load images that aren't critical
                alt="ply"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};
export default PlyMarquee;
