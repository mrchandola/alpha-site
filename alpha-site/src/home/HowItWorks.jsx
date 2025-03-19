import React from "react";

const HowItWorks = () => {

  const steps = [
    {
      title: "Explore Student Homes ",
      icon: "fa-home",
      description:
        "Browse through our premium student accommodations and find the perfect home that matches your budget. ",
    },
    {
      title: "Compare & Choose ",
      icon: "fa-code",
      description:
        "Shortlist the student homes you love and compare them. Choose the one that ticks all your boxes. ",
    },
    {
      title: "Book or Contact Us ",
      icon: "fa-mobile",
      description:
        "Book your student home instantly or get in touch with us for personalized assistance. We’re here to make it easy for you. ",
    },
    {
      icon: "fa-smile-o",
      title: "Settle-In Smoothly ",
      description:
        "From paperwork to moving in, we’ll take care of the details. Enjoy a stress-free transition to your new home. ",
    },
  ];
  return (
    <section className="gray-section mt-1 mb-5">
      <div className="container">
        <div className="section-title">
          <h1 className="text-dark">How it works</h1>
          <div className="section-subtitle text-danger">How it works</div>
          <span className="section-separator text-white"></span>
          <p>
              We’re committed to being a trusted partner for students worldwide, helping you find a home wherever your studies lead. 
          </p>
        </div>

        {/* Process Wrap */}
        <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-3 mb-4 d-flex ">
            <div className="process-item p-4 border rounded shadow-sm text-dark d-flex flex-column h-100 bg-white">
              <div className="time-line-icon mb-3">
                <i className={`fa ${step.icon} text-danger fa-4x`}></i>
              </div>
              <h4 className="fw-semibold flex-grow-1 mb-4">{step.title}</h4>
              <p className="small mt-0">{step.description}</p>
            </div>
          </div>
        ))}
        </div>
        {/* Process Wrap End */}
      </div>
    </section>
  );
};

export default HowItWorks;
