import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { ArrowRight } from "@mui/icons-material";

function Create() {
  const ColorButton = styled(Button)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.secondary.main,
    },

    backgru

    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div>
      <Box component="form"  sx={{ width: "380px" }}>
        <TextField
          fullWidth={true}
          label="Transaction Title"
          sx={{mt:"22px", display:"block"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">👉</InputAdornment>,
          }}
          variant="filled"
        />
          <TextField
          fullWidth={true}
          label="Amount"
          sx={{mt:"22px", display:"block"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
        <ColorButton sx={{mt:"20px"}} variant="contained">
          Submit <ArrowRight/>
        </ColorButton>
      </Box>
    </div>
  );
}

export default Create;
