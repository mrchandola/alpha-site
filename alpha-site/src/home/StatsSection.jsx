import React from "react";
import { FaGlobe, FaCity, FaUniversity, FaBed, FaHotel,FaFlag  } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFlag, faBuilding, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faFlag, faBuilding, faGraduationCap, faHotel, faBed, faDoorOpen  } from "@fortawesome/free-solid-svg-icons";


// import { faFlag } from "@fortawesome/free-solid-svg-icons";

import "./StatsSection.css"; // Import the CSS file

const StatsSection = () => {
  const countData = {
    totalCountry : 4,
    totalCities : 15,
    totalStudent : 120,
    totalRooms : 2500
  }
  return (
    <section className="stats-section mb-5">
      <div className="container">
        <div className="row">
          {/* Countries */}
          <div className="col-lg-3 col-md-6 col-6 p0_m">
            <div className="countr">
              <i className="red">
                {/* <FaGlobe size={50} /> */}
                {/* <FaGlobe size={30}  className="text-danger"/>  */}
                <FontAwesomeIcon icon={faFlag} />
                </i>
              <div className="count-me">
                <h3>
                  <span className="counter">{countData.totalCountry}+ </span> Countries 
                  {/* <span className="d-none d-lg-block"> Worldwide</span> */}
                </h3>
                <p className="d-none d-lg-block">Explore premium student accommodations across United Kingdom, Europe, Australia and UAE </p>
              </div>
            </div>
          </div>

          {/* Cities */}
          <div className="col-lg-3 col-md-6 col-6 p0_m">
            <div className="countr">
              <i className="red">
              <FontAwesomeIcon icon={faBuilding } />

                {/* <FaCity size={50} /> */}
              </i>
              <div className="count-me">
                <h3>
                  <span className="counter">{countData.totalCities}+</span> Cities
                  {/* <span className="d-none d-lg-block">the Globe</span> */}
                </h3>
                <p className="d-none d-lg-block">Find your perfect student home in iconic urban hubs worldwide </p>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="col-lg-3 col-md-6 col-6 p0_m">
            <div className="countr">
              <i className="red">
              <FontAwesomeIcon icon={faGraduationCap } />
              </i>
              <div className="count-me">
                <h3>
                  <span className="counter">{countData.totalStudent}+</span> Universities
                </h3>
                <p className="d-none d-lg-block">
                Stay just steps away from the top-ranked universities around the world 
                </p>
              </div>
            </div>
          </div>

          {/* Beds */}
          <div className="col-lg-3 col-md-6 col-6 p0_m">
            <div className="countr">
              <i className="red">
              <FontAwesomeIcon icon={faBed } />

                {/* <FaHotel  size={50} /> */}
              </i>
              <div className="count-me">
                <h3>
                  <span className="counter">{countData.totalRooms}+</span> Rooms
                  {/* <span className="d-none d-lg-block">Available Globally</span> */}
                </h3>
                <p className="d-none d-lg-block">
                Choose from safe, luxurious and affordable student rooms 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
