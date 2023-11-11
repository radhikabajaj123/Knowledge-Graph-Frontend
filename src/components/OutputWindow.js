import Card from '../components/Card'
import Box from '@mui/material/Box';

const OutputWindow = ({nodes}) => {
    return (
        <Box sx={{p: 8}}>
            <Card nodes={nodes}/>
        </Box>
    )
}

export default OutputWindow