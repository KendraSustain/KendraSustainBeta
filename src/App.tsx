import { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Error, Home, Login } from 'Pages'
import MainContext, { Context } from 'Context'
import { Sidebar, Spinner } from 'Components'
import routes from 'Routes'
const Main = () => {
  const { loading, getAllScopeData, close, setClose, user, authToken } =
    useContext(Context)
  const navigate = useNavigate()
  useEffect(() => {
    if (authToken.includes('null')) {
      navigate('/login')
      return
    }
    getAllScopeData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        // background: 'red',
        height: '100vh',
      }}
    >
      <Sidebar
        close={close}
        setClose={setClose}
        user={
          user
            ? user
            : {
                company: 'NIUK',
                email: 'NIUK@kendralabs.com',
                firstname: 'Stearn',
                id: 71,
                lastname: 'NIUK',
              }
        }
      />

      {/* <Topbar
          onClose={() => setClose(!close)}
          close={close}
          newIcon={[
            {
              icon: 'bx bx-refresh',
              onClick: (e: any) => {
                e.preventDefault()
                getAllScopeData()
              },
              to: '/',
            },
          ]}
        /> */}

      <div className={['main-home', close ? 'close' : ''].join(' ')}>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            {routes.map((item, pos) => (
              <Route key={pos} path={item.route} element={item.component} />
            ))}
          </Routes>
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <MainContext>
      <Router />
    </MainContext>
  )
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  )
}

export default App
