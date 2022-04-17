import "./App.css";
import React, { createContext, useState } from "react";
import Menu from "./compotation/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./compotation/Detail";
import Details from "./compotation/Details";
import User from "./compotation/User";
import Users from "./compotation/Users";

import ProductServices from "./services/productServices";
export const ProductContext = createContext();
function App() {
  const [state, setState] = useState({
    bookList: "ProductServices",
    cart: [],
  });
  const addToCart = (product) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };
  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              count: cartItem.count > 1 ? cartItem.count - 1 : 1,
            }
          : cartItem
      ),
    });
  };

  return (
    <ProductContext.Provider
      value={{
        state: state,
        addToCart,
        ProductServices,
        increase,
        decrease,
        removeFromCart,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route exact path="detail/" element={<Detail />} />
          <Route path="detail/user" element={<User />} />
          <Route exact path="/adress" element={<Users />} />
          <Route path="/products/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
