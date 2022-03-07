import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signout } from "../../../Auth";

const menus = [
  {
    menu: "Dashboard",
    icon: "bx bxs-dashboard",
    list: "Dashboard",
    to: "/dashboard",
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
    subMenu: [
      { to: "/emission/calculator", menu: "Emission Factor Calculator" },
      { to: "/emission/factors", menu: "Emission Factors" },
    ],
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

  {
    menu: "Admin",
    icon: "bx bx-user-pin",
    list: "Offset",
    to: "/admin",
  },
];

const Sidebar = ({ user, close = true }) => {
  const [list, setList] = useState("");
  const [user_, setUser_] = useState({
    name: "Default",
    job: "User_",
    photo:
      "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png",
  });
  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (user) setUser_(user);
  }, [user]);

  return (
    <div className={["sidebar", close ? "close" : ""].join(" ")}>
      <div className={"logoDetails"}>
        <div className={"logo"}>
          <img
            src="https://app.kendrasustain.com/images/kendra.jpg"
            alt="Kendra"
          />
        </div>
        <div className={"fullLogo"}>
          <img
            src="https://app.kendrasustain.com/images/kendra-white-full.png"
            alt="Kendra"
          />
          <sup style={{ color: "white" }}>Beta</sup>
        </div>
      </div>
      <ul className={"navLinks"}>
        {menus.map((item, pos) => (
          <li key={pos} className={list === item.list ? "showMenu" : item.list}>
            <div
              className={"iconLink"}
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
                <span className={"linkName"}>{item.menu}</span>
              </Link>
              {item.subMenu ? (
                <i className={["bx bxs-chevron-down", "arrow"].join(" ")}></i>
              ) : null}
            </div>

            <ul className={"subMenu"}>
              <div className={"listWrapper"}>
                <li className={"listHead"}>
                  <a
                    className={"linkName"}
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
          <div className={"profileDetails"}>
            <div className={"profileContent"}>
              <input
                onChange={captureImage}
                id="avatarInput"
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="avatarInput">
                <img src={user_.photo} alt="profileImg" />
              </label>
            </div>
            <div className={"nameJob"}>
              <div className={"profileName"}>
                {user_.firstname + " " + user_.lastname}
              </div>
              <div className={"job"}>{user_.company}</div>
            </div>
            <i className="bx bx-log-out" onClick={signout}></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;