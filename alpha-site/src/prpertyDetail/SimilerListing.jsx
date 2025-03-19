import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { apiRequest } from "../utils/ApiService"; 
import { formatUrlSegment } from "../utils/utils";
import "./SimilerListing.css";

const defaultImg = "/assets/images/default/room.webp";

const SimilarListing = ({ propertiesDetailData }) => {
  const [similarProperties, setSimilarProperties] = useState([]);
  const [countryUrl, setCountryUrl] = useState([]);
  const [cityUrl, setCityUrl] = useState([]);

  // Function to fetch similar properties
  const fetchData = async () => {
    try {
      // console.log("Properties Detail Data in Similar:", propertiesDetailData);

      if (!propertiesDetailData?.city?.name || !propertiesDetailData?.city?.country?.name) {
        console.error("Invalid propertiesDetailData format.");
        return;
      }

      const cityId = formatUrlSegment(propertiesDetailData.city.name);
      const countryId = formatUrlSegment(propertiesDetailData.city.country.name);
      setCityUrl(cityId);
      setCountryUrl(countryUrl);
      const size = 10;
      const propertyUrl = `/${countryId}/${cityId}/properties?page=0&size=${size}`;

      console.log("Fetching similar properties from:", propertyUrl);

      const propertyData = await apiRequest(propertyUrl);

      if (propertyData?.content?.length > 0) {
        console.log("Similar Listings:", propertyData.content);
        setSimilarProperties(propertyData.content);
      } else {
        setSimilarProperties([]);
      }
    } catch (error) {
      console.error("Error fetching similar properties:", error);
    }
  };

  // Fetch data on mount & when propertiesDetailData changes
  useEffect(() => {
    // if (propertiesDetailData) {
      fetchData();
    // }
  }, [propertiesDetailData]);

  return (
    <div className="box-widget-item fl-wrap">
      <div className="box-widget widget-posts">
        <div className="box-widget-content">
          <div className="box-widget-item-header">
            <h3 className="text-center">Similar Listings</h3>
          </div>
          <ul>
            {similarProperties.length > 0 ? (
              similarProperties.map((post, index) => (
                <li className="clearfix" key={index}>
               
                  {/* <Link
                  to={`/${countryUrl}/${cityUrl}/properties/${post.id}`} 
                  className="widget-posts-img"
                > */}
                {/* <Link to={`/${countryUrl}/${cityUrl}/properties/${post.id}`}> */}
                <a href={post.id} className="widget-posts-img">
                  
                  <img 
                    className="img-thumbnail" 
                    src={post.image || defaultImg} 
                    alt={post.name} 
                  />
                </a>

                  <div className="widget-posts-descr">
                    <a href= {post.id} title={post.name}>
                      {post.name}
                    </a>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center">No similar listings found.</p>
            )}
          </ul>
          {/* <a className="widget-posts-link" href="#">See All Listings <span><i className="fa fa-angle-right"></i></span></a> */}
        </div>
      </div>
    </div>
  );
};

export default SimilarListing;
