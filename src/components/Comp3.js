import React from "react";
import { Box, Avatar, Container } from "@mui/material";
import { FaCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store/index";
import { bindActionCreators } from "redux";

const Comp3 = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

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
          backgroundColor: state?.colorReducer ? state.colorReducer : "",
        }}
      >
        {/* <Box
          component="span"
          sx={{
            p: 4,
            m: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {col.map((item, index) => (
            <>
              <FaCircle key={item} component="span" size={75} color={item} />{" "}
            </>
          ))}
        </Box> */}
      </Box>
    </>
  );
};

export default Comp3;
