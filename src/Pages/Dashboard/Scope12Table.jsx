import React from "react";
import { MTable } from "../../Components";
import Data from "../Measure/Assets/NiukData.json";
export default function Scope12Table() {
  const columns = [
    {
      field: "Transaction Date/Time",
      title: "Transaction Date/Time",
    },
    {
      field: "CO2 Emission",
      title: "CO2 Emission",
    },
  ];
  return (
    <>
      <MTable title="DK13WPW" columns={columns} tableData={Data[1].Data} />
    </>
  );
}
