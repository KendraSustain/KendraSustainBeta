import { Grid } from "@material-ui/core";
import React from "react";
import Data from "../Measure/Assets/NiukData.json";
import { CardChart } from "../../Components";
import style from "./index.module.css";
import Scope2 from "./Scope2";
export default function NIUK_sum() {
  let temp = [];
  temp = Data.map((item) => item.Data.map((i) => i["CO2 Emission"]));
  temp = temp.flat();

  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <span>Maximum Carbon Emission For Scope 1 </span>
          <p> {Math.max(...temp)} </p>
        </div>
        <div className={style.card}>
          <span>Avrage Carbon Emission For Scope 1 </span>
          <p> {(Math.min(...temp) + Math.max(...temp)) / 2} </p>
        </div>
        <div className={style.card}>
          <span>Minimum Carbon Emission For Scope 1 </span>
          <p> {Math.min(...temp)} </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <span>Maximum Carbon Emission For Scope 2 </span>
          <p> {Math.max(...temp)} </p>
        </div>
        <div className={style.card}>
          <span>Avrage Carbon Emission For Scope 2 </span>
          <p> {(Math.min(...temp) + Math.max(...temp)) / 2} </p>
        </div>
        <div className={style.card}>
          <span>Minimum Carbon Emission For Scope 2 </span>
          <p> {Math.min(...temp)} </p>
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CardChart
            x_items={Data.map((item) =>
              item.Data.map((d) => d["Transaction Date/Time"])
            ).flat()}
            y_item={temp}
            type="bar"
            label="Carbon Emission For Scope 1"
          />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            x_items={Data.map((item) =>
              item.Data.map((d) => d["Transaction Date/Time"])
            ).flat()}
            y_item={temp}
            type="line"
            label="Carbon Emission For Scope 1"
          />
        </Grid>
      </Grid>
        <Scope2 />
    </div>
  );
}
