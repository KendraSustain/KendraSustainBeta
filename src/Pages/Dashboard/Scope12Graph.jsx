import React from "react";
import { CardChart } from "../../Components";
import Data from "../Measure/Assets/NiukData.json";
export default function Scope12Graph() {
  return (
    <>
      <CardChart
        showYear={true}
        label="Carbon Emission for Scope 1 : DK13WPW"
        x_items={Data[1].Data.map((item) => item["Transaction Date/Time"])}
        y_item={Data[1].Data.map((item) => item["CO2 Emission"])}
        type="line"
      />
    </>
  );
}
