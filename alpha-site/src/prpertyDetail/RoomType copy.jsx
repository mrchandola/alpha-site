import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RoomType.css"
// import { apiRequest } from "../../utils/ApiService"; // ✅ Ensure this is correctly imported
const defaultImg = "/assets/images/default/property.webp";
const RoomType = ({rooms}) => {
   const [cities, setCities] = useState([]);
  
    // Function to fetch trending cities
    // const fetchData = async (countryID = "") => {
    //   try {
    //     let cityEnabled = true;
    //     let isTrending = false;
    //     let citySize = 6;
    //     let cityUrl = `/cities?trending=${isTrending}&enabled=${cityEnabled}&size=${citySize}`;
  
    //     // if (countryID) {
    //     //   cityUrl = `/${countryID}/cities?enabled=${cityEnabled}&size=${citySize}`;
    //     // }
  
    //     const citiesData = await apiRequest(cityUrl);
    //     if (citiesData?.content?.length > 0) {
    //       setCities(citiesData.content);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
  
    // // Fetch data on mount
    // useEffect(() => {
    //   fetchData();
    // }, []);

    
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  
  return (
        <div className="container">
          <div className="gallery-items fl-wrap mr-bot spad">
          <h3>Room Type</h3>
           {rooms.length > 0 ? (
                    rooms.map((listing, index) => (
                                <div className="listing-item">
                                  <Link to={`/room-detail/${listing.id}`}>
      <article className="geodir-category-listing fl-wrap">
        <div className="geodir-category-img">
          <img src={listing.image || defaultImg} 
                                  alt={listing.name} />
          <div className="overlay"></div>
          <div className="list-post-counter bg-golden">
          <span className="">{listing?.fullyBooked ? "FullyBooked" : '' }</span>
          </div>
        </div>
          <h3 className="text-center">{listing?.roomType?.name} </h3>
       
      </article>
      </Link>
    </div>
     ))
    ) : (
      <div className="text-center">Loading...</div>
    )}
       
        
            {/* <Carousel
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
                  {rooms.length > 0 ? (
                    rooms.map((listing, index) => (
                      <div className=" " key={index}>
                        <div className="listing-item">
                          <Link to={`/room-detail/${listing.id}`}>
                            <article className="geodir-category-listing fl-wrap">
                            <span className="bg-golden">{listing?.fullyBooked ? "FullyBooked" : '' }</span>

                              <div className="geodir-category-img">
                                <img
                                  src={listing.image || defaultImg} // ✅ Fallback image
                                  alt={listing.name}
                                  style={{ height: "200px",width:"100%"}}
                                />
                                <div className="overlay_new"></div>

                                <div className="listing-item-category">
                                  <h3>{listing?.roomType?.name}</h3>
                                </div>
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

           */}
        </div>

      </div>
  );
};

export default RoomType;
