import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Layout from "../layouts/Layout";
import MapLocation from "./../components/shared/MapLocation"


const SearchLocation = () => {
   useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  const locationData = useLocation();
  const searchParams = new URLSearchParams(locationData.search);
  const searchTerm = searchParams.get("searchTerm"); // Get search term from URL

  const listings = [
    { id: 1, name: "Nido The Fabric Works", location: "The Fabric Works, 4 Leylands Road", image: "/assets/images/avatar/2.jpg" },
    { id: 2, name: "The Sail Works", location: "The Sail Works, Bulk Road, Lancaster", image: "/assets/images/avatar/2.jpg" },
    { id: 3, name: "Nido Carcavelos", location: "75 Prince St, New York, NY 10012", image: "/assets/images/avatar/2.jpg" },
    { id: 4, name: "Nido Ajuda", location: "42 Montgomery St, New York", image: "/assets/images/avatar/2.jpg" }
  ];

  const location = {
    latitude: 40.7427837,
    longitude: -73.11445617675781,
    title: searchTerm,
  };

  return (
    <Layout>
      {/* <br></br> */}
      <div class="map-container column-map right-pos-map" style={{top:"15%"}}>
      <MapLocation latitude={location.latitude} longitude={location.longitude} title={location.title}/>

      </div>
     
      <div class="col-list-wrap left-list">
        
        <div className="">
          <div class="listsearch-options fl-wrap" >
            {/* <div class="container"> */}
              {/* <div className="col-list-wrap left-list"> */}
                <div className="listsearch-options fl-wrap" >
                  <div className="container">
                    <div className="listsearch-header fl-wrap">
                      <h3>Results For: <span>{searchTerm}</span></h3>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              
            {/* </div> */}
          </div>

        <div className="list-main-wrap fl-wrap card-listing">
          <div className="container">
            {listings.map((listing) => (
              <div className="listing-item" key={listing.id}>
                  <Link to={`/property-details/${listing.id}`}>
                <article className="geodir-category-listing fl-wrap">
                  <div className="geodir-category-img">
                    <div className="overlay"></div>
                  </div>
                  <div className="geodir-category-content fl-wrap bg-white">
                    <div>
                        <img src={listing.image} alt={listing.name} />
                    </div>
                    <div className="geodir-category-options fl-wrap">
                      <div className="listing-rating card-popup-rainingvis">
                        <h3>{listing.name} </h3>
                        <div className="geodir-category-location">
                          <i className="fa fa-map-marker" aria-hidden="true"></i> {listing.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                  </Link>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      {/* <div className="limit-box fl-wrap"></div> */}
    </Layout>
  );
};

export default SearchLocation;
