import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react';

const GetNodeByNameForm = ({graph, setGraph}) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        const response = await fetch(`http://localhost:9092/get-node-by-name?name=${name}`);

        if (response.ok) {
            const data = await response.json();
            setGraph({
                nodes: data.nodes,
                links: data.links
            });
            setName(''); 
            console.log(graph);    
        } else {
            setError("Invalid Input!")
        }
    }
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setError('');
        
    //     const response = await fetch(`http://localhost:9092/get-node-by-importId?importId=${importId}`);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setGraph({
    //             nodes: data.nodes,
    //             links: data.links
    //         })
    //         setImportId('');
    //         console.log(graph);
    //     }
    //      else {
    //         setError("Invalid input!");
    //     }
    // }

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
                <TextField id="filled-basic" label="Name" variant="filled" type="text" value={name} onChange={handleChange}/>
                <Button variant="contained" type="submit" >Submit</Button>
                </Stack>
                {error && <div className='error' style={{color: "#cc0000"}}>{error}</div>}
            </form>
        
        </Box>

        

        
    </div>
  )
}

export default GetNodeByNameForm;