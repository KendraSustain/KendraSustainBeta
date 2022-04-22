import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

class DemoTabs extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };
  UpdateSwipeableViewHeight = () => {
    if (this.swipeableActions) this.swipeableActions.updateHeight();
  };
  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
    // this.swipeableActions.UpdateSwipeableViewHeight();
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <AppBar position="static" color="transparent">
          <Tabs
            value={index}
            fullWidth
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            {this.props.labels.map((item, pos) => (
              <Tab label={item} />
            ))}
          </Tabs>
        </AppBar>

        <SwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          action={(actions) => (this.swipeableActions = actions)}
          animateHeight
        >
          {this.props.components.map((item, pos) => (
            <div>
              <Typography key={pos} component="div" role="tabpanel">
                <Box sx={{ p: 1 }}>{item}</Box>
              </Typography>
            </div>
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

export default DemoTabs;
