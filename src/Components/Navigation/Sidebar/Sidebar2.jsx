import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signout } from '../../../Auth'
import companyLogo from '../../../Assets/Images/kendra-white-full.png'
import companyLogo2 from '../../../Assets/Images/kendra.jpg'

const menus = [
  {
    menu: 'New Dashboard',
    icon: 'bx bxs-dashboard',
    list: 'Dashboard',
    to: '/newdashboard',
  },

  {
    menu: 'Data Ingestion',
    icon: 'bx bx-data',
    list: 'Ingestion',
    subMenu: [
      { to: '/ingestion/flow', menu: 'Flow Engine' },
      { to: '/ingestion/activeflow', menu: 'Active Flows' },
    ],
  },
  {
    menu: 'Measure',
    icon: 'bx bx-list-plus',
    list: 'Measure',
    subMenu: [
      { to: '/measure/asset', menu: 'Asset' },

      { to: '/measure/scope', menu: 'Data Monitor' },
      { to: '/measure/cloud', menu: 'Cloud Carbon Footprint' },
    ],
  },
  {
    menu: 'Data Marketplace',
    icon: 'bx bx-list-ul',
    list: 'Data',
    subMenu: [
      { to: '/emission/calculator', menu: 'Emission Factor Calculator' },
      { to: '/emission/factors', menu: 'Emission Factors' },
    ],
  },
  {
    menu: 'Manage Reduction Plan',
    icon: 'bx bx-calculator',
    list: 'MDP',
    subMenu: [{ to: '/reduction/cal', menu: 'Carbon Footprint Calculator' }],
  },
  {
    menu: 'AI Models',
    icon: 'bx bx-trending-up',
    list: 'AI Models',
    subMenu: [{ to: '/models/prediction_model', menu: 'Prediction Model' }],
  },
  {
    menu: 'Offset',
    icon: 'bx bx-shield-alt-2',
    list: 'Offset',
    to: '/offset',
  },
  {
    menu: 'API',
    icon: 'bx bx-analyse',
    list: 'Offset',
    to: '/api',
  },

  {
    menu: 'Admin',
    icon: 'bx bx-user-pin',
    list: 'Offset',
    to: '/admin',
  },
]

const Sidebar = ({ user, close = true }) => {
  const [list, setList] = useState('')
  const [select, setSelect] = useState(null)
  const [user_, setUser_] = useState({
    name: 'Default',
    job: 'User_',
    photo:
      'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
  })
  const captureImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    setSelect(menus[0])
  }, [])

  useEffect(() => {
    if (user) setUser_(user)
  }, [user])

  return (
    <div className={['sidebar2', close ? 'close' : ''].join(' ')}>
      <div
        style={{
          height: '60px',
          display: 'flex',
          //   width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h2>{user.company}</h2>
      </div>
      <ul className={'navLinks'}>
        {menus.map((item, pos) => (
          <li
            key={pos}
            className={[
              list === item.list ? 'showMenu' : item.list,
              select === item ? 'selected' : null,
            ].join(' ')}
          >
            <div
              className={'iconLink'}
              onClick={() =>
                item.subMenu
                  ? close
                    ? {}
                    : setList(list === item.list ? '' : item.list)
                  : null
              }
            >
              <Link
                to={item.to ? item.to : '#!'}
                onClick={(e) => {
                  if (!item.to) {
                    e.preventDefault()
                    return
                  }
                  setList('')
                  setSelect(item)
                }}
              >
                <i className={item.icon}></i>
                <span className={'linkName'}>{item.menu}</span>
              </Link>
              {item.subMenu ? (
                <i className={['bx bxs-chevron-down', 'arrow'].join(' ')}></i>
              ) : null}
            </div>

            <ul className={'subMenu'}>
              <div className={'listWrapper'}>
                <li className={'listHead'}>
                  <a
                    className={'linkName'}
                    href="#!"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.menu}
                  </a>
                </li>
                {item.subMenu
                  ? item.subMenu.map((subItem, pos) => (
                      <li key={pos}>
                        <Link
                          to={subItem.to}
                          onClick={() => {
                            setSelect(item)
                            setList('')
                          }}
                        >
                          {subItem.menu}
                        </Link>
                      </li>
                    ))
                  : null}
              </div>
            </ul>
          </li>
        ))}

        {/* <li>
          <div className={'profileDetails'}>
            <div className={'profileContent'}>
              <input
                onChange={captureImage}
                id="avatarInput"
                type="file"
                style={{ display: 'none' }}
              />
              <label htmlFor="avatarInput">
                <img src={user_.photo} alt="profileImg" />
              </label>
            </div>
            <div className={'nameJob'}>
              <div className={'profileName'}>
                {user_.firstname + ' ' + user_.lastname}
              </div>
              <div className={'job'}>{user_.company}</div>
            </div>
            <i className="bx bx-log-out" onClick={signout}></i>
          </div>
        </li> */}
      </ul>
      <div className={'logoDetails'}>
        {/* <div className={'logo'}>
          <img src={companyLogo2} alt="Kendra" />
        </div> */}
        <div className={'fullLogo'}>
          <img src={companyLogo} alt="Kendra" />
          <sup style={{ color: 'white' }}>Beta</sup>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
