import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
