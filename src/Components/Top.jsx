import { Box, Typography } from "@mui/material";
import React from "react";

function Top() {
  return (
    <Box
    sx={{
      paddingTop: { xs: "5px", md: "10px" },
      borderRadius: 1,
      height: { xs: "50px", md: "65px" },
    }}
  >
    <Typography
      variant="h2"
      sx={{
        color: "aqua",
        fontFamily:"cursive",
        fontWeight: "800",
        letterSpacing: { xs: "4px", md: "8px" },
        fontSize: { xs: "20px", md: "30px" },
      }}
    >
      Touch Typing
    </Typography>
  </Box>
  
  );
}

export default Top;
