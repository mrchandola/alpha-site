import React from "react";
import Layout from "../layouts/Layout";
import "./Pages.css";

const termConditionImg = "/assets/images/pages/termCondition.jpg";

const TermsCondition = () => {

  return (
    <Layout>
        <div className="content">
         
        <section className="parallax-section text-center py-5" 
  style={{ 
    backgroundImage: `url(${termConditionImg})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    position: 'relative' 
  }}>
  
  <div className="overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "absolute", width: "100%", height: "100%" }}></div>

  <div className="container position-relative">
    <h2 className="text-white">Terms & Conditions</h2>
  </div>
</section>

<section id="sec1" className="py-5">
  <div className="container">
    <div className="card p-4 shadow-lg border-0">
      <div className="card-body">
        <h3 className="mb-4 text-center">TERMS AND CONDITIONS OF WEBSITE USE </h3>
        
        <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
          These terms of use (together with the documents referred to in them) describe the terms on which you may use or access www.alpha-way.com, 
          any related subdomains, or mobile applications associated with the website (our “Sites”), whether you are a guest or a registered user.
        </p>

        <h4 className="mt-4">1. Accessing Our Sites</h4>
        <p style={{ textAlign: "justify" }}>
          Access is provided on a temporary basis. We reserve the right to withdraw or amend services without notice. Users are responsible for their 
          own arrangements to access the site.
        </p>

        <h4 className="mt-4">2. Your Account</h4>
        <p style={{ textAlign: "justify" }}>
          If you register for an account, you must be at least 18 years old or have parental consent if younger. Keep your login details secure.
        </p>

        <h4 className="mt-4">3. Intellectual Property</h4>
        <p style={{ textAlign: "justify" }}>
          All content on this site, including text, images, and logos, is either owned by us or used with permission.
        </p>

        <h4 className="mt-4">4. Changes to Terms</h4>
        <p style={{ textAlign: "justify" }}>
          We may update these terms at any time, and your continued use of the site implies acceptance of any modifications.
        </p>

        <h4 className="mt-4">5. Contact Information</h4>
        <p style={{ textAlign: "justify" }}>
          For any queries, please email us at <a href="mailto:contact@alpha-way.com">contact@alpha-way.com</a>.
        </p>
      </div>
    </div>
  </div>
</section>

        <div className="limit-box fl-wrap"></div>
      </div>
    </Layout>
  );
};

export default TermsCondition;
