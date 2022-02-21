import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const nav_item_text = [
    { onClick: () => console.log("/"), text: "Home" },
    { onClick: () => console.log("/"), text: "Solutions" },
    { onClick: () => console.log("/"), text: "Pricing" },
    { onClick: () => console.log("/"), text: "About" },
    { onClick: () => console.log("/"), text: "Contact" },
  ];
  const nav_item_icon = [
    {
      icon: "fab fa-facebook-square",
      link: "/login",
      onClick: () => console.log("Hello"),
    },
    {
      icon: "fab fa-twitter",
      link: "/login",
      onClick: () => console.log("Hello"),
    },
    {
      icon: "fab fa-linkedin",
      link: "/login",
      onClick: () => console.log("Hello"),
    },
    {
      text: "Login",
      link: "/login",
      icon: "fas fa-sign-out-alt",
      onClick: () => console.log("/login"),
      type: "btn",
    },
  ];
  return (
    <div className={styles.navTop}>
      <div className={styles.navBrand}>
        <img
          className={styles.brand}
          src={`/images/kendra-${
            window.innerWidth < 576 ? "blue" : "white"
          }-full.png`}
          alt="Kendra"
        />
        <sup>Beta</sup>
      </div>
      <div className={styles.navItems}>
        <ul className={styles.navOptions}>
          {nav_item_text.map((element) => (
            <li style={{ color: "white" }} onClick={element.onClick}>
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
              <a href={element.link} style={{ color: "white" }}>
                <i className={element.icon}></i>
                {element.text}
              </a>
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
//     <li onClick={() => console.log("/login")}>
//       <i className="fas fa-sign-out-alt"></i>Login
//     </li>
//   </ul>
// </div>
