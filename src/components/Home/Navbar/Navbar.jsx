import React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory()
  const nav_item_text = [
    { onClick: () => console.log("Hello"), text: "Home" },
    { onClick: () => console.log("Hello"), text: "Solutions" },
    { onClick: () => console.log("Hello"), text: "Pricing" },
    { onClick: () => console.log("Hello"), text: "About" },
    { onClick: () => console.log("Hello"), text: "Contact" },
  ];
  const nav_item_icon = [
    {
      icon: "bx bxl-facebook-square",
      onClick: () => console.log("Hello"),
    },
    {
      icon: "fab fa-twitter",
      onClick: () => console.log("Hello"),
    },
    {
      icon: "fab fa-linkedin",
      onClick: () => console.log("Hello"),
    },
    {
      text: "Login",
      icon: "fas fa-sign-out-alt",
      onClick: () => history.push('/login'),
      type: "btn",
    },
  ];
  return (
    <div className={styles.navTop}>
      
  
      <div className={styles.navBrand}>
        <img
          className={styles.brand}
          src={`https://app.kendrasustain.com/images/kendra-${
            window.innerWidth < 576 ? "blue" : "white"
          }-full.png`}
          alt="Kendra"
        />
        <sup style={{ color: "white" }}>Beta</sup>
      </div>
      <div className={styles.navItems}>
        <ul className={styles.navOptions}>
          {nav_item_text.map((element, pos) => (
            <li style={{ color: "white" }} key={pos} onClick={element.onClick}>
              {element.text}
            </li>
          ))}
        </ul>
        <ul className={styles.socialMediaIcons}>
          {nav_item_icon.map((element, pos) => (
            <li
              key={pos}
              onClick={element.onClick}
              className={element.type === "btn" ? styles.btn__ : "fake"}
            >
              <i className={element.icon}></i>
              {element.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// <div className={styles.navTop}>
//   <img
//     className={styles.brand}
//     src={`/images/kendra-${
//       window.innerWidth < 576 ? "blue" : "white"
//     }-full.png`}
//     alt="Kendra"
//   />
//   <span style={{ color: "white", fontSize: "18px", marginRight: "180px" }}>
//     Beta
//   </span>
//   <ul className={styles.navOptions}>
//     <li>
//       <a href="#!">Home</a>
//     </li>
//     <li>
//       <a href="#!">Solutions</a>
//     </li>
//     <li>
//       <a href="#!">Pricing</a>
//     </li>
//     <li>
//       <a href="#!">About</a>
//     </li>
//     <li>
//       <a href="#!">Contact Us</a>
//     </li>
//   </ul>
//   <ul className={styles.socialMediaIcons}>
//     <li>
//       <i className="fab fa-twitter"></i>
//     </li>
//     <li>
//       <i className="fab fa-facebook-square"></i>
//     </li>
//     <li>
//       <i className="fab fa-linkedin"></i>
//     </li>
//     <li onClick={() => history.push("/login")}>
//       <i className="fas fa-sign-out-alt"></i>Login
//     </li>
//   </ul>
// </div>
