import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const URLForm = ({ onChange }) => {
  return (
    <Box className='box'
      
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth id="outlined-basic" label="Researchgate URL" variant="outlined" onChange={onChange} />
    </Box>
  )
}

export default URLForm
