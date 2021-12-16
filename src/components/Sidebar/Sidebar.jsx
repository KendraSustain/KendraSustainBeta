import React, { useState, useContext, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Contexts";
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

const menus = [
    {
        "menu": "Dashboard", "icon": "bx bxs-dashboard", "list": "Dashboard", "to": "/dashboard"
    }, {
        "menu": "Data Ingestion", "icon": "bx bx-data", "list": "Ingestion", "subMenu": [
            { "to": "/ingestion/flow", "menu": "Flow Engine" },
            { "to": "/ingestion/activeflow", "menu": "Active Flows" }]
    }, {
        "menu": "Measure", "icon": "bx bx-list-plus", "list": "Measure", "subMenu": [
            { "to": "/measure/register", "menu": "Asset Register" },
            { "to": "/measure/monitor", "menu": "Data Monitor" },
            { "to": "/measure/realtime", "menu": "Real-Time Data Feeds" }
        ]
    }, {
        "menu": "Manage Reduction Plan", "icon": "bx bx-calculator", "list": "MDP", "subMenu": [
            // { "to": "/reduction/models", "menu": "Energy Prediction Models" },
            { "to": "/reduction/calculate", "menu": "Carbon Footprint Calculator" }]
    }, {
        "menu": "AI Models", "icon": "bx bx-trending-up", "list": "AI Models", "subMenu": [
            // { "to": "/models/energy_consumption", "menu": "Energy Consumption" },
            // { "to": "/models/carbon_emission_prediction", "menu": "Carbon Emission Prediction" },
            { "to": "/models/prediction_model", "menu": "Prediction Model" },
            // { "to": "/models/realtime_model", "menu": "Realtime Data" },

        ]
    }, {
        "menu": "Offset", "icon": "bx bx-shield-alt-2", "list": "Offset", "to": "/offset"
    }, {
        "menu": "API", "icon": "bx bx-analyse", "list": "Offset", "to": "/api"
    }
];

const Sidebar = () => {
    const [list, setList] = useState("");
    const context = useContext(Context);
    const [image, setImage] = useState("/images/defaultprofile.jpg");
    const [profileName, setProfileName] = useState("Fintricity");
    const [job, setJob] = useState("Admin");
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }
    const singOut = () => {
        context.setAuth(false);
        try {
            Cookies.remove("tok_sustain");
        } catch (error) {
            console.log("Cookie expired");
        }
    }
    useEffect(() => {
        let decoded = jwt_decode(Cookies.get("tok_sustain"));
        if (decoded.id === 62) {
            setImage("/images/lsbuprofile.jpg");
            setProfileName("LSBU");
            setJob("User");
        } else if (decoded.id === 63) {
            setImage("/images/swanseaprofile.jpg");
            setProfileName("Swansea");
            setJob("User");
        } else if (decoded.id === 64) {
            setImage("/images/fintricityprofile.jpg");
            setProfileName("Fintricity");
            setJob("Admin");
        } else {
            setImage("/images/defaultprofile.jpg");
            setProfileName("Admin");
            setJob("Designer");
        }
    }, []);

    return (
        <div className={[styles.sidebar, context.close ? styles.close : ""].join(" ")}>
            <div className={styles.logoDetails}>
                {/* onClick={() => context.setClose(context.close ? false : true)}> */}
                <div className={styles.logo}>
                    <img src="/images/kendra.jpg" alt="Kendra" />
                </div>
                <div className={styles.fullLogo}>
                    <img src="/images/kendra-white-full.png" alt="Kendra" />
                </div>
            </div>
            <ul className={styles.navLinks}>
                {menus.map((item, pos) => (
                    item.subMenu ? (
                        <li key={pos} className={list === item.list ? styles.showMenu : ""}>
                            <div className={styles.iconLink} onClick={() => context.close ? {} : setList(list === item.list ? "" : item.list)}>
                                <a href="#!" onClick={(e) => e.preventDefault()}>
                                    <i className={item.icon}></i>
                                    <span className={styles.linkName}>{item.menu}</span>
                                </a>
                                <i className={["bx bxs-chevron-down", styles.arrow].join(" ")}></i>
                            </div>
                            <ul className={styles.subMenu}>
                                <div className={styles.listWrapper}>
                                    <li className={styles.listHead}><a className={styles.linkName} href="#!" onClick={(e) => e.preventDefault()}>{item.menu}</a></li>
                                    {item.subMenu.map((subItem, pos) => (
                                        <li key={pos}><Link to={subItem.to}>{subItem.menu}</Link></li>
                                    ))}
                                </div>
                            </ul>
                        </li>) : (
                        <li key={pos} className={list === item.list ? styles.showMenu : ""}>
                            <div className={styles.listWrapper}>
                                <Link to={item.to} onClick={() => setList(list === item.list ? "" : item.list)}>
                                    <i className={item.icon}></i>
                                    <span className={styles.linkName}>{item.menu}</span>
                                </Link>
                                <ul className={[styles.subMenu, styles.blank].join(" ")}>
                                    <div className={styles.listWrapper}>
                                        <li onClick={() => setList(list === item.list ? "" : item.list)}><Link to={item.to} className={styles.linkName}>{item.menu}</Link></li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                    )
                ))}
                <li>
                    <div className={styles.profileDetails}>
                        <div className={styles.profileContent}>
                            <input onChange={captureImage} id="avatarInput" type="file" style={{ display: "none" }} />
                            <label htmlFor="avatarInput"><img src={image} alt="profileImg" /></label>
                        </div>
                        <div className={styles.nameJob}>
                            <div className={styles.profileName}>{profileName}</div>
                            <div className={styles.job}>{job}</div>
                        </div>
                        <i className="bx bx-log-out" onClick={singOut}></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
