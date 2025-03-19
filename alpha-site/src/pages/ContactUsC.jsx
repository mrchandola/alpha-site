import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Layout from "../layouts/Layout";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "../config/SiteConfig";
import { FaFacebook, FaTwitter, FaChrome, FaVk, FaWhatsapp } from "react-icons/fa";

const contactUsImg = "/assets/images/pages/contactus.jpg";

const ContactUs = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const socialMedia = [
    { href: config.SOCIAL.FACEBOOK, icon: <FaFacebook size={22} /> },
    { href: config.SOCIAL.TWITTER, icon: <FaTwitter size={22} /> },
    { href: config.SOCIAL.YOUTUBE, icon: <FaChrome size={22} /> },
    { href: config.SOCIAL.INSTAGRAM, icon: <FaVk size={22} /> },
    { href: config.SOCIAL.WHATSAPP, icon: <FaWhatsapp size={22} /> },
  ];

  return (
    <Layout>
      <div className="content">
        <section className="parallax-section text-center py-5" style={{ backgroundImage: `url(${contactUsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="overlay"></div>
          <div className="container">
            <h2 className="text-white">Contact Us</h2>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="card p-4 shadow">
              <div className="row">
                 {/* Contact Form */}
                 <div className="col-md-6">
                  <h3 className="mb-4">Drop us a Line</h3>
                  <form className="needs-validation" noValidate>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone *</label>
                      <input type="text" className="form-control" id="phone" placeholder="Your Phone" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Your Message *</label>
                      <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="mb-3">
                      <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleRecaptchaChange} />
                    </div>
                    <button className="btn btn-primary w-100" type="submit" disabled={!captchaValue}>Send Message</button>
                  </form>
                </div>
                {/* Contact Info & Form */}
                <div className="col-md-6">
                  <h3 className="mb-4">Get in Touch</h3>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker me-2"></i> {config.FOOTER.ADDRESS}</li>
                    <li><i className="fa fa-phone me-2"></i> {config.FOOTER.PHONE}</li>
                    <li><i className="fa fa-envelope me-2"></i> <a href={`mailto:${config.FOOTER.EMAIL}`} className="text-black">{config.FOOTER.EMAIL}</a></li>
                  </ul>
                  <div className="d-flex gap-3 mt-3">
                    {socialMedia.map((item, index) => item.href && (
                      <a key={index} href={item.href} target="_blank" className="text-2xl text-dark">
                        {item.icon}
                      </a>
                    ))}
                  </div>
                  {/* Embedded Google Map */}
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.038238716197!2d55.37734291499858!3d25.118232983939288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f975c9bd2ef%3A0x1111222233334444!2sDubai%20Digital%20Park!5e0!3m2!1sen!2sae!4v1645680721565!5m2!1sen!2sae"
                      width="100%"
                      height="400px"
                      style={{ border: "5" }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUs;
