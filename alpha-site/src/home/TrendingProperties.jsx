import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TrendingProperties.css"
import { apiRequest } from "../utils/ApiService"; // ✅ Ensure this is correctly imported
import { formatUrlSegment } from "../utils/utils";
const defaultImg = "/assets/images/default/property.webp";


const TrendingProperties = () => {
  
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // const responsive = {
  //   superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 }, // ✅ Shows 3 images on large screens
  //   desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 }, // ✅ Shows 3 images on desktops
  //   tablet: { breakpoint: { max: 768, min: 464 }, items: 2 }, // ✅ Shows 2 images on tablets
  //   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }, // ✅ Shows 1 image on mobile
  // };
  const [properties, setProperties] = useState([]);

  // Function to fetch trending properties
  const fetchData = async () => {
    try {
      let isEnabled = true;
      let isTrending = true;
      let Size = 8;
      let PropertyUrl = `/properties?trending=${isTrending}&enabled=${isEnabled}&size=${Size}`;
      const PropertyData = await apiRequest(PropertyUrl);
      console.log("PropertyData",PropertyData.content)
      if(PropertyData.content.length > 0){
        setProperties(PropertyData.content)
      } else {
        let isTrending = false;
        let PropertyUrl = `/properties?trending=${isTrending}&enabled=${isEnabled}&size=${Size}`;
        const PropertyData = await apiRequest(PropertyUrl);
        if(PropertyData.content.length > 0){
          setProperties(PropertyData.content)
        }

      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <section className="gray-section">
      <div className="container">
        <div className="section-title">
          <h1 className="text-dark">Trending Properties</h1>
          <div className="section-subtitle text-danger">Trending Properties</div>
          <span className="section-separator"></span>
          <p>
            Where student living meets sophistication and convenience. At Alphaway, we understand that finding the perfect
            accommodation is more than just securing a place to stay.
          </p>
        </div>
      </div>


      <Carousel
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-5-px"
      >
        {properties.length > 0 ? (
          properties.map((listing, index) => (
            <div className=" " key={index}>
              <div className="listing-item">
              <Link to={`/${formatUrlSegment(listing?.country?.name)}/${formatUrlSegment(listing?.city?.name)}/properties/${listing.id}`}>
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img">
                      <img
                        src={listing.image || defaultImg} // ✅ Fallback image
                        alt={listing.name}
                        style={{ width: "450px" }}
                        // style={{ height: "350px", width: "450px" }}
                      />
                      <div className="listing-item-category">
                        <h3>{listing.name}</h3>
                        <p>
                          <i className="fa fa-map-marker text-danger fa-2x"></i> {listing.address ?? "" }
                          {/* ✅ Fallback location */}
                        </p>
                      </div>
                      {/* <div className="overlay_new"></div> */}
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </Carousel>
    </section>
  );
};

export default TrendingProperties;
