import React, { useState } from 'react';
import styles from './Topbar.module.css';
import { useHistory } from "react-router-dom";

const Topbar = () => {
    const [scaled, setScaled] = useState(false);
    const history = useHistory();

    return (
        <>
            <div className={[styles.siteContentWrapper, scaled ? styles.scaled : ""].join(" ")}>
                <div className={styles.navTrigger} onClick={() => setScaled(scaled ? false : true)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" id="menuIcon">
                        <rect y="4" width="28" height="3"></rect>
                        <rect y="12" width="20" height="3"></rect>
                        <rect y="20" width="10" height="3"></rect>
                    </svg>
                </div>
                <div className={styles.mainContainer}>
                    <img src="/images/backgroundimg7.jpg" alt="Navbar background" />
                    <div className={styles.containerTextWrapper}>
                        <div className={styles.textWrapper}>
                            <h1 className={styles.heading}>Enable Organizations to Embed Data sustainably across your business operations.</h1>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <button onClick={() => history.push("/login")}>Get Started</button>
                            <button>Request a demo</button>
                        </div>
                    </div>
                </div>
                <div className={styles.mainContainerCurve}></div>
            </div>
        </>
    )
}

export default Topbar;
