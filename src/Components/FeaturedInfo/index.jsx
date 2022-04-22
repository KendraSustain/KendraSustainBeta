import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import axios from 'axios'

const FeaturedInfo = () => {
  const authToken = `Bearer ${localStorage.getItem('authToken')}`
  const [data2, setData] = useState([])
  const [price, setPrice] = useState([])
  const [date, setDate] = useState([])

  useEffect(() => {
    async function getData () {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken
        }
      })
      await apiGetData.get(`/api/v0.0.1/carbon_intensity`).then(res => {
        setData(res.data[res.data.length - 1].Intensity)
      })
      await apiGetData.get(`/api/price`).then(res => {
        setPrice(res.data[res.data.length - 1].price)
        setDate(res.data[res.data.length - 1].date)
      })
    }
    getData()
  }, [authToken])

  const data = [
    {
      title: 'Balancing Energy Price for UK Flex Market ',
      price: price,
      date: date,
      unit: '£'
    },
    {
      title: 'Average Energy Consumption for UK',
      price: '200',
      date: date,
      unit: 'kW/h'
    },
    {
      title: 'Current Carbon Intenstity for UK',
      price: data2,
      date: date,
      unit: 'gCO2/kWh'
    }
  ]

  return (
    <div className={styles.featured}>
      {data.map((item, pos) => (
        <div key={pos} className={styles.featuredItem}>
          <span className={styles.featuredTitle}>{item.title}</span>
          <div className={styles.featuredContainer}>
            <span className={styles.featuredAmount}>
              {item.price} {item.unit}
            </span>
            <span className={styles.featuredAmount2}>Date : {item.date}</span>
            <i className={[item.icon, styles.featuredIcon].join(' ')}></i>
          </div>
          {/* <span className={styles.featuredSub}>Compared to last month</span> */}
        </div>
      ))}
    </div>
  )
}

export default FeaturedInfo
