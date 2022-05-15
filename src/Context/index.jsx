import React, { createContext, useState } from 'react'
import axios from 'axios'
import ScopeOneStaticData from '../Helper/ScopeOneStaticData.json'
import { useNavigate } from 'react-router-dom'
const Context = createContext()

export default function MainContext(props) {
  const [authToken, setAuthToken] = useState(
    `Bearer ${localStorage.getItem('authToken')}`,
  )
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  const [close, setClose] = useState(true)
  const [scopeOneData, setScopeOneData] = useState([])
  const [scopeTwoData, setScopeTwoData] = useState([])
  const [scopeTwoAsset, setscopeTwoAsset] = useState([])
  const [scopeThreeData, setScopeThreeData] = useState([])
  const [loading, setLoading] = useState(true)

  const axiosURL = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  })

  const getUser = async () => {
    setLoading(true)
    if (authToken.includes('null')) {
      return
    }
    let temp = await axiosURL.get('/api/users/me')
    temp = temp.data
    if (temp) {
      setUser({ ...temp })
      setIsAuth(true)
      return true
    }
    setLoading(false)
    setIsAuth(false)
    localStorage.removeItem('authToken')
    return false
  }

  const getScopeOneData = async () => {
    setScopeOneData(ScopeOneStaticData)
  }

  const getScopeTwoData = async () => {
    let asset = await axiosURL.get(`/api/asset/${71}`)
    asset = asset.data
    setscopeTwoAsset(asset)
    const temp = []
    for (let i = 0; i < asset.length; i++) {
      const res = await axiosURL.post(
        `/api/getEmission?name=${asset[i].asset_name}&type=${'emission'}`,
      )
      temp.push(res.data)
    }
    setScopeTwoData(temp)
  }

  const getScopeThreeData = async () => {
    setScopeThreeData([])
  }

  const getAllScopeData = async () => {
    try {
      setLoading(true)
      await getUser()
      await getScopeOneData()
      await getScopeTwoData()
      await getScopeThreeData()
      setLoading(false)
    } catch (error) {
      navigate('/error')
    }
  }

  const getToken = async (username, password) => {
    try {
      let token = await axios({
        method: 'POST',
        headers: {},
        url: process.env.REACT_APP_API_URL + '/api/token',
        data: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
      })
      token = token.data
      if (!token.access_token) {
        return false
      }
      localStorage.setItem('authToken', token.access_token)
      setAuthToken(`Bearer ${token.access_token}`)
      return true
    } catch (error) {
      setIsAuth(false)
      return false
    }
  }
  const dataFecthing = {
    getToken,
    getUser,
    isAuth,
    user,
    getScopeOneData,
    getScopeTwoData,
    getScopeThreeData,
    getAllScopeData,
    setLoading,
    setClose,
    scopeOneData,
    scopeTwoAsset,
    scopeTwoData,
    scopeThreeData,
    loading,
    close,
    authToken,
  }

  return (
    <Context.Provider value={dataFecthing}>{props.children}</Context.Provider>
  )
}
export { Context }
