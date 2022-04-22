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
      name:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Maximum Gas Consumption"
          : "Maximum Electricity Consumption",

      data:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "12,995 KwH"
          : 24001 + " KwH",
    },
    {
      name:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Minimum Gas Consumption"
          : "Minimum Electricity Consumption",

      data:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "7044 KwH"
          : 6383 + " KwH",
    },
    {
      name:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Average Gas Consumption"
          : "Average Electricity Consumption",
      data:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "8810 KwH"
          : "16,828 KwH",
    },
    {
      name:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Maximum Carbon Emission"
          : "Maximum Carbon Emission",

      data:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "3321 kgCO2/kWh"
          : 6134 + " kgCO2/KWh",
    },
    {
      name:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Minimum Gas Consumption"
          : "Minimum Carbon Emissions",

      data:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "1310 kgCO2/kWh"
          : 1631 + " kgCO2/KWh",
    },
    {
      name:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Average Carbon Emission"
          : "Average Carbon Emissions",
      data:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "2251  kgCO2/kWh"
          : "4301 kgCO2/kWh",
    },
  ];
  const columns = [
    { field: "Date", title: "Date" },
    {
      field: "Energy Consumption",
      title:
        user.id === 71 &&
        location.state.detail.asset_name === "MPAN-G4w00541251826"
          ? "Gas Consumption"
          : "Electricity Consumption",
    },
    {
      field: "Carbon Emission",
      title: "Carbon Emission (kgCO2/KWh)",
      render: (i) => Math.round(i["Carbon Emission"] * 100) / 100,
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
            {user.id === 71
              ? "Newbury Investments (UK) Limited Stearn Electrical"
              : null}
            <span style={{ fontSize: "18px" }}>
              ({location.state.detail.asset_name})
            </span>
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
              title={
                user.id === 71 &&
                location.state.detail.asset_name === "MPAN-G4w00541251826"
                  ? "Gas Consumption"
                  : "Electricity Consumption"
              }
              tableData={rows}
              options={{
                pageSize: 7,
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Energy Consumption"])}
              showYear={true}
              title={`${(user.id =
                71 && location.state.detail.asset_name === "MPAN-G4w00541251826"
                  ? `Gas Consumption for ${user.company} `
                  : `Electricity Consumption for ${user.company} `)} (kWh)`}
              label={
                (user.id =
                  71 &&
                  location.state.detail.asset_name === "MPAN-G4w00541251826"
                    ? "Gas Consumption"
                    : "Electricity Consumption")
              }
              time="Date"
              assetName={location.state.detail.asset_name}
              type="line"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Carbon Emission"])}
              showYear={true}
              title={`Carbon Emission for ${user.company} (x1000 kgCO2/KWh)`}
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
              showYear={true}
              title={`${(user.id =
                71 && location.state.detail.asset_name === "MPAN-G4w00541251826"
                  ? `Gas Consumption for ${user.company}`
                  : `Electricity Consumption for ${user.company}`)} (kWh) `}
              label={
                (user.id =
                  71 &&
                  location.state.detail.asset_name === "MPAN-G4w00541251826"
                    ? "Gas Consumption"
                    : "Electricity Consumption")
              }
              time="Date"
              assetName={location.state.detail.asset_name}
              type="bar"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              x_items={rows.map((item) => item["Date"])}
              y_item={rows.map((item) => item["Carbon Emission"])}
              showYear={true}
              title={`Carbon Emission for ${user.company} (x1000 kgCO2/KWh)`}
              label="Carbon Emission"
              time="Date"
              type="bar"
              assetName={location.state.detail.asset_name}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1635857595447!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
}
