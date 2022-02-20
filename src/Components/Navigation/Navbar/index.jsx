import React from 'react'
import styles from './index.module.css'
import '../../../index.css'
import { Link } from 'react-router-dom'

const Navbar = ({
  nav_item_text = [
    {
      to: '/login',
      text: 'Home',
      onClick: e => console.log('Clicked' + e.target)
    },
    {
      to: '/login',
      text: 'Solutions',
      onClick: e => console.log('Clicked' + e.target)
    },
    {
      to: '/login',
      text: 'Pricing',
      onClick: e => console.log('Clicked' + e.target)
    },
    {
      to: '/login',
      text: 'About',
      onClick: e => console.log('Clicked' + e.target)
    },
    { to: '/login', text: 'Contact' },
    {
      icon: 'bx bxl-facebook-square',
      to: '/login',
      onClick: e => console.log('Clicked' + e.target)
    },
    {
      icon: 'bx bxl-twitter',
      to: '/login',
      onClick: e => console.log('Clicked' + e.target)
    },
    {
      icon: 'bx bxl-linkedin',
      to: '/login',
      onClick: e => console.log('Clicked' + e.target)
    },
    {
      text: 'Login',
      icon: 'bx bx-log-in',
      to: '/login',
      type: 'btn',
      onClick: e => console.log('Clicked' + e.target)
    }
  ],

  backgroundColor,
  position
}) => {
  return (
    <div
      className={styles.navTop}
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <div className={styles.navBrand}>
        <img
          className={styles.brand}
          src={`https://app.kendrasustain.com/images/kendra-${
            window.innerWidth < 576 ? 'blue' : 'white'
          }-full.png`}
          alt='Kendra'
        />
        <sup>Beta</sup>
      </div>
      <div className={styles.navItems}>
        <ul className={styles.navOptions}>
          {nav_item_text.map((element, pos) => (
            <li
              key={pos}
              onClick={element.onClick}
              className={
                !element.icon
                  ? styles.navText
                  : !element.text
                  ? styles.navIcon
                  : styles.navItem
              }
            >
              <Link to={element.to}>
                <i className={element.icon}></i>
                {element.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
