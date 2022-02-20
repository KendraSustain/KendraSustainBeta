import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const menus = [
  {
    lable: "Data Ingestion",

    onClick: () => console.log("Hello"),
    to: "/ingestion/active",
  },
  {
    lable: "Measure",

    onClick: () => console.log("Hello"),
    to: "/measure/asset",
  },
  {
    lable: "Manage Reduction Plan",
    onClick: () => console.log("Hello"),
    to: "/reduction/cal",
  },
  {
    lable: "Offset",

    onClick: () => console.log("Hello"),
    to: "/offset",
  },
  { lable: "API", onClick: () => console.log("Hello"), to: "/" },
];
const icons = [
  {
    icon: "bx bx-plus",

    onClick: () => console.log("Hello"),
    to: "/",
  },
  {
    icon: "bx bx-bell",

    onClick: () => console.log("Hello"),
    to: "/",
  },
  {
    icon: "bx bx-cog",

    onClick: () => console.log("Hello"),
    to: "/user",
  },
  {
    icon: "bx bx-log-out",

    onClick: () => {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    },
    to: "/",
  },
];
export default function Topbar({
  menu = menus,
  icon = icons,
  close = false,
  onClose,
}) {
  return (
    <div
      style={{
        height: "60px",
      }}
    >
      <div className={[styles.topbar, close ? styles.close : null].join(" ")}>
        <div className={styles.topbarWrapper}>
          <div className={styles.topLeft}>
            <i
              className="bx bx-menu"
              onClick={() => {
                onClose(!close);
              }}
            ></i>
          </div>
          <div className={styles.topRight}>
            {menu.map((item, pos) => (
              <div
                key={pos}
                className={[styles.topbarIconContainer2, styles.flowBtn2].join(
                  " "
                )}
              >
                <Link
                  to={item.to}
                  className={styles.topIconText2}
                  onClick={() => item.onClick}
                >
                  {" "}
                  {item.lable}
                </Link>
              </div>
            ))}

            {icon.map((element, pos) => (
              <div className={styles.topbarIconContainer} key={pos}>
                <div to={element.link}>
                  <Link to={element.to}>
                    <i className={element.icon} onClick={element.onClick}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
