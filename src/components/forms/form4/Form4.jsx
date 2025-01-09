"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "@/images/getInTouchImage.png";
import "./form4.scss";
// import { useState } from "react";
// import ClickHandler from "@/components/buttons/clickHandler/ClickHandler";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { form4Schemas } from "../ValidationSchema/Schema";
// import YellowSubmitButton from "@/components/buttons/yellowSubmitButton/YellowSubmitButton";
import YellowSubmitButtonForm from "@/components/buttons/yellowSubmitButtonForm/YellowSubmitButtonForm";

const Form4 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };
  const formik = useFormik({
    initialValues: {
      ContactFName: "",
      ContactLName: "",
      contactEmail: "",
      ContactPhone: "",
      ContactMessage: "",
    },
    validationSchema: form4Schemas,
    validateOnChange: true,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true); // Disable the button during submission

      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.ContactFName,
            LastName: values.ContactFName,
            Emaildata: values.contactEmail,
            Phonedata: values.ContactPhone,
            Descriptiondata: values.ContactMessage,
            formType: "getInTouch", // Add formType to indicate which form is being submitted
          }),
        });

        console.log("Contact Us Form Data Submitted:", values);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        submitMessage();
        console.log(await response.json());
        resetForm(); // Reset form fields after submission
      } catch (error) {
        toast.error("Error Submitting Form");
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false); // Enable the button after submission
      }
    },
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className="form4">
      <div className="form4_inner">
        <div className="wrapper">
          <div className="image">
            <Image src={image} alt="get in touch" />
          </div>
          <div className="form4_wrap">
            {/* <Form /> */}
            <div className="form4_wrap_inner">
              <h2>Let’s Get In Touch.</h2>
              <p>
                Our helpline is always open to receive any inquiry or feedback.
                Please feel free to drop us an email from the form below and we
                will get back to you as soon as we can.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="field_wrap">
                  <div className="field">
                    <label htmlFor="ContactFName">First Name</label>
                    <input
                      type="text"
                      name="ContactFName"
                      id="ContactFName"
                      value={values.ContactFName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                    />
                    <span className="error">
                      {touched.ContactFName &&
                        errors.ContactFName &&
                        errors.ContactFName}
                    </span>
                  </div>
                  <div className="field">
                    <label htmlFor="ContactLName">Last Name</label>
                    <input
                      type="text"
                      name="ContactLName"
                      id="ContactLName"
                      value={values.ContactLName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                    />
                    <span className="error">
                      {touched.ContactLName &&
                        errors.ContactLName &&
                        errors.ContactLName}
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="contactEmail">E-mail Address</label>
                  <input
                    type="text"
                    name="contactEmail"
                    id="contactEmail"
                    value={values.contactEmail}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                  />
                  <span className="error">
                    {touched.contactEmail &&
                      errors.contactEmail &&
                      errors.contactEmail}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="ContactPhone">Phone Number</label>
                  <input
                    type="text"
                    name="ContactPhone"
                    id="ContactPhone"
                    value={values.ContactPhone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                  />
                  <span className="error">
                    {touched.ContactPhone &&
                      errors.ContactPhone &&
                      errors.ContactPhone}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="ContactMessage">Message</label>
                  <textarea
                    type="text"
                    name="ContactMessage"
                    id="ContactMessage"
                    value={values.ContactMessage}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Enter your Text here..."
                  ></textarea>
                  <span className="error">
                    {touched.ContactMessage &&
                      errors.ContactMessage &&
                      errors.ContactMessage}
                  </span>
                </div>
                {/* <div className="field"> */}
                <div className="SubmitBtnOuter">
                  <YellowSubmitButtonForm
                    btn_text={isSubmitting ? "Submitting..." : "Submit"}
                    disabled={isSubmitting}
                    type="submit"
                  />
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={true}
                    theme="light"
                    transition={Slide}
                    className={"contactFormNotification"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form4;
