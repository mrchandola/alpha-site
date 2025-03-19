import React, { createContext, useState, useEffect } from "react";
import { apiRequest } from "../utils/ApiService";

export const TrendingCountryContext = createContext();

export const TrendingCountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const countriesData = await apiRequest("/countries");
        if (countriesData?.content?.length > 0) {
          setCountries(countriesData.content);
          console.log("countriesData.content",countriesData.content)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TrendingCountryContext.Provider value={{ countries }}>  {/* ✅ Fixed Provider Name */}
      {children}
    </TrendingCountryContext.Provider>
  );
};
