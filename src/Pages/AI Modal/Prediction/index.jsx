import { useEffect } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Scope1Com from "./Scope1";
import Scope2Com from "./Scope2";
import Scope3Com from "./Scope3";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function DataMonitor() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {}, []);
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
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Scope 1" {...a11yProps(0)} />
          <Tab label="Scope 2" {...a11yProps(1)} />
          <Tab label="Scope 3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Scope1Com />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Scope2Com />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Scope3Com />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
