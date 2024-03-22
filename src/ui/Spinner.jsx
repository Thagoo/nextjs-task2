import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Spinner() {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"90vh"}
      >
        <CircularProgress color="inherit" />
      </Box>
    </div>
  );
}
