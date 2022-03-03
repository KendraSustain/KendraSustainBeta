import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { CardChart, MediaCard } from "../../Components";

const CarbonFootprintCalculator = () => {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const [data1, setData1] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [newData, setNewData] = useState([])
  useEffect(() => {
    async function getData() {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });
      const { data } = await apiGetData.get(`/api/asset/${user.id}`);
      setNewData(data)
      console.log(data)
      let dum = [];
      for (let i = 0; i < data.length; i++) {
        await apiGetData
          .post(
            `/api/getEmission?name=${data[i].asset_name}&type=${"emission"}`
          )
          .then((res) => {
            dum.push(res.data);
          });
      }
      setData1(dum);
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <Grid item xs={12} md={12}>
            {data1.map((item, pos) => (
              <CardChart
                title={newData[pos].assetName}
                key={pos}
                x_items={item.map((e) => e.Date)}
                type="line"
                y_item={item.map((e) => e["Carbon Emission"])}
              />
            ))}
          </Grid>

          {data1.map((item, pos) => (
            <Grid item md={6} key={pos}>
              <CardChart
                title={newData[pos].assetName}
                x_items={item.map((e) => e.Date)}
                type="bar"
                y_item={item.map((e) => e["Carbon Emission"])}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CarbonFootprintCalculator;
