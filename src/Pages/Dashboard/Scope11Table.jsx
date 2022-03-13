import React from "react";
import { MTable } from "../../Components";
import Data from "../Measure/Assets/NiukData.json";
export default function Scope11Table() {
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
      <MTable title="DC17PXA" columns={columns} tableData={Data[0].Data} />
    </>
  );
}
