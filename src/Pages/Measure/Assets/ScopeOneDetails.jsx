import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CardChart, MTable } from "../../../Components";
import style from "./index.module.css";
import Data from "./NiukData.json";
export default function ScopeOneDetails() {
  const location = useLocation();
  const [item, setItem] = useState(0);
  useEffect(() => {
    if (location.state && location.state.detail)
      setItem(location.state.detail - 1);
    console.log(location.state);
  }, [location]);

  const cardDetails = [
    "Vehicle Reg",
    "Vehicle Reg Driver",
    "Litres",
    "Odometer",
    "Distance Traveled",
    "Transaction Gross Time",
    "Location",
    "Net",
    "VAT",
    "Expense",
    "Price / Litre",
    "CO2 Emission",
  ];
  console.log(Data[item]);
  // return <></>;
  return (
    item !== "others" && (
      <div>
        <div className={style.container}>
          <div className={style.card}>
            <span>Vehicle Reg</span>
            <p>{Data[item]["Vehicle Reg"]}</p>
          </div>
          <div className={style.card}>
            <span>Vehicle Reg Driver</span>
            <p>{Data[item]["Vehicle Reg/Driver"]}</p>
          </div>
          <div className={style.card}>
            <span>Avg Litres</span>
            <p>
              {Data[item].Data.map((data) => data["Litres"]).reduce(
                (a, b) => a + b,
                0
              ) / Data[item].Data.length}
            </p>
          </div>
          <div className={style.card}>
            <span>Avg Odometer</span>
            <p>
              {Data[item].Data.map((data) => data["Odometer"]).reduce(
                (a, b) => a + b,
                0
              ) / Data[item].Data.length}
            </p>
          </div>
          <div className={style.card}>
            <span>Avg Distance Traveled</span>
            <p>
              {Data[item].Data.map((data) => data["Distance Traveled"]).reduce(
                (a, b) => a + b,
                0
              ) / Data[item].Data.length}
            </p>
          </div>
          <div className={style.card}>
            <span>Avg Gross</span>
            <p>
              {Data[item].Data.map((data) => data["Gross"]).reduce(
                (a, b) => a + b,
                0
              ) / Data[item].Data.length}
            </p>
          </div>
          <div className={style.card}>
            <span>CO2 Emission</span>
            <p>
              {Data[item].Data.map((data) => data["CO2 Emission"]).reduce(
                (a, b) => a + b,
                0
              ) / Data[item].Data.length}
            </p>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MTable
              title={Data[item]["Vehicle Reg"]}
              tableData={Data[item].Data}
              columns={[
                {
                  title: "Vehicle Reg",
                  field: "Vehicle Reg",
                  hidden: !(item === 2),
                },
                {
                  title: "Transaction Date/Time",
                  field: "Transaction Date/Time",
                },
                {
                  title: "CO2 Emission",
                  field: "CO2 Emission",
                },
                {
                  title: "Litres",
                  field: "Litres",
                },
                {
                  title: "Odometer",
                  field: "Odometer",
                },
                {
                  title: "Distance Traveled",
                  field: "Distance Traveled",
                },

                {
                  title: "Location",
                  field: "Location",
                },
                {
                  title: "Gross",
                  field: "Gross",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              showYear={true}
              x_items={Data[item].Data.map((data) =>
                item === 2 ? data["Vehicle Reg"] : data["Transaction Date/Time"]
              )}
              y_item={Data[item].Data.map((data) => data["CO2 Emission"])}
              type="bar"
              label={`Carbon Emission of ${item} `}
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              showYear={true}
              x_items={Data[item].Data.map((data) =>
                item === 2 ? data["Vehicle Reg"] : data["Transaction Date/Time"]
              )}
              y_item={Data[item].Data.map((data) => data["CO2 Emission"])}
              type="line"
              label={`Carbon Emission of ${item} `}
            />
          </Grid>
        </Grid>
      </div>
    )
  );
}
