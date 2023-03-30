import React from "react";
//import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";
import "./Footer.css";
import "./Cartcss.css";

const Cart = ({ CartItem, addToCart, decreaseQty, ProductItem }) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <Head />
            <Search CartItem={CartItem}/>
            <Navbar />
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {CartItem.length === 0 && <h1 className='no-items product'>Chưa có sản phẩm nào trong Giỏ hàng của bạn.</h1>}
                        {CartItem.map((item) => {
                            const productQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>

                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price} * {item.qty}
                                            <span>{productQty}</span>
                                        </h4>
                                    </div>

                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button className="removeCart">
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <div className='cartControl d_flex'>
                                            <button className='incCart' onClick={() => addToCart(item)}>
                                                <i className='fa-solid fa-plus'></i>
                                            </button>
                                            <button className='desCart' onClick={() => decreaseQty(item)}>
                                                <i className='fa-solid fa-minus'></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='cart-item-price'></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-total product'>
                        <h2>Giỏ hàng</h2>

                        <div className=' d_flex'>
                            <ul>
                                <li>
                                    <h4>Tổng tiền: {totalPrice}</h4>
                                </li>
                            </ul>

                            <button className="cart-payment">
                                <h4>Thanh toán</h4>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Cart;