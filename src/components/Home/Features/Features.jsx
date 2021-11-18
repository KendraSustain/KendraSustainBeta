import React from 'react';
import styles from './Features.module.css';
import Grid from '@mui/material/Grid';

const array = [
    { image: "/images/icon1.png", heading: "Develop and Realize Net Zero Strategies", subHeading: "implement Circular Economy Models embed Sustainability Decisioning across your business." },
    { image: "/images/icon2.png", heading: "Be part of a growing Sustainability Ecosystem", subHeading: "with an AI and Data Marketplace to augment your Sustainability initiatives." },
    { image: "/images/icon3.png", heading: "Find out more", subHeading: "about our Custom Sustainability solutions in Asset Management, Real Estate, and Industrial markets." },
]

const Features = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.featureContainer}>
                <blockquote className={styles.p2}><span style={{ fontWeight: "800" }}>Kendra Sustain</span> enables enterprises to embed data-driven Sustainability Decision-Making across business operations by providing enterprises with the tools to build a Circular Economy model through Data and Artificial Intelligence.</blockquote>
            </div>
            <Grid item xs={9}>
                <Grid container justifyContent="center" spacing={2}>
                    {array.map((item, pos) => (
                        <div key={pos} className={styles.cardWrapper}>
                                <img src={item.image} alt="icon" />
                                <p className={styles.heading}>{item.heading}</p>
                                <p className={styles.subHeading}>{item.subHeading}</p>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </section>
    )
}

export default Features;
