import React from 'react'
import Button from '@mui/material/Button';

const SearchButton = ( {onClick} ) => {
  return (
    <Button  variant="contained" onClick={onClick}>Start Search</Button>
  )
}

export default SearchButton