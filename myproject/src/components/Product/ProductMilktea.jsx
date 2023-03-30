import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import Database from "./Cdata";

const ProductMT = ({ ProductMt, addToCart }) => {
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
                {ProductMt.map((ProductMt) => {
                    return (
                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                    {/* <span className="discount">{productItems.discount}% Off</span> */}
                                    <img src={ProductMt.cover} alt="" />
                                    <div className="product-like">
                                        <label>{count}</label> <br />
                                        <i className="fa-regular fa-heart" onClick={() => increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{ProductMt.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{ProductMt.price}</h4>
                                        <button onClick={() => addToCart(ProductMt)}>
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

export default ProductMT;