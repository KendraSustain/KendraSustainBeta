import React from "react";
import ReactECharts from "echarts-for-react";
// import { PieChart } from "../../Components";
export default function DoghnutCom() {
    const data = [
        {
            name: 'Scope 1',
            value: 13841
        },
        {
            name: 'Scope 2',
            value: 37063
        },
        {
            name: 'Scope 3',
            value: 0
        },

    ];
    const data1 = [
        {
            name: 'DC17PXA',
            value: 2812
        },
        {
            name: 'DK13WPW',
            value: 10387
        },
        {
            name: 'Others',
            value: 642
        },

    ];
    const data2 = [
        {
            name: 'Electrical Emissions',
            value: 25806
        },
        {
            name: 'Gas Emissions',
            value: 11257
        },


    ];
    const option = {
        title: [
            {
                text: 'Distribution by Scopes - Carbon Emissions - 2020-21',
                left: 'center'
            },
            {
                subtext: 'Total Emissions Scope Wise',
                left: '16.67%',
                top: '85%',
                textAlign: 'center'
            },
            {
                subtext: 'Scope 1 Distribution',
                left: '50%',
                top: '85%',
                textAlign: 'center'
            },
            {
                subtext: 'Scope 2 Distribution',
                left: '83.33%',
                top: '85%',
                textAlign: 'center'
            }
        ],
        tooltip: {
            trigger: 'item',
            fontSize: '20',
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
            }
        },
        series: [
            {
                type: 'pie',
                radius: ['25%', '50%'],
                center: ['50%', '50%'],
                data: data,
                label: {
                    position: 'outer',
                    alignTo: 'none',
                    bleedMargin: 5
                },
                left: 0,
                right: '66.6667%',
                top: 0,
                bottom: 0
            },
            {
                type: 'pie',
                radius: ['25%', '50%'],
                center: ['50%', '50%'],
                data: data1,
                label: {
                    position: 'outer',
                    alignTo: 'labelLine',
                    bleedMargin: 5
                },
                left: '33.3333%',
                right: '33.3333%',
                top: 0,
                bottom: 0
            },
            {
                type: 'pie',
                radius: ['25%', '50%'],
                center: ['50%', '50%'],
                data: data2,
                label: {
                    position: 'outer',
                    alignTo: 'edge',
                    margin: 20
                },
                left: '60.6667%',
                right: 0,
                top: 0,
                bottom: 0
            }
        ]
    };

    return (
        <> <div>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />

        </div>

            {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>Scope 1</div>
                <div>Scope 2</div>
                <div>Scope 3</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>2,904 kgCO2e</div>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>37,063 kgCO2e</div>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>0 kgCO2e</div>
            </div> */}

        </>

    )

}