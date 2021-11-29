// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const Chart = ({ title, data, XdataKey, YdataKey, grid, ratio }) => {

//   return (
//     <div className={styles.chart}>
//       <h3 className={styles.chartTitle}>{title}</h3>
//       <ResponsiveContainer width="100%" aspect={ratio}>
//         <LineChart data={data}>
//           <XAxis dataKey={XdataKey} stroke="#5550bd" />
//           <YAxis dataKey="Demand" stroke="#5550bd" domain={[38000, 40000]} />
//           <Line type="monotone" dataKey={YdataKey} stroke="#5550bd" />
//           <Tooltip />
//           {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Chart;

import { Line } from 'react-chartjs-2';
import styles from "./Chart.module.css";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const LineChart = (props) => {
  const theme = useTheme();
  console.log(props.data)

  const data = {
    datasets: props.data.datasets.map((item, pos) => (

      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: item.data,
        label: item.label,
        maxBarThickness: 10
      }
    )),

    // datasets: [
    //   {
    //     backgroundColor: '#3F51B5',
    //     barPercentage: 0.5,
    //     barThickness: 12,
    //     borderRadius: 4,
    //     categoryPercentage: 0.5,
    //     data: props.data,
    //     label: "Carbon Intensity",
    //     maxBarThickness: 10
    //   },
    // {
    //   backgroundColor: '#EEEEEE',
    //   barPercentage: 0.5,
    //   barThickness: 12,
    //   borderRadius: 4,
    //   categoryPercentage: 0.5,
    //   data: [434, 153, 565, 387, 654, 413, 765, 462, 204],
    //   maxBarThickness: 10
    // }
    // ],
    // labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
    labels: props.data.labels



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
        title={props.data.titles}
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
        Date
      </Box>
    </Card>
  );
};

export default LineChart;