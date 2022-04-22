import React from 'react'
import styles from './index.module.css'

const Testimonials = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <p className={styles.p1}>Testimonials</p>
        <img src='/images/logos_ibm.png' alt='IBM' />
        <p className={styles.p2}>
          Most calenders are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src='/images/avatar.png' alt='Avatar' />
            </div>
            <div className={styles.cardText}>
              <p>Organize across</p>
              <p>UI designer</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button>More Testimonials</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
