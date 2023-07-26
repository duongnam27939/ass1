import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./page/productList";
import AddProducts from "./page/add";
import UpdateProducts from "./page/update";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/edit/:id" element={<UpdateProducts />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
