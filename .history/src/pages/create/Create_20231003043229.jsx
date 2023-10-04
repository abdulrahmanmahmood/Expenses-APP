import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";

function Create() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
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
        <ColorButton variant="contained">Custom CSS</ColorButton>
      </Box>
    </div>
  );
}

export default Create;
