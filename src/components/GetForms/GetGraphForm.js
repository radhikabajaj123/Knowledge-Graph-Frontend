import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react';

const GetGraphForm = ({graph, setGraph}) => {
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        const response = await fetch(`http://localhost:9092/get-graph`);

        if (response.ok) {
            const data = await response.json();
            setGraph({
                nodes: data.nodes,
                links: data.links
            });
            console.log(graph);    
        } else {
            setError("Unable to fetch graph")
        }
    }

  return (
    <div className="form">
        <Box
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        
            
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                <Button variant="contained" type="submit" >Get Graph</Button>
                </Stack>
                {error && <div className='error' style={{color: "#cc0000"}}>{error}</div>}
            </form>
        
        </Box>

        

        
    </div>
  )
}

export default GetGraphForm;