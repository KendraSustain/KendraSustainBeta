import React from "react";
import ReactECharts from "echarts-for-react";
import style from "./Chart.module.css";
export default function Gauge({
  label,
  min,
  max,
  value,
  name,
  option,
  unit,
  buttom,
  des,
}) {
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
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -55,
          lineStyle: {
            color: "#fff",
            // width: ,
          },
        },
        axisLabel: {
          color: "auto",
          fontSize: 12,
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
  const [show, setShow] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        // background: "red",
      }}
    >
      <h1
        style={{
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        {label}
        <br />
        <span
          style={{
            fontSize: "15px",
            opacity: show ? "100%" : "0",
            transition: "opacity 200ms ease-in-out",
          }}
        ></span>
      </h1>
      <ReactECharts
        style={{
          margin: "auto",
        }}
        className={style.gause}
        option={options}
      />
      <h1 style={{ fontSize: "16px", textAlign: "center" }}>{buttom}</h1>
      <p
        // style={{
        //   textAlign: "center",
        // }}
        className={style.mmm}
      >
        {des}
      </p>
    </div>
  );
}
