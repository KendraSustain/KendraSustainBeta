import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";

export default function BarChart({
  series,
  x_items,
  type,
  y_item,
  axis,
  label,
}) {
  useEffect(() => {}, [x_items, y_item]);
  const tool = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      bottom: 90,
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
  };
  const options =
    axis === "y"
      ? {
          ...tool,
          yAxis: {
            type: "category",
            data: x_items,
          },
          xAxis: {
            type: "value",
          },
          series: series
            ? series
            : [
                {
                  data: y_item,
                  type: type,
                  smooth: true,
                },
              ],
          tooltip: {
            trigger: "axis",
          },

          title: {
            text: label,
            left: 'center',
            top : '10px'
          },
        }
      : {
          ...tool,
          xAxis: {
            type: "category",
            axisLabel: { rotate: 30 },
            data: x_items,
          },
          yAxis: {
            type: "value",
          },
          series: series
            ? series
            : [
                {
                  data: y_item,
                  type: type,
                  smooth: true,
                },
              ],
          tooltip: {
            trigger: "axis",
          },
          title: {
            text: label,
            left: 'center',
            top : '10px'
          },
        };
  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}

      // theme={'theme_name'}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
    />
  );
}
