import React from "react";

import { Link } from "react-router-dom";
import "./CityListing.css";

// import { useParams } from "react-router-dom";

// import Select from "react-select";
import Layout from "../layouts/Layout";

const NotFound = () => {

  return (
    <Layout>
      
      <section className="parallax-section" data-scrollax-parent="true" id="sec1">
      <div
        className="bg par-elem"
        style={{ backgroundImage: "url(/assets//images/bg/29.jpg)" }}
        data-scrollax="properties: { translateY: '30%' }"
      ></div>
      <div className="overlay"></div>
      <div className="bubble-bg"></div>
      <div className="container">
        <div className="error-wrap">
          <h2>404</h2>
          <p>We're sorry, but the page you were looking for couldn't be found.</p>
          <div className="clearfix"></div>
          
          <Link to="/" className="btn big-btn color-bg flat-btn">
            Back to Home Page <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default NotFound;
