import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Layout from "../layouts/Layout";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";

import  config  from "../config/SiteConfig";

import { FaFacebook, FaTwitter, FaChrome, FaVk, FaWhatsapp } from "react-icons/fa";

const contactUsImg = "/assets/images/pages/contactus.jpg";

const ContactUsa = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const socialMedia = [
    { href: config.SOCIAL.FACEBOOK , icon: <FaFacebook size={22}/> },
    { href: config.SOCIAL.TWITTER, icon: <FaTwitter size={22}/> },
    { href: config.SOCIAL.YOUTUBE, icon: <FaChrome size={22}/> },
    { href: config.SOCIAL.INSTAGRAM, icon: <FaVk size={22}/> },
    { href: config.SOCIAL.WHATSAPP, icon: <FaWhatsapp size={22}/> },
  ];
  return (
    <Layout>
      <div className="content">
        {/* Hero Section */}
        <section className="parallax-section text-center py-5" style={{ backgroundImage: `url(${contactUsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="overlay"></div>
          <div className="container">
            <h2 className="text-white">Contact Us</h2>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-5">
          <div className="container">
            <div className="row">
              {/* Contact Info */}
             

              {/* Contact Form */}
              <div className="col-md-4">
                <div className="card p-4 shadow">
                  <h3 className="mb-4">Get in Touch</h3>
                  <ul className="list-unstyled">
                  <li><i className="fa fa-map-marker me-2"></i> Building A1, Dubai Digital Park, Dubai Silicon Oasis, UAE</li>
                  <li><i className="fa fa-phone me-2"></i> XXXXXXXX</li>
                  <li><i className="fa fa-envelope me-2"></i> <a href="mailto:contact@alpha-way.com">contact@alpha-way.com</a></li>
                </ul>
                  <div className="row">
                  <div className="col-3">
                    <span>Find Us :</span>
                  </div>

                  {socialMedia.map((item, index) =>
                    item.href ? (
                      <div key={index} className="col-3">
                        <a
                          href={item.href}
                          target="_blank"
                          className="text-2xl hover:text-blue-500"
                        >
                          {item.icon}
                        </a>
                      </div>
                    ) : null
                  )}
                </div>
                </div>
              </div>


              {/* Contact Form */}
              <div className="col-md-8">
                <div className="card p-4 shadow">
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
              </div>



            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUsa;
