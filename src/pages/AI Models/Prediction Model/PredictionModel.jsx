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
// import { useTheme } from '@mui/material';


const PredictionModel = () => {
    // const theme = useTheme();
    const context = useContext(Context);
    const [area, setArea] = useState(<AreaChart data={Data3} />)
    const [area2, setArea2] = useState(<AreaChart data={Data4} />)
    const [area3, setArea3] = useState(<AreaChart data={Data5} />)
    const [area4, setArea4] = useState(<AreaChart data={Data6} />)
    useEffect(() => {
        let decoded = jwt_decode(Cookies.get("tok_sustain"));
        if (decoded.id !== 63) {
            setArea()
            setArea2()
            // setArea3()
            // setArea4()

        }
        context.setShowNavTop(true);
    }, [context]);
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
                    <Grid item xs={12}>
                        <BasicTable2 />
                    </Grid>
                    {/* <Grid item xs={6}>
                        {area3}
                    </Grid>
                    <Grid item xs={6}>
                        {area4}
                    </Grid> */}
                    {/* <Grid item xs={6}>
                        {area}
                    </Grid>
                    <Grid item xs={6}>
                        {area}
                    </Grid>
                    <Grid item xs={6}>
                        {area}
                    </Grid>
                    <Grid item xs={6}>
                        {area}
                    </Grid> */}

                </Grid>
            </Box>
        </div>
    )
}

export default PredictionModel




