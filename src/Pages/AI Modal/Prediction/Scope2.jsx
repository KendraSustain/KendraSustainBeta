import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardChart, MediaCard, MTable } from "../../../Components";
import Data from "./NIUKData.json";
function Scope2() {
  const [tableData, setTableData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(true);

  useEffect(() => {
    const authToken = `Bearer ${localStorage.getItem("authToken")}`;
    const getData = async () => {
      const baseURL = process.env.REACT_APP_API_URL;
      let data = [];
      let dataF = [
        {
          assetName: "MPAN-2300000709911",
          type: "prediction",
        },
        {
          assetName: "MPAN- 2366560081212",
          type: "prediction",
        },
      ];
      dataF = [];
      for (let i = 0; i < dataF.length; i++) {
        const response = await fetch(
          `${baseURL}/api/getPrediction?name=${dataF[i].assetName}&type=${dataF[i].type}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: authToken,
            },
            credentials: "same-origin",
          }
        );
        const newData = await response.json();
        newData.min_EP = Math.min(
          ...newData.map((item, pos) => item["Energy Prediction"])
        );

        newData.max_EP = Math.max(
          ...newData.map((item, pos) => item["Energy Prediction"])
        );
        newData.min_CEP = Math.min(
          ...newData.map((item, pos) => item["Carbon Emission Prediction"])
        );
        newData.max_CEP = Math.max(
          ...newData.map((item, pos) => item["Carbon Emission Prediction"])
        );

        data.push(newData);
      }
      data.forEach((e, i) => {
        e.forEach((item, j) => {
          data[i][j].Date = data[i][j].Date.slice(0, 10);
        });
        return null;
      });
      setTableData(data);
      setShow(false);
    };
    if (user.id === 66) {
      getData();
    }
  }, [user]);

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {tableData.map((item, pos) => (
            <Grid md={6} item key={pos}>
              <MediaCard
                title={`MPAN ${pos + 1} - Feb,2022`}
                content={
                  <>
                    <div>
                      Maximum Petrol Consumption Prediction : {item.max_CEP}
                    </div>
                    <div>
                      Minimum Petrol Consumption Prediction : {item.min_CEP}
                    </div>
                    <div>
                      Minimum Diesel Consumption Prediction : {item.min_EP}
                    </div>
                    <div>
                      Maximum Diesel Consumption Prediction : {item.max_EP}
                    </div>
                  </>
                }
              />
            </Grid>
          ))}

          {tableData.map((item, pos) => (
            <Grid item md={6} key={pos}>
              <MTable
                title="Fuel Prediction"
                tableData={item}
                columns={[
                  {
                    title: "Date",
                    field: "Date",
                  },
                  {
                    title: "Petrol Consumption Prediction ",
                    field: "Energy Prediction",
                  },
                  {
                    title: "Diesel Consumption Prediction",
                    field: "Carbon Emission Prediction",
                  },
                ]}
              />
            </Grid>
          ))}
          {show && (
            <Grid item xs={12}>
              <MTable
                title="Fuel Consumption Prediction : Scope 2 - Year 2022"
                tableData={Data["Scope 2"]}
                columns={[
                  {
                    title: "Date",
                    field: "Date",
                  },
                  {
                    title: "Fuel Consumption Prediction (KWh)",
                    field: "Energy Prediction",
                  },
                  {
                    title: "Carbon Emission Prediction (kgCO2/KWh)",
                    field: "Carbon Emission Prediction",
                  },
                ]}
              />
            </Grid>
          )}
          {tableData.map((item, pos) => (
            <Grid item md={6}>
              <CardChart
                x_items={item.map((ele) => ele.Date.slice(0, 10))}
                y_item={item.map((ele) => ele["Energy Prediction"])}
                label={`Petrol Consumption Prediction  *1000 Kwh `}
                time="Date"
                type="line"
              />
            </Grid>
          ))}
          {tableData.map((item) => (
            <Grid item md={6}>
              <CardChart
                x_items={item.map((ele) => ele.Date.slice(0, 10))}
                y_item={item.map((ele) => ele["Carbon Emission Prediction"])}
                label="Diesel Consumption Prediction *1000 kgCO2/kWh"
                time="Date"
                type="line"
              />
            </Grid>
          ))}
          {show && (
            <Grid item xs={6}>
              <CardChart
                x_items={Data["Scope 2"].map((item) => item.Date)}
                y_item={Data["Scope 2"].map(
                  (item) => item["Energy Prediction"]
                )}
                label={`Fuel Consumption Prediction (KWh)`}
                time="Date"
                type="line"
              />
            </Grid>
          )}
          {show && (
            <Grid item xs={6}>
              <CardChart
                x_items={Data["Scope 2"].map((item) => item.Date)}
                y_item={Data["Scope 2"].map(
                  (item) => item["Carbon Emission Prediction"]
                )}
                label={`Carbon Emission Prediction (kgCO2/KWh)`}
                time="Date"
                type="line"
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default Scope2;
