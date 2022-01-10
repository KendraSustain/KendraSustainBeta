import { useEffect, useContext, useState } from "react";
// import { useHistory } from "react-router";
import styles from './Realtime.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Context } from "../../../context/Contexts";
import axios from 'axios';
import Cookies from 'js-cookie';
// import Line from '../../ManageReductionPlan/CarbonFootprintCalculator/LineGraph';
import LineCharts from "../../../components/Graphs/LineCharts";
import AreaCharts from "../../../components/Graphs/AreaCharts";
import BarCharts from "../../../components/Graphs/BarCharts";
import Spinner from '../../../components/Spinner/Spinner'
import BlogCard from "../../../components/Dash/KendraBlogCard/BlogCard";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import jwt_decode from "jwt-decode";

const RealTime = (props) => {

    const context = useContext(Context);
    const [localDate, setLocalDate] = useState();
    const [intensity, setIntensity] = useState();



    // const history = useHistory();
    useEffect(() => {
        async function getData() {
            let Date = []
            let Intensity = []
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
        context.setShowNavTop(true);



        context.setShowNavTop(true);


    }, []);




    return (
        <div {...props} className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={8} >

                        <LineCharts labels={localDate} data={intensity} title="Carbon Intensity for UK *gCO2/Kwh" label="Carbon Intensity" time="Time" />
                        {/* <button style={{ marginLeft: "380px", backgroundColor: "#004599", border: "none", color: "white", width: "100px", height: "50px", fontSize: "1.1rem" }} onClick={() => getCarbonData()}>Show Data</button> */}
                    </Grid>
                    <Grid item xs={4} >

                        <BlogCard />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={6} >

                        <BarCharts labels={localDate} data={intensity} title="Carbon Intensity for UK *gCO2/Kwh" label="Carbon Intensity" time="Time" />

                    </Grid>
                    <Grid item xs={6} >

                        <AreaCharts labels={localDate} data={intensity} title="Carbon Intensity for UK *gCO2/Kwh" label="Carbon Intensity" time="Time" />
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}

export default RealTime;