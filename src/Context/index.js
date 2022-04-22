import React, { createContext, useState } from 'react'
const Context = createContext()
export default function MainContext (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [close, setClose] = useState(true)
  return (
    <Context.Provider value={{ isAuth, setIsAuth, close, setClose }}>
      {props.children}
    </Context.Provider>
  )
}
export { Context }
