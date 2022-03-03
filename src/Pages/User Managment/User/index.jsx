import { Grid } from "@mui/material";
import styles from "./index.module.css";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";
const User = () => {
  const card = [
    {
      icon: "fas fa-sitemap",
      to: "org",
      title: "Manage Organization",
      label: "Manage Organizations and give them permissions",
    },
    {
      icon: "fas fa-user-lock",
      to: "password",
      title: "Change Password",
      label: "Change your Current Password and create a new one",
    },
    {
      icon: "fas fa-user-cog",
      to: "update",
      title: "Update Profile Info",
      label: "Allows you to update your Profile Informations",
    },
    {
      icon: "fas fa-server",
      to: "api",
      title: "API",
      label: "You Cannot Access This page without Admin Permission",
    },
  ];

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {card.map((item,pos) => (
            <Grid item xs={6} md={6} key={pos} >
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

export default User;
