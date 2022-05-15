import { Link } from 'react-router-dom'
import style from './index.module.scss'

export default function Error() {
  return (
    <>
      <div className={style.main}>
        <div className={style.foo}>
          <h1>Error 404</h1>
          <Link to={'/dashboard'}>Go To dashboard</Link>
          <Link
            to={'/login'}
            onClick={() => localStorage.removeItem('authToken')}
          >
            Return To Login
          </Link>
        </div>
      </div>
    </>
  )
}
