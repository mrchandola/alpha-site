import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import  config  from "../../config/SiteConfig";

import  "./QuickContactForm.css";

const QuickContactForm = ()=>{
// const FaqProperty = () => {
  const [showForm, setShowForm] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    // Handle form submission logic here
  };

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 200
      }}
    >
      <div className="contact-sidebar">
        <div className="arrow-box">
            <i className="fa fa-arrow-right"></i>
        </div>

        <div className="contact-box">
            <Link to={''} className="text-danger" onClick={() => setShowForm(!showForm)}>
            <span>Contact Us</span>
            </Link>
        </div>
        <div className="contact-box">
          <a href={`mailto:${config.FOOTER.EMAIL}`}>
            <i className="fa fa-envelope text-red"></i>
          </a>
        </div>

        <div className="contact-box">
          <a href={`https://wa.me/${config.FOOTER.PHONE}`} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>

        <div className="contact-box">
          <a href={`tel:${config.FOOTER.PHONE}`}>
            <i className="fa fa-phone"></i>
          </a>
        </div>

    </div>
      

      {showForm && (
        <div className="contact-form">
          <form className="p-3 shadow bg-white rounded" >
          <div className="mb-3">
          <h3 className="pull-left text-danger">Contact Form</h3>
          <span onClick={() => setShowForm(!showForm)} className="btn">X</span>
            </div>
          
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="First Name" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Last Name" />
            </div>
            
            
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Phone Number" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Location" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Your Requirement" />
            </div>
            <div className="mb-3 row">
              <ReCAPTCHA sitekey={config.RECAPTCHA_KEY} onChange={handleRecaptchaChange} />
            </div>
  
            <div className="mb-3 row">
              <button type="button" className="btn btn-danger w-100">Find My Space</button>
            </div>
  
          </form>
        </div>
      )}
    </div>
  );
};

export default QuickContactForm
