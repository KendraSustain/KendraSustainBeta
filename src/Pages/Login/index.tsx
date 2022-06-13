import React, { useEffect } from 'react'
import style from './index.module.scss'
import leftLogo from './Login1.svg'
import logo from '../../Assets/Images/kendra-white-full.png'
import { useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
export default function Form() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (localStorage.getItem('authToken')) navigate('/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={style.container}>
        <div className={style.leftSide}>
          <div className={style.content}>
            <div className={style.logo}>
              <h1>Welcome to</h1>
              <img src={logo} alt="Logo" className={style.logo} />
            </div>
            <p>
              Enabling Organizations to Embed Data driven <br /> Sustainability
              Decision-Making across <br /> business operations.
            </p>
          </div>
          <img src={leftLogo} alt="Logo" className={style.leftImg} />
        </div>
        <div className={style.rightSide}>
          {location.pathname === '/login' ? <Login /> : <Signup />}
        </div>
      </div>
    </>
  )
}
