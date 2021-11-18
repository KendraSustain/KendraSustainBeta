import React, { useContext, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './CarbonFootprint.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import { Context } from '../../../context/Contexts';
// import LineChart from '../../../components/chart/LineChart';
import LineGraph from '../CarbonFootprintCalculator/LineGraph';
import LineGraph2 from '../CarbonFootprintCalculator/LineGraph2';
import BasicTable from './Table';
// import BarChart from '../../../components/chart/BarChart';

const CarbonFootprintCalculator = () => {
    const theme = useTheme();
    const context = useContext(Context);


    useEffect(() => {
        context.setShowNavTop(true);
    }, [context]);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <LineGraph2 />
                    </Grid>

                    <Grid item xs={6}>
                        <LineGraph />
                    </Grid>
                    <Grid item xs={12}>
                        <BasicTable />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default CarbonFootprintCalculator
