// SwiperComponent.jsx
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
// import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import Img1 from "@/images/RoyalCrownNew.png";
import Img2 from "@/images/CrownNew.png";
import Img3 from "@/images/XylemNew.png";
import Img4 from "@/images/QbissNew.png";
import Img5 from "@/images/CrownXCLNew.png";
import SvgBtn from "@/images/svgLogos/sliderBtn.svg";
import SvgBtnNext from "@/images/svgLogos/sliderBtnPrev.svg";
import {motion} from "framer-motion";

import {
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import "@/components/newthreedslider/newthreedslider.scss";
import SliderBtn from "@/components/buttons/sliderbtn/page";

const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="MainSwiperthreedContainer">
      <div className="ThreeText">
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
        >
          <p className="ThreeTextInner">Laminates Crafted for Every Space</p>
        </motion.div>
        <p className="ThreeTextInnerFirst">
          {/* Discover the epitome of sophistication with our premium range of
          luxury laminates. Designed for those with discerning taste, our
          laminates offer a perfect blend of elegance and durability,
          transforming ordinary spaces into extraordinary masterpieces. */}
          Experience true sophistication with our exquisite range of luxury
          laminates and compacts. Designed for those with discerning taste, our
          premium products offer an impeccable fusion of elegance and
          durability, elevating ordinary spaces into extraordinary masterpieces.
        </p>
      </div>
      <div className="swiperContainerOne">
        <Swiper
          modules={[Navigation, EffectCoverflow, Thumbs]}
          slidesPerView={3}
          loop={true}
          effect="coverflow"
          centeredSlides={true}
          // spaceBetween={10}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false,
          }}
          // freeMode= {true}
          thumbs={{ swiper: thumbsSwiper }}
          speed={1500}
          allowTouchMove={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Royal crown</p>
              </div>
              <Image
                src={Img1}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">crown</p>
              </div>
              <Image
                src={Img2}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">xylem</p>
              </div>
              <Image
                src={Img3}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Qbiss</p>
              </div>
              <Image
                src={Img4}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Crown xcl</p>
              </div>
              <Image
                src={Img5}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="SliderThreeContent">
              <div className="SliderThreeContentTEXT">
                <p className="SliderThreeContentTEXTInner">Compact</p>
              </div>
              <Image
                src={Img3}
                alt="carousel_image"
                className="SliderThreeImages"
              />
            </div>
          </SwiperSlide> */}
          <div className="swiper-button-next">
            <Image src={SvgBtnNext} alt="btn" className="SvgBtnSlider" />
          </div>
          <div className="swiper-button-prev">
            <Image src={SvgBtn} alt="btn" className="SvgBtnSlider" />
          </div>
        </Swiper>
        {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div> */}

        <div className="SecondThumbsSwiper">
          <Swiper
            modules={[Thumbs, Autoplay, EffectFade]}
            onSwiper={setThumbsSwiper}
            //   loop={true}
            // autoplay={{
            //   delay: 2500,
            // }}
            // navigation={true}
            slidesPerView={1}
            speed={1500}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            // pagination={{
            //   dynamicBullets: true,
            // }}
            // freeMode={true}
            allowTouchMove={false}
            fadeEffect={{ crossFade: true }}
            className="mySwiperThumbs"
          >
            <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  Royal Crown Laminates takes pride in its rich legacy of
                  innovation, cutting-edge technology, and expertise, offering
                  over 450 trendsetting surface designs. Our collection of
                  modern laminates boasts a wide range of finishes and textures
                  in 1mm thickness, empowering you to effortlessly realize your
                  dream decor.
                </p>
                {/* <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p> */}
                <div className="SliderBtnOuter">
                  <SliderBtn
                    url={"/products#royal-crown"}
                    btn_text={"GO TO ROYAL CROWN"}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  Crown's Lean Line offers an exquisite and cost-effective range
                  of laminates in a variety of designs, colors, and textures,
                  all in 0.8mm thickness. Manufactured at our highly advanced
                  production facility, the Lean Line guarantees a consistent and
                  exceptional level of quality.
                </p>
                {/* <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p> */}
                <div className="SliderBtnOuter">
                  <SliderBtn url={"/products#crown"} btn_text={"GO TO CROWN"} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  Step into the world of Xylem, where innovation is at the heart
                  of everything we do. Xylem represents our premium-grade
                  decorative laminates, meticulously crafted to elevate your
                  surroundings. Each laminate embodies inspiring, high quality,
                  and artistic excellence designed to define your unique style.
                  From curating unique designs to creating exclusive laminates,
                  we are on a mission to bring your vision to life.
                </p>
                {/* <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p> */}
                <div className="SliderBtnOuter">
                  <SliderBtn url={"/products#xylem"} btn_text={"GO TO XYLEM"} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  Qbiss is a high-pressure structural laminate made from
                  multiple layers of kraft papers, with a thickness range from
                  2mm to 25mm. Its decorative face on both sides makes it
                  suitable for interior applications like washroom cubicles,
                  locker doors, wall panels, and laboratory furniture. With a
                  density of 1.45gm/cm3, our compacts are exceptionally
                  resilient and require no substrate support in thicknesses over
                  6mm.
                </p>
                {/* <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p> */}
                <div className="SliderBtnOuter">
                  <SliderBtn url={"/products#Qbiss"} btn_text={"GO TO QBISS"} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  XCL - Exterior Compact Laminate is a highly durable, versatile
                  material made from layers of kraft papers, offering thickness
                  options from 2mm to 25mm. With decorative surfaces on both
                  sides and a UV protective film, it is perfect for Building
                  Facades/Cladding, Balconies, Verandah, Outdoor Benches, etc.
                  Boasting a density of 1.45gm/cm3, our compacts are
                  exceptionally sturdy, resistant to damage, and exhibit
                  outstanding structural stability, eliminating the need for
                  substrate support in thicknesses above 6mm.
                </p>
                {/* <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p> */}
                <div className="SliderBtnOuter">
                  <SliderBtn
                    url={"/products#Crown_Xcl"}
                    btn_text={"GO TO CROWN XCL"}
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="Carousel_text_maincontent">
                <p className="Text_InnerText">
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className="carousel_text_Content">
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className="SliderBtnOuter">
                  <SliderBtn url={"/"} btn_text={"GO TO COMPACT"} />
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
