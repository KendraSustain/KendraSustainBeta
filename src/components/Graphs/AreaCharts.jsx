import styles from "./Chart.module.css";
import { Line } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';



const AreaCharts = (props) => {
    const theme = useTheme();
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
                maxBarThickness: 10,
            },
        ],
        labels: props.labels
    };
    // console.log(data);
    const options = {
        animation: false,
        cornerRadius: 10,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        fill: true,
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
    return (
        <Card {...props} className={styles.chart} style={{ borderRadius: "15px", width: "615px" }}>
            <CardHeader
                // action={(
                //   <Button
                //     endIcon={<ArrowDropDownIcon fontSize="small" />}
                //     size="small">
                //     Last 7 days
                //   </Button>
                // )}
                title={props.title}
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

export default AreaCharts;