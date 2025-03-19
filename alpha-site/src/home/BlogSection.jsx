import React from "react";

const BlogSection = () => {

  const steps = [
    {
      icon: "fa-map-marker",
      title: "Latest Blog",
      description:
        "Find the best apartments around you with ease. Browse listings, check details, and discover your ideal home.",
    },
    {
      icon: "fa-envelope",
      title: "Our Services",
      description:
        "Save your favorite listings and compare options effortlessly before making your final decision.",
    },
    {
      icon: "Offers",
      title: "Offers",
      description:
        "Get in touch with property owners or managers by providing necessary details for a smooth process.",
    },
    {
      icon: "fa-home",
      title: "Make a Listing",
      description:
        "List your own property and connect with potential renters easily through our platform.",
    },
  ];
  return (
    <section style={{ padding: "21px 0" }}>
      <div className="container">
        <div className="section-title" style={{paddingBottom: "40px"}}>
          <h2>Blog</h2>
          <div className="section-subtitle text-danger">Blog</div>
          <span className="section-separator text-white"></span>
          <p className="text-white">&nbsp;</p>
        </div>

        {/* Process Wrap */}
        <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4 d-flex">
            <div className="process-item p-4 border rounded shadow-sm bg-light text-dark d-flex flex-column h-100">
              {/* <div className="time-line-icon mb-3">
                <i className={`fa ${step.icon} text-danger fa-4x`}></i>
              </div> */}

              <h4 className="fw-semibold flex-grow-1">{step.title}</h4>
              <p className="small">{step.description}</p>
            </div>
          </div>
        ))}
        </div>
        {/* Process Wrap End */}
      </div>
    </section>
  );
};

export default BlogSection;
