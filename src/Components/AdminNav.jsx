import React from "react";
import { useState } from "react";
import { AdminRoutes } from "../Data/dummy";
import {Link } from 'react-router-dom';
import "../Styles/navbar.scss";
import image from "../Images/logo.png"

const AdminNav= () => {
  const [bgColor, setBgColor] = useState(false);

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
        {AdminRoutes.map((route, index) => (
          <li key={index} className="route">
            <Link to={route.path}    style={{color:'white'}}>  {route.name}  </Link>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default AdminNav;
