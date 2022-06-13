import { Spinner } from '../../Components'
import { Context } from '../../Context'
import style from './Login.module.scss'
import { useNavigate } from 'react-router-dom'
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      return
    }
    navigate('/dashboard')
  }
  return (
    <form onSubmit={handelSubmit} className={style.loginForm}>
      <h1>Sign In</h1>
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
      <div className={style.forgot}>
        <a href="#!">Forgot Password</a>
      </div>
      <button disabled={disables}>
        {disables ? (
          <div>
            <Spinner color="white" width={20} />
          </div>
        ) : (
          'Login'
        )}
      </button>
      <p>or continue with</p>
      <div className={style.icons}>
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
        You can <Link to="/register">Register here</Link>
      </p>
    </form>
  )
}
