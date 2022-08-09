export const Change = (value) => {
  return (dispatch) => {
    dispatch({
      type: "Change",
      value: value,
    });
  };
};

export const Reset = (value) => {
  return (dispatch) => {
    dispatch({
      type: "Reset",
    });
  };
};
