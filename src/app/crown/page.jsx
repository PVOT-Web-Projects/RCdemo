
"use client"
import { useEffect } from "react";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import SocialMediaImg from "@/images/socials-image.png";
// import CategoryLeftRightCat from "@/components/categoryLeftRight/CategoryLeftRightOne";
import AboutUsproductsCrown from "@/components/aboutUs_productsCrown/page"
import "./crownPage.scss"
// import ProductsInner from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/page";
const XylemPage = () => {
  useEffect(() => {
    document.title = "Crown | Royal Crown";
  });
  return (
    <>
    <AboutUsproductsCrown />
    {/* <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div> */}
    </>
  );
};
export default XylemPage;
