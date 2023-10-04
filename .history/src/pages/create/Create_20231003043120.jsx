import { Box, InputAdornment, TextField } from "@mui/material";
import "./Create.css";

function Create() {
  return (
    <div>
      <Box component="form" className="border" sx={{ width: "380px" }}>
        <TextField
          fullWidth={true}
          label="Transaction Title"
          id="standard-start-adornment"
          sx={{}}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        
      </Box>
    </div>
  );
}

export default Create;
