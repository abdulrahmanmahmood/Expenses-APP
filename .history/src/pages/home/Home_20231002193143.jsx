import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";

function Home() {
  return (
    <Box>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt:"22px",
          pt:"27px",
          pb:"7px",
          position:"relative"
        }}
      >
        <Typography variant="h6">GYP</Typography>
        <Typography variant="h6">100$</Typography>
        <IconButton sx={{position:"absolute", ml:"auto"}}>
          <Close />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Home;
