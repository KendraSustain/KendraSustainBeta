import React, { useState, useContext, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './CarbonFootprint.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import { Context } from '../../../context/Contexts';
// import LineChart from '../../../components/chart/LineChart';
import LineGraph from '../CarbonFootprintCalculator/LineGraph';
// import LineGraph2 from '../CarbonFootprintCalculator/LineGraph2';
import LineChart from '../../../components/chart/LineChart';
import BasicTable from './Table';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import { Data, Months } from '../../../dummyData';
import AreaChart from '../../../components/chart/AreaChart';
import { Data5, Data6, Data7, Data8, Data9, Data10, Data11 } from '../../../dummyData';
import axios from 'axios';
import LineCharts from '../../../components/Graphs/LineCharts';
import BarCharts from '../../../components/Graphs/BarCharts';
import Spinner from '../../../components/Spinner/Spinner';
import AssetCard from '../../../components/Dash/KendraBlogCard/AssetCard';

// import BarChart from '../../../components/chart/BarChart';

const CarbonFootprintCalculator = () => {
    const theme = useTheme();
    // -----------------------------------   Dataset -------------------------------
    const data = {
        datasets: [
            {
                backgroundColor: '#3F51B5',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [822, 820, 775, 587, 550, 562, 595, 571, 520, 623, 664, 662],
                label: '2020',
                maxBarThickness: 10
            },
            {
                backgroundColor: 'black',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [640, 571, 630, 583, 615, 609, 666, 642, 629, 704, 283],
                label: '2021',
                maxBarThickness: 10
            }
        ],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };

    const options = {
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        xAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: theme.palette.divider
                }
            }
        ],
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    // ----------------------------------------- Test dataset---------------------------------------

    const context = useContext(Context);
    // const [line, setLine] = useState(< LineGraph data={data} options={options} />)
    const [line2, setLine2] = useState(<LineChart data={Data} />)
    const [line5, setLine5] = useState(<AreaChart data={Data5} />)
    const [line6, setLine6] = useState(<AreaChart data={Data6} />)
    const [line7, setLine7] = useState(<AreaChart data={Data7} />)
    const [line8, setLine8] = useState(<AreaChart data={Data8} />)
    const [line9, setLine9] = useState(<AreaChart data={Data9} />)
    const [line10, setLine10] = useState(<AreaChart data={Data10} />)
    const [emission, setEmission] = React.useState([]);
    const [date, setDate] = React.useState([]);
    const [assetname, setAssetName] = React.useState([]);
    const [table, setTable] = useState(<BasicTable />)
    const [spinner, setSpinner] = useState(false);

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
            setSpinner(true);
            data.map(async (data) =>

                await apiGetData.post(`/api/getEmission?name=${data.assetName}&type=${data.type}`)
                    .then(res => {
                        console.log(res.data);
                        console.log(data);
                        let varDate = []
                        let emission = []
                        // let assetName = []
                        res.data.forEach(element => {
                            varDate.push(element.Date)
                            // varEnergy.push(element['Energy Consumption'])
                            emission.push(element['Carbon Emission'])
                        });


                        setDate(d => [...d, varDate])
                        setEmission(e => [...e, emission])
                        setAssetName(p => [...p, data.assetName])


                    })
            );


        }
        let decoded = jwt_decode(Cookies.get("tok_sustain"));
        if (decoded.id !== 63 && decoded.id !== 62) {
            // setLine()
            setLine2()
            setLine5()
            setLine6()
            setLine7()
            setLine8()
            setLine9()
            setLine10()
            setTable()
            getData()
        }
        context.setShowNavTop(true);
        setSpinner(false);
    }, []);

    const metadata = [
        {
            "name": "Maximum Carbon Emission(kgCO2/kWh)",
            // "data": Math.max(...consumption[0])
            "data": "19,081.22"

        },
        {
            "name": "Minimum Carbon Emission(kgCO2/kWh)",
            // "data": Math.min(...consumption[0])
            "data": "16,083.65"

        },
        {
            "name": "Total Carbon Emission(kgCO2/kWh)",
            "data": "18,057.76"
        },

    ]


    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {/* <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        Carbon Footprint Calculator
                    </Grid> */}
                    {/* <Grid item xs={6}>
                        {line}
                    </Grid> */}
                    {metadata.map((item, pos) =>
                        <Grid key={pos} item xs={4} >
                            <AssetCard typo1={item.name} typo2={item.data} />
                        </Grid>

                    )}

                    <Grid item xs={6}>
                        {line2}
                    </Grid>
                    <Grid item xs={6}>
                        {line5}
                    </Grid>
                    <Grid item xs={6}>
                        {line6}
                    </Grid>
                    <Grid item xs={6}>
                        {line7}
                    </Grid>
                    <Grid item xs={6}>
                        {line8}
                    </Grid>
                    <Grid item xs={6}>
                        {line9}
                    </Grid>
                    <Grid item xs={6}>
                        {line10}
                    </Grid>
                    <Grid item xs={12}>
                        {table}
                    </Grid>
                    <Grid item xs={12} md={12}>
                        {/* {console.log(date)}
            {console.log(prediction)} */}
                        {/* {console.log(assetname)} */}
                        {date.map((item, pos) => spinner ? <Spinner /> : <LineCharts labels={date[pos]} data={emission[pos]} title="Carbon Emission for Premier Modular  *1000 kgCO2/kWh" label="Carbon Emission" time="Date" assetName={assetname[pos]} />


                        )
                        }
                    </Grid>
                    {/* <Grid item xs={12} md={6}> */}
                    {/* {console.log(date)}
            {console.log(prediction)} */}
                    {date.map((item, pos) =>
                        <Grid item xs={12} md={6}>
                            <BarCharts labels={date[pos]} data={emission[pos]} title="Carbon Emission for Premier Modular  *1000 kgCO2/kWh" label="Carbon Emission" time="Date" assetName={assetname[pos]} />
                        </Grid>

                    )
                    }

                </Grid>
            </Box>
        </div>
    )
}

export default CarbonFootprintCalculator
