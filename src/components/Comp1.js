import React from "react";
import { Box, Avatar, Container, Button } from "@mui/material";
import { FaCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store/index";
import { bindActionCreators } from "redux";
const Comp1 = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { Change, Reset } = bindActionCreators(actionCreators, dispatch);

  const col = ["orange", "yellow", "blue", "green", "red", "purple"];

  const handleChange = async (item) => {
    console.log(item);
    Change(item);
  };

  const resetColor = async () => {
    Reset();
  };

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
        <Box
          component="span"
          sx={{
            p: 4,
            m: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {col.map((item, index) => (
            <Box key={item} sx={{ display: "inline" }}>
              <FaCircle
                key={item}
                component="span"
                size={75}
                color={item}
                onClick={() => handleChange(item)}
              />{" "}
            </Box>
          ))}
          {state?.colorReducer && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => resetColor()}
            >
              Clear
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Comp1;
