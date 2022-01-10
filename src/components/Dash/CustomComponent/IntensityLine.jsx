import React, { useContext, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Grid } from '@mui/material';
// import BarCharts from "../../Graphs/BarCharts";
import LineCharts from "../../Graphs/LineCharts";


function IntensityLine(props) {

    // const [data2, setData] = React.useState([])
    const [localDate, setLocalDate] = React.useState([]);
    const [intensity, setIntensity] = React.useState([]);


    useEffect(() => {
        async function getData() {
            let Date = []
            let Intensity = []
            // let date = []
            // let prediction = []
            const apiGetData = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
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

        }

        getData()

    }, []);

    return (

        <div {...props} >

            <Grid container spacing={3}>
                <Grid item xs={6} md={12}>

                    <LineCharts labels={localDate} data={intensity} title="Carbon Intensity for UK (gC02/Kwh)" label="Carbon Intensity" time="Time" />
                </Grid>

            </Grid>

        </div>
    );
}

export default IntensityLine;