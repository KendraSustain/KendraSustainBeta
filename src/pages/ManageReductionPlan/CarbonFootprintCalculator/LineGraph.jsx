import { Line } from 'react-chartjs-2';
import styles from "./Line.module.css";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const LineGraph = (props) => {
    const theme = useTheme();

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

    return (
        <Card {...props} className={styles.chart} style={{ borderRadius: "15px" }}>
            <CardHeader
                // action={(
                //   <Button
                //     endIcon={<ArrowDropDownIcon fontSize="small" />}
                //     size="small">
                //     Last 7 days
                //   </Button>
                // )}
                title="Total Energy Consumption(All Assets)"
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
                Months
            </Box>
        </Card>
    );
};

export default LineGraph;