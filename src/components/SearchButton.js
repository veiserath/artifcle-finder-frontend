import React from 'react'
import Button from '@mui/material/Button';


const SearchButton = ( {onClick, url} ) => {
  const encodedString = Buffer.from(url).toString('base64');
  return (
    <Button href={`/tree/${encodedString}`} variant="contained" onClick={onClick}>Start Search</Button>
  )
}

export default SearchButton