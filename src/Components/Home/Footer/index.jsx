import React from 'react'
import styles from './index.module.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.box}>
            <p>Pages</p>
            <ul>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>
                <a href='#!'>Solutions</a>
              </li>
              <li>
                <a href='#!'>Pricing</a>
              </li>
              <li>
                <a href='#!'>About</a>
              </li>
              <li>
                <a href='#!'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <p>Company</p>
            <ul>
              <li>
                <a href='#!'>Product</a>
              </li>
              <li>
                <a href='#!'>FAQ</a>
              </li>
              <li>
                <a href='#!'>Privacy Policy</a>
              </li>
              <li>
                <a href='#!'>Terms & Conditions</a>
              </li>
            </ul>
          </div>
          {/* <div className={styles.box}>
                        <p>Jane Black</p>
                        <ul>
                            <li><a href="#">Philip Jones</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Colleen Russell</a></li>
                            <li><a href="#">Marvin Hawkins</a></li>
                            <li><a href="#">Bruce Simmmmons</a></li>
                        </ul>
                    </div> */}
        </div>
        <div className={styles.contactContainer}>
          <p>
            <i className='fas fa-map-marker-alt'></i>1 Fore Street,
            <br />
            London, EC2Y 5EJ
          </p>
          <p>
            <i className='fas fa-mobile-alt'></i>+44 870 020 1656
          </p>
          <ul className={styles.socialMediaIcons}>
            <li>
              <i className='fab fa-twitter'></i>
            </li>
            <li>
              <i className='fab fa-facebook-square'></i>
            </li>
            <li>
              <i className='fab fa-linkedin'></i>
            </li>
          </ul>
        </div>
      </footer>
      <footer className={styles.copyright}>
        <div>
          Copyright © 2021. All rights are reserved by{' '}
          <a href='#!'>Kendra Sustain.</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
