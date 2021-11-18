import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <p className={styles.p1}>Partners</p>
                {/* <p className={styles.p2}>Most calenders are designed for teams.<br />Slate is designed for freelancers</p> */}
            </div>
            <div className={styles.container}>
                <div className={styles.brandContainer}>
                    <img src="/images/logos_google.png" alt="Google" />
                    <img src="/images/logos_amazon.png" alt="Amazon" />
                    <img src="/images/logos_microsoft.png" alt="Microsoft" />
                    <img src="/images/logos_uber.png" alt="Uber" />
                    <img src="/images/logos_dropbox.png" alt="Dropbox" />
                    <img src="/images/logos_google.png" alt="Google" />
                    <img src="/images/logos_uber.png" alt="Uber" />
                    <img src="/images/logos_amazon.png" alt="Amazon" />
                </div>
                <div className={styles.buttonWrapper}>
                    <button>Try For Free</button>
                </div>
            </div>
        </section>
    )
}

export default Partners;
