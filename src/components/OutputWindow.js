import { useEffect } from 'react';
import Box from '@mui/material/Box';
import NetworkDiagramGenerator from './NetworkDiagramGenerator';
import React, { useRef } from "react";


const OutputWindow = ({graph}) => {
    const nodeHoverTooltip = React.useCallback((node) => {
        return `<div>${node.name}</div>`;
      }, []);

    if (graph.links && graph.nodes){
        return (
            <Box sx={{p: 8}}>
                <Box style={{backgroundColor: "#F4F1F1"}}>
                        <NetworkDiagramGenerator graph={graph} width={1300} height={1500}/>
                </Box>
            </Box>
            
        )
    }
    // useEffect(() => {
    //     async function displayData() {
    //         return (
    //             <Box sx={{p: 8}}>
    //                 <Card graph={graph}/>
    //             </Box>
    //         )
    //     }
    //     return displayData;
    // }, [graph])

}

export default OutputWindow