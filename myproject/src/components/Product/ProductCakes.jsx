import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import Database from "./Cdata";

const ProductCake = ({ ProductCakes, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    }
    return (
        <>
            <Slider {...settings}>
                {ProductCakes.map((ProductCakes) => {
                    return (
                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                    {/* <span className="discount">{productItems.discount}% Off</span> */}
                                    <img src={ProductCakes.cover} alt="" />
                                    <div className="product-like">
                                        <label>{count}</label> <br />
                                        <i className="fa-regular fa-heart" onClick={() => increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{ProductCakes.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{ProductCakes.price}</h4>
                                        <button onClick={() => addToCart(ProductCakes)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </Slider>
        </>
    )
}

export default ProductCake;