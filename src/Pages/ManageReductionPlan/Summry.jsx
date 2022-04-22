import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DATA from "./Scoope3_data.json";
import { CardChart, MediaCard } from "../../Components";

const Summary = () => {
  const metadata = [
    {
      name: "Total emissions for 2020 (MtCO2e)",
      data: "19,081.22",
    },
    {
      name: "Scope 1 for 2020 (MtCO2e) ",
      data: "16,083.65",
    },
    {
      name: "Scope 2 for 2020 (MtCO2e)",
      data: "18,057.76",
    },
    {
      name: "Scope 3 for 2020 (MtCO2e)",
      data: "78,368.35",
    },
    {
      name: "Average Emission of The Year - 2020",
      data: "72,358.35",
    },
    {
      name: "Highest Emission of the Year - 2020",
      data: "78,368.35",
    },
  ];

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {metadata.map((item, pos) => (
            <Grid key={pos} item xs={4}>
              <MediaCard title={item.name} content={item.data} />
            </Grid>
          ))}
          <Grid item xs={6}>
            <CardChart
              y_item={DATA.singleData.data2}
              type="bar"
              x_items={DATA.singleData.labels4}
              title="Emission % by Source (2020)"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              y_item={DATA.singleData.data3}
              type="bar"
              x_items={DATA.singleData.labels3}
              title="Emission Annual Trends (2020)"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              y_item={DATA.singleData.data}
              type="bar"
              x_items={DATA.singleData.labels6}
              title="Stationay Combustion by Fuel Type (MtCO2e) for 2020"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              axis="y"
              y_item={DATA.singleData.data}
              type="bar"
              x_items={DATA.singleData.labels5}
              title="Emission by Facility for 2020"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Summary;
