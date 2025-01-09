"use client"
import { useEffect } from "react";
import FaqData from "@/components/faqaccordian/faqdata";

const FaqPage =() =>{
    useEffect(() => {
        document.title = "FAQs | Royal Crown";
      });
    return(
        <div>
            <FaqData />
        </div>
    )
}
export default FaqPage;