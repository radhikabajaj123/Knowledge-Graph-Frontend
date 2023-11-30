import Box from '@mui/material/Box';
import React, { useRef } from "react";
import RunForceGraph from '../components/ForceGraphGenerator';


const OutputWindow = ({graph}) => {
    // const nodeHoverTooltip = React.useCallback((node) => {
    //     return `<div>${node.name}</div>`;
    //   }, []);
            return (
                
                <Box sx={{p: 8}}>
                    <Box style={{backgroundColor: "#F2F1F1"}}>
                            <RunForceGraph graph={graph}/>
                    </Box>
                </Box>
                
            )
    

}

export default OutputWindow