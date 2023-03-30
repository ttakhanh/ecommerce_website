import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo002.png"

const Search = ({ CartItem }) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <img onClick="/" src={logo} alt="" />
                    </div>

                    <div className="search-box f_flex">
                        <input type="text" placeholder="Nhập tên sản phẩm cần tìm..." />
                        <Link><i className="fa fa-search"></i></Link>
                    </div>

                    <div className="icon f_flex width">
                        <div className="account">
                            <Link to="/register">
                                <i className="fa fa-user icon-circle"></i>
                                <p>hi</p>
                            </Link>
                        </div>

                        <div className="cart">
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Search;