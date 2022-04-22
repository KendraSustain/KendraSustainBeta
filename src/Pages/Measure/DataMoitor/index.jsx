import { useEffect } from "react";
import * as React from "react";
import { Appbar } from "../../../Components";
import Grid from "@mui/material/Grid";
import Scope1Com from "./Scope1";
import Scope2Com from "./Scope2";
import Scope3Com from "./Scope3";
import CloudCarbon from "./Scope3CloudCal";
import NIUK from "./NIUK";

export default function DataMonitor() {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => { }, []);
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
        Data Monitor
      </Grid>
      <Appbar
        components={
          user.id === 66
            ? [<Scope1Com />, <Scope2Com />, <Scope3Com />, <CloudCarbon />]
            : user.id === 71
              ? [<NIUK />, <Scope2Com />, <CloudCarbon />]
              : []
        }
        labels={[<>Scope 1</>, <>Scope 2</>, <>Scope 3</>]}
      />
    </div>
  );
}
