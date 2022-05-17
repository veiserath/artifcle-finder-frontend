import React from 'react'
import Button from '@mui/material/Button';


const SearchButton = ( {onClick} ) => {
  return (
    <Button href='/tree' variant="contained" onClick={onClick}>Start Search</Button>
  )
}

export default SearchButton