import React from "react";
import { useState } from "react";
import { routes } from "../Data/dummy";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/navbar.scss";
import image from "../Images/logo.png";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const navigate = useNavigate();
  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <img src={image} alt="" className="logo" />
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route" >
            <Link to={route.path} style={{color:'white'}}> {route.name}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        <button
          style={{
            color: bgColor ? "#0c1727" : "white",
          }}
          className="onebtn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          style={{
            color: bgColor ? "white" : "#0c1727",
            background: bgColor ? "#0c1727" : "white",
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;