import React from "react";

import DATA from "./Scoope3_data.json";
import { CardChart, MediaCard } from "../../Components";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

function Scope3() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item md={12}>
          <CardChart
            type="bar"
            series={DATA.data.series}
            x_items={['Jan','Feb','Mar','Jun','July']}
            title="Mothly scope 3 emission (MtCo2e) for 2020"
          />
        </Grid>

        {DATA.cardDATA.map((element, pos) => (
          <Grid item md={4}>
            <MediaCard
              key={pos}
              title={element.titile}
              content={element.value}
            />
          </Grid>
        ))}
        <Grid item md={6}>
          <CardChart
            type="bar"
            y_item={DATA.singleData.data4}
            axis="y"
            x_items={DATA.singleData.labels}
            title="Lowest scope 3 (MtCO2e) for 2020"
          />
        </Grid>
        <Grid item md={6}>
          <CardChart
            type="bar"
            y_item={DATA.singleData.data}
            axis="y"
            x_items={DATA.singleData.labels2}
            title="Highest scope 3 (MtCO2e) for 2020"
          />
        </Grid>

        <Grid item md={6}>
          <CardChart
            type="bar"
            y_item={DATA.singleData.data}
            x_items={DATA.singleData.labels3}
            title="Monthly Scope 3 emissions for 2020"
          />
        </Grid>
        <Grid item md={6}>
          <CardChart
            title={DATA.pieData.label}
            data={DATA.pieData.data.map((e, pos) => {
              return {
                name: DATA.pieData.labels[pos],
                value: e,
              };
            })}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Scope3;
