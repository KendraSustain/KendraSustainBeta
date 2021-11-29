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
    const [line, setLine] = useState(< LineGraph data={data} options={options} />)
    const [line2, setLine2] = useState(<LineChart data={Data} />)
    const [table, setTable] = useState(<BasicTable />)

    useEffect(() => {
        let decoded = jwt_decode(Cookies.get("tok_sustain"));
        if (decoded.id !== 63) {
            setLine()
            setLine2()
            setTable()
        }
        context.setShowNavTop(true);
    }, [context]);

    return (
        <div className={[styles.monitor, context.close ? styles.close : ""].join(" ")}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        {line2}
                    </Grid>

                    <Grid item xs={6}>
                        {line}
                    </Grid>
                    <Grid item xs={12}>
                        {table}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default CarbonFootprintCalculator