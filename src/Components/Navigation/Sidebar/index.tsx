import { ContactSupportOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import companyLogo from '../../../Assets/Images/kendra-white-full.png'
import companyLogo2 from '../../../Assets/Images/kendra.jpg'

const menus = [
  {
    menu: 'Dashboard',
    icon: 'bx bxs-dashboard',
    list: 'Dashboard',
    to: '/dashboard',
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
  {
    menu: 'Log Out',
    icon: 'bx bx-log-in',
    onClick: () => {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    },
  },
]
interface MenuItem {
  menu: string
  icon: string
  list?: string
  subMenu?: { menu: string; to: string }[]
  to?: string
  onClick?: Function
}
const Sidebar = ({
  close = false,
  setClose = (close: boolean) => {},
  user = {
    company: 'NIUK',
    email: 'NIUK@kendralabs.com',
    firstname: 'Stearn',
    id: 71,
    lastname: 'NIUK',
  },
}) => {
  const [list, setList] = useState<any>('')
  let location = useLocation()

  useEffect(() => {
    setList('')
  }, [close])

  const getSelect = (item: MenuItem) => {
    console.log(location.pathname)
    return false
  }
  return (
    <div className={['sidebar2', close ? 'close' : ''].join(' ')}>
      <div
        style={{
          display: 'flex',
          color: 'white',
          justifyContent: 'space-around',
          padding: '10px 0',
          alignItems: 'center',
          height: '60px',
        }}
      >
        {!close && <h2>NIUK</h2>}
        <i
          className={`bx bx-arrow-from-${close ? 'left' : 'right'}`}
          onClick={() => setClose(!close)}
        ></i>
      </div>
      <ul className={'navLinks'}>
        {menus.map((item, pos) => (
          <li
            key={pos}
            className={[
              list === item.list ? 'showMenu' : item.list,
              getSelect(item),
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
                  if (item.onClick || item.subMenu || !item.to) {
                    e.preventDefault()
                    item.onClick && item.onClick()
                  }
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
                  <Link
                    to={item.to ? item.to : '#!'}
                    onClick={(e) => item.subMenu && e.preventDefault()}
                  >
                    {item.menu}
                  </Link>
                </li>
                {item.subMenu
                  ? item.subMenu.map((subItem, pos) => (
                      <li key={pos}>
                        <Link to={subItem.to} onClick={() => setList('')}>
                          {subItem.menu}
                        </Link>
                      </li>
                    ))
                  : null}
              </div>
            </ul>
          </li>
        ))}
      </ul>
      <div className={'logoDetails'}>
        <div className={'logo'}>
          <img src={companyLogo2} alt="Kendra" />
        </div>
        <div className={'fullLogo'}>
          <div>
            <img src={companyLogo} alt="Kendra" />
            <sup style={{ color: 'white' }}>Beta</sup>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: 'white',
              paddingTop: 10,
              width: '100%',
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?fit=bounds&format=jpg&width=960"
                alt="User"
                style={{
                  borderRadius: '10px',
                  width: '50px',
                  aspectRatio: '1 / 1',
                  // marginRight: 10,
                }}
              />
            </div>
            <div>
              <h4> {user.firstname}</h4>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#77757F',
                }}
              >
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
export {}
