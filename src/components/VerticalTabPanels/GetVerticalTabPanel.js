import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GetNodeByImportIdForm from '../GetForms/GetNodeByImportIdForm.js'
import GetGraphForm from '../GetForms/GetGraphForm.js';
import GetNodeByNameForm from '../GetForms/GetNodeByNameForm.js';
import GetNodesByLabelForm from '../GetForms/GetNodesByLabelForm.js';
import GetSiblingsByImportIdForm from '../GetForms/GetSiblingsByImportIdForm.js';

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

export default function VerticalTabs({graph, setGraph}) {
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
        <Tab label="Get Siblings" {...a11yProps(3)} />
        <Tab label="Get Graph" {...a11yProps(4)} />
      </Tabs>
    <TabPanel value={value} index={0}>
        <GetNodeByImportIdForm graph={graph} setGraph={setGraph}/>
    </TabPanel>
      <TabPanel value={value} index={1}>
        <GetNodeByNameForm graph={graph} setGraph={setGraph}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GetNodesByLabelForm graph={graph} setGraph={setGraph}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GetSiblingsByImportIdForm graph={graph} setGraph={setGraph}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GetGraphForm graph={graph} setGraph={setGraph}/>
      </TabPanel>
    </Box>
  );
}