import React from "react";
import { CardChart } from "../../Components";
import Data from "../Measure/Assets/NiukData.json";
export default function Scope11Graph() {
  return (
    <>
      <CardChart
        label="Carbon Emission for Scope 1 : DC17PXA"
        x_items={Data[0].Data.map((item) => item["Transaction Date/Time"])}
        y_item={Data[0].Data.map((item) => item["CO2 Emission"])}
        type="line"
      />
    </>
  );
}
