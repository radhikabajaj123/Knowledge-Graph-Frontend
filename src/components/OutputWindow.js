import { useEffect } from 'react';
import Box from '@mui/material/Box';
import NetworkDiagramGenerator from './NetworkDiagramGenerator';
import React, { useRef } from "react";


const OutputWindow = ({graph}) => {
    
    if (graph.links && graph.nodes){
        return (
            <Box sx={{p: 8}}>
                <Box style={{backgroundColor: "#F2F1F1"}} ref={useRef}>
                        <NetworkDiagramGenerator graph={graph} width={1000} height={1000}/>
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