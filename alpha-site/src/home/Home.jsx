import { useEffect } from "react";
import Layout from "../layouts/Layout";
import Banner from "./Banner";
import AlphaWayContact from "./AlphaWayContact";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import TrendingCities from "./TrendingCities";
import TrendingProperties from "./TrendingProperties";
import BlogSection from "./BlogSection";
import StatsSection from "./StatsSection";
import "./Home.css";

const Home = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <Layout>
      <Banner />
      <StatsSection />
      <TrendingProperties />
      <TrendingCities />
      <Services />
      <HowItWorks />
      {/* <BlogSection /> */}
      <AlphaWayContact />
    </Layout>
  );
};

export default Home;
