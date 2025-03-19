import React from "react";
import { Link } from 'react-router-dom';

// import "./ParallaxSection.css"; // Assuming you have some CSS for styling

const AlphaWayContact = () => {
  return (
    <section className="parallax-section" data-scrollax-parent="true">
    <div
      className="bg"
      style={{ backgroundImage: "url(/assets/images/bg/6.jpg)" }}
      data-scrollax="properties: { translateY: '100px' }"
    ></div>
    {/* <div className="overlay color-overlay"></div> */}
    {/* Container */}
    <div className="container">
      <div className="intro-item fl-wrap" >
        {/* <div style={{ backgroundColor: "rgba(39, 45, 51, 0.5)" }}> */}
        <div>
        <h1 className="strong text-light" >Alphaway</h1>
        {/* <h3  >
        Our agency will lead you through the amazing digital world . 
          Join the Alphaway community and unlock the door to a new standard of student living. </h3> */}
        </div>
       
         
        <Link to="/contact-us" className="trs-btn bg-white">
          <i className="fa fa-envelope text-danger"></i> &nbsp;&nbsp;&nbsp;&nbsp; Contact Us
        </Link>


      </div>
    </div>
  </section>
  );
};

export default AlphaWayContact;
