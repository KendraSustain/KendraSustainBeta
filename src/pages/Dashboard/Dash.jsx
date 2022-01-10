import FeaturedInfo from "../../components/Dash/featuredInfo/FeaturedInfo";
import styles from "./Dash.module.css";
import React, { useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Context } from "../../context/Contexts";
import Buttons from "../../components/Dash/Buttons/Buttons";
import { Grid } from '@mui/material';
import KendraBlogCard from "../../components/Dash/KendraBlogCard/KendraBlogCard";
import Weather from "../../components/Dash/Weather/Weather";
import { useHistory } from "react-router-dom";
import BarCharts from "../../components/Graphs/BarCharts";
import LineCharts from "../../components/Graphs/LineCharts";
import axios from 'axios';
import Cookies from 'js-cookie';


function Dash(props) {
  const context = useContext(Context);
  // const [data2, setData] = React.useState([])
  const [localDate, setLocalDate] = React.useState([]);
  const [intensity, setIntensity] = React.useState([]);
  const [prediction, setPrediction] = React.useState([]);
  const [emissionpredict, setEmissionPredict] = React.useState([]);
  const [date, setDate] = React.useState([]);
  // const [assetDetail, setAssetDetail] = React.useState([]);
  // const location = useLocation()

  useEffect(() => {
    async function getData() {
      let Date = []
      let Intensity = []
      // let date = []
      // let prediction = []
      const apiGetData = axios.create({
        baseURL: "http://127.0.0.1:8000",
        headers: {
          Accept: 'application/json',
          'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
        },
      });
      await apiGetData.get(`/api/v0.0.1/carbon_intensity`)
        .then(res => {
          res.data.forEach(element => {
            Date.push(element.To.slice(11, 16))
            Intensity.push(element.Intensity)
          });

          setLocalDate(Date)
          setIntensity(Intensity)


        })
      let data = [{
        "assetName": "MPAN-2300000709911",
        "type": "prediction"
      },
      {
        "assetName": "MPAN- 2366560081212",
        "type": "prediction",
      }]

      // console.log(data);
      data.map(async (data) =>
        await apiGetData.post(`/api/getPrediction?name=${data.assetName}&type=${data.type}`)
          .then(res => {
            console.log(res.data);
            let varDate = []
            let varPredict = []
            let emissionPredict = []
            res.data.forEach(element => {
              varDate.push(element.Date.slice(0, 10))
              varPredict.push(element['Energy Prediction'])
              emissionPredict.push(element['Carbon Emission Prediction'])
            });

            // setDate(varDate)
            // console.log(varDate);
            setDate(d => [...d, varDate])
            setPrediction(p => [...p, varPredict])
            setEmissionPredict(e => [...e, emissionPredict])


          })
      );
      // await apiGetData.post(`/api/getPrediction?name=${data.assetName}&type=${data.type}`)
      //   .then(res => {
      //     console.log(res.data);


      //   })


    }

    getData()
    // console.log(location.state.detail);
    context.setShowNavTop(true);

  }, []);

  return (
    <div {...props} className={[styles.home, context.close ? styles.close : ""].join(" ")}>
      {/* <Buttons /> */}
      <FeaturedInfo />
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <KendraBlogCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <Weather />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* {console.log(intensity)} */}
            {/* {console.log(localDate)} */}
            <BarCharts labels={localDate} data={intensity} title="Carbon Intensity for UK" label="Carbon Intensity" time="Time" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* {console.log(intensity)} */}
            {/* {console.log(localDate)} */}
            <LineCharts labels={localDate} data={intensity} title="Carbon Intensity for UK" label="Carbon Intensity" time="Time" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* {console.log(date)}
            {console.log(prediction)} */}
            {date.map((item, pos) =>
              <LineCharts labels={date[pos]} data={prediction[pos]} title="Energy Prediction for Premier Modular" label="Energy Prediction" time="Date" />

            )
            }
          </Grid>
          <Grid item xs={12} md={6}>
            {/* {console.log(date)}
            {console.log(prediction)} */}
            {date.map((item, pos) =>
              <LineCharts labels={date[pos]} data={emissionpredict[pos]} title="Carbon Emission Prediction for Premier Modular" label="Carbon Emission Prediction" time="Date" />

            )
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dash;