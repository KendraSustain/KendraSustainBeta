import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import BarChart from "../Chart";
import MTable from "../Table/Material Table";
import { getUser } from "../../Auth";
import NIUKData from "../../Helper/NIUK.json";

function Intensity(props) {
  const authToken = `Bearer ${localStorage.getItem("authToken")}`;
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);
  // const [data2, setData] = React.useState([])
  const [localDate, setLocalDate] = useState([]);
  const [intensity, setIntensity] = useState([]);
  useEffect(() => {
    async function getData() {
      let Date = [];
      let Intensity = [];
      // let date = []
      // let prediction = []
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });
      await apiGetData.get(`/api/v0.0.1/carbon_intensity`).then((res) => {
        res.data.forEach((element) => {
          Date.push(element.To.slice(11, 16));
          Intensity.push(element.Intensity);
        });

        setLocalDate(Date);
        setIntensity(Intensity);
      });
    }

    getData();
  }, [authToken]);

  return (
    <div {...props}>
      {user.id === 71 ? (
        <>
          <BarChart
            x_items={NIUKData.electricity.G4.map(
              (item) => item.From + " - " + item.To
            )}
            series={[
              {
                name: "G4",
                data: NIUKData.price.G4.map((item) => item.Price),
                type: "bar",
                color: "#4B5FAE",

              },
              {
                name: "K0",
                color: "#272253",

                data: NIUKData.price.K0.map((item) => item.Price),
                type: "bar",
              },
            ]}
            title="Carbon Intensity for UK (gC02/Kwh)"
            label={"Price"}
            type="bar"
          />
        </>
      ) : (
        <BarChart
          x_items={localDate}
          y_item={intensity}
          title="Carbon Intensity for UK (gC02/Kwh)"
          label={"Carbon Intensity"}
          type="bar"
        />
      )}
    </div>
  );
}

export default Intensity;
