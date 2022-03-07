import { Grid } from "@material-ui/core";
import React from "react";
import { CardChart } from "../../Components";
import Data from "../Measure/Assets/NIUK_data.json";
import style from "./index.module.css";

export default function NIUK() {
  const temp = Data.map((item) => item["CO2 Emission"]);
  console.log(temp);
  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <span>Maximum Carbon Emission </span>
          <p> {Math.max(...temp)} </p>
        </div>
        <div className={style.card}>
          <span>Minimum Carbon Emission </span>
          <p> {Math.min(...temp)} </p>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardChart
            x_items={Data.map((item) =>
              item["Transaction Date Time"].slice(0, 10)
            )}
            y_item={Data.map((item) => item["CO2 Emission"])}
            type="line"
          />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            x_items={Data.map((item) =>
              item["Transaction Date Time"].slice(0, 10)
            )}
            y_item={Data.map((item) => item["CO2 Emission"])}
            type="bar"
          />
        </Grid>
      </Grid>
    </div>
  );
}
