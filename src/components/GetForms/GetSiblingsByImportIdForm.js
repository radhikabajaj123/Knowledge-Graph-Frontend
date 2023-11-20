import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react';

const GetSiblingsByImportIdForm = ({graph, setGraph}) => {
    const [importId, setImportId] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setImportId(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        const response = await fetch(`http://localhost:9092/get-siblings-by-importId?importId=${importId}`);

        if (response.ok) {
            const data = await response.json();
            setGraph({
                nodes: data.nodes,
                links: data.links
            });
            setImportId(''); 
            console.log(graph);    
        } else {
            setError("Invalid Input!")
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
                <TextField id="filled-basic" label="Import Id" variant="filled" type="text" value={importId} onChange={handleChange}/>
                <Button variant="contained" type="submit" >Submit</Button>
                </Stack>
                {error && <div className='error' style={{color: "#cc0000"}}>{error}</div>}
            </form>
        
        </Box>

        

        
    </div>
  )
}

export default GetSiblingsByImportIdForm;