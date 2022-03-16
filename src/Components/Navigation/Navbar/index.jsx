import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  nav_item_text = [
    {
      to: "/login",
      text: "Home",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    {
      to: "/login",
      text: "Solutions",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    {
      to: "/login",
      text: "Pricing",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    {
      to: "/login",
      text: "About",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    { to: "/login", text: "Contact" },
    {
      icon: "bx bxl-facebook-square",
      to: "/login",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    {
      icon: "bx bxl-twitter",
      to: "/login",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    {
      icon: "bx bxl-linkedin",
      to: "/login",
      onClick: (e) => console.log("Clicked" + e.target),
    },
    {
      text: "Login",
      icon: "bx bx-log-in",
      to: "/login",
      type: "btn",
      onClick: (e) => console.log("Clicked" + e.target),
    },
  ],

  backgroundColor,
  position,
}) => {
  return (
    <div
      className={"navTop"}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={"navBrand"}>
        <img
          className={"brand"}
          src={`/images/kendra-${
            window.innerWidth < 576 ? "blue" : "white"
          }-full.png`}
          alt="Kendra"
        />
        <sup>Beta</sup>
      </div>
      <div className={"navItems"}>
        <ul className={"navOptions"}>
          {nav_item_text.map((element, pos) => (
            <li
              key={pos}
              onClick={element.onClick}
              className={
                !element.icon
                  ? "navText"
                  : !element.text
                  ? "navIcon"
                  : "navItem"
              }
            >
              <Link to={element.to}>
                <i className={element.icon}></i>
                {element.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
