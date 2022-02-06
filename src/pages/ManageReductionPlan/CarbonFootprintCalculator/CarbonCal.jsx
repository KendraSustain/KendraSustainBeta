import styles from "./CarbonFootprint.module.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/Contexts";
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
// import Zoom from '@mui/material/Zoom';
// import Fab from '@mui/material/Fab';
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CarbonFootprintCalculator from "./CarbonFootprintCalculator";
import Summary from "./Summary";
import Scope3 from "./Scope3";
// import DataMonitor from "./DataMonitor";
// import ScopeMonitor from "./ScopeMonitor";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
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

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

export default function CarbonCal() {
  const context = useContext(Context);
  const [scope_3_show, setScope_3_show] = useState(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      sx: fabStyle,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      sx: fabStyle,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  useEffect(() => {
    context.setShowNavTop(true);
    let decoded = jwt_decode(Cookies.get("tok_sustain"));
    if (decoded.id === 66) setScope_3_show(true);
  }, []);
  return (
    <div
      className={[styles.monitor, context.close ? styles.close : ""].join(" ")}
    >
      {/* <Box
                sx={{
                    bgcolor: 'background.paper',
                    width: '100%',
                    position: 'relative',
                    minHeight: 2000,
                }}
            > */}
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
        Carbon Footprint Calculator
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
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Scope 1" {...a11yProps(1)} />
          <Tab label="Scope 2" {...a11yProps(2)} />
         {scope_3_show ?  <Tab label="Scope 3" {...a11yProps(3)} /> : null }
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Summary />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <DataMonitor /> */}Scope One
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CarbonFootprintCalculator />
        </TabPanel>
        {scope_3_show ? (
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Scope3 />
          </TabPanel>
        ) : null}
      </SwipeableViews>
    </div>
  );
}
