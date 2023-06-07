import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";
import Product from "./components/Product";
import RouteNotFound from "./components/RouteNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
