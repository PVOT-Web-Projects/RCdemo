
"use client"
import { useEffect } from "react";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import SocialMediaImg from "@/images/socials-image.png";
// import CategoryLeftRightCat from "@/components/categoryLeftRight/CategoryLeftRightOne";
import AboutUsProductsCrownXcl from "@/components/aboutUs_productscrownXcl/page"
import "./crownXclPage.scss"
// import ProductsInner from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/page";
const XylemPage = () => {
  useEffect(() => {
    document.title = "Crown XCL | Royal Crown";
  });
  return (
    <>
    <AboutUsProductsCrownXcl />
    {/* <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div> */}
    </>
  );
};
export default XylemPage;
