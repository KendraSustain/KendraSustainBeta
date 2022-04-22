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
  const getAvrage = (data) => {
    console.log(data);
    let temp = data.filter(function (el) {
      return el != null;
    });
    const avg = temp.reduce((p, c) => p + c, 0) / temp.length;
    return Math.round(avg * 100) / 100;
  };
  // return <></>;
  return (
    item !== "others" && (
      <div>
        <div className={style.container}>
          <div className={style.card}>
            <span>Vehicle Reg No.</span>
            <p>{Data[item]["Vehicle Reg"]}</p>
          </div>
          <div className={style.card}>
            <span>Vehicle Reg Driver</span>
            <p>{Data[item]["Vehicle Reg Driver"]}</p>
          </div>
          <div className={style.card}>
            <span>Avg Fuel Consumption</span>
            <p>
              {getAvrage(Data[item].Data.map((data) => data["Litres"]))} Litres
            </p>
          </div>
          <div className={style.card}>
            <span>Avg Odometer Reading</span>
            <p>
              {getAvrage(Data[item].Data.map((data) => data["Odometer"]))} Km
            </p>
          </div>
          <div className={style.card}>
            <span>Avg Distance Traveled</span>
            <p>
              {getAvrage(
                Data[item].Data.map((data) => data["DistanceTraveled"])
              )}{" "}
              Km
            </p>
          </div>
          <div className={style.card}>
            <span>Avg Expenditure on Fuel</span>
            <p>£ {getAvrage(Data[item].Data.map((data) => data["Gross"]))}</p>
          </div>
          <div className={style.card}>
            <span>Average Carbon Emission</span>
            <p>
              {getAvrage(Data[item].Data.map((data) => data["CO2 Emission"]))}{" "}
              gCO2/kWh
            </p>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MTable
              title="Carbon Emission-2021"
              tableData={Data[item].Data}
              columns={[
                {
                  title: "Vehicle Reg",
                  field: "Vehicle Reg",
                  hidden: true,
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
                  title: "Distance Traveled",
                  field: "DistanceTraveled",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              showYear={true}
              x_items={Data[item].Data.map(
                (data) => data["Transaction Date/Time"]
              )}
              y_item={Data[item].Data.map((data) => data["CO2 Emission"])}
              type="bar"
              label={`Carbon Emission of Vehicle : ${Data[item]["Vehicle Reg"]} `}
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              showYear={true}
              x_items={Data[item].Data.map(
                (data) => data["Transaction Date/Time"]
              )}
              y_item={Data[item].Data.map((data) => data["CO2 Emission"])}
              type="line"
              label={`Carbon Emission of Vehicle : ${Data[item]["Vehicle Reg"]} `}
            />
          </Grid>
        </Grid>
      </div>
    )
  );
}
