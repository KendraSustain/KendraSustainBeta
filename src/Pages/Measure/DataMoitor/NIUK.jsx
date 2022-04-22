import { Grid, Box, Button, ButtonGroup, Divider } from "@material-ui/core";
import { textAlign } from "@mui/system";
import React, { useState, useEffect } from "react";
import { CardChart, MTable, Tree } from "../../../Components";
import Data from "../Assets/NiukData.json";
import useStyle from "./btnStyle";
import options from "./Options.json";

export default function NIUK() {
  const DataToMeShowed = { "On-Road Vehicles": Data };
  const graphLabel = {
    Litres: "Average Fuel Consumption - Year 2021",
    Odometer: "Average Odometer Reading of Vehicles",
    Gross: "Average Expenditure on Fuel",
    DistanceTraveled: "Average Distance Covered",
  };

  const cardDetails = ["Litres", "CO2 Emission", "Gross", "DistanceTraveled"];
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
      title: "Avg. Litres",
      render: (i) => Math.round(i["Litres"] * 100) / 100,
    },
    {
      field: "Odometer",
      title: "Avg. Odometer Reading",
      render: (i) => Math.round(i["Odometer"] * 100) / 100,
    },
    {
      field: "DistanceTraveled",
      title: "Avg. Distance Covered(km)",
      render: (i) => Math.round(i["DistanceTraveled"] * 100) / 100,
    },
    {
      field: "Price/Litre",
      title: "Avg. Price/Litre(£)",
      render: (i) => Math.round(i["Price/Litre"] * 100) / 100,
    },
    {
      field: "CO2 Emission",
      title: "Avg. Carbon Emission(kgCO2/KwH)",
      render: (i) => Math.round(i["CO2 Emission"] * 100) / 100,
    },
  ];

  const [select, setSelect] = useState(0);
  const [subselect, setSubselect] = useState(0);
  const [optionsSelected, setOptionsSelected] = useState(
    options[0].children[0].name
  );

  useEffect(() => {
    setSubselect(0);
    setOptionsSelected(options[select].children[0].name);
  }, [select]);
  const style = {
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
    <>
      <Grid container spacing={1}>
        {options.map((item, pos) => (
          <Grid item xs={4}>
            <Box
              sx={{
                ...style,
                border: "2px solid",
                borderColor: select === pos ? "#00034F" : "transparent",
              }}
              onClick={() => setSelect(pos)}
            >
              {item.name}
              {select === pos && (
                <Box style={{ ...style, flexWrap: "wrap" }}>
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
      {DataToMeShowed[optionsSelected] ? (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MTable
              title="Scope 1"
              columns={columns}
              tableData={DataToMeShowed[optionsSelected].map((d, p) => {
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
                x_items={DataToMeShowed[optionsSelected].map(
                  (item) => item["Vehicle Reg"]
                )}
                y_item={DataToMeShowed[optionsSelected].map(
                  (v) =>
                    v.Data.map((i) => i[data]).reduce((a, b) => a + b, 0) /
                    v.Data.length
                )}
                type="bar"
                label={graphLabel[data] ? graphLabel[data] : data}
              />
            </Grid>
          ))}

          {/* {cardDetails.map((data, pos) => (
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
    ))} */}
        </Grid>
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
    </>
  );
}
