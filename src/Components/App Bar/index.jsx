import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}
export default function Appbar({
  labels = ['Scope 1', 'Scope 2'],
  components = [<>Scope 1</>, <> Scope 2 </>, <> Scope 3 </>],
}) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            // background: 'red',
            display: 'inline-block',
            // borderBottom: '2px solid #3888DA',
          }}
        >
          {labels.map((item, pos) => (
            <Tab
              label={item}
              {...a11yProps(pos)}
              key={pos}
              sx={{
                minWidth: 200,
              }}
            />
          ))}
        </Tabs>
      </div>
      <SwipeableViews
        index={value}
        animateTransitions={true}
        // animateHeight={true}
      >
        {components.map((item, pos) => (
          <Typography key={pos} component="div" role="tabpanel">
            <Box sx={{ p: 1 }}>{item}</Box>
          </Typography>
        ))}
      </SwipeableViews>
    </div>
  )
}
