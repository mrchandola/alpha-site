import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { apiRequest } from "../utils/ApiService"; 
import Layout from "../layouts/Layout";
import BootstrapPagination from "../components/shared/BootstrapPagination";
import MapLocation from "./../components/shared/MapLocation"
import { formatUrlSegment } from "../utils/utils";

import "./LocationListing.css"
const defaultImg = "/assets/images/default/property.webp";


const LocationListing = () => {
  const { cities } = useParams(); // Get the dynamic city ID from the URL
  const [properties, setProperties] = useState([]);
  // Function to fetch trending properties

  useEffect(() => {
    const fetchData = async () => {
      try {
        let isEnabled = true;
        let pageNo = 0;
        let itemSize = 8;

        let PropertyListUrl = `/${cities}/properties?page=${pageNo}&size=${itemSize}&enabled=${isEnabled}`;
        // let cityEnabled = true;
        // let isTrending = false;
        // let citySize = 12;
        // let cityUrl = `/cities?trending=${isTrending}&enabled=${cityEnabled}&size=${citySize}`;


        const PropertyListData = await apiRequest(PropertyListUrl);
        if(PropertyListData.content.length > 0){
          console.log("PropertyListData",PropertyListData.content);
          setProperties(PropertyListData.content)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cities]); // ✅ Re-run effect when countryId changes


  
  
  const location = {
    latitude: 40.7427837,
    longitude: -73.11445617675781,
    title: cities,
  };

  return (
    <Layout>
      <div class="map-container column-map right-pos-map" style={{top:"15%"}}>
      <MapLocation latitude={location.latitude} longitude={location.longitude} title={properties[0]?.city?.name}/>
      </div>
     
      <div class="col-list-wrap left-list">
          <div class="listsearch-options" >
            <h3 >Results For: <span className="text-denger">{properties[0]?.city?.name}</span></h3>
          </div>

        <div className="list-main-wrap fl-wrap card-listing">
          {properties.length > 0 ? (
            properties.map((listing) => (
              <div className="listing-item w-25" >
                <Link to={`/${formatUrlSegment(listing?.country?.name)}/${formatUrlSegment(listing?.city?.name)}/properties/${listing.id}`}>

                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img">
                      <img src={listing.image || defaultImg}  alt={listing.name} />
                      <div className="listing-item-category">
                        <h3>{listing.name}</h3>
                       
                        <p>
                          <i className="fa fa-map-marker text-danger fa-2x"></i> {listing.address ?? "" }
                        </p>
                      </div>
                      <div className="overlay_new"></div>
                    </div>
                  </article>
                </Link>
              </div>

            ))
          ) : (
            <div className="listing-item">
              <h1>Data Not Found.</h1>
            </div>
          )}

        </div>
      </div>
      {/* <div className="limit-box fl-wrap"></div> */}
    </Layout>
  );
};

export default LocationListing;
