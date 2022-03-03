import * as React from "react";
import Grid from "@mui/material/Grid";
import Scope1Com from "./Scope1";
import Scope2Com from "./Scope2";
import Scope3Com from "./Scope3";
import { Appbar } from "../../../Components";

export default function DataMonitor() {
  return (
    <div>
      <Grid
        item
        xs={12}
        style={{
          textAlign: "center",
          height: "50px",
          color: "black",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        AI Prediction Models
      </Grid>
      <Appbar
      
        components={[
          <Scope1Com/>,
          <Scope2Com/>,
          <Scope3Com/>
        ]}
      />
    </div>
  );
}
