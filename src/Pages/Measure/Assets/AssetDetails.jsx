import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import axios from "axios";
import { MediaCard, MTable } from "../../../Components";
import CardChart from "../../../Components/Chart/CardChart";

export default function AssetDetail(props) {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const user = JSON.parse(localStorage.getItem("user"));

  const location = useLocation();
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    async function getData() {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });
      let meta = {
        assetName: location.state.detail.asset_name,
        type: "emission",
      };
      const { data } = await apiGetData.post(
        `/api/getEmission?name=${meta.assetName}&type=${meta.type}`
      );
      setRows(data);
    }
    getData();
  }, [authToken, location]);

  const metadata = [
    {
      name: "Maximum Energy Consumption",

      data: Math.round(863.2999877929688) + " KwH",
    },
    {
      name: "Minimum Energy Consumption",

      data: Math.round(71.69999694824219) + " KwH",
    },
    {
      name: "Average Energy Consumption",
      data: "100KwH",
    },
    {
      name: "Maximum Carbon Emission",

      data: Math.round(220.65948486328125) + " kgCO2/kWh",
    },
    {
      name: "Minimum Carbon Emission",

      data: Math.round(18.326519012451172) + " kgCO2/kWh",
    },
    {
      name: "Average Carbon Emission",
      data: "18 kgCO2/kWh",
    },
  ];
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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
              height: "90px",
              color: "black",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {location.state.detail.asset_name}
          </Grid>

          {metadata.map((item, pos) => (
            <Grid key={pos} item xs={4}>
              <MediaCard title={item.name} content={item.data} />
              {/* <AssetCard typo1={item.name} typo2={item.data} /> */}
            </Grid>
          ))}
          <Grid item xs={12} md={12}>
            <MTable
              columns={columns}
              title="Energy Consumtion"
              tableData={[{ Date: "" }, ...rows]}
              options={{
                pageSize: 7,
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Energy Consumption"])}
              title={`Energy Consumption for ${user.company}`}
              label="Energy Consumption"
              time="Date"
              assetName={location.state.detail.asset_name}
              type="line"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Carbon Emission"])}
              title={`Energy Consumption for ${user.company} (x1000 kgCO2/kWh)`}
              label="Carbon Emission"
              time="Date"
              type="line"
              assetName={location.state.detail.asset_name}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Energy Consumption"])}
              title={`Energy Consumption for ${user.company}`}
              label="Energy Consumption"
              time="Date"
              assetName={location.state.detail.asset_name}
              type="bar"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Carbon Emission"])}
              title={`Energy Consumption for ${user.company} (x1000 kgCO2/kWh)`}
              label="Carbon Emission"
              time="Date"
              type="bar"
              assetName={location.state.detail.asset_name}
            />
          </Grid>
          <Grid item xs={12}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1635857595447!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
