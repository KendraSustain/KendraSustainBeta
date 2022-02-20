import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { CardChart, MTable } from "../../../Components";

const Scope2Com = () => {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const [row, setRow] = useState([]);
  const [consumption, setConsumption] = React.useState([]);
  const [assetname, setAssetName] = React.useState([]);
  const [date, setDate] = React.useState([]);
  useEffect(() => {
    async function getData() {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });

      let data = [
        {
          assetName: "MPAN-2300000709911",
          type: "emission",
        },
        {
          assetName: "MPAN- 2366560081212",
          type: "emission",
        },
      ];

      data.map(
        async (data) =>
          await apiGetData
            .post(`/api/getEmission?name=${data.assetName}&type=${data.type}`)
            .then((res) => {
              setRow(res.data);
              let varDate = [];
              let varEnergy = [];
              let emission = [];
              res.data.forEach((element) => {
                varDate.push(element.Date);
                varEnergy.push(element["Energy Consumption"]);
                emission.push(element["Carbon Emission"]);
              });

              setDate((d) => [...d, varDate]);
              setConsumption((p) => [...p, varEnergy]);
              setAssetName((p) => [...p, data.assetName]);
            })
      );
    }
    getData();
  }, [authToken]);
  const columns = [
    { field: "Date", title: "Date" },
    {
      field: "Energy Consumption",
      title: "Energy Consumption (KwH)",
    },
    {
      field: "Carbon Emission",
      title: "Carbon Emission (kgCO2/kWh)",
    },
  ];
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={12}>
            <MTable columns={columns} tableData={row} />
          </Grid>
          <Grid item xs={12} md={12}>
            {date.map((item, pos) => {
              return (
                <CardChart
                  key={pos}
                  x_items={date[pos]}
                  y_item={consumption[pos]}
                  title={"Energy Consumption for Premier Modular (x1000 Kwh)"}
                  label="Energy Consumption"
                  time="Date"
                  assetname={assetname[pos]}
                  type="bar"
                />
              );
            })}
          </Grid>
          {date.map((item, pos) => (
            <Grid item xs={12} md={6}>
              <CardChart
                key={pos}
                x_items={date[pos]}
                y_item={consumption[pos]}
                title={"Energy Consumption for Premier Modular (x1000 Kwh)"}
                label="Energy Consumption"
                time="Date"
                assetname={assetname[pos]}
                type="line"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Scope2Com;
