import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ForceGraph } from "../components/ForceGraph";
import Data from '../components/Data.json';
import NetworkDiagramGenerator from './NetworkDiagramGenerator';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard({graph}) {
    const nodeHoverTooltip = React.useCallback((node) => {
        return `<div>${node.name}</div>`;
      }, []);

      if (graph.links && graph.nodes){
        return (
            <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#F2F1F1"}}>
              <CardContent>
                    <NetworkDiagramGenerator graph={graph}/>
                    {/* <ForceGraph linksData={graph.links} nodesData={graph.nodes} nodeHoverTooltip={nodeHoverTooltip} graph={graph}/> */}
              </CardContent>
            </Card>
          );
      }
        
      
      
}