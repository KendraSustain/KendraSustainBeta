import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.imgWrapper}>
                <img src="/images/newsletter.png" alt="Newsletter-img" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <p className={styles.p1}>Kendra Sustain</p>
                    <p className={styles.p2}>Transform your business and integrate data into everything you do.</p>
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.p3}>Subscribe to our Newsletter</p>
                    <p className={styles.p4}>Get lettest updates on Kendra Sustain</p>
                    <form className={styles.inputWrapper}>
                        <input type="email" placeholder="Your Email" spellCheck={false} />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div >
        </section >
    )
}

export default Newsletter;
