import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import _store from "./store/store";
import ColourBox from "./page/ColourBox";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={_store}>
        <Routes>
          <Route path="/" element={<ColourBox />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
