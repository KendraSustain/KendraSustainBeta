import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { MediaCard } from "../../Components";

const CarbonFootprintCalculator = () => {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
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

      console.log(data);
      data.map(
        async (data) =>
          await apiGetData
            .post(`/api/getEmission?name=${data.assetName}&type=${data.type}`)
            .then((res) => {
              console.log(res.data);
            })
      );
    }
    getData();
  }, [authToken]);

  const metadata = [
    {
      name: "Maximum Carbon Emission(kgCO2/kWh)",
      data: "19,081.22",
    },
    {
      name: "Minimum Carbon Emission(kgCO2/kWh)",
      data: "16,083.65",
    },
    {
      name: "Total Carbon Emission(kgCO2/kWh)",
      data: "18,057.76",
    },
  ];

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {metadata.map((item, pos) => (
            <Grid key={pos} item xs={4}>
              <MediaCard title={item.name} content={item.data} />
            </Grid>
          ))}

          <Grid item xs={12} md={12}></Grid>

          {/* {date.map((item, pos) => (
            <Grid item xs={12} md={6}></Grid>
          ))} */}
        </Grid>
      </Box>
    </div>
  );
};

export default CarbonFootprintCalculator;
