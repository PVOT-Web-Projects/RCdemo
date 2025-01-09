"use client"
import { useEffect } from "react";
import ContactUsHero from "@/components/contactUsHero/page";
import "./contactUs.scss";
import { useRef } from "react";
import ContactUsHear from "@/components/contactUsHear/page";
import Form4 from "@/components/forms/form4/Form4";
const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | Royal Crown";
  });
  const section1 = useRef();
  const section2 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div ref={section1}>
        <ContactUsHero goToSectionRef={section2} scrollTo={scrollTo} />
      </div>
      <div ref={section2}>
      <Form4 />
      </div>
      <ContactUsHear />
    </div>
  );
};
export default ContactUs;
