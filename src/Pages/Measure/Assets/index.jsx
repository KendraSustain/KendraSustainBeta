import { useEffect } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Scope1Com from "./Scope1";
import Scope2Com from "./Scope2";
import Scope3Com from "./Scope3";
import { Appbar } from "../../../Components";
import NIUK from "./NIUK";

export default function Asset() {
  useEffect(() => { }, []);
  const user = JSON.parse(localStorage.getItem("user"));

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
        Assets
      </Grid>
      <Appbar
        components={
          user.id === 66
            ? [<Scope1Com />, <Scope2Com />, <Scope3Com />]
            : user.id === 71
              ? [<NIUK />, <Scope2Com />]
              : []
        }
        labels={
          user.id === 66
            ? [<>Scope 1</>, <>Scope 2</>, <>Scope 3</>]
            : user.id === 71
              ? [<>Scope 1</>, <>Scope 2</>]
              : []
        }
      />
    </div>
  );
}
