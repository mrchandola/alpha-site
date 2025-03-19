import React from "react";
import Layout from "../layouts/Layout";
import "./PrivacyPolicy.css";

const privacyPolicyImg = "/assets/images/pages/privacyPolicy.jpg";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="privacy-policy-container">
        {/* Parallax Section */}
        <section className="parallax-section" data-scrollax-parent="true">
          <div
            className="bg par-elem"
            style={{ backgroundImage: `url(${privacyPolicyImg})` }}
            data-scrollax="properties: { translateY: '30%' }"
          ></div>
          <div className="overlay"></div>
          <div className="bubble-bg"></div>
          <div className="container text-center">
            <h2 className="section-title">PRIVACY POLICY</h2>
          </div>
        </section>

        {/* Content Section */}
        <section id="sec1" className="privacy-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12">
                <div className="privacy-text">
                  <h3>Introduction</h3>
                  <p>
                    We, <strong>Alphaway Global Student Consulting Services - FZCO</strong>, a company incorporated under the laws of UAE, with its registered office at <em>Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</em>, are the creators of this Privacy Policy.
                  </p>

                  <p>
                    By visiting <a href="https://www.alpha-way.com" target="_blank" rel="noopener noreferrer">www.alpha-way.com</a>, you acknowledge and consent to the practices outlined in this policy.
                  </p>

                  <h3>Definitions</h3>
                  <ul>
                    <li><strong>We / Our / Us:</strong> Refers to Alphaway.</li>
                    <li><strong>You / Your:</strong> Refers to individuals using the website.</li>
                    <li><strong>Third Parties:</strong> Refers to external websites, companies, or individuals not directly affiliated with Alphaway.</li>
                  </ul>

                  <h3>Information Collection</h3>
                  <p>
                    We collect personal information such as your name, email, phone number, IP address, and interactions with our website.
                  </p>

                  <h3>Cookies & Tracking</h3>
                  <p>
                    We use cookies to personalize your experience. You can disable cookies in your browser settings.
                  </p>

                  <h3>Data Usage & Protection</h3>
                  <p>
                    Your personal information will never be shared with third parties for marketing purposes. All data is stored securely.
                  </p>

                  <h3>Contact Information</h3>
                  <p>
                    If you have any concerns about this Privacy Policy, contact us at: <br />
                    📞 <a href="tel:+971551579406">+971 551579406</a> <br />
                    📧 <a href="mailto:contact@alpha-way.com">contact@alpha-way.com</a>
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

export default PrivacyPolicy;
