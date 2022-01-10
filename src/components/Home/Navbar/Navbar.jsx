import React from 'react';
import styles from './Navbar.module.css';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();

    return (
        <div className={styles.navTop}>
            <img className={styles.brand} src={`/images/kendra-${window.innerWidth < 576 ? "blue" : "white"}-full.png`} alt="Kendra" /><span style={{ color: "white", fontSize: "18px", marginRight: '180px' }}>Beta</span>
            <ul className={styles.navOptions}>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Solutions</a></li>
                <li><a href="#!">Pricing</a></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact Us</a></li>
            </ul>
            <ul className={styles.socialMediaIcons}>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-linkedin"></i></li>
                <li onClick={() => history.push("/login")}><i className="fas fa-sign-out-alt"></i>Login</li>
            </ul>
        </div>
    )
}

export default Navbar
