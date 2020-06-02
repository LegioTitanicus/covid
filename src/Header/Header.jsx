import React from "react";
import Login from "../ForInstitution/Login/Login";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to COVID Research Listings</h1>
      <div id="login">
        <Login />
      </div>
      <h3>
        Here you can help researchers around the world gain information in the
        fight aginst COVID-19
      </h3>
    </div>
  );
};

export default Header;
