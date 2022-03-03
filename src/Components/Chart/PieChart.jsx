import React from "react";
import ReactECharts from "echarts-for-react";

export default function PieChart({ type = "pie", data, subtype = "pie" }) {
  const options = {
    series: [
      {
        name: "Hello",
        data: data,
        type: type,
        smooth: true,
        radius: subtype === "doughnut" ? ["50%", "70%"] : ["0%","90%"],
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    labelLine: {
      show: false,
    },

    avoidLabelOverlap: false,
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
