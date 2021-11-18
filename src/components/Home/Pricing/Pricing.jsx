import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <p className={styles.p1}>Pricing</p>
                <p className={styles.p2}>Most calenders are designed for teams.<br />Slate is designed for freelancers</p>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.topSection}>
                        <p className={styles.cardHeading}>FREE</p>
                        <p className={styles.cardSubHeading}>Organize acroll all apps by hand</p>
                    </div>
                    <div className={styles.priceSection}>
                        <p className={styles.price}>0</p>
                        <div className={styles.cardText}>
                            <p>$</p>
                            <p>Per Month</p>
                        </div>
                    </div>
                    <div className={styles.featureSection}>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topSection}>
                        <p className={styles.cardHeading}>STANDARD</p>
                        <p className={styles.cardSubHeading}>Organize acroll all apps by hand</p>
                    </div>
                    <div className={styles.priceSection}>
                        <p className={styles.price}>10</p>
                        <div className={styles.cardText}>
                            <p>$</p>
                            <p>Per Month</p>
                        </div>
                    </div>
                    <div className={styles.featureSection}>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.topSection}>
                        <p className={styles.cardHeading}>BUSINESS</p>
                        <p className={styles.cardSubHeading}>Organize acroll all apps by hand</p>
                    </div>
                    <div className={styles.priceSection}>
                        <p className={styles.price}>99</p>
                        <div className={styles.cardText}>
                            <p>$</p>
                            <p>Per Month</p>
                        </div>
                    </div>
                    <div className={styles.featureSection}>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                        <p>Pricing Feature</p>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;
