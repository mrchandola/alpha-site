// import React from "react";
import { useEffect } from "react";

import "../assets/css/style.css";
import "../assets/css/reset.css";
import "../assets/css/plugins.css";
import "../assets/css/color.css";
import "../assets/css/bootstrap.min.css";
// import $ from "jquery";

// import "bootstrap/dist/css/bootstrap.min.css";

// import { TrendingCityContext } from "../context/TrendingCityProvider"; // Import the context
// import { TrendingCountryContext } from "../context/TrendingCountryProvider"; // Import the context
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuickContactForm from "../components/shared/QuickContactForm";

const Layout = ({ children }) => {
    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, []);
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  useEffect(() => {
    window.scrollTo(0, 0);
    const loadScript = (src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
        return script;
      }
      return null;
    };

    // Load JS files dynamically
    const script1 = loadScript("/assets/js/jquery.min.js");
    const script2 = loadScript("/assets/js/plugins.js");
    const script3 = loadScript("/assets/js/scripts.js");

    return () => {
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
      if (script3) document.body.removeChild(script3);
    };
  }, []);
  return (
    <div>

      <Header />
      <main>{children}</main>
      <QuickContactForm />
      <Footer />
        <a className="to-top" onClick={scrollToTop}>
          <i className="fa fa-angle-up"></i>
        </a>
    </div>
  );
};

export default Layout;
