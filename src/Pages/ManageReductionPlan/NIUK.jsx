import { Grid } from "@material-ui/core";
import React from "react";
import { CardChart } from "../../Components";
import Data from "../Measure/Assets/NiukData.json";
import style from "./index.module.css";

export default function NIUK() {
  // const temp = Data.map((item) => item["CO2 Emission"]);
  let temp = [];
  temp = Data.map((item) => item.Data.map((i) => i["CO2 Emission"]));
  temp = temp.flat();
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
              item.Data.map((d) => d["Transaction Date/Time"])
            ).flat()}
            y_item={temp}
            type="line"
            label="Carbon Emission"
          />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            x_items={Data.map((item) =>
              item.Data.map((d) => d["Transaction Date/Time"])
            ).flat()}
            y_item={temp}
            type="bar"
            label="Carbon Emission"
          />
        </Grid>
      </Grid>
    </div>
  );
}
