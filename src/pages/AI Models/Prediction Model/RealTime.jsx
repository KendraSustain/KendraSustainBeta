import { useEffect, useContext, useState } from "react";
// import { useHistory } from "react-router";
import styles from './Realtime.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Context } from "../../../context/Contexts";
import axios from 'axios';
import Cookies from 'js-cookie';
import LineGraph from '../../ManageReductionPlan/CarbonFootprintCalculator/LineGraph';
import Spinner from '../../../components/Spinner/Spinner'
// import jwt_decode from "jwt-decode";

const RealTime = (props) => {

    const context = useContext(Context);

    const [localDate, setLocalDate] = useState();
    const [intensity, setIntensity] = useState();
    const [line, setLine] = useState()
    const [spinner, setSpinner] = useState(false);

    // const history = useHistory();
    useEffect(() => {
        // let Date = []
        // let Intensity = []
        // async function getRealData() {
        //     console.log('Hello');
        //     setSpinner(true);
        //     // event.preventDefault();
        //     const getData = axios.create({
        //         baseURL: process.env.REACT_APP_API_URL,
        //         headers: {
        //             Accept: 'application/json',
        //             'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
        //         },
        //     });
        //     try {
        //         const { data } = await getData.get(`/api/v0.0.1/carbon_intensity`)
        //         console.log(data);
        //         console.log('print3');
        //         for (let i = 0; i <= data.length; i++) {

        //             Date.push(data[i].To)
        //             Intensity.push(data[i].Intensity)
        //             setLocalDate(Date)
        //             setIntensity(Intensity)
        //         }


        //     } catch (error) {
        //         console.log(error);
        //         console.log("Unable to get data");
        //     }
        //     setSpinner(false);
        //     console.log(localDate);
        // }




        if (context.showNavTop) {

            getCarbonData();

        }

        // const data1 = {
        //     datasets: [
        //         {
        //             backgroundColor: '#3F51B5',
        //             barPercentage: 0.5,
        //             barThickness: 12,
        //             borderRadius: 4,
        //             categoryPercentage: 0.5,
        //             data: intensity,
        //             label: 'Carbon Intensity',
        //             maxBarThickness: 10
        //         },
        //     ],
        //     labels: localDate
        // };


        // setLine(< LineGraph data={data1} />)
        // console.log(data1);
        context.setShowNavTop(true);


    }, [context]);

    const getCarbonData = async () => {


        setSpinner(true);
        const getData = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${Cookies.get("tok_sustain")}`,
            },
        });
        // try {
        let Date1 = []
        let Intensity = []
        await getData.get(`/api/v0.0.1/carbon_intensity`)
            .then(res => {
                console.log(res.data[0].To.slice(0, 10));
                for (const data of res.data) {

                    Date1.push(data.To.slice(11, 16))
                    Intensity.push(data.Intensity)
                    setLocalDate(Date1)
                    setIntensity(Intensity)

                }
                const data1 = {
                    datasets: [
                        {
                            backgroundColor: '#3F51B5',
                            barPercentage: 0.5,
                            barThickness: 12,
                            borderRadius: 4,
                            categoryPercentage: 0.5,
                            data: intensity,
                            label: 'Carbon Intensity for Swansea',
                            maxBarThickness: 10
                        },
                    ],
                    labels: localDate
                };
                setLine(< LineGraph data={data1} date={res.data[0].To.slice(0, 10)} />)
                // console.log(data1);

            })

        setSpinner(false);
    }






    // alert(data1);
    // console.log(Date);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {/* <Grid item xs={12} style={{ textAlign: "center", height: "50px", color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        Carbon Footprint Calculator
                    </Grid> */}
                    <Grid item xs={8} style={{ marginLeft: "200px" }}>

                        {spinner ? <Spinner /> : line}
                        <button style={{ marginLeft: "380px", backgroundColor: "#004599", border: "none", color: "white", width: "100px", height: "50px", fontSize: "1.1rem" }} onClick={() => getCarbonData()}>Show Data</button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default RealTime;
