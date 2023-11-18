import { useEffect } from 'react';
import Card from '../components/Card'
import Box from '@mui/material/Box';

const OutputWindow = ({graph, setGraph}) => {
    useEffect(() => {
        async function displayData() {
            return (
                <Box sx={{p: 8}}>
                    <Card graph={graph} setGraph={setGraph}/>
                </Box>
            )
        }
        return displayData;
    }, [graph])

}

export default OutputWindow