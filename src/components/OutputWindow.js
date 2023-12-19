import Box from '@mui/material/Box';
import React, { useRef } from "react";
import RunForceGraph from '../components/ForceGraph';


const OutputWindow = ({graph}) => {
    // const nodeHoverTooltip = React.useCallback((node) => {
    //     return `<div>${node.name}</div>`;
    //   }, []);
    const svgContainer = useRef(null); // The PARENT of the SVG 
    
            return (
                <div ref={svgContainer}  style={{padding: "64px"}}>
                    <Box>
                        <Box style={{backgroundColor: "#F2F1F1"}}>
                            <RunForceGraph graph={graph} svgContainer={svgContainer}/>
                        </Box>
                    </Box>
                </div>
            )
    

}

export default OutputWindow