import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
const Scope1Com = () => {
  const card = [
    {
      icon: "far fa-credit-card",
      title: "Billing Account",
      label: "Your Billing Account Information",
      to: "account",
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Invoiced billing account",
      label: "Manage your organization",
      to: "org",
    },
    {
      icon: "fas fa-receipt",
      title: "Payment",
      label: "Check your receipts and transaction",
      to: "payment",
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
