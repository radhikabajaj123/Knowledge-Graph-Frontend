import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Graph from '../components/Graph';
import MultiDirectedGraphView from '../components/SigmaGraph';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard({nodes}) {
  return (
    <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#F2F1F1"}}>
      <CardContent>
            {/* <Graph nodes={nodes}/> */}
            <MultiDirectedGraphView/>
      </CardContent>
    </Card>
  );
}