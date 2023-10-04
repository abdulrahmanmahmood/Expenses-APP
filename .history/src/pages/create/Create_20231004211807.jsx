import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { ArrowRight } from "@mui/icons-material";
import { useState } from "react";

function Create() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  return (
    <div>
      <Box component="form" sx={{ width: "380px" }}>
        <TextField
        onChange={() => { set }}
          fullWidth={true}
          label="Transaction Title"
          sx={{ mt: "22px", display: "block" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <TextField
          fullWidth={true}
          label="Amount"
          sx={{ mt: "22px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
        <ColorButton
          onClick={() => {
            fetch("http://localhost:5000/mydata", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify()
            });
          }}
          sx={{ mt: "20px" }}
          variant="contained"
        >
          Submit <ArrowRight />
        </ColorButton>
      </Box>
    </div>
  );
}

export default Create;
