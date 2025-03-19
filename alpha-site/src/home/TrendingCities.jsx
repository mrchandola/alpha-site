import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TrendingProperties.css"
import { apiRequest } from "../utils/ApiService"; // ✅ Ensure this is correctly imported
import { formatUrlSegment } from "../utils/utils";

const defaultImg = "/assets/images/default/city.jpg";


const TrendingCities = () => {
  
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 }, // ✅ Shows 3 images on large screens
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 }, // ✅ Shows 3 images on desktops
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 }, // ✅ Shows 2 images on tablets
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }, // ✅ Shows 1 image on mobile
  };
  const [cities, setCities] = useState([]);

  // Function to fetch trending properties
  // Function to fetch trending cities
  const fetchData = async (countryID = "") => {
    try {
      let cityEnabled = true;
      let isTrending = true;
      let citySize = 10;
      let cityUrl = `/cities?trending=${isTrending}&enabled=${cityEnabled}&size=${citySize}`;

      const citiesData = await apiRequest(cityUrl);
      
      if (citiesData?.content?.length > 0) {
        setCities(citiesData.content);
      } else {
        let isTrending = false;
        let cityUrl = `/cities?trending=${isTrending}&enabled=${cityEnabled}&size=${citySize}`;
        const citiesData = await apiRequest(cityUrl);
        if (citiesData?.content?.length > 0) {
          console.log("citiesData",citiesData?.content)
          setCities(citiesData.content);
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
          <h1 className="text-dark">Trending Cities</h1>
          <div className="section-subtitle text-danger">Trending Cities</div>
          <span className="section-separator"></span>
          <p>
            It’s about discovering a space that reflects your ambitions, supports your lifestyle, 
            and elevates your university experience.
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
        {cities.length > 0 ? (
          cities.map((listing, index) => (
            <div className=" " key={index}>
              <div className="listing-item">
                {/* <Link to={`/${formatUrlSegment(listing.country.name)}/${formatUrlSegment(listing.name)}/cities`} className="listing-item-grid"> */}
                <Link to={`/${listing.id}/properties`} className="listing-item-grid">
                {/* <Link to={`/${countryItem.id}/cities`}>{countryItem.name}</Link>     */}

                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img">
                      <img
                        src={listing.image || defaultImg} // ✅ Fallback image
                        alt={listing.name}
                        style={{ width: "450px" ,height: "300px" }}
                        // style={{ height: "350px", width: "450px" }}
                      />
                      <div className="listing-item-category">
                        <h3>{listing.name}</h3>
                      </div>
                      <div className="overlay_new"></div>
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
      <div className="row justify-content-center" >
        <div className="col-12 text-center mt-5 mb-5" >
          <Link
            to="/cities"
            className="btn  circle-btn dec-btn color-bg flat-btn btn btn-danger bg-danger"
          >
            View All Cities <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>


    </section>
  );
};

export default TrendingCities;
