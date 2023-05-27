import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
