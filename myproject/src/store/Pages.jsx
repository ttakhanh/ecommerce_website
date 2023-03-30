import React from "react";
import Home from "../components/Home/Home.jsx";
import MProducts from "../components/Main_product/MProducts.jsx";

const Pages = ({ productItems, CartItem, addToCart }) => {
    return (
        <>
            <Home CartItem={CartItem} />
            <MProducts productItems={productItems} addToCart={addToCart} />
        </>
    )
}

export default Pages;