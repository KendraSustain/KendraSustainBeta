import { Grid } from "@material-ui/core";
import React from "react";
import { CardChart } from "../../../Components";
import Data from "../Assets/NIUK_data.json";
export default function NIUK() {
  const cardDetails = [
    "Litres",
    "Odometer",
    "Distance Traveled",
    "Net",
    "VAT",
    "Expense",
    "Price / Litre",
    "CO2 Emission",
  ];
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6} >
          <CardChart
            x_items={Data.map((item) => item["Vehicle Reg"])}
            y_item={Data.map(
              (item) => item["Distance Traveled"] / item["Litres"]
            )}
            type="bar"
            label={"Mileage"}
          />
        </Grid>
        {cardDetails.map((data, pos) => (
          <Grid item xs={6} key={pos}>
            <CardChart
              x_items={Data.map((item) => item["Vehicle Reg"])}
              y_item={Data.map((item) => item[data])}
              type="bar"
              label={data}
            />
          </Grid>
        ))}
         <Grid item xs={6} >
          <CardChart
            x_items={Data.map((item) => item["Vehicle Reg"])}
            y_item={Data.map(
              (item) => item["Distance Traveled"] / item["Litres"]
            )}
            type="line"
            label={"Mileage"}
          />
        </Grid>
        {cardDetails.map((data, pos) => (
          <Grid item xs={6} key={pos}>
            <CardChart
              x_items={Data.map((item) => item["Vehicle Reg"])}
              y_item={Data.map((item) => item[data])}
              type="line"
              label={data}
            />
          </Grid>
        ))}
      </Grid>
     
    </div>
  );
}
