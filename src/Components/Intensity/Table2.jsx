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
        title="Price"
        columns={columns}
        tableData={NIUK.price.G4.map((item, pos) => {
          return {
            ...item,
            G4: item.Price ,
            K0: NIUK.price.K0[pos].Price,
          };
        })}
      />
    </>
  );
}
