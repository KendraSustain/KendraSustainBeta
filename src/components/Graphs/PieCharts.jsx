import { Pie } from 'react-chartjs-2';
import styles from "./Chart.module.css";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const PieCharts = (props) => {
    const theme = useTheme();

    const data = {
        datasets: [
            {
                backgroundColor: [
                    'rgb(12, 0, 102)',
                    'rgb(16, 13, 41)',
                    // 'rgb(0, 0, 3)',
                    'rgb(72, 72, 217)',
                    'rgb(38, 38, 77)',
                    'rgb(88, 88, 176)'


                ],
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
                    fontColor: theme.palette.text.secondary,
                    callback: function (labels) {
                        var labels = labels / 2;
                        return labels;
                    }


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
        <Card {...props} className={styles.chart} style={{ borderRadius: "15px" }}>
            {/* {console.log(props.intensity)} */}
            <CardHeader
                // action={(
                //     <Button
                //         endIcon={<ArrowDropDownIcon fontSize="small" />}
                //         size="small">
                //         Last 2 Years
                //     </Button>
                // )}
                title={props.title}
            />
            <CardHeader

                title={props.assetName}
            />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 250,
                        position: 'relative'
                    }}
                >
                    <Pie
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

export default PieCharts;