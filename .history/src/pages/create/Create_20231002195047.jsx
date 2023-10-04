import { Box, TextField } from '@mui/material'
import './Create.css'


function Create() {
  return (
    <div>
<Box>
    <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            }}
            variant="standard"
          />
</Box>

    </div>

  )
}

export default Create