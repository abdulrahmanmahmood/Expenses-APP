import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
function Home() {
  const [data, setdata] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/mydata")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  }, [data]);

  return (
    <Box >
      {data.map((item) => {
        setTotalPrice(()=>{TotalPrice += item.price})
        return(
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
      )})}
        <Box sx={{mt:"30px",display:"flex"}}>
            <Typography variant="h6" sx={{ mr: "33px", opacity: ".8" }}>
            You spend 👉
            </Typography>
            <Typography variant="h6" sx={{ mr: "33px", opacity: ".8" }}>
              {TotalPrice} $
            </Typography>
        </Box>
    </Box>
  );
}

export default Home;
