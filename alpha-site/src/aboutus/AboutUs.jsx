import React from "react";
import Layout from "../layouts/Layout";
import "./AboutUs.css";


const aboutUsImg = "/assets/images/pages/about.jpg";

const AboutUs = () => {
  return (
    <Layout>
      <div className="content">
        {/* Hero Section */}
        <section className="parallax-section about-hero" data-scrollax-parent="true">
          <div
            className="bg par-elem"
            style={{ backgroundImage: `url(${aboutUsImg})` }}
            data-bg={aboutUsImg}
            data-scrollax="properties: { translateY: '30%' }"
          ></div>
          <div className="overlay"></div>
          <div className="bubble-bg"></div>
          <div className="container">
            <div className="section-title center-align">
              <h2><span>About Us</span></h2>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="sec1" className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about-content">
                  <h3 className="section-heading">Who We Are</h3>
                  <p>
                    At <strong>Alphaway</strong>, we’re dedicated to making the search for the perfect student accommodation seamless, stress-free, and tailored to your needs. Whether you’re moving across the globe or just a few cities away, we help you discover safe, luxurious, and affordable student housing that feels like home from day one.
                  </p>
                  <p>
                    By connecting students with premium, cost-effective accommodations and providing honest, round-the-clock customer support, we’re redefining what it means to live and thrive as a student abroad.
                  </p>
                  
                  <h3 className="section-heading">Beyond Just a Home</h3>
                  <p>
                    We’re more than just a student accommodation platform—we’re your all-in-one guide to student life abroad. From visa applications and travel bookings to room essentials and guarantor services, we take care of the details so you can focus on what truly matters: your education and adventure.
                  </p>
 
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="limit-box fl-wrap"></div>
      </div>
    </Layout>
  );
};

export default AboutUs;
