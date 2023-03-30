import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";

const Header = ({ CartItem }) => {
    return (
        <>
            <Head />
            <Search CartItem={CartItem}/>
            <Navbar />
            
        </>
    )
};

export default Header;
