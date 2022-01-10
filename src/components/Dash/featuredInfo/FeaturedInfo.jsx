import React, { useEffect, useContext, useState } from "react";
import styles from "./FeaturedInfo.module.css";
import axios from 'axios';
import Cookies from 'js-cookie';



const FeaturedInfo = () => {

  const [data2, setData] = React.useState([])
  const [price, setPrice] = React.useState([])
  const [date, setDate] = React.useState([])

  useEffect(() => {
    async function getData() {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
        },
      });
      await apiGetData.get(`/api/v0.0.1/carbon_intensity`)
        .then(res => {
          // console.log(res.data[res.data.length - 1].Intensity);
          setData(res.data[res.data.length - 1].Intensity)


        })
      await apiGetData.get(`/api/price`)
        .then(res => {
          // console.log(Math.max(...res.data[0]));
          setPrice(res.data[res.data.length - 1].price);
          setDate(res.data[res.data.length - 1].date)


        })

    }
    getData()
  }, [])

  const data = [
    { title: "Balancing Energy Price for UK Flex Market ", price: price, date: date, unit: "£" },
    { title: "Average Energy Consumption for UK", price: "200", date: date, unit: "kW/h" },
    { title: "Current Carbon Intenstity for UK", price: data2, date: date, unit: "gCO2/kWh" },
  ];

  return (
    <div className={styles.featured}>
      {data.map((item, pos) => (
        <div key={pos} className={styles.featuredItem}>
          <span className={styles.featuredTitle}>{item.title}</span>
          <div className={styles.featuredContainer}>
            <span className={styles.featuredAmount}>{item.price} {item.unit}</span>
            <span className={styles.featuredAmount2}>Date : {item.date}</span>
            <i className={[item.icon, styles.featuredIcon].join(" ")}></i>
          </div>
          {/* <span className={styles.featuredSub}>Compared to last month</span> */}
        </div>
      ))}
    </div>

  );
}

export default FeaturedInfo;