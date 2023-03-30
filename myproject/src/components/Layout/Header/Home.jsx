import React from "react";
import Categories from "./Categories.jsx";
import Slider from "./Slider.jsx";
import Head from "./Head.jsx";
import Search from "./Search.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./Home.css"

const Home = ({ CartItem }) => {
    return (
        <>
            <Head />
            <Search CartItem={CartItem} />
            <Navbar />
            <section className="home">
                <div className="container d_flex">
                    <Categories />
                    <Slider />
                </div>
            </section>
            
            <Footer />
        </>
    )
}

export default Home;