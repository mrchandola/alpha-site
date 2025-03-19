import React from "react";
import { Routes, Route } from "react-router-dom";
// import { TrendingCityProvider } from "../context/TrendingCityProvider"; // Import Context


// Import Pages
import Home from "../home/Home";
// import Home from "../home/Home";
import AboutUs from "../aboutus/AboutUs";
import ContactUs from "../pages/ContactUs";
// import ContactUsa from "../pages/ContactUsa";
// import ContactUsb from "../pages/ContactUsb";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import LocationListing from "../pages/LocationListing";
// import PropertyDetail from "../pages/PropertyDetail";
import PropertyDetail from "../prpertyDetail/PropertyDetail";
import RoomDetail from "../pages/RoomDetail";
import SearchLocation from "../pages/SearchLocation";
import CityListing from "../pages/CityListing";
import ExclusiveOffer from "../pages/ExclusiveOffer";
import Faq from "../pages/Faq";
import Sustainability from "../sustainability/Sustainability";
import NotFound from "../pages/NotFound";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../config/MsalConfig"; // Import MSAL config

const AppRoutes = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/contact1" element={<ContactUsa />} />
        <Route path="/contact2" element={<ContactUsb />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        {/* <Route path="/:cityId?/listing-location" element={<LocationListing />} /> */}
        <Route path="/:cities?/properties" element={<LocationListing />} />
        <Route path="/search-location" element={<SearchLocation />} />
        {/* <Route path="/:countryId?/city-listing" element={<CityListing />} /> */}
        <Route path="/:country?/cities" element={<CityListing />} />
        {/* <Route path="/property-detail/:propertyId" element={<PropertyDetail />} /> */}
        <Route path="/:country?/:city?/properties/:propertyId" element={<PropertyDetail />} />
        <Route path="/:country?/:city?/:properties?/room-detail/:roomId" element={<RoomDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/exclusive-offer" element={<ExclusiveOffer />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="*" element={<NotFound />} /> {/* ✅ Fixed attribute */}
      </Routes>
      </MsalProvider>
  );
};

export default AppRoutes;
