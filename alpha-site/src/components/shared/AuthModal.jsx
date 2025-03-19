import React, { useState } from "react";
// import "./AuthModal.css"; // Import your CSS file

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className={`main-register-wrap modal ${isOpen ? "show" : ""}`}>
      <div className="main-overlay" onClick={onClose}></div>
      <div className="main-register-holder">
        <div className="main-register fl-wrap">
          <div className="close-reg" onClick={onClose}>
            <i className="fa fa-times"></i>
          </div>
          <h3>
            Welcome <span>To <strong>AlphaWay</strong></span>
          </h3>

          <div id="tabs-container">
            <ul className="tabs-menu d-flex">
              <li
                className={`flex-fill ${activeTab === "login" ? "current" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                <a href="#">Login</a>
              </li>
              <li
                className={`flex-fill ${activeTab === "register" ? "current" : ""}`}
                onClick={() => setActiveTab("register")}
              >
                <a href="#">Register</a>
              </li>
            </ul>

            {activeTab === "login" ? (
              <div id="tab-1" className="tab-content">
                <div className="custom-form">
                  <form method="post" name="registerform">
                    <label>Username or Email Address *</label>
                    <input name="email" type="text" />
                    <label>Password *</label>
                    <input name="password" type="password" />
                    <button type="submit" className="log-submit-btn">
                      <span>Log In</span>
                    </button>
                    <div className="clearfix"></div>
                    <div className="filter-tags">
                      <input id="check-a" type="checkbox" name="check" />
                      <label htmlFor="check-a">Remember me</label>
                    </div>
                  </form>
                  <div className="lost_password">
                    <a href="#">Lost Your Password?</a>
                  </div>
                </div>
              </div>
            ) : (
              <div id="tab-2" className="tab-content">
                <div className="custom-form">
                  <form
                    method="post"
                    name="registerform"
                    className="main-register-form"
                    id="main-register-form2"
                  >
                    <label>First Name *</label>
                    <input name="name" type="text" />
                    <label>Second Name *</label>
                    <input name="name2" type="text" />
                    <label>Email Address *</label>
                    <input name="email" type="text" />
                    <label>Password *</label>
                    <input name="password" type="password" />
                    <button type="submit" className="log-submit-btn">
                      <span>Register</span>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
