
"use client"
import { useEffect } from "react";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import SocialMediaImg from "@/images/socials-image.png";
// import CategoryLeftRightCat from "@/components/categoryLeftRight/CategoryLeftRightOne";
import AboutUs_productsRc from "@/components/aboutUs_productsRoyalCrown/page";
import "./royalCrownPage.scss"
// import ProductsInner from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/page";
const XylemPage = () => {
  useEffect(() => {
    document.title = "Royal Crown | Royal Crown";
  });
  return (
    <>
    <AboutUs_productsRc />
    {/* <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div> */}
    </>
  );
};
export default XylemPage;
