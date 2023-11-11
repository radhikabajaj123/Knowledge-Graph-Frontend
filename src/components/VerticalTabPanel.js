import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from '../components/Form.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({nodes, setNodes}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      style={{backgroundColor: "#fffbf7"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Get Node by Import Id" {...a11yProps(0)} />
        <Tab label="Get Node by Name" {...a11yProps(1)} />
        <Tab label="Get Nodes by Label" {...a11yProps(2)} />
        <Tab label="Get Children" {...a11yProps(3)} />
        <Tab label="Get BFS" {...a11yProps(4)} />
        <Tab label="Get DFS" {...a11yProps(5)} />
      </Tabs>
    <TabPanel value={value} index={0}>
        <Form nodes={nodes} setNodes={setNodes}/>
    </TabPanel>
      <TabPanel value={value} index={1}>
        Get Node by Name
      </TabPanel>
      <TabPanel value={value} index={2}>
        Get Nodes by Label
      </TabPanel>
      <TabPanel value={value} index={3}>
        Get Children
      </TabPanel>
      <TabPanel value={value} index={4}>
        Get BFS
      </TabPanel>
      <TabPanel value={value} index={5}>
        Get DFS
      </TabPanel>
    </Box>
  );
}