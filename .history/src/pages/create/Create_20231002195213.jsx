import { Box, InputAdornment, TextField } from '@mui/material'
import './Create.css'


function Create() {
  return (
    <div>
<Box>
    <TextField
            label="Transaction Title"
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