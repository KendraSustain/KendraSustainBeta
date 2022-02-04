import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styles from './Register.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import Cookies from 'js-cookie';
import KendraCard from '../../../components/Dash/KendraBlogCard/KendraCard';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import LineCharts from '../../../components/Graphs/LineCharts';
import AssetCard from '../../../components/Dash/KendraBlogCard/AssetCard';
import DyTable from '../../../components/Table/DyTable';
// import AreaCharts from '../../../components/Graphs/AreaCharts';
// import { useContext, useEffect } from "react";

import { Context } from '../../../context/Contexts';


export default function AssetDetail(props) {
    const context = useContext(Context);
    const location = useLocation();
    const [consumption, setConsumption] = React.useState([]);
    const [emission, setEmission] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [date, setDate] = React.useState([]);


    const columns = [
        { id: 'Date', label: 'Date', minWidth: 170 },
        { id: 'Energy Consumption', label: 'Energy Consumption (KwH)', minWidth: 100 },
        {
            id: 'Carbon Emission',
            label: 'Carbon Emission (kgCO2/kWh)',
            minWidth: 170,
            align: 'right',

        },

    ];
    // const typo2 = ['200Mw','300Mw','London']

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
                assetName: location.state.detail.asset_name,
                "type": "emission"
            }]

            // console.log(data);
            data.map(async (data) =>
                await apiGetData.post(`/api/getEmission?name=${data.assetName}&type=${data.type}`)
                    .then(res => {
                        console.log(res.data);
                        setRows(res.data);
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
                        setEmission(e => [...e, emission])



                    })
            );


        }
        getData();
        // console.log(location.state.detail)
        context.setShowNavTop(true);

    }, []);

    const metadata = [
        {
            "name": "Maximum Energy Consumption",
            // "data": Math.max(...consumption[0])
            "data": Math.round(863.2999877929688) + " KwH"

        },
        {
            "name": "Minimum Energy Consumption",
            // "data": Math.min(...consumption[0])
            "data": Math.round(71.69999694824219) + " KwH"

        },
        {
            "name": "Average Energy Consumption",
            // "data": 

        },
        {
            "name": "Maximum Carbon Emission",
            // "data": Math.max(...emission[0])
            "data": Math.round(220.65948486328125) + " kgCO2/kWh"

        },
        {
            "name": "Minimum Carbon Emission",
            // "data": Math.min(...emission[0])
            "data": Math.round(18.326519012451172) + " kgCO2/kWh"

        },
        {
            "name": "Average Carbon Emission",
            // "data": "B6D"

        },

    ]

    return (
        <div className={[styles.register2, context.close ? styles.close2 : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        {location.state.detail.asset_name}
                    </Grid>

                    {metadata.map((item, pos) =>
                        <Grid key={pos} item xs={4} >
                            <AssetCard typo1={item.name} typo2={item.data} />
                        </Grid>

                    )}
                    <Grid item xs={12} md={12}>
                        <DyTable columns={columns} rows={rows} />
                    </Grid>

                    {/* <Grid item xs={4} style={{ width: '100%', display: "flex", flexDirection: "row", height: "100px", justifyContent: "space-between", marginLeft: "30px" }}>
                        <AssetCard typo1='Building1' typo2='Building Data' />
                        <AssetCard />
                        <AssetCard />
                    </Grid> */}

                    {/* <Grid item xs={4} >
                        <KendraCard tile={'Lorem ipsum data....................'} script={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum'} />
                    </Grid> */}


                    {/* {console.log(date)}
            {console.log(prediction)} */}
                    {date.map((item, pos) =>
                        <Grid item xs={12} md={12}>
                            <LineCharts labels={date[pos]} data={consumption[pos]} title="Energy Consumption for Premier Modular (x1000 Kwh)" label="Energy Consumption" time="Date" assetName={location.state.detail.asset_name} />
                        </Grid>

                    )
                    }



                    {/* {console.log(Math.max(...emission[0]))} */}
                    {/* {console.log(emission[0])} */}
                    {date.map((item, pos) =>
                        <Grid item xs={12} md={12}>
                            <LineCharts labels={date[pos]} data={emission[pos]} title="Carbon Emission for Premier Modular (x1000 kgCO2/kWh)" label="Carbon Emission" time="Date" assetName={location.state.detail.asset_name} />

                        </Grid>
                    )
                    }
                    <Grid item xs={12} className={styles.mapContainer}>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1635857595447!5m2!1sen!2sin" allowFullScreen={true} loading="lazy"></iframe>
                    </Grid>

                </Grid>
            </Box>

        </div>
    );
}
