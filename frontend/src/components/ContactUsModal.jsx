import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactUsModal = ({ setOpenContact }) => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    emailjs.init("vjazUY8mUI25kTAFy");
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name should be more than 4 characters")
      .max(100, "Not more than 100 characters")
      .required("Please add your Name"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const serviceID = "service_auo3u9i";
    const templateID = "template_paoef4c";
    let sub = "";
    if (isChecked) {
      sub = " I like to Subscribe Your Magazine";
    }
    try {
      setLoading(true);
      await emailjs.send(serviceID, templateID, {
        to_name: "Aruputha Deva kirubai",
        from_name: values.name,
        email: values.email,
        message: `${values.message} Mobile Number: ${values.mobile} ${sub}`,
      });
      alert("Email sent successfully");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setSubmitting(false);
      setOpenContact(false);
    }
  };

  return (
    <div className="bg-white z-10 mx-2 lg:mx-48 my-10 rounded-xl">
      <p
        className="font-bold pt-2 text-2xl flex justify-end px-10 cursor-pointer"
        onClick={() => setOpenContact(false)}
      >
        X
      </p>
      <Formik
        initialValues={{ email: "", name: "", mobile: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-sm mx-auto pb-5 px-2">
            <p className="font-bold text-2xl text-center">Contact Us !!!!</p>
            <p className="font-bold text-lg text-end py-4 text-rose-500 italic">
              "It is more blessed to give than to receive" -- Acts 20:35 (NIV)
            </p>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <Field
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email address"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <Field
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="mobile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <Field
                type="tel"
                name="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your mobile number"
              />
              <ErrorMessage name="mobile" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <Field
                as="textarea"
                name="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your message"
              />
              <ErrorMessage name="message" component="div" className="text-red-600 text-sm" />
            </div>
            <div className="flex items-center py-2">
              <input
                id="link-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-md font-bold text-gray-900 dark:text-gray-300"
              >
                Would you like to subscribe to our magazine?
              </label>
            </div>
            <p className="text-xs py-2">
              <span className="text-red-500 px-2">*</span>
              By submitting this form, you may opt out from communication at any
              time here or through the opt-out option placed in the email
              communication sent by us.
            </p>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting || loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsModal;
