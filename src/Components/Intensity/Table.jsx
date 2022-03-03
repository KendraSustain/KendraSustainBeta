import React from "react";
import MTable from "../Table/Material Table";
import NIUK from "../../Helper/NIUK.json";
export default function Table() {
  const columns = [
    {
      field: "To",
      title: "To",
    },
    {
      field: "From",
      title: "From",
    },
    {
      field: "G4",
      title: "G4",
    },
    {
      field: "K0",
      title: "K0",
    },
  ];
  return (
    <>
      <MTable
        title="Eletricity"
        columns={columns}
        tableData={NIUK.electricity.G4.map((item, pos) => {
          return {
            ...item,
            G4: item["Energy Consumption"],
            K0: NIUK.electricity.K0[pos]["Energy Consumption"],
          };
        })}
      />
    </>
  );
}
