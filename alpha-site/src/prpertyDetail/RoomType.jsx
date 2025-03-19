import React from "react";
import { Link } from "react-router-dom";
import "./RoomType.css";
import { formatUrlSegment } from "../utils/utils";

const defaultImg = "/assets/images/default/property.webp";

const RoomType = ({ rooms ,country,city,property}) => {
  let countryName = formatUrlSegment(country);
  let cityName = formatUrlSegment(city);
  let propertyName = formatUrlSegment(property);
  return (
    <div className="container">
      <h3 className="text-center">Room Type</h3>
      {rooms.length > 0 ? (
        rooms.map((listing, index) => (
          <div className="listing-item" key={index}>
            <Link to={`/${countryName}/${cityName}/${propertyName}/room-detail/${listing.id}`}>
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img-container">
                  {/* "Fully Booked" Overlay */}
                  {listing.fullyBooked && (
                    <div className="fully-booked-label">Fully Booked</div>
                  )}
                  <img
                    src={listing.image || defaultImg}
                    alt={listing.name}
                    className="room-image"
                  />
                </div>
                <h3 className="text-center">{listing.roomType.name}</h3>
              </article>
            </Link>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default RoomType;
