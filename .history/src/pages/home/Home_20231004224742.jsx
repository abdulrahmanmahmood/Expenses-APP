import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/mydata")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  }, [data]);
  // const salary = data.reduce()

  return (
    <Box >
      {data.map((item) => (
        <Paper
          key={item.id}
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
          <Typography  variant="h6">{item.title}</Typography>
          <Typography variant="h6" sx={{ mr: "33px", opacity: ".8" }}>
            {item.price}$
          </Typography>
          <IconButton
            onClick={() => {
              fetch(`http://localhost:5000/mydata/${item.id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });
            }}
            sx={{ position: "absolute", top: "0", right: "0" }}
          >
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
      ))}
          <Typography variant="h6" sx={{ mr: "33px", opacity: ".8" }}>
          total price
          </Typography>
          <Typography variant="h6" sx={{ mr: "33px", opacity: ".8" ,display:"inline-block"}}>
            1500 $
          </Typography>
    </Box>
  );
}

export default Home;