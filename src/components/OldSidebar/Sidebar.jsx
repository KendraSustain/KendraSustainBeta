import React, { useState, useContext } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/Contexts";

const menus = [
    {
        "menu": "Dashboard", "icon": "bx bxs-dashboard", "to": "/dashboard"
    }, {
        "menu": "Data Ingestion", "icon": "bx bx-data", "list": "Ingestion", "subMenu": [
            { "to": "/ingestion/flow", "menu": "Data Flow" },
            { "to": "/ingestion/source", "menu": "Data Source" }]
    }, {
        "menu": "Measure", "icon": "bx bx-list-plus", "list": "Measure", "subMenu": [
            { "to": "/measure/register", "menu": "Asset Register" },
            { "to": "/measure/monitor", "menu": "Data Monitor" }]
    }, {
        "menu": "Manage Reduction Plan", "icon": "bx bx-calculator", "list": "MDP", "subMenu": [
            { "to": "/reduction/models", "menu": "Energy Prediction Models" },
            { "to": "/reduction/calculate", "menu": "Carbon Footprint Calculator" }]
    }, {
        "menu": "Trading", "icon": "bx bx-trending-up", "list": "Trading", "subMenu": [
            { "to": "/trading/price", "menu": "Price" },
            { "to": "/trading/billing", "menu": "Real time Customer Billing" },
            { "to": "/trading/optimised_model", "menu": "Optimised Model" }]
    }, {
        "menu": "Offset", "icon": "bx bx-shield-alt-2", "list": "Offset", "subMenu": [
            { "to": "/content-2/courses", "menu": "Courses" },
            { "to": "/content-2/videos", "menu": "Videos" }]
    }
];

const Sidebar = () => {
    const [list, setList] = useState("");
    const sidebar = useContext(SidebarContext);

    return (
        <div className={[styles.sidebar, sidebar.close ? styles.close : ""].join(" ")}>
            <div className={styles.logoDetails} onClick={() => sidebar.setClose(sidebar.close ? false : true)}>
                <i className="bx bx-menu"></i>
            </div>
            <ul className={styles.navLinks}>
                {menus.map((item, pos) => (
                    item.subMenu ? (
                        <li key={pos} className={list === item.list ? styles.showMenu : ""}>
                            <div className={styles.listWrapper}>
                                <div className={styles.iconLink} onClick={() => setList(list === item.list ? "" : item.list)}>
                                    <a href="#!" onClick={(e) => e.preventDefault()}>
                                        <i className={item.icon}></i>
                                        <span className={styles.linkName}>{item.menu}</span>
                                    </a>
                                    <i className={["bx bxs-chevron-down", styles.arrow].join(" ")}></i>
                                </div>
                                <ul className={styles.subMenu}>
                                    <li><a className={styles.linkName} href="#!" onClick={(e) => e.preventDefault()}>{item.menu}</a></li>
                                    {item.subMenu.map((subItem, pos) => (
                                        <li key={pos}><Link to={subItem.to}>{subItem.menu}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </li>) : (
                        <li key={pos}>
                            <div className={styles.listWrapper}>
                                <Link to={item.to}>
                                    <i className={item.icon}></i>
                                    <span className={styles.linkName}>{item.menu}</span>
                                </Link>
                                <ul className={[styles.subMenu, styles.blank].join(" ")}>
                                    <li><Link to={item.to} className={styles.linkName}>{item.menu}</Link></li>
                                </ul>
                            </div>
                        </li>
                    )
                ))}
                <li>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileContent}>
                            <img src="/images/profile.jpg" alt="profileImg" />
                        </div>
                        <div className={styles.nameJob}>
                            <div className={styles.profileName}>Admin</div>
                            <div className={styles.job}>Subhashis Paul</div>
                        </div>
                        <i className="bx bx-log-out"></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
