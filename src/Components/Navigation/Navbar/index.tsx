import React from 'react'
import { Link } from 'react-router-dom'
import companyLogo from '../../../Assets/Images/kendra-white-full.png'

interface PropsType {
  backgroundColor: string
}
const navItems = [
  {
    to: '/login',
    text: 'Home',
  },
  {
    to: '/login',
    text: 'Solutions',
  },
  {
    to: '/login',
    text: 'Pricing',
  },
  {
    to: '/login',
    text: 'About',
  },
  { to: '/login', text: 'Contact' },
  {
    icon: 'bx bxl-facebook-square',
    to: '/login',
  },
  {
    icon: 'bx bxl-twitter',
    to: '/login',
  },
  {
    icon: 'bx bxl-linkedin',
    to: '/login',
  },
  {
    text: 'Login',
    icon: 'bx bx-log-in',
    to: '/login',
    type: 'btn',
  },
]
const Navbar: React.FC<PropsType> = ({ backgroundColor }) => {
  return (
    <div
      className={'navTop'}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={'navBrand'}>
        <img
          className={'brand'}
          // src={`https://app.kendrasustain.com/images/kendra-${window.innerWidth < 576 ? "blue" : "white"
          //   }-full.png`}
          src={companyLogo}
          alt="Kendra"
        />
        <sup>Beta</sup>
      </div>
      <div className={'navItems'}>
        <ul className={'navOptions'}>
          {navItems.map((element, pos) => (
            <li
              key={pos}
              className={
                !element.icon
                  ? 'navText'
                  : !element.text
                  ? 'navIcon'
                  : 'navItem'
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
