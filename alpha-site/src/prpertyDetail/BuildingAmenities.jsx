import React from "react";

const featureListingIcon = [
  { id: 1, iconclass: "cutlery"},
  { id: 2, iconclass: "rocket"},
  { id: 3, iconclass: "motorcycle"},
  { id: 4, iconclass: "bars"},
  { id: 5, iconclass: "wifi"},
];

const BuildingAmenities = ({ featureListingJson }) => {

  return (
    <div className="list-single-main-item fl-wrap">
      <div className="list-single-main-item-title fl-wrap">
        <h3 className="text-dark">Building Amenities</h3>
        {/* <span className="fw-separator"></span> */}
      </div>
      <div className="listing-features fl-wrap">
        <ul>
          {featureListingJson.map((post, index) => {
            const uniqueKey = `feature-${post.iconclass}-${index}`;
            return (
              <li key={uniqueKey}>
                {/* <a href="#" className="text-red">  */}
                  <i className={` fa fa-${featureListingIcon[post.id]?.iconclass}}`}></i> {post.name} 
                {/* </a> */}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="list-single-main-item-title fl-wrap">
        <h3>&nbsp;</h3>
      </div>
      <span className="fw-separator"></span>
    </div>
  );
};

export default BuildingAmenities;
