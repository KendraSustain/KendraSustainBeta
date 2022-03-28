import React, { useContext } from 'react'
import styles from './Topbar.module.css'
import { NotificationsNone, Settings } from '@material-ui/icons'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'
import { Context } from '../../context/Contexts'
import Cookies from 'js-cookie'
import Tooltip from '@mui/material/Tooltip'

export default function Topbar (props) {
  const context = useContext(Context)
  const singOut = () => {
    context.setAuth(false)
    try {
      Cookies.remove('tok_sustain')
    } catch (error) {
      console.log('Cookie expired')
    }
  }

  return (
    <div className={[styles.topbar, props.close ? styles.close : ''].join(' ')}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topLeft}>
          <i className='bx bx-menu' color='black'></i>
          {/* <img src="/images/kendra.jpg" alt="brand logo" />
          <span className="logo">Kendra Sustain</span> */}
        </div>
        <div className={styles.topRight}>
          {/* <div className={[styles.topbarIconContainer2, styles.flowBtn2].join(" ")}>
            <span className={styles.topIconText2} onClick={() => console.log("/new")}> Scope 1</span>
          </div> */}
          {/* <div className={[styles.topbarIconContainer2, styles.flowBtn2].join(" ")}>
            <span className={styles.topIconText2} onClick={() => console.log("/cusdashboard")}> Scope 2</span>
          </div> */}
          {/* <div className={[styles.topbarIconContainer2, styles.flowBtn2].join(" ")}>
            <span className={styles.topIconText2} onClick={() => console.log("/new")}> Scope 3</span>
          </div> */}
          <div
            className={[styles.topbarIconContainer2, styles.flowBtn2].join(' ')}
          >
            <span
              className={styles.topIconText2}
              onClick={() => console.log('/ingestion/flow')}
            >
              {' '}
              Data Ingestion
            </span>
          </div>

          <div
            className={[styles.topbarIconContainer2, styles.flowBtn2].join(' ')}
          >
            <span
              className={styles.topIconText2}
              onClick={() => console.log('/measure/register')}
            >
              {' '}
              Measure
            </span>
          </div>
          <div
            className={[styles.topbarIconContainer2, styles.flowBtn2].join(' ')}
          >
            <span
              className={styles.topIconText2}
              onClick={() => console.log('/reduction/calculate')}
            >
              {' '}
              Manage Reduction Plan
            </span>
          </div>
          <div
            className={[styles.topbarIconContainer2, styles.flowBtn2].join(' ')}
          >
            <span
              className={styles.topIconText2}
              onClick={() => console.log('/offset')}
            >
              {' '}
              Offset
            </span>
          </div>
          <div
            className={[styles.topbarIconContainer2, styles.flowBtn2].join(' ')}
          >
            <span
              className={styles.topIconText2}
              onClick={() => console.log('/Api')}
            >
              API
            </span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Tooltip title='Create Your Flow'>
              <AddIcon onClick={() => console.log('/ingestion/flow')} />
            </Tooltip>
          </div>
          <div className={styles.topbarIconContainer}>
            <NotificationsNone />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Tooltip title='Settings'>
              <Settings />
            </Tooltip>
          </div>
          <div className={styles.topbarIconContainer}>
            <Tooltip title='Sign Out'>
              <LogoutIcon onClick={singOut} />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
