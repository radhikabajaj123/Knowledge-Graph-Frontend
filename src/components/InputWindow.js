import HorizontalTabPanel from './HorizontalTabPanel';
import Box from '@mui/material/Box';

const InputWindow = ({graph, setGraph}) => {

    return (
        <Box sx={{p: 8}}>
            <HorizontalTabPanel graph={graph} setGraph={setGraph}/>
        </Box>
    )

} 

export default InputWindow