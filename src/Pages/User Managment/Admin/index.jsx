import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
const Scope1Com = () => {
  const card = [
    {
      icon: "fas fa-users-cog",
      title: "Manage Users",
      label: "Manage users and give them permissions",
      to: "users",
    },
    {
      icon: "fas fa-house-user",
      title: "Manage Organization",
      label: "Manage your organization",
      to: "org",
    },
    {
      icon: "fas fa-users",
      title: " Manage Teams and Groups",
      label: "Manage and build great teams",
      to: "team",
    },
    {
      icon: "fas fa-credit-card",
      title: "Biling",
      label: "Manage incoming payments and status of accounts",
      to: "billing",
    },
    {
      icon: "fas fa-database",
      title: "Role Api Admin Based",
      label: "Change Users Roles and Check thier Informations",
      to: "api",
    },
    {
      icon: "fas fa-phone-square-alt",
      title: "User Calls",
      label: "Check the calls that the user made and it's duration",
      to: "calls",
    },
  ];

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {card.map((item) => (
            <Grid item xs={6} md={6}>
                <Link to={item.to}>
              <div className={styles.Adminslec} onClick={item.onClick}>
                  <i className={[item.icon, styles.icon].join(" ")}></i>
                  <br />
                  <span className={styles.Adminlectxt}> {item.title}</span>
                  <hr />
                  <span className={styles.Adminlectxt1}>{item.label}</span>
              </div>
                </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Scope1Com;
