import React from "react";
import Layout from "../layouts/Layout";
import "./Sustainability.css";

const aboutUsImg = "/assets/images/pages/about.jpg";

const Sustainability = () => {
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
              <h2><span>Sustainability Starts with Commitment
              </span></h2>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="sec1" className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about-content">
                  <h3 className="section-heading">Sustainability Starts with Commitment</h3>
                  <p>
                    At Alphaway, we believe in building a brighter, smarter, and greener future—not just for students, but for the planet. We are committed to being an environmentally sustainable organization, taking meaningful steps toward reducing our carbon footprint.
                  </p>

                  <div className="sustainability-section">
                    <h4>Our Sustainability Pledges</h4>
                    <ul className="sustainability-list">
                      <li><strong>Reducing Digital Carbon Footprint:</strong> We minimize unnecessary emails and use internal messaging for efficiency.</li>
                      <li><strong>Going Paperless:</strong> Alphaway operates with zero paper usage—everything is digital.</li>
                      <li><strong>Planting a Greener Future:</strong> For every confirmed booking, we pledge to plant one tree.</li>
                    </ul>
                  </div>

                  <h3 className="section-heading">Join Us in Making a Difference</h3>
                  <p>
                    By choosing Alphaway, you’re not just finding a home abroad—you’re supporting a company that cares about the planet. Let’s work together to build a smarter, greener future for students and the world.
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

export default Sustainability;
