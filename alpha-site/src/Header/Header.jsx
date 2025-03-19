import React from "react";
import { useMsal } from "@azure/msal-react";
const BASEURL = "/"; //import.meta.env.BASE_URL;
const logoUrl = BASEURL+"assets/images/alphaway_logo.png";
// console.log("logo",logo);
const Header = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      console.log("instance",instance)
      // alert("HELLO DEAR")
      await instance.loginPopup(); // or loginRedirect()
    } catch (error) {
      console.error(error);
    }
  };
  return (
  <header className="main-header fs-header sticky">
    <div className="header-inner text-white">
        <div className="logo-holder">
          <a href="/home">
            <img src={logoUrl} alt="Logo" />
          </a>
        </div>
        <button className="btn btn-danger show-reg-form modal-open" onClick={handleLogin}>
          <i className="fa fa-user"></i> Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
