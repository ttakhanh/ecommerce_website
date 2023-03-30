import React from "react";
import Categories from "./Categories.jsx";
import Slider from "./Slider.jsx";
import "./Home.css"

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container d_flex">
                    <Categories />
                    <Slider />
                </div>
            </section>
        </>
    )
}

export default Home;