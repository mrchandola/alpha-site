import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import "./CityListing.css";
import { apiRequest } from "../utils/ApiService"; 
import Layout from "../layouts/Layout";

const defaultImg = "/assets/images/default/city.jpg";

const CityListing = () => {
  let { country } = useParams(); // Get countryId from URL
  const [cityListingArr, setCityListingArr] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    // console.log("COUNTRY ID:", country);

    const fetchData = async () => { // ✅ No parameter needed
      try {
        let cityEnabled = true;
        let citySize = 9;
        let cityUrl = `/cities?trending=&enabled=${cityEnabled}&size=${citySize}`;

        if (country) {
          cityUrl = `/${country}/cities?trending=&enabled=${cityEnabled}&size=${citySize}`;
        }

        const [countriesData, citiesData] = await Promise.all([
          apiRequest("/countries?"),
          apiRequest(cityUrl)
        ]);

        setCountries(countriesData?.content || []); // ✅ Ensure it's an array
        setCityListingArr(citiesData?.content || []); // ✅ Ensure it's an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [country]); // ✅ Now correctly triggers re-fetch when `country` changes

  return (
    <Layout>
      <section className="parallax-section">
        <div className="bg par-elem" style={{ backgroundImage: "url(/assets/images/bg/3.jpg)" }}></div>
        <div className="overlay"></div>
        <div className="container">
          <div className="section-title center-align">
            <h1>Browse Premium Student Accommodation by City</h1>
            <div className="breadcrumbs fl-wrap text-center">
            {countries.length > 0 ? (
              countries.map((countryItem, index) => (
                <span key={countryItem.id}>
                  <Link 
                    to={`/${countryItem.id}/cities`} 
                    className={countryItem.id == country ? "text-decoration-underline" : ""}
                  >
                    {countryItem.name}
                  </Link>    
                  {index < countries.length - 1 && <label className="labeldot">• </label>}
                </span>
              ))
            ) : (
              <span>Loading...</span>
            )}

            </div>

          </div>
        </div>
      </section>

      <section className="gray-bg">
        <div className="col-list-wrap center-col-list-wrap left-list">
          <div className="container">
            <div className="fl-wrap card-listing">
              {cityListingArr.length > 0 ? (
                cityListingArr.map((listing, index) => (
                  <div className="listing-item" key={index}>
                    <article className="geodir-category-listing fl-wrap">
                      <Link to={`/${listing.id}/properties`} >
                      <div className="geodir-category-img">

                        <img src={listing.medias?.[0]?.url || defaultImg} alt={listing.name} />
                        <div className="overlay"></div>
                      </div>
                        </Link>
                    </article>
                    <Link to={`/${listing.id}/properties`} className="city-title text-white">
                      {listing.name}
                    </Link>
                  </div>
                ))
              ) : (
                <h1>Data Not Found</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CityListing;
