import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import { useState} from 'react';

const Form = () => {
    const [importId, setImportId] = useState([]);
    const [node, setNode] = useState({})

    const handleChange = (event) => {
        setImportId(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:9092/get-node?id=${importId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setNode(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

  return (
    // <form onSubmit={handleSubmit}>
    //     <span>
    //         <input type="text" value={importId} onChange={handleChange}></input>
    //         <button type="submit">Submit</button>
    //     </span>
    // </form>
    <Box
    // component="form"
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
        </form>
    
    </Box>
  )
}

export default Form;