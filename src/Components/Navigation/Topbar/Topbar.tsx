import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultmenus = [
  {
    lable: 'Data Ingestion',

    onClick: () => console.log('Hello'),
    to: '/ingestion/active',
  },
  {
    lable: 'Measure',

    onClick: () => console.log('Hello'),
    to: '/measure/asset',
  },
  {
    lable: 'Manage Reduction Plan',
    onClick: () => console.log('Hello'),
    to: '/reduction/cal',
  },
  {
    lable: 'Offset',

    onClick: () => console.log('Hello'),
    to: '/offset',
  },
  { lable: 'API', onClick: () => console.log('Hello'), to: '/' },
]
const defaultIcons = [
  {
    icon: 'bx bx-bell',

    onClick: () => console.log('Hello'),
    to: '/',
  },
  {
    icon: 'bx bx-cog',

    onClick: () => console.log('Hello'),
    to: '/user',
  },
  {
    icon: 'bx bx-log-out',

    onClick: () => {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    },
    to: '/',
  },
]
interface PropType {
  menu: {
    lable: string
    onClick: () => void
    to: string
  }[]
  icons: {
    icon: string
    onClick: () => void
    to: string
  }[]
  close: boolean
  onClose: () => void
  user: {
    firstname: string
    lastname: string
    email: string
    company: string
    id: number
  }
}
const Topbar: React.FC<PropType> = ({
  menu = [],
  icons = defaultIcons,
  close,
  onClose,
  user = {
    firstname: 'User',
    lastname: 'Lastname',
    email: 'email',
    company: 'company',
    id: 1,
  },
}) => {
  return (
    <>
      <div className={['topbar', close ? 'close' : null].join(' ')}>
        <div className={'topbarWrapper'}>
          <div className={'topLeft'}>
            <h2>{user ? user.company : 'Company'}</h2>
          </div>
          <div className={'topRight'}>
            {menu.map((item, pos) => (
              <div
                key={pos}
                className={['topbarIconContainer2', 'flowBtn2'].join(' ')}
              >
                <Link
                  to={item.to}
                  className={'topIconText2'}
                  onClick={() => item.onClick}
                >
                  {' '}
                  {item.lable}
                </Link>
              </div>
            ))}

            <div>
              {close ? (
                <i className="bx bx-menu" onClick={onClose}></i>
              ) : (
                <i className="bx bx-x" onClick={onClose}></i>
              )}
            </div>
            {icons.map((element, pos) => (
              <div className={'topbarIconContainer'} key={pos}>
                <div>
                  <Link to={element.to ? element.to : '!#'}>
                    <i className={element.icon} onClick={element.onClick}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Topbar
