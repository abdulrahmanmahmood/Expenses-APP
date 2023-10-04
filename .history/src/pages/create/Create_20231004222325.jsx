import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import { purple } from "@mui/material/colors";
import { ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate =useNavigate();
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
      <Box component="form" sx={{ width: "380px" }} noValidate autoComplete="off">
        <TextField
          onChange={(e) => {
            settitle(e.target.value);
          }}
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
          onChange={(e) => {
            setprice(Number(e.target.value));
          }}
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
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ title, price }),
            }).then(()=>{
              navigate("/")
            })
          
            
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
