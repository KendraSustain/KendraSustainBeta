import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
export default function Compare() {

    const option = {
        title: {
            text: 'Emissions from Stearn Vehicles',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['DC17PXA', 'DK13WPW',],
            // orient: 'vertical',
            bottom: -5
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['19/10/2021', '20/10/2021', '26/10/2021', '02/11/2021', '03/11/2021', '09/11/2021']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'DC17PXA',
                type: 'line',
                stack: 'Total',
                data: [158, 129, 178, 171, 156, 178]
            },
            {
                name: 'DK13WPW',
                type: 'line',
                stack: 'Total',
                data: [149, 178, 204, 173, 131, 146]
            },

        ]
    };
    return (
        <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}

        // theme={'theme_name'}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
        />
    );



}