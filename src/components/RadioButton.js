// import React from 'react'

// const RadioButton = ({ label, value, onChange }) => {
//   return (
//     <label>
//       <input type="radio" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };

// export default RadioButton



import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioButton = ({value, onChange}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Ranking</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group">
        <FormControlLabel checked={!value} control={<Radio />} label="Citations" onChange={onChange} />
        <FormControlLabel checked={value} control={<Radio />} label="References" onChange={onChange} />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButton
