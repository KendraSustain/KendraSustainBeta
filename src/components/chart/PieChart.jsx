import { Pie } from 'react-chartjs-2';
import styles from "./Chart.module.css";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const PieChart = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(213, 45, 183)',
          'rgb(255, 107, 69)'

        ],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [434, 153, 565, 387, 654, 413, 765, 462, 204],
        label: '2019',
        maxBarThickness: 10
      },
      {
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(213, 45, 183)',
          'rgb(255, 107, 69)'

        ],
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [755, 262, 672, 373, 820, 567, 270, 653, 432],
        label: '2021',
        maxBarThickness: 10
      }
    ],
    labels: ['Student Union', 'The Core', 'Engineering Central', 'Engineering East', 'ESRI Building', 'Great Hall', 'Institute of Structure Materials', 'Campus Library', 'Campus School of Management']
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
        title="Asset Distribution"
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
        Assets
      </Box>
    </Card>
  );
};

export default PieChart;