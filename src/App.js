import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
