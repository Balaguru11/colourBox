import React from "react";
import { Container, Grid, Box, Typography, Divider } from "@mui/material";

import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import Comp3 from "../components/Comp3";

const ColourBox = () => {
  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box sx={{ pt: 2, justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h6" component="h6">
            Colour Box
          </Typography>
          <Divider></Divider>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", p: 3, m: 2 }}>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <Comp1 />
            </Grid>
            <Grid item lg={4}>
              <Comp2 />
            </Grid>
            <Grid item lg={4}>
              <Comp3 />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ColourBox;
