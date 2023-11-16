import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Graph from '../components/Graph';
import { ForceGraph } from "../components/ForceGraph";
import data from '../components/Data.json'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard({nodes}) {
    const nodeHoverTooltip = React.useCallback((node) => {
        return `<div>${node.name}</div>`;
      }, []);
  return (
    <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#F2F1F1"}}>
      <CardContent>
            {/* <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} /> */}
      </CardContent>
    </Card>
  );
}