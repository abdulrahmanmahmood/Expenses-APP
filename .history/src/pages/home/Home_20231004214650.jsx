import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";
function Home() {

  useEffect(()=>{
    
  },[])

  return (
    <Box>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
          position: "relative",
        }}
      >
        <Typography variant="h6">GYP</Typography>
        <Typography variant="h6" sx={{ mr: "33px", opacity: ".8" }}>
          100$
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Home;
