import React from "react";
import { Box, Avatar, Container, Typography } from "@mui/material";
import { FaCircle } from "react-icons/fa";

const Comp2 = () => {
  return (
    <>
      <Box
        border={1}
        sx={{
          width: 300,
          height: 300,
          p: 1,
          m: 1,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="p"
          component="p"
          sx={{
            textAlign: "center",
          }}
        >
          Click any of the colour circle in the first component, to see the
          background colour change in the third component.
        </Typography>
      </Box>
    </>
  );
};

export default Comp2;
