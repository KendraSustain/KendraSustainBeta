import React, { useContext, useEffect } from 'react';
import styles from './DataMonitor.module.css';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
import { Context } from '../../../context/Contexts';
import LineChart from '../../../components/chart/LineChart';
import BarChart from '../../../components/chart/BarChart';
import PieChart from '../../../components/chart/PieChart';
import DoughnutChart from '../../../components/chart/DoughnutChart';
// import { userData } from "../../../dummyData";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


const DataMonitor = () => {
    const context = useContext(Context);
    useEffect(() => {
        context.setShowNavTop(true);
    }, [context]);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <BarChart />
                    </Grid>
                    {/* <Grid item xs={6}>
                        <DoughnutChart />
                    </Grid> */}
                    <Grid item xs={6}>
                        <LineChart />
                    </Grid>
                    <Grid item xs={6}>
                        <PieChart />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default DataMonitor;
