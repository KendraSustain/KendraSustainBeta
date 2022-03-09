import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { CardChart, MTable } from "../../../Components";

const Scope2Com = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const [row, setRow] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setRow([]);
      const apiGetAsset = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });

      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });
      const { data } = await apiGetAsset.get(`/api/asset/${user.id}`);
      const asset = data;

      let temp = [];
      for (let i = 0; i < asset.length; i++) {
        const { data } = await apiGetData.post(
          `/api/getEmission?name=${asset[i].asset_name}&type=${"emission"}`
        );
        console.log(data);
        temp.push(data);
      }
      console.log(temp);
      setRow(temp);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <Grid container spacing={2}>
          {row.map((item, pos) => (
            <Grid item xs={12} key={pos}>
              <MTable
                columns={columns}
                tableData={item}
                title={"Energy Consumption: " + (pos + 1)}
              />
            </Grid>
          ))}

          {row.map((item, pos) => {
            return (
              <Grid item xs={12} md={12} key={pos}>
                <CardChart
                  x_items={item.map((data) => data.Date)}
                  title={`Energy Consumption for ${user.company} (x1000 Kwh)`}
                  label="Energy Consumption"
                  time="Date"
                  type="bar"
                  series={[
                    {
                      data: item.map((data) => data["Energy Consumption"]),
                      type: "bar",
                      color: "#4B5FAE",
                    },
                    {
                      data: item.map((data) => data["Carbon Emission"]),
                      type: "bar",
                      color: "#272253",
                    },
                  ]}
                />
              </Grid>
            );
          })}
          {row.map((item, pos) => (
            <Grid item xs={12} md={6} key={pos}>
              <CardChart
                x_items={item.map((data) => data.Date)}
                label="Energy Consumption"
                time="Date"
                type="line"
                series={[
                  {
                    data: item.map((data) => data["Energy Consumption"]),
                    type: "line",
                  },
                  {
                    data: item.map((data) => data["Carbon Emission"]),
                    type: "line",
                  },
                ]}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Scope2Com;
