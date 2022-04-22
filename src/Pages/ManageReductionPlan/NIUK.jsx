import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@material-ui/core";
import { CardChart } from "../../Components";
import TempData from "../Measure/Assets/NiukData.json";
import style from "./index.module.css";
import options from "../Measure/DataMoitor/Options.json";
export default function NIUK() {
  // const temp = Data.map((item) => item["CO2 Emission"]);
  const Data = { "On-Road Vehicles": TempData };

  const [select, setSelect] = useState(0);
  const [subselect, setSubselect] = useState(0);
  const [optionsSelected, setOptionsSelected] = useState(
    options[0].children[0].name
  );
  let temp = [];
  temp = Data[optionsSelected]
    ? Data[optionsSelected].map((item) =>
        item.Data.map((i) => i["CO2 Emission"])
      )
    : [];
  temp = temp.flat();
  useEffect(() => {
    setSubselect(0);
    setOptionsSelected(options[select].children[0].name);
  }, [select]);
  const styless = {
    display: "flex",
    backgroundColor: "#ffffff",
    height: "210px",
    borderRadius: "8px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    cursor: "pointer",
  };
  return (
    <div>
      <Grid container spacing={1}>
        {options.map((item, pos) => (
          <Grid item xs={4}>
            <Box
              sx={{
                ...styless,
                border: "2px solid",
                borderColor: select === pos ? "#00034F" : "transparent",
              }}
              onClick={() => setSelect(pos)}
            >
              {item.name}
              {select === pos && (
                <Box style={{ ...styless, flexWrap: "wrap" }}>
                  {item.children.map((i, j) => (
                    <Button
                      variant={subselect === j ? "contained" : "outlined"}
                      color={subselect === j ? "primary" : "default"}
                      key={j}
                      onClick={() => {
                        setSubselect(j);
                        setOptionsSelected(i.name);
                      }}
                    >
                      {i.name}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} style={{ textAlign: "center", padding: "10px" }}>
          <h2>{optionsSelected}</h2>
        </Grid>
      </Grid>

      {Data[optionsSelected] ? (
        <>
          <div className={style.container}>
            <div className={style.card}>
              <span>Maximum Carbon Emission </span>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  letterSpacing: "1px",
                }}
              >
                {" "}
                {Math.max(...temp)} kgCO2/KWh{" "}
              </p>
            </div>
            <div className={style.card}>
              <span>Minimum Carbon Emission </span>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bolder",
                  letterSpacing: "1px",
                }}
              >
                {" "}
                {Math.min(...temp)} kgCO2/KWh
              </p>
            </div>
          </div>
          <Grid container spacing={2}>
            {Data[optionsSelected].map((item) => (
              <>
                <Grid item xs={12}>
                  <CardChart
                    showYear={true}
                    x_items={item.Data.map((d) => d["Transaction Date/Time"])}
                    y_item={temp}
                    type="line"
                    label={
                      "Carbon Emission (2021) of Vehicle Reg. No: " +
                      item["Vehicle Reg"]
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <CardChart
                    showYear={true}
                    x_items={item.Data.map((d) => d["Transaction Date/Time"])}
                    y_item={temp}
                    type="bar"
                    label={
                      "Carbon Emission (2021) of Vehicle Reg. No: " +
                      item["Vehicle Reg"]
                    }
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </>
      ) : (
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          No data to be displayed
        </Grid>
      )}
    </div>
  );
}
