"use client";

import { useFormik } from "formik";
import { form3Schemas } from "../ValidationSchema/Schema";
import YellowSubmitButton from "@/components/buttons/yellowSubmitButton/YellowSubmitButton";
import "./form3.scss";

const Form3 = () => {
  const initialValue = {
    email: "",
  };

  const { errors, values, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: form3Schemas,
    onSubmit: (action, value) => {
      console.log("value", value);
      action.resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit} className="form3">
      <div className="form3_field">
        <label htmlFor="email">Subscribe to newsletter</label>
        <p className="FormSubscribetext">Register for free updates stay up-to-date with the latest promotions by subscribing to our Newsletter.</p>
       <div className="form3_field2">
        <div>
       <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <p className="error">{touched.email && errors.email && errors.email}</p>
        </div>
        <div className="submit_btn">
        {/* <YellowSubmitButton btn_text={"Subscribe"} /> */}
        <button type="submit" className="yello_btn">
          <span className="button-content">Subscribe</span>
        </button>
      </div>
       </div>
      </div>
      
    </form>
  );
};
export default Form3;
