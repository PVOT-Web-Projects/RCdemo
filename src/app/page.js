"use client"
import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
// import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import "./Home.scss";
import "./variables.scss";
import dynamic from 'next/dynamic';
import Form from "@/components/forms/form1/Form";
import RoyalCrownSlider from "@/components/RoyalCrownSlider/RoyalCrownSlider";
import SocialMediaImg from "@/images/socials-image.png";
import SocialPage from "@/components/socialPage/socialpage";
import Certification from "@/components/Certifications/Certification";
// import ThreeSlider from "@/components/threedslider/page";
import NewRevealText from "@/components/newRevel/page";
import PlyMarquee from "@/components/plyMarquee/PlyMarquee";
import ServicesPageCard from "@/components/InsightsPageCards/insightsPageCards";
import TimelineHome from "@/components/timelinehome/page";
import HomeHeroSection from "@/components/homeHeroSection/page";
import NewThreeDSlider from "@/components/newthreedslider/newthreedslider";
import CategoryLeftRightInsights from "@/components/categoryLeftRightInsights/CategoryLeftRightInsights";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import SliderNew from "@/components/SliderNew/SliderNew";
import TextAnimOne from "@/components/TextAnimOne/page";
import HomeSlider from "@/components/Homeslider/page";
import HomeSliderOne from "@/components/HomeSliderOne/page";

const HomeBanner = dynamic(() => import("@/components/Home_page_Banner/page"));
const HomeBanner1 = dynamic(() => import("@/components/Home_page_Banner/page2"));
export default function Home() {
  const [width, setWidth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCounter, setCounter] = useState(0);
  const paragraph =
    "Sturdily beautiful. Warm, bright. Naturally comforting. Timelessly modern.";

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initialize width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 // Timer to hide the preloader after 5 seconds
 useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false); // Set to false after 5 seconds
  }, 5000); // 5000ms = 5 seconds

  return () => clearTimeout(timer); // Clear the timer on cleanup
}, []);
  function handleLoad(data) {
    console.log("data", data);
    setIsLoading(data);
  }
  function handleCounter(data) {
    console.log("cc", data);
    setCounter(data);
  }
  return (
    <>

      <AnimatePresence
       mode="wait"
       >
        {isLoading &&
          <Preloader
            counter={isCounter}
          />
        }
      </AnimatePresence>
      {/* {width && (
        <>
          {width > 575 ? (
            <HomeBanner loadImage={handleLoad} counter={handleCounter} />
          ) : (
            <HomeBanner1 loadImage={handleLoad} counter={handleCounter} />
          )}
        </>
      )} */}
      {/* FRAMES ENDED */}
      <main className="main">
        {/* <HeroBanner /> */}
        {/* <HomeSlider /> */}

        {/* <TextAnimOne /> */}
        <HeroBanner />
        <HomeSliderOne />
        <HomeHeroSection />
        <SliderNew />
        {/* <NewThreeDSlider /> */}
        {/* <ThreeSlider /> */}
        <NewRevealText paragraph={paragraph} />
        <PlyMarquee />
        <RoyalCrownSlider />
        <CategoryLeftRightInsights />
        {/* <ServicesPageCard /> */}
        <Certification />
        <TimelineHome />
        <div className="Form_Page">
          <SocialPage socialMediaImgSrc={SocialMediaImg} />
          <Form />
        </div>
      </main>
    </>
  );
}
