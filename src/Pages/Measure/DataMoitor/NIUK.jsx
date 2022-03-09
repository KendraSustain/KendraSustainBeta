import { Grid } from "@material-ui/core";
import React from "react";
import { CardChart, MTable } from "../../../Components";
import Data from "../Assets/NiukData.json";
export default function NIUK() {
  const cardDetails = [
    "Litres",
    "Odometer",
    "Distance Traveled",
    "Net",
    "VAT",
    "Gross",
    "Price/Litre",
    "CO2 Emission",
  ];
  const columns = [
    {
      field: "sn",
      title: "S No.",
    },
    {
      field: "Vehicle Reg",
      title: "Vehicle Reg",
    },
    {
      field: "Litres",
      title: "Litres",
    },
    {
      field: "Odometer",
      title: "Odometer",
    },
    {
      field: "Distance Traveled",
      title: "Distance Traveled",
    },
    {
      field: "Net",
      title: "Net",
    },
    {
      field: "VAT",
      title: "VAT",
    },
    {
      field: "Gross",
      title: "Gross",
    },
    {
      field: "Price/Litre",
      title: "Price/Litre",
    },
    {
      field: "CO2 Emission",
      title: "CO2 Emission",
    },
  ];
  return (
    <div>
      <Grid container spacing={1}>
        <>
          <Grid item xs={12}>
            <MTable
            title="Scope 1"
              columns={columns}
              tableData={Data.map((d, p) => {
                return {
                  sn: p + 1,
                  "Vehicle Reg": d["Vehicle Reg"],
                  ...d.Data[0],
                };
              })}
            />
          </Grid>
          {cardDetails.map((data, pos) => (
            <Grid item xs={6} key={pos}>
              <CardChart
                x_items={Data.map((item) => item["Vehicle Reg"])}
                y_item={Data.map(
                  (v) =>
                    v.Data.map((item) => item[data]).reduce(
                      (a, b) => a + b,
                      0
                    ) / v.Data.length
                )}
                type="bar"
                label={data}
              />
            </Grid>
          ))}
          {cardDetails.map((data, pos) => (
            <Grid item xs={6} key={pos}>
              <CardChart
                x_items={Data.map((item) => item["Vehicle Reg"])}
                y_item={Data.map(
                  (v) =>
                    v.Data.map((item) => item[data]).reduce(
                      (a, b) => a + b,
                      0
                    ) / v.Data.length
                )}
                type="line"
                label={data}
              />
            </Grid>
          ))}

        </>
      </Grid>
    </div>
  );
}
