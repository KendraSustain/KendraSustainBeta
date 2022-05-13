import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useState,
  useEffect,
} from 'react'
import style from './index.module.scss'
import logo from '../../Assets/Images/kendra-white-full.png'
import facebook from '../../Assets/Images/facebook.png'
import { Context } from '../../Context'
import { Spinner } from '../../Components'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [disables, setDisables] = useState(false)
  const { getToken } = useContext(Context)
  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'password') {
      setPassword(event.target.value)
      return
    }
    setEmail(event.target.value)
  }
  const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisables(true)

    if (!(await getToken(email, password))) {
      setDisables(false)
      console.log('Not able to login')
    }
  }
  useEffect(() => {
    if (localStorage.getItem('authToken')) navigate('/newdashboard')
  }, [])

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.content}>
            <div className={style.logo}>
              <img src={logo} alt="Logo" />
            </div>
            <h1>
              Welcome to <span>Kendra Sustain !</span>
            </h1>
            <p>
              Enabling Organizations to Embed Data driven Sustainability
              Decision-Making across business operations.
            </p>
          </div>
        </div>
        <div className={style.right}>
          <section className={style.form}>
            <h1>Sign In</h1>
            <form onSubmit={handelSubmit}>
              <label className={style.email}>
                <i className={'bx bx-envelope'}></i>
                <input
                  placeholder={'Enter Your Email'}
                  onChange={handelChange}
                  name={'email'}
                  value={email}
                  type={'email'}
                  required
                  autoComplete="on"
                />
              </label>
              <label className={style.password}>
                <i className={'bx bx-lock-alt'}></i>
                <input
                  placeholder={'Enter Your Password'}
                  onChange={handelChange}
                  name={'password'}
                  value={password}
                  type={show ? 'text' : 'password'}
                  required
                  autoComplete="on"
                />
                <i
                  className={`bx bxs-${show ? 'show' : 'hide'}`}
                  onClick={() => setShow(!show)}
                ></i>
              </label>
              <a href="#!">Forgot Password</a>
              <button disabled={disables}>
                {disables ? (
                  <div>
                    <Spinner color="white" width={20} />
                  </div>
                ) : (
                  'Login'
                )}
              </button>
            </form>
            <p>or continue with</p>
            <div className={style.icons}>
              <img src={facebook} alt="Facebook" />
              <img
                src={'https://pngimg.com/uploads/microsoft/microsoft_PNG18.png'}
                alt="Facebook"
              />
              <img
                src={'https://pngimg.com/uploads/google/google_PNG19630.png'}
                alt="Facebook"
              />
            </div>
            <p>
              if you don't have an account register <br />
              You can <a href="/">Register here</a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
