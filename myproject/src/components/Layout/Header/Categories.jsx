import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
    const data = [
        {
            cateImg: "./images/categories/cafe1.png",
            cateName: "Cà phê",
        },
        {
            cateImg: "./images/categories/che1.png",
            cateName: "Chè",
        },
        {
            cateImg: "./images/categories/tra_sua01.png",
            cateName: "Trà sữa",
        },
        {
            cateImg: "./images/categories/banh.png",
            cateName: "Bánh",
        },
    ]
    return (
        <>
            <div className='category'>
                {data.map((value, index) => {
                    return (
                        <Link to="/product">
                        <div className='box f_flex' key={index}>

                                <img src={value.cateImg} alt='' />
                                <span>{value.cateName}</span>

                        </div></Link>
                    )
                })}
            </div>
        </>
    )
}

export default Categories;