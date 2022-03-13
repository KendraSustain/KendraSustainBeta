import React from "react";
import ReactECharts from "echarts-for-react";
import style from "./Chart.module.css";
export default function Gauge({ label, min, max, value, name, option, unit }) {
  const options = {
    series: [
      {
        min: min ? min : 0,
        max: max ? max : 0,
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, "#67e0e3"],
              [0.7, "#37a2da"],
              [1, "#fd666d"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -44,
          lineStyle: {
            color: "#fff",
            width: 40,
          },
        },
        axisLabel: {
          color: "auto",
          fontSize: 16,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          color: "auto",
          offsetCenter: [0, "70%"],
          
        },
        data: [
          {
            value: value,
            name: unit,
          },
        ],
      },
    ],
    ...option,
  };

  return (
    <>
      <h1 style={{ fontSize: "20px", textAlign: "center" }}>{label}</h1>
      <ReactECharts
        style={{
          margin: "auto",
        }}
        className={style.gause}
        option={options}
      />
      ;
    </>
  );
}
