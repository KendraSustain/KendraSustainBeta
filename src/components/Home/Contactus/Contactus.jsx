import React from 'react';
import styles from './Contactus.module.css';

const Contactus = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.headingContainer}>
                <p className={styles.p1}>Contact Us</p>
                {/* <p className={styles.p2}>Most calenders are designed for teams.<br />Slate is designed for freelancers</p> */}
            </div>
            <div className={styles.container}>
                <form className={styles.formContainer}>
                    <label>Contact Us</label>
                    <input type="text" placeholder="Your Name" required={true} spellCheck={false} />
                    <input type="email" placeholder="Your Email" required={true} spellCheck={false} />
                    <textarea name="message" rows="6" placeholder="Your Message" spellCheck={false} required></textarea>
                    <div className={styles.formBtn}>
                        <input type="submit" value="Send" />
                    </div>
                </form>
                <div className={styles.contactDetailsContainer}>
                    <div className={styles.addressbar}>
                        <div className={styles.box}>
                            <i className="fas fa-map-marker-alt" />
                            <p>1 Fore Street,<br />London, EC2Y 5EJ</p>
                        </div>
                        <div className={styles.box}>
                            <i className="fas fa-mobile-alt" />
                            <p>+44 870 020 1656</p>
                        </div>
                        <div className={styles.box}>
                            <i className="far fa-envelope" />
                            <p>getintouch@fintricity.com</p>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1635857595447!5m2!1sen!2sin" allowFullScreen={true} loading="lazy"></iframe>
                    </div>
                    <div className={styles.socailMediaIconsContainer}>
                        <ul className={styles.socialMediaIcons}>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactus;
