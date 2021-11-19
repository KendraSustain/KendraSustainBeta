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
import NewProduct from '../../newProduct/NewProduct';
// import DoughnutChart from '../../../components/chart/DoughnutChart';
// import { userData } from "../../../dummyData";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


const DataMonitor = () => {
    const context = useContext(Context);
    const [bar, setBar] = useState(<BarChart />)
    const [line, setLine] = useState(<LineChart />)
    const [pie, setPie] = useState(<PieChart />)
    useEffect(() => {
        let decoded = jwt_decode(Cookies.get("tok_sustain"));
        if (decoded.id !== 63) {
            setBar()
            setLine()
            setPie()
        }
        context.setShowNavTop(true);
    }, [context]);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
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
                </Grid>
            </Box>
        </div>
    )
}

export default DataMonitor;
