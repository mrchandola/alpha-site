import React from "react";
import Layout from "../layouts/Layout";
import Banner from "../home/Banner";
import AlphaWayContact from "../home/AlphaWayContact";
import HowItWorks from "../home/HowItWorks";
import Services from "../home/Services";
import TrendingCities from "../home/TrendingCities";
import TrendingProperties from "../home/TrendingProperties";
import BlogSection from "../home/BlogSection";
import StatsSection from "../home/StatsSection";
import "./Home.css";

const Home = () => {

  return (
    <Layout>
      <Banner />
      <StatsSection />
      <TrendingProperties />
      <TrendingCities />
      <Services />
      <HowItWorks />
      <BlogSection />
      <AlphaWayContact />
    </Layout>
  );
};

export default Home;
