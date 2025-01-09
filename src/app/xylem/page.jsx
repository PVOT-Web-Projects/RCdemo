
"use client"
import { useEffect } from "react";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import SocialMediaImg from "@/images/socials-image.png";
import CategoryLeftRightCat from "@/components/categoryLeftRight/CategoryLeftRightOne";
import AboutUs_productsXylem from "@/components/aboutUs_productsXylem/page";
import "./xylemPage.scss"
// import ProductsInner from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/page";
const XylemPage = () => {
  useEffect(() => {
    document.title = "Xylem | Royal Crown";
  });
  return (
    <>
    <AboutUs_productsXylem />
    {/* <CategoryLeftRightCat /> */}
    {/* <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div> */}
    </>
  );
};
export default XylemPage;
