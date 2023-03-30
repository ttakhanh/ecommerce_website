import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from '../components/Layout/Header/Home.jsx';
import Pages from '../store/Pages.jsx';
import Data from "../components/Main_product/Data.js";
import Cart from "../components/Cart/Cart.jsx";
import Login from "../components/Layout/Header/Login.jsx";
import Register from "../components/Login/Register.jsx";
import Footer from "../components/Layout/Footer/Footer.jsx";
import Product from "../components/Product/Product.jsx";
import Database from "../components/Product/Cdata.js";
//import store from "../redux/store.jsx";
//import Navbar from "../components/Layout/Header/Navbar.jsx";

function App() {
  const { productItems } = Data
  const { ProductItems, ProductCakes, ProductMt } = Database
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    // <Router>
    //   <Header CartItem={CartItem} />
    //   <Switch>
    //     <Route path="/" exact>
    //       <Pages productItems={productItems} addToCart={addToCart} />
    //     </Route>

    //     <Route path="/cart" exact>
    //       <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
    //     </Route>

    //     <Route path="/register">
    //       <Register />
    //     </Route>

    //     <Route path="/login">
    //       <Login />
    //     </Route>

    //     <Route path="/product" exact>
    //       <Product
    //         CartItem={CartItem}
    //         addToCart={addToCart}
    //         decreaseQty={decreaseQty}
    //         ProductItems={ProductItems}
    //         ProductCakes={ProductCakes}
    //         ProductMt={ProductMt}
    //       />
    //     </Route>

    //   </Switch >
    //   <Footer />
    // </Router>
    <Routes>
      <Route path='/' element={<Home CartItem={CartItem} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
      <Route path='/product' element={
        <Product
          CartItem={CartItem}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
          ProductItems={ProductItems}
          ProductCakes={ProductCakes}
          ProductMt={ProductMt}
        />} />
      <Route path='/page' element={<Pages productItems={productItems} addToCart={addToCart}/>}/>
    </Routes>

  );
}

export default App;

