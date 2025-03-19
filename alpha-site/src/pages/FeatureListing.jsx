// import React from "react";
import React, { useEffect } from "react";

import { useParams  } from "react-router-dom";

import Select from "react-select";
import Layout from "../layouts/Layout";

const FeatureListing = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const { id } = useParams(); // Get the dynamic ID from the URL

  return (
    <Layout>
      <div className="content">
        <div className="map-container column-map right-pos-map">
          <div id="map-main"></div>
          <ul className="mapnavigation" >
            <li>
              <a href="#" className="prevmap-nav">
                Prev
              </a>
            </li>
            <li>
              <a href="#" className="nextmap-nav">
                Next
              </a>
            </li>
          </ul>
          <div className="scrollContorl mapnavbtn" title="Enable Scrolling">
            <span>
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <div className="col-list-wrap left-list">
        <div className="listsearch-options fl-wrap" id="lisfw">
          <div className="container">
            <div className="listsearch-header fl-wrap">
              <h3>
                Results For : <span>Food and Drink</span>
              </h3>
              <div className="listing-view-layout">
                <ul>
                  <li>
                    <a className="grid active" href="#">
                      <i className="fa fa-th-large"></i>
                    </a>
                  </li>
                  <li>
                    <a className="list" href="#">
                      <i className="fa fa-list-ul"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Search Filters */}
            <div className="listsearch-input-wrap fl-wrap">
              <div className="listsearch-input-item">
                <i className="mbri-key single-i"></i>
                <input type="text" placeholder="Keywords?" />
              </div>

              <div className="listsearch-input-item">
                <Select
                  isMulti
                  options={[
                    { value: "all", label: "All Locations" },
                    { value: "bronx", label: "Bronx" },
                    { value: "brooklyn", label: "Brooklyn" },
                    { value: "manhattan", label: "Manhattan" },
                    { value: "queens", label: "Queens" },
                    { value: "staten-island", label: "Staten Island" },
                  ]}
                  placeholder="Location"
                />
              </div>

              <div className="listsearch-input-item">
                <Select
                  options={[
                    { value: "all", label: "All Categories" },
                    { value: "shops", label: "Shops" },
                    { value: "hotels", label: "Hotels" },
                    { value: "restaurants", label: "Restaurants" },
                    { value: "fitness", label: "Fitness" },
                    { value: "events", label: "Events" },
                  ]}
                  placeholder="All Categories"
                />
              </div>

              <div className="listsearch-input-text" id="autocomplete-container">
                <label>
                  <i className="mbri-map-pin"></i> Enter Address
                </label>
                <input
                  type="text"
                  placeholder="Destination, Area, Street"
                  className="qodef-archive-places-search"
                />
                <a href="#" className="loc-act qodef-archive-current-location">
                  <i className="fa fa-dot-circle-o"></i>
                </a>
              </div>

              {/* Hidden Filters */}
              <div className="hidden-listing-filter fl-wrap">
                <div className="distance-input fl-wrap">
                  <div className="distance-title">
                    Radius around selected destination <span></span> km
                  </div>
                  <div className="distance-radius-wrap fl-wrap">
                    <input
                      className="distance-radius rangeslider--horizontal"
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      defaultValue="1"
                    />
                  </div>
                </div>

                {/* Checkbox Filters */}
                {/* <div className="fl-wrap filter-tags">
                  <h4>Filter by Tags</h4>
                  {["Elevator in building", "Friendly workspace", "Instant Book", "Wireless Internet"].map(
                    (tag, indexVal) => (
                      <div key={indexVal}>
                        <input id={`check-${indexVal}`} type="checkbox" />
                        <label htmlFor={`check-${indexVal}`}>{tag}</label>
                      </div>
                    )
                  )}
                </div> */}
              </div>

              <button className="button fs-map-btn">Update</button>
              <div className="more-filter-option">More Filters <span></span></div>
            </div>
          </div>
        </div>
        vvvw3q
        </div>
        </div>
    </div>
    </Layout>
  );
};

export default FeatureListing;
