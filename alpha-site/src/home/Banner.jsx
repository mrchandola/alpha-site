import React from "react";
import SearchBar from "./SeacrBar";
import "./Banner.css";

// Use BASE_URL if needed, otherwise use a direct path
// const BASEURL = import.meta.env.BASE_URL || ""; // Ensure it’s defined
const BASEURL = "/"; // Ensure it’s defined
const bannerUrl = 'assets/images/bg/ho.jpg'; // Adjust path if necessary

const Banner = () => {
  return (
    <section className="scroll-con-sec hero-section" data-scrollax-parent="true" id="sec1">
      <div className="bg" style={{ backgroundImage: `url(${bannerUrl})` }}></div>
      <div className="overlay"></div>
      <div className="hero-section-wrap fl-wrap">
        <div className="container">
          <div className="intro-item fl-wrap">
            <h2>Your Safe Space</h2>
            <h3>Find the best accommodation at your preferred location.</h3>
          </div>
          <SearchBar></SearchBar>
          
          <div className="row">
            <div className="col-12">&nbsp;</div>
          </div>

          <div className="intro-item fl-wrap mt-2">
            <h2 className="font-italic">
              <i>Safe. Affordable. Stylish.</i>
            </h2>
            <h3 className="font-italic">
              <i>Quick Bookings | Best Price | 24X7 Support | Authentic Listings</i>
            </h3>
          </div>
        </div>
      </div>

      <div className="bubble-bg"></div>      
          <div className="header-sec-link">
          <a href="#" className="custom-scroll-link">
            <i className="fa fa-angle-double-down text-danger fa-2x" aria-hidden="true"></i>
          </a>
          </div>
     
    </section>
  );
};

export default Banner;
