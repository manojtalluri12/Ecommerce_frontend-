import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/FirstPages/HomePage";
import Register from "./components/FirstPages/Register";
import Login from "./components/FirstPages/Login";
import { EcomProvider } from "./Ecomcontext/Ecomcontext";
import Footer from "./components/Footer/Footer";
import Myproduct from "./components/secondPage/Myproduct";
import NotFound from "./components/Footer/NotFound";
import Myprofile from "./components/secondPage/Myprofile";
import Details from "./components/secondPage/Details";
import Cart from "./components/secondPage/CART/Cart";
import Orders from "./components/secondPage/Orders/Orders";
import Delivery from "./components/secondPage/address/Delivery";
import { ThemeProvider } from "./theme-context/theme-context";
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ThemeProvider>
      <EcomProvider>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Myproduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/delivery/:id" element={<Delivery/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <Footer />
        <ToastContainer/>
      </EcomProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
