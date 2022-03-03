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
      setRow([])
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
      console.log("New  : " , data )
      for (let i = 0; i < data.length; i++) {
        await apiGetData
          .post(
            `/api/getEmission?name=${data[i].asset_name}&type=${"emission"}`
          )
          .then((res) => {
            let temp = row;
            temp.push([...res.data]);
            setRow(temp);
            console.log(row);
          });
      }
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
                title={"MPAN : " + (pos + 1)}
              />
            </Grid>
          ))}

          <Grid item xs={12} md={12}>
            {row.map((item, pos) => {
              return (
                <CardChart
                  key={pos}
                  x_items={item.map((data) => data.Date)}
                  title={"Energy Consumption for Premier Modular (x1000 Kwh)"}
                  label="Energy Consumption"
                  time="Date"
                  type="bar"
                  series={[
                    {
                      data: item.map((data) => data["Energy Consumption"]),
                      type: "bar",
                    },
                    {
                      data: item.map((data) => data["Carbon Emission"]),
                      type: "bar",
                    },
                  ]}
                />
              );
            })}
          </Grid>
          {row.map((item, pos) => (
            <Grid item xs={12} md={6}>
              <CardChart
                key={pos}
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
