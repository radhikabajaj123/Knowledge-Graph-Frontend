import { useEffect } from 'react';
import Box from '@mui/material/Box';
import NetworkDiagramGenerator from './NetworkDiagramGenerator';
import React, { useRef } from "react";
import { ForceGraph } from '../components/ForceGraph';


const OutputWindow = ({graph}) => {
    const nodeHoverTooltip = React.useCallback((node) => {
        return `<div>${node.name}</div>`;
      }, []);

    if (graph.links && graph.nodes){
        return (
            <Box sx={{p: 8}}>
                <Box style={{backgroundColor: "#F2F1F1"}}>
                        {/* <NetworkDiagramGenerator graph={graph} width={1400} height={1500}/> */}
                        <ForceGraph linksData={graph.links} nodesData={graph.nodes} nodeHoverTooltip={nodeHoverTooltip} graph={graph}/>
                </Box>
            </Box>
            
        )
    }

}

export default OutputWindow