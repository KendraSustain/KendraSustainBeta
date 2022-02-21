import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { CardChart, MediaCard } from "../../Components";

const CarbonFootprintCalculator = () => {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const [data1, setData1] = useState([]);
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
  useEffect(() => {
    console.log(data1);
  }, [data1]);

  useEffect(() => {
    async function getData() {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });

      // console.log(data);
      let dum = [];
      for (let i = 0; i < data.length; i++) {
        await apiGetData
          .post(
            `/api/getEmission?name=${data[i].assetName}&type=${data[i].type}`
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
                title={data[pos].assetName}
                key={pos}
                x_items={item.map((e) => e.Date)}
                type="line"
                y_item={item.map((e) => e["Carbon Emission"])}
              />
              // console.log(item)
            ))}
          </Grid>

          {data1.map((item, pos) => (
            <Grid item md={6}>
              <CardChart
                title={data[pos].assetName}
                key={pos}
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
