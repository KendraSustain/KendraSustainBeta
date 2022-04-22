import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import {
  Home,
  Login,
  Dashboard,
  ActiveFlow,
  Asset,
  DataMonitor,
  Factor,
  Calculator,
  CarbonCal,
  Prediction,
  AssetDetail,
  Offset,
  User,
  Admin,
  Api,
  Flow,
  ChangePassword,
  UpdateInfo,
  UserApi,
  Organization,
  ManageUsers,
  ManageOrg,
  ManageTeam,
  Billing,
  RoleApi,
  UserCalls,
  BillingAccount,
  Payment,
  AssetScopeOneDetails,
  CloudCarbon,
  DashboardNew,
} from './Pages'
import MainContext, { Context } from './Context'
import { Sidebar, Sidebar2, Topbar, Topbar2 } from './Components'
import styles from './Main.module.css'
import { getUser } from './Auth'
import { Box } from '@material-ui/core'
const routes = [
  {
    route: '/newdashboard',
    component: <DashboardNew />,
  },

  {
    route: '/ingestion/activeflow',
    component: <ActiveFlow />,
  },
  {
    route: '/ingestion/flow',
    component: <Flow />,
  },
  {
    route: '/measure/asset',
    component: <Asset />,
  },
  {
    route: '/asset',
    component: <AssetDetail />,
  },
  {
    route: '/asset/one',
    component: <AssetScopeOneDetails />,
  },
  {
    route: '/measure/scope',
    component: <DataMonitor />,
  },
  {
    route: '/measure/cloud',
    component: <CloudCarbon />,
  },

  {
    route: '/emission/factors',
    component: <Factor />,
  },
  {
    route: '/emission/calculator',
    component: <Calculator />,
  },
  {
    route: '/reduction/cal',
    component: <CarbonCal />,
  },
  {
    route: '/models/prediction_model',
    component: <Prediction />,
  },
  {
    route: '/offset',
    component: <Offset />,
  },
  {
    route: '/user',
    component: <User />,
  },
  {
    route: '/admin',
    component: <Admin />,
  },
  {
    route: '/api',
    component: <Api />,
  },
  {
    route: '/user/password',
    component: <ChangePassword />,
  },
  {
    route: '/user/update',
    component: <UpdateInfo />,
  },
  {
    route: '/user/api',
    component: <UserApi />,
  },
  {
    route: '/user/org',
    component: <Organization />,
  },
  {
    route: '/admin/users',
    component: <ManageUsers />,
  },
  {
    route: '/admin/org',
    component: <ManageOrg />,
  },
  {
    route: '/admin/team',
    component: <ManageTeam />,
  },
  {
    route: '/admin/billing',
    component: <Billing />,
  },
  {
    route: '/admin/api',
    component: <RoleApi />,
  },
  {
    route: '/admin/calls',
    component: <UserCalls />,
  },
  {
    route: '/admin/billing/account',
    component: <BillingAccount />,
  },
  {
    route: '/admin/billing/payment',
    component: <Payment />,
  },
]

const Main = (props) => {
  const { close, setClose, isAuth, setIsAuth } = useContext(Context)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const run = async () => {
      const user_ = await getUser()

      if (!user_.success) return navigate('/login')
      setIsAuth(true)
      setUser({
        ...user_,
        photo:
          'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      })
    }
    run()
  }, [navigate, setIsAuth])
  return (
    isAuth && (
      <div
        style={
          {
            // backgroundColor: 'aliceblue',
          }
        }
      >
        <Topbar close={close} onClose={setClose} />
        <Sidebar close={close} user={user} />
        <div
          style={{
            padding: '10px',
          }}
          className={[styles.home, close ? styles.close : ''].join(' ')}
        >
          <Routes>
            {routes.map((item, pos) => (
              <Route key={pos} path={item.route} element={item.component} />
            ))}
          </Routes>
        </div>
      </div>
    )
  )
}
const Main2 = () => {
  const { close, setClose, isAuth, setIsAuth } = useContext(Context)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const run = async () => {
      const user_ = await getUser()

      if (!user_.success) return navigate('/login')
      setIsAuth(true)
      setUser({
        ...user_,
        photo:
          'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      })
    }
    run()
  }, [navigate, setIsAuth])
  return (
    isAuth && (
      <Box
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#001555',
        }}
      >
        <Sidebar2 close={false} user={user} />
        <Topbar2 />
        <Box
          style={{
            width: 'calc(100% - 244px)',
            background: '#EEEFF3',
            position: 'fixed',
            left: '244px',
            top: '60px',
            borderRadius: '30px 0 0 0 ',
            padding: 20,
            overflow: 'auto',
            height: 'calc(100vh - 60px )',
          }}
        >
          <Box>
            <Routes>
              {routes.map((item, pos) => (
                <Route key={pos} path={item.route} element={item.component} />
              ))}
            </Routes>
          </Box>
        </Box>
      </Box>
    )
  )
}
function App() {
  return (
    <MainContext>
      <>
        <Router />
      </>
    </MainContext>
  )
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/*" element={<Main2 />} /> */}
      <Route path="/*" element={<Main2 />} />
    </Routes>
  )
}

export default App
