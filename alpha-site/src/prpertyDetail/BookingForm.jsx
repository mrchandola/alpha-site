import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import  config  from "../config/SiteConfig";

const BookingForm = () => {
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
    <form className="add-comment custom-form border-0" onSubmit={handleSubmit}>
                                              
      <div className="row">
        <div className="col-6">
          <label htmlFor="firstName" className="form-label ">First Name</label>
          <input type="text" className="form-control " id="firstName" name="firstName" placeholder="First Name" required />
        </div>
        <div className="col-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control " id="lastName" name="lastName" placeholder="Last Name" required />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control " id="phone" name="phone" placeholder="Phone Number" required />
        </div>

        <div className="col-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control " id="email" name="email" placeholder="Email" required />
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <label htmlFor="requirement" className="form-label">Verification Code</label>
          <input type="email" className="form-control " id="email" name="email" placeholder="Verification Code" required />
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <label htmlFor="requirement" className="form-label">Your Requirement</label>
          <textarea className="form-control" id="requirement" name="requirement" placeholder="Your Requirement"required></textarea>
        </div>
      </div>
      <div className="row mt-3">
        <ReCAPTCHA sitekey={config.RECAPTCHA_KEY} onChange={handleRecaptchaChange} />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-danger w-100" disabled={!captchaValue}>
          Submit Now!
        </button>
      </div>
  </form>

  );
};

export default BookingForm;
