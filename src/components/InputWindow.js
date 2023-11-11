import HorizontalTabPanel from './HorizontalTabPanel';
import Box from '@mui/material/Box';

const InputWindow = ({nodes, setNodes}) => {

    return (
        <Box sx={{p: 8}}>
            <HorizontalTabPanel nodes={nodes} setNodes={setNodes}/>
        </Box>
    )

} 

export default InputWindow