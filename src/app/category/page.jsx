// import ProductCategoryHeader from "@/components/product_category_header/page";
// import "./category.scss";
// import DissipativeLaminates from "@/components/Dissipative_laminates/page";
// import laminatesData from "@/components/Dissipative_laminates/laminatesdata";
// import ProductConstruct from "@/components/product_construct/product_construct";
// import ProductFeatures from "@/components/productFeatures/productFeatures";
// import ProductApplication from "@/components/product_application/product_application";
"use client"
import { useEffect } from "react";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import SocialMediaImg from "@/images/socials-image.png";
import CategoryLeftRightCat from "@/components/categoryLeftRight/CategoryLeftRightOne";
import "./category.scss"
// import ProductsInner from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/page";
const Category = () => {
  useEffect(() => {
    document.title = "Category | Royal Crown";
  });
  return (
    <>
    <CategoryLeftRightCat />
    <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    {/* <ProductsInner /> */}
      {/* <ProductCategoryHeader />
      <DissipativeLaminates data={laminatesData}/>
      <ProductConstruct/>
      <ProductFeatures/>
      <ProductApplication/> */}
    </>
  );
};
export default Category;
