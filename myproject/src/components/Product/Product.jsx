import React from "react";
import Footer from "../Cart/Footer.jsx";
import ProductCafe from "./ProductCafe.jsx";
import ProductCake from "./ProductCakes.jsx";
import ProductMT from "./ProductMilktea.jsx";
import Head from "./Head.jsx";
import Search from "./Search.jsx";
import Navbar from "./Navbar.jsx";


const Product = ({ ProductItems, addToCart, ProductCakes, ProductMt, CartItem }) => {
    return (
        <>
            <Head />
            <Search CartItem={CartItem}/>
            <Navbar />
            <section className='flash background'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa-solid fa-mug-saucer'></i>
                        <h1>Cà phê</h1>
                    </div>
                    <ProductCafe ProductItems={ProductItems} addToCart={addToCart}/>
                </div>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa-solid fa-cake-candles'></i>
                        <h1>Bánh</h1>
                    </div>
                    <ProductCake ProductCakes={ProductCakes} addToCart={addToCart}/>
                </div>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Trà sữa</h1>
                    </div>
                    <ProductMT ProductMt={ProductMt} addToCart={addToCart}/>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Product;