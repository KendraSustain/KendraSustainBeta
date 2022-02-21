import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const menus = [
  {
    menu: "Dashboard",
    icon: "bx bxs-dashboard",
    list: "Dashboard",
    to: "/cusdashboard",
  },
  {
    menu: "Data Ingestion",
    icon: "bx bx-data",
    list: "Ingestion",
    subMenu: [
      { to: "/ingestion/flow", menu: "Flow Engine" },
      { to: "/ingestion/activeflow", menu: "Active Flows" },
    ],
  },
  {
    menu: "Measure",
    icon: "bx bx-list-plus",
    list: "Measure",
    subMenu: [
      { to: "/measure/asset", menu: "Asset" },

      { to: "/measure/scope", menu: "Data Monitor" },
    ],
  },
  {
    menu: "Data Marketplace",
    icon: "bx bx-list-ul",
    list: "Data",
    subMenu: [{ to: "/factor", menu: "Emission Factor Calculator" }],
  },
  {
    menu: "Manage Reduction Plan",
    icon: "bx bx-calculator",
    list: "MDP",
    subMenu: [{ to: "/reduction/cal", menu: "Carbon Footprint Calculator" }],
  },
  {
    menu: "AI Models",
    icon: "bx bx-trending-up",
    list: "AI Models",
    subMenu: [{ to: "/models/prediction_model", menu: "Prediction Model" }],
  },
  {
    menu: "Offset",
    icon: "bx bx-shield-alt-2",
    list: "Offset",
    to: "/offset",
  },
  {
    menu: "API",
    icon: "bx bx-analyse",
    list: "Offset",
    to: "/api",
  },
];
const user_admin = {
  photo: "/images/lsbuprofile.jpg",
  name: "Himanshu",
  job: "Admin",
};

const Sidebar = ({ user_ = user_admin, close_ = true }) => {
  const history = useHistory();
  const [close, setClose] = useState(true);
  const [list, setList] = useState("");
  const [user, setUser] = useState({
    name: "Default",
    job: "User",
    photo: "/images/macbook.png",
  });
  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };
  const singOut = () => {
    try {
      Cookies.remove("tok_sustain");
    } catch (error) {
      console.log("Cookie expired");
    }
    history.push("/login");
  };
  useEffect(() => {
    let decoded = jwt_decode(Cookies.get("tok_sustain"));
    if (decoded.id === 62) {
      setUser({
        name: "User",
        job: "User",
        photo: "/images/lsbuprofile.jpg",
      });
    } else if (decoded.id === 63) {
      setUser({
        name: "swanseaprofile",
        job: "User",
        photo: "/images/swanseaprofile.jpg",
      });
    } else if (decoded.id === 64) {
      setUser({
        name: "Fintricity",
        job: "Admin",
        photo: "/images/fintricityprofile.jpg",
      });
    } else if (decoded.id === 66) {
      setUser({
        name: "Premier Modular",
        job: "Admin",
        photo: "/images/Premier.png",
      });
    } else {
      setUser({
        name: "Premier Modular",
        job: "Designer",
        photo: "/images/defaultprofile.jpg",
      });
    }
    setClose(close_);
  }, [close_]);

  return (
    <div className={[styles.sidebar, close ? styles.close : ""].join(" ")}>
      {/* <div className={styles.topLeft}>
        <i className="bx bx-menu" onClick={() => setClose(!close)}></i>
      </div> */}
      <div className={styles.logoDetails}>
        <div className={styles.logo}>
          <img src="/images/kendra.jpg" alt="Kendra" />
        </div>
        <div className={styles.fullLogo}>
          <img src="/images/kendra-white-full.png" alt="Kendra" />
          <sup style={{ color: "white" }}>Beta</sup>
        </div>
      </div>
      <ul className={styles.navLinks}>
        {menus.map((item, pos) => (
          <li
            key={pos}
            className={list === item.list ? styles.showMenu : item.list}
          >
            <div
              className={styles.iconLink}
              onClick={() =>
                item.subMenu
                  ? close
                    ? {}
                    : setList(list === item.list ? "" : item.list)
                  : null
              }
            >
              <Link to={item.to ? item.to : "#!"}>
                <i className={item.icon}></i>
                <span className={styles.linkName}>{item.menu}</span>
              </Link>
              {item.subMenu ? (
                <i
                  className={["bx bxs-chevron-down", styles.arrow].join(" ")}
                ></i>
              ) : null}
            </div>

            <ul className={styles.subMenu}>
              <div className={styles.listWrapper}>
                <li className={styles.listHead}>
                  <a
                    className={styles.linkName}
                    href="#!"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.menu}
                  </a>
                </li>
                {item.subMenu
                  ? item.subMenu.map((subItem, pos) => (
                      <li key={pos}>
                        <Link to={subItem.to}>{subItem.menu}</Link>
                      </li>
                    ))
                  : null}
              </div>
            </ul>
          </li>
        ))}
        <li>
          <div className={styles.profileDetails}>
            <div className={styles.profileContent}>
              <input
                onChange={captureImage}
                id="avatarInput"
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="avatarInput">
                <img src={user.photo} alt="profileImg" />
              </label>
            </div>
            <div className={styles.nameJob}>
              <div className={styles.profileName}>{user.name}</div>
              <div className={styles.job}>{user.job}</div>
            </div>
            <i className="bx bx-log-out" onClick={singOut}></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
