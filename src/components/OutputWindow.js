import { useEffect } from 'react';
import Box from '@mui/material/Box';
import NetworkDiagramGenerator from './NetworkDiagramGenerator';
import React, { useRef } from "react";
import { ForceGraph } from '../components/ForceGraph';
import RunForceGraph from '../components/ForceGraphGenerator';


const OutputWindow = ({graph}) => {
    // const nodeHoverTooltip = React.useCallback((node) => {
    //     return `<div>${node.name}</div>`;
    //   }, []);
            return (
                <Box sx={{p: 8}}>
                    <Box style={{backgroundColor: "#F2F1F1"}} className="parentDiv">
                            {/* <NetworkDiagramGenerator graph={graph} width={1400} height={1500}/> */}
                            <RunForceGraph graph={graph}/>
                    </Box>
                </Box>
                
            )
    

}

export default OutputWindow