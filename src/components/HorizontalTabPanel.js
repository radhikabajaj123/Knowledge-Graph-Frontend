import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerticalTabPanel from './VerticalTabPanels/GetVerticalTabPanel'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({graph, setGraph}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} style={{backgroundColor: "#F2F1F1"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Get" {...a11yProps(0)} />
          <Tab label="Add" {...a11yProps(1)} />
          <Tab label="Edit" {...a11yProps(2)} />
          <Tab label="Delete" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <VerticalTabPanel graph={graph} setGraph={setGraph}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <VerticalTabPanel graph={graph} setGraph={setGraph}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <VerticalTabPanel graph={graph} setGraph={setGraph}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <VerticalTabPanel graph={graph} setGraph={setGraph}/>
      </CustomTabPanel>
    </Box>
  );
}