import { Spinner } from '../../Components'
import style from './Login.module.scss'
import React, { FormEvent, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Link } from 'react-router-dom'
export default function Signup() {
  const [show, setShow] = useState(false)
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  const [disables, setDisables] = useState(false)

  const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisables(!disables)
  }

  const roles = [
    {
      value: 1,
      label: 'User',
    },
    {
      value: 2,
      label: 'Admin',
    },
    {
      value: 3,
      label: 'Super Admin',
    },
  ]

  return (
    <form onSubmit={handelSubmit} className={style.loginForm}>
      <h1>Sign Up</h1>
      <div className={style.name}>
        <label>
          <input placeholder={'Enter Your Firstname'} />
        </label>
        <label>
          <input placeholder={'Enter Your Lastname'} />
        </label>
      </div>
      <label className={style.email}>
        <i className={'bx bx-envelope'}></i>
        <input placeholder={'Company Email Address'} />
      </label>
      <div className={style.role}>
        <FormControl fullWidth>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">Role</MenuItem>
            {roles.map((x, i) => (
              <MenuItem value={x.value}>{x.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <label className={style.password}>
        <i className={'bx bx-lock-alt'}></i>
        <input
          placeholder={'Enter Your Password'}
          name={'password'}
          type={show ? 'text' : 'password'}
          required
          autoComplete="on"
        />
        <i
          className={`bx bxs-${show ? 'show' : 'hide'}`}
          onClick={() => setShow(!show)}
        ></i>
      </label>
      <label className={style.password}>
        <i className={'bx bx-lock-alt'}></i>
        <input
          placeholder={'Enter Your Password'}
          name={'password'}
          type={show ? 'text' : 'password'}
          required
          autoComplete="on"
        />
        <i
          className={`bx bxs-${show ? 'show' : 'hide'}`}
          onClick={() => setShow(!show)}
        ></i>
      </label>

      <button disabled={disables}>
        {disables ? (
          <div>
            <Spinner color="white" width={20} />
          </div>
        ) : (
          'Singup'
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
        You can <Link to="/login">Login Here</Link>
      </p>
    </form>
  )
}
