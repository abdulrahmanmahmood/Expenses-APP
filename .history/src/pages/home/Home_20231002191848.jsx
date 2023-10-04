import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";

function Home() {
  return (
    <Box>
      <Paper sx={{width:"366px", display:"flex" , justifyContent:"space-between"}}>
        <Typography variant="h6">GYP</Typography>
        <Typography variant="h6">100$</Typography>
        <IconButton>
          <Close/>
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Home;
