import { Box, Grid } from "@material-ui/core";
import React from "react";
import style from "./Card.module.css";
export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} > Hi , {user.firstname + " " + user.lastname} </Grid>
        <Grid item xs={12} >Carbon Emission For Scope 1 : 1,200 </Grid>
        <Grid item xs={12} >Carbon Emission For Scope 2 : 1,200 </Grid>
        <Grid item xs={12} >Total Carbon Emission of {user.company} : 1,200 </Grid>
      </Grid>
    </Box>
  );
}
