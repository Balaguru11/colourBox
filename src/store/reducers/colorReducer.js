const colorReducer = (state = "", action) => {
  switch (action.type) {
    case "Change":
      state = action.value;
      return state;
    case "Reset":
      return (state = "");
    default:
      return state;
  }
};

export default colorReducer;
