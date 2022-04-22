import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { CardChart, MediaCard } from "../../Components";

const CarbonFootprintCalculator = () => {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const [data1, setData1] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [asset, setAsset] = useState([]);
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
      setAsset(data);
      console.log(data);
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
      data: "6134.655",
    },
    {
      name: "Minimum Carbon Emission(kgCO2/kWh)",
      data: "1310.716",
    },
    {
      name: "Total Carbon Emission(kgCO2/kWh)",
      data: "37,063.76",
    },
  ];
  const style = {
    display: "flex",
    backgroundColor: "#ffffff",
    height: "150px",
    borderRadius: "8px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  };
  const [select, setSelect] = useState(0);

  return (
    data1.length && (
      <div>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {asset.map((item, pos) => (
              <Grid item xs={12 / asset.length}>
                <Box
                  sx={{
                    ...style,
                    border: "2px solid",
                    borderColor: select === pos ? "#00034F" : "transparent",
                  }}
                  onClick={() => setSelect(pos)}
                >
                  {item.asset_type}
                </Box>
              </Grid>
            ))}

            {metadata.map((item, pos) => (
              <Grid key={pos} item xs={4}>
                <MediaCard title={item.name} content={item.data} />
              </Grid>
            ))}

            <Grid item xs={12} md={12}>
              <CardChart
                title={asset[select].assetName}
                x_items={data1[select].map((e) => e.Date)}
                type="line"
                showYear={true}
                y_item={data1[select].map((e) => e["Carbon Emission"])}
                label={"Carbon Emission for " + asset[select].asset_type}
              />
            </Grid>

            <Grid item md={12}>
              <CardChart
                title={asset[select].assetName}
                x_items={data1[select].map((e) => e.Date)}
                type="bar"
                showYear={true}
                y_item={data1[select].map((e) => e["Carbon Emission"])}
                label={"Carbon Emission for " + asset[select].asset_type}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  );
};

export default CarbonFootprintCalculator;
