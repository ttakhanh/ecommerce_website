import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ProductItem}) => {
    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="categroies d_flex">
                        <span className="fa-solid fa-bars"></span>
                        <h4>
                            Danh mục sản phẩm <i className="fa fa-chevron-down"></i>
                        </h4>
                    </div>
                    <div className="navLink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/product">
                                    Sản phẩm
                                    <span>{ProductItem}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">Về chúng tôi</Link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className="fas fa-times close home-bth"></i> :
                                    <i className="fa-solid fa-bars open"></i>
                            }
                        </button>
                    </div>
                </div>

            </header>
        </>
    )
};

export default Navbar;