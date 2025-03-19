import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./Services.css";

// FontAwesome icons import
import { FaUniversity, FaWrench, FaCar, FaBus, FaUserPlus } from "react-icons/fa";

const Services = () => {
  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Service listings with icons and images
  const serviceListings = [
    { name: "UniKitOut", icon: <FaUniversity className="fa-4x text-danger" />, image: "/assets/images/exclusive_srvices/unit_kit_out.png", url: "https://www.unikitout.com/?partner=Alpha%20Way" },
    { name: "Housing Hand", icon: <FaWrench className="fa-4x text-danger" />, image: "/assets/images/exclusive_srvices/Housing_Hand_logo.png", url: "https://hh.housinghand.co.uk/create-account?code=Alphaway" },
    { name: "Travel Reservation", icon: <FaBus className="fa-4x text-danger" />, image: "/assets/images/exclusive_srvices/travel_reservations.jpeg", url: "" },
    { name: "Airport Pickup", icon: <FaCar className="fa-4x text-danger" />, image: "", url: "" },
    { name: "Visa Enrollment", icon: <FaUserPlus className="fa-4x text-danger" />, image: "", url: "" },
  ];
//Housing_Hand_logo
  return (
    <section>
      <div className="container">
        <div className="section-title">
          {/* <h2>Exclusive Suite of Services</h2> */}
          <h1  className="text-dark">Our Exclusive Suite of Services </h1>
          <div className="section-subtitle text-danger">Our Exclusive Suite of Services </div>
          <span className="section-separator"></span>
        </div>
      </div>

      {/* React Multi Carousel */}
      <div className="carousel fl-wrap bg" style={{ backgroundImage: "url(/assets/images/exclusive_srvices/exclusive_service.jpg)",height:"400px" }}>
        <Carousel
          responsive={responsive}
          infinite={true}
          // autoPlay={true}
          autoPlaySpeed={3000}
          arrows
          showDots={false}
          containerClass="carousel-container"
        >
          {serviceListings.map((listing, index) => (
            <div className="slick-slide-item" key={index}>
              <div className="testimonilas-avatar-item">

                <div className="testimonilas-avatar">
                {listing.url ? (
                    <a href={listing.url} target="_blank" rel="noopener noreferrer">
                      {listing.image ? (
                        <img src={listing.image} alt={listing.name} className="service-img" />
                      ) : (
                        listing.icon
                      )}
                    </a>
                  ) : (
                    listing.image ? (
                      <img src={listing.image} alt={listing.name} className="service-img" />
                    ) : (
                      listing.icon
                    )
                  )}
                 
                <h4 className="text-center"> <Link to={listing.url} className="text-dark text-center">{listing.name}</Link> </h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
