import React, { createContext, useState, useEffect } from "react";
import { apiRequest } from "../utils/ApiService";

export const TrendingCityContext = createContext();

export const TrendingCityProvider = ({ children }) => {
  const [cityListingArr, setCities] = useState([]);
  const [countryName, setCountryName] = useState(""); // ✅ Fix: Initialize as empty string

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCities([]); // ✅ Fix: Use correct setter function
        let cityEnabled = true;
        let citySize = 8;
        let cityUrl = `/cities?trending=&enabled=${cityEnabled}&size=${citySize}`;

        const cityData = await apiRequest(cityUrl);

        if (cityData?.content?.length > 0) {
          setCities(cityData.content);

          // ✅ Set country name dynamically if available
          if (cityData.content[0]?.country?.name) {
            setCountryName(cityData.content[0].country.name);
          }
        } else {
          setCountryName(""); // Reset if no data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // ✅ Runs once on component mount

  return (
    <TrendingCityContext.Provider value={{ cityListingArr, countryName }}>
      {children}
    </TrendingCityContext.Provider>
  );
};
