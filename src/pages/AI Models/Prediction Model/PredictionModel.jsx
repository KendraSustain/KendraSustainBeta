import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/Contexts";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AreaChart from "../../../components/chart/AreaChart";
import { Data3, Data4, Data5, Data6 } from "../../../dummyData";
import styles from './PredictionModel.module.css';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import BasicTable2 from "./Table2";
import axios from 'axios';
import LineCharts from "../../../components/Graphs/LineCharts";
import BarCharts from "../../../components/Graphs/BarCharts";
// import { useTheme } from '@mui/material';


const PredictionModel = () => {
    // const theme = useTheme();
    const context = useContext(Context);
    const [area, setArea] = useState(<AreaChart data={Data3} />)
    const [area2, setArea2] = useState(<AreaChart data={Data4} />)
    const [prediction, setPrediction] = React.useState([]);
    const [emissionpredict, setEmissionPredict] = React.useState([]);
    const [date, setDate] = React.useState([]);
    const [assetname, setAssetName] = React.useState([]);
    // const [area3, setArea3] = useState(<AreaChart data={Data5} />)
    // const [area4, setArea4] = useState(<AreaChart data={Data6} />)
    useEffect(() => {
        async function getData() {

            const apiGetData = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
                headers: {
                    Accept: 'application/json',
                    'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
                },
            });

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
                        setAssetName(p => [...p, data.assetName])


                    })
            );
            // await apiGetData.post(`/api/getPrediction?name=${data.assetName}&type=${data.type}`)
            //   .then(res => {
            //     console.log(res.data);


            //   })


        }



        let decoded = jwt_decode(Cookies.get("tok_sustain"));

        if (decoded.id !== 63 && decoded.id !== 62) {
            setArea()
            setArea2()
            getData()
            // setArea3()
            // setArea4()

        }

        context.setShowNavTop(true);
    }, []);
    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        AI Prediction Models
                    </Grid>
                    <Grid item xs={6}>
                        {area}
                    </Grid>
                    <Grid item xs={6}>
                        {area2}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* {console.log(date)}
            {console.log(prediction)} */}

                        {date.map((item, pos) =>
                            <LineCharts labels={date[pos]} data={prediction[pos]} title="Energy Prediction for Premier Modular *1000 Kwh" label="Energy Prediction" time="Date" assetName={assetname[pos]} />

                        )
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* {console.log(date)}
            {console.log(prediction)} */}
                        {date.map((item, pos) =>
                            <LineCharts labels={date[pos]} data={emissionpredict[pos]} title="Carbon Emission Prediction for *1000 kgCO2/kWh" label="Carbon Emission Prediction" time="Date" assetName={assetname[pos]} />

                        )
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {date.map((item, pos) =>
                            <BarCharts labels={date[pos]} data={prediction[pos]} title="Energy Prediction for Premier Modular *1000 Kwh" label="Energy Prediction" time="Date" assetName={assetname[pos]} />
                        )
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {date.map((item, pos) =>
                            <BarCharts labels={date[pos]} data={emissionpredict[pos]} title="Carbon Emission Prediction *1000 kgCO2/kWh" label="Carbon Emission Prediction" time="Date" assetName={assetname[pos]} />
                        )
                        }
                    </Grid>

                    {/* <Grid item xs={12}>
                        <BasicTable2 />
                    </Grid> */}


                </Grid>
            </Box>
        </div>
    )
}

export default PredictionModel




