import { useState } from 'react';
import HorizontalTabPanel from '../components/HorizontalTabPanel';
import Box from '@mui/material/Box';

const Form = () => {
    const [key, setKey] = useState('get');

    return (
        <Box sx={{p: 8}}>
            <HorizontalTabPanel/>
        </Box>
    )

} 

export default Form