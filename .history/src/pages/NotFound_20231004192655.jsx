import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const NotFound = () => {
  const theme = useTheme()
  return (
    <Box >
      <Typography color={theme.pal} variant="h4">
        There is no design yet
        <br />
        <br />
        Please try again later....
      </Typography>
    </Box>
  );
};

export default NotFound;
