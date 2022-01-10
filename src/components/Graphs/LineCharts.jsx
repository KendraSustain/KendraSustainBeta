import { Line } from 'react-chartjs-2';
import styles from "./Chart.module.css";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const LineCharts = (props) => {
    const theme = useTheme();
    // console.log(props.data)

    const data = {
        datasets: [
            {
                backgroundColor: '#3F51B5',
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: props.data,
                label: props.label,
                maxBarThickness: 10
            },

        ],
        labels: props.labels
    };
    // console.log(data);

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
                },


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


    return (

        <Card {...props} className={styles.chart} style={{ borderRadius: "15px" }}>
            <CardHeader

                title={props.title}
            // titleTypographyProps={{ variant: 'h6' }}

            />
            <CardHeader

                title={props.assetName}
            // titleTypographyProps={{ variant: 'h6' }}
            />

            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 250,
                        position: 'relative'
                    }}
                >
                    <Line
                        data={data}
                        options={options}
                    />

                </Box>
            </CardContent>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1
                }}>
                {props.time}
            </Box>
        </Card>
    );
};

export default LineCharts;