import FeaturedInfo from "../../components/Dash/featuredInfo/FeaturedInfo";
import styles from "./Dash.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Contexts";
import Buttons from "../../components/Dash/Buttons/Buttons";
import { Grid } from '@mui/material';
import KendraBlogCard from "../../components/Dash/KendraBlogCard/KendraBlogCard";
import Weather from "../../components/Dash/Weather/Weather";
import { useHistory } from "react-router-dom";

function Dash() {

  const context = useContext(Context);
  useEffect(() => {
    context.setShowNavTop(true);
  }, [context]);
  return (
    <div className={[styles.home, context.close ? styles.close : ""].join(" ")}>
      <Buttons />
      <FeaturedInfo />
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <KendraBlogCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <Weather />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dash;