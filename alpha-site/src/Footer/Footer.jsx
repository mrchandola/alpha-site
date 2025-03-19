// import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { apiRequest } from "../utils/ApiService.js"; // Fixed path import
import  config  from "../config/SiteConfig.jsx";
import { formatUrlSegment } from "../utils/utils";

import { FaFacebook, FaTwitter, FaChrome, FaVk, FaWhatsapp, FaReddit, FaInstagram, FaYoutube } from "react-icons/fa";



const BASEURL = "/"; //import.meta.env.VITE_BASE_URL; // Use correct Vite env variable
const logoUrl = `${BASEURL}assets/images/Footer-logo-alphaway.png`;

const Footer = () => {
  const socialMedia = [
    { href: config.SOCIAL.FACEBOOK , icon: <FaFacebook size={22}/> },
    { href: config.SOCIAL.TWITTER, icon: <FaTwitter size={22}/> },
    { href: config.SOCIAL.YOUTUBE, icon: <FaYoutube size={22}/> },
    { href: config.SOCIAL.INSTAGRAM, icon: <FaInstagram size={22}/> },
    { href: config.SOCIAL.WHATSAPP, icon: <FaWhatsapp size={22}/> },
    { href: config.SOCIAL.REDDIT, icon: <FaReddit size={22}/> }
    // { href: config.SOCIAL.WHATSAPP, icon: <FaWhatsapp size={22}/> },
  ];
  const [countries, setCountries] = useState([]); // ✅ Define setCountries
  const [cities, setCities] = useState([]); // ✅ Define setCities

  useEffect(() => {
    const fetchData = async (countryID="") => {
      try {
        let cityEnabled   = true;
        let citySize      = 8;

        let countryId     = countryID;
        let cityUrl       = `/cities?trending=&enabled=${cityEnabled}&size=${citySize}`
        if(countryID){
          cityUrl       = `${countryID}/cities?trending=&enabled=${cityEnabled}&size=${citySize}`
        }
        const [countriesData, citiesData] = await Promise.all([
          apiRequest("/countries?"),
          apiRequest(cityUrl)
        ]);
  
        if (countriesData?.content?.length > 0) {
          setCountries(countriesData.content);
        }
        if (citiesData?.content?.length > 0) {
          setCities(citiesData.content);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <footer className="main-footer bg-danger">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-5">
            <div className="footer-widget fl-wrap">
              <Link to="/">
                {/* <img src={logoUrl} alt="Footer Logo" style={ marginLeft: "-55px" }/> */}
                <img src={logoUrl} alt="Footer Logo" style={{ marginLeft: "30px" }} />

              </Link>
              <div className="footer-contacts-widget fl-wrap">
                <p style={{fontSize:"18px"}}>
                  Welcome to Alphaway—where student living meets sophistication
                  and convenience.
                </p>

                <ul className="footer-contacts fl-wrap">
                  <li style={{fontSize:"17px"}}>
                    <span>
                      <i className="fa fa-envelope-o text-white"></i> Mail :
                    </span>
                    <a href={`mailto:${config.FOOTER.EMAIL}`}>{config.FOOTER.EMAIL} </a>
                  </li>
                  <li style={{fontSize:"17px"}}>
                    <span>
                      <i className="fa fa-phone text-white"></i> Phone :
                    </span>
                    <a href={`tel:${config.FOOTER.PHONE}`}>{config.FOOTER.PHONE}</a>
                  </li>
                  <li style={{fontSize:"18px"}}>
                    <span>
                      <i className="fa fa-map-marker text-white"></i> Address :
                    </span> 
                    <address className="text-white" > {config.FOOTER.ADDRESS} </address>
                  </li>
                </ul>
              </div>

              {/* Social Media Links */}
              <div className="footer-social">
                <ul>
                  <li>
                    <span>Find Us :</span>
                  </li>
                  {socialMedia.map((item, index) =>
                    item.href ? (
                      <li key={index}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-2xl hover:text-blue-500"
                        >
                          {item.icon}
                        </a>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-7">
          <div className="row">
          {/* Explore Countries Section */}
          <div className="col-4">
            <div className="footer-widget fl-wrap">
              <h3>Explore Country</h3>
              <div className="footer-menu fl-wrap">
                <ul>
                  {countries.length > 0 ? (
                    countries.map((country) => (
                      <li key={country.id}>
                        {/* <Link to={`/${formatUrlSegment(country.name)}/cities`} >  {country.name} </Link>     */}
                        <Link to={`/${country.id}/cities`} >  {country.name} </Link>    
                        </li>
                    ))
                  ) : (
                    <li>Loading...</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Explore Cities Section */}
          <div className="col-4">
            <div className="footer-widget fl-wrap">
              <h3>Explore Cities</h3>
              <div className="footer-menu fl-wrap">
                <ul>
                  {cities.length > 0 ? (
                    <>
                      {cities.map((city) => (
                        <li key={city.id}>
                          <Link to={`/${city.id}/listing-location`}>{city.name}</Link>
                        </li>
                      ))}  
                      <li>
                        <Link to="/city-listing"><span>...</span></Link>
                      </li>
                    </>
                  ) : (
                    <li>Loading...</li>
                  )}
                </ul>

              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-4">
            <div className="footer-widget fl-wrap">
              <h3>Useful Links</h3>
              <div className="footer-menu fl-wrap">
                <ul>
                  <li> <Link to="/home">Home</Link>  </li>
                  <li> <Link to="/about-us">About Us</Link>  </li>
                  <li> <Link to="/contact-us">Contact Us</Link>  </li>
                  <li> <Link to="/sustainability">Sustainability</Link>  </li>
                  <li> <Link to="/privacy-policy">Privacy Policy</Link> </li>
                  <li> <Link to="/terms-condition">Terms & Conditions</Link>  </li>
                  <li> <Link to="/faq">Frequently Asked Questions</Link>  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="sub-footer fl-wrap bg-danger">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright"> &#169; {config.FOOTER.COPYRIGHT} </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
