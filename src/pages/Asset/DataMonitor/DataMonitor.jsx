import React, { useState, useContext, useEffect } from "react";
import styles from './DataMonitor.module.css';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
import { Context } from '../../../context/Contexts';
import LineChart from '../../../components/chart/LineChart';
import BarChart from '../../../components/chart/BarChart';
import PieChart from '../../../components/chart/PieChart';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import { Data2 } from "../../../dummyData";
import axios from "axios";
import LineCharts from "../../../components/Graphs/LineCharts";
import BarCharts from "../../../components/Graphs/BarCharts";




const DataMonitor = () => {
    const context = useContext(Context);
    const [bar, setBar] = useState(<BarChart />)
    const [line, setLine] = useState(<LineChart data={Data2} />)
    const [pie, setPie] = useState(<PieChart />)
    const [consumption, setConsumption] = React.useState([]);
    // const [emission, setEmission] = React.useState([]);
    const [assetname, setAssetName] = React.useState([]);
    const [date, setDate] = React.useState([]);
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
                "type": "emission"
            },
            {
                "assetName": "MPAN- 2366560081212",
                "type": "emission",
            }]

            // console.log(data);
            data.map(async (data) =>
                await apiGetData.post(`/api/getEmission?name=${data.assetName}&type=${data.type}`)
                    .then(res => {
                        console.log(res.data);
                        let varDate = []
                        let varEnergy = []
                        let emission = []
                        res.data.forEach(element => {
                            varDate.push(element.Date)
                            varEnergy.push(element['Energy Consumption'])
                            emission.push(element['Carbon Emission'])
                        });


                        setDate(d => [...d, varDate])
                        setConsumption(p => [...p, varEnergy])
                        // setEmission(e => [...e, emission])
                        setAssetName(p => [...p, data.assetName])


                    })
            );


        }

        let decoded = jwt_decode(Cookies.get("tok_sustain"));
        console.log(decoded)
        if (decoded.id !== 63) {
            setBar()
            setLine()
            setPie()
            getData()
        }
        context.setShowNavTop(true);
    }, []);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
                Data Monitor
            </Grid>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        {bar}
                    </Grid>
                    {/* <Grid item xs={6}>
                        <DoughnutChart />
                    </Grid> */}
                    <Grid item xs={6}>
                        {line}
                    </Grid>
                    <Grid item xs={6}>
                        {pie}
                    </Grid>
                    <Grid item xs={12} md={12}>
                        {/* {console.log(date)}
            {console.log(prediction)} */}
                        {date.map((item, pos) =>
                            <LineCharts labels={date[pos]} data={consumption[pos]} title="Energy Consumption for Premier Modular (x1000 Kwh)" label="Energy Consumption" time="Date" assetName={assetname[pos]} />

                        )
                        }
                    </Grid>
                    {/* <Grid item xs={12} md={6}> */}
                    {/* {console.log(date)}
            {console.log(prediction)} */}
                    {date.map((item, pos) =>
                        <Grid item xs={12} md={6}>
                            <BarCharts labels={date[pos]} data={consumption[pos]} title="Energy Consumption for Premier Modular (x1000 Kwh)" label="Energy Consumption" time="Date" assetName={assetname[pos]} />
                        </Grid>

                    )
                    }
                    {/* </Grid> */}
                </Grid>
            </Box>
        </div>
    )
}

export default DataMonitor;
