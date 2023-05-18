import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const { accuracy, pressedkey, wpm } = useSelector(
    (store) => store.AppReducer
  );
  return (
    <Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "30px" } }}>
        WPM: {wpm}
      </Typography>
      <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "30px" } }}>
        Accuracy: {`${accuracy}%`}
      </Typography>
    </Box>
    <Typography sx={{ marginTop: "20px" }}>
      <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
        Number of keys pressed in 5 minutes: {pressedkey}
      </Typography>
    </Typography>
  </Box>
  
  );
}

export default Result;
