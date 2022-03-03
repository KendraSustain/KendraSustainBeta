import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}
export default function Appbar({
  labels = ["Scope 1", "Scope 2", "Scope 3"],
  components = [<>Scope 1</>, <> Scope 2 </>, <> Scope 3 </>],
}) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          {labels.map((item, pos) => (
            <Tab label={item} {...a11yProps(pos)} key={pos} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        // onChangeIndex={handleChangeIndex}
        animateTransitions={true}
        resistance={true}
      >
        {components.map((item, pos) => (
          <Typography key={pos} component="div" role="tabpanel">
            <Box sx={{ p: 3 }}>{item}</Box>
          </Typography>
        ))}
      </SwipeableViews>
    </div>
  );
}
