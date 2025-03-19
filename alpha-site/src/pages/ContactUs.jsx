import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import Layout from "../layouts/Layout";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "../config/SiteConfig";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";  // Import leaflet for custom icons
import "leaflet/dist/leaflet.css";

import { FaFacebook, FaTwitter, FaChrome, FaVk, FaWhatsapp, FaReddit, FaInstagram, FaYoutube } from "react-icons/fa";

const contactUsImg = "/assets/images/pages/contactus.jpg";
const latitude = "25.1227847";
const  longitude = "55.3861862";
const ContactUs = () => {
  // Fix missing marker icon in Leaflet
  const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41], // Default size
    iconAnchor: [12, 41], // Positioning
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const socialMedia = [
    { href: config.SOCIAL.FACEBOOK , icon: <FaFacebook size={25}/> },
    { href: config.SOCIAL.TWITTER, icon: <FaTwitter size={25}/> },
    { href: config.SOCIAL.YOUTUBE, icon: <FaYoutube size={25}/> },
    { href: config.SOCIAL.INSTAGRAM, icon: <FaInstagram size={25}/> },
    { href: config.SOCIAL.WHATSAPP, icon: <FaWhatsapp size={25}/> },
    { href: config.SOCIAL.REDDIT, icon: <FaReddit size={25}/> }
    // { href: config.SOCIAL.WHATSAPP, icon: <FaWhatsapp size={22}/> },
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
                {/* Contact Info & Form */}
                <div className="col-6">
                  <h3 className="mb-4">Get in Touch</h3>
                  <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker me-2 text-danger"></i> {config.FOOTER.ADDRESS}</li>
                    <li><i className="fa fa-phone me-2 text-danger"></i> {config.FOOTER.PHONE}</li>
                    <li><i className="fa fa-envelope me-2 text-danger"></i> <a href={`mailto:${config.FOOTER.EMAIL}`} className="text-black">{config.FOOTER.EMAIL}</a></li>
                  </ul>
                  <div className="d-flex gap-3 mt-3 text-center">
                    {socialMedia.map((item, index) => item.href && (
                      <a key={index} href={item.href} target="_blank" className="text-2xl text-danger">
                        {item.icon}
                      </a>
                    ))}
                  </div>
                  {/* Embedded Google Map */}
                  <div className="mt-4">
                    <div className="card shadow-lg border-0 rounded-4">
                      <div className="card-body p-0">
                        <MapContainer
                          center={[latitude, longitude]}
                          zoom={13}
                          scrollWheelZoom={false}
                          style={{ height: "470px", width: "100%", borderRadius: "15px", overflow: "hidden", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <Marker position={[latitude, longitude]} icon={customIcon}>
                            <Popup>
                              <strong> 📍 Our Location:</strong><br />
                              {config.FOOTER.ADDRESS}
                            </Popup>
                          </Marker>
                        </MapContainer>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Contact Form */}
                
                <div className="card p-4 shadow-lg border-0 col-6">
                  <div className="card-body">
                    <h3 className="text-center mb-4">Drop us a Line</h3>
                    <form className="needs-validation" noValidate>
                      
                      {/* Name Fields in One Row */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="firstName" className="form-label">First Name</label>
                          <input type="text" className="form-control" id="firstName" placeholder="First Name*" required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                          <input type="text" className="form-control" id="lastName" placeholder="Last Name*" required />
                        </div>
                      </div>

                      {/* Phone & Email in One Row */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="phone" className="form-label">Phone</label>
                          <input type="text" className="form-control" id="phone" placeholder="Your Phone*" required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" placeholder="Email*" required />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" id="location" placeholder="Your Location" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="requirement" className="form-label">Requirement</label>
                        <textarea className="form-control" id="requirement" placeholder="Your Requirement" rows="3"></textarea>
                      </div>

                      {/* ReCAPTCHA Centered */}
                      <div className="d-flex my-3">
                        {/* <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleRecaptchaChange} /> */}
                        <ReCAPTCHA sitekey={config.RECAPTCHA_KEY} onChange={handleRecaptchaChange} />

                      </div>

                      {/* Stylish Submit Button */}
                      <button className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2" type="submit" disabled={!captchaValue}>
                        {/* <i className="fa fa-paper-plane"></i> */}
                         Send Message
                      </button>
                    </form>
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
