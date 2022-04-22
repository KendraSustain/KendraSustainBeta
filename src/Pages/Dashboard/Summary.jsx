import React from "react";
import ReactECharts from "echarts-for-react";
// import { PieChart } from "../../Components";
export default function Summary() {
    const option = {
        title: {
            text: 'Scope Breakdown',
            // subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 13841, name: 'Scope 1' },
                    { value: 37063, name: 'Scope 2' },
                    { value: 2, name: 'Scope 3' },
                    // { value: 484, name: 'Union Ads' },
                    // { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div>Scope 1</div>
                <div>Scope 2</div>
                <div>Scope 3</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>14,102 kgCO2e</div>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>37,063 kgCO2e</div>
                <div style={{ fontSize: "25px", fontWeight: "bolder" }}>0 kgCO2e</div>
            </div>
        </>

    )

}