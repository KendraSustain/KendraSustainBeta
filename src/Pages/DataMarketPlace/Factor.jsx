import React from "react";
import ReactECharts from "echarts-for-react";

const data = {
  name: " Emission Factor - 2019",
  children: [
    {
      name: "Scope 1",
      children: [
        {
          name: "Petrol",
          value: "0.0191",
        },
        {
          name: "Diesel",
          value: "0.00000276",
        },
        {
          name: "Kerosene",
          value: "19.6",
        },
      ],
    },
    {
      name: "Scope 2",
      children: [
        {
          name: "Electrical Energy",
          value: "0.0191",
        },
        {
          name: "Solar PV",
          value: "0.0191",
        },
        {
          name: "Heating Oil",
          value: "0.0191",
        },
      ],
    },
    {
      name: "Scope 3",
      children: [
        {
          name: "Steel",
          children: [
            {
              name: "Reinforcement bars",
              value: "0.684",
            },
            {
              name: "PT Strands",
              value: "2.45",
            },
            {
              name: "Structural sections",
              value: "1.13",
            },
            {
              name: "Galvanised Profile sheet for decking",
              value: "1.55",
            },
          ],
        },
        {
          name: "Timber",
          children: [
            {
              name: "Manufactured structural Timber",
              value: "0.437",
            },
            {
              name: "Studwork/framing/flooring",
              value: "0.263",
            },
            {
              name: "Formwork",
              value: "0.681",
            },
          ],
        },
        {
          name: "PlasterBoard",
          value: "0.39",
        },
        {
          name: "Waste",
          children: [
            {
              name: "Sewage Sludge Decomposition",
              value: "0.2650455842",
            },
            {
              name: "Incineration sewage sludge",
              value: "0.39",
            },
            {
              name: "Incineration - Clinical Waste",
              value: "0.025192",
            },
          ],
        },
      ],
    },
  ],
};

const options = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },

  series: [
    {
      type: "tree",
      name: "tree1",
      data: [data],
      top: "5%",
      left: "70%",
      bottom: "2%",
      right: "70%",
      symbolSize: 15,
      label: {
        position: "left",
        verticalAlign: "middle",
        align: "right",
      },
      leaves: {
        label: {
          position: "right",
          verticalAlign: "middle",
          align: "left",
        },
      },
      emphasis: {
        focus: "descendant",
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    },
  ],
};

export default function FactorTree() {
  // const [name, setName] = useState("");

  // TODO: remove flashing of Echarts component somehow when clicking on Node
  // TODO: performance optimization => only include needed comps
  return (
    <>
      <ReactECharts
        style={{ height: "100vh", width: "100%" }}
        option={options}
      />
    </>
  );
}
