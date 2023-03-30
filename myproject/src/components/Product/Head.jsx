import React from "react";
import "./Header.css";

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <label>Chè quán K & K - mang lại vị ngon truyền thống</label>
                    </div>
                    <div className="right row RText">
                        <i className="fa fa-phone"></i>
                        <label>+840 9011 7361</label>
                        <i className="fa fa-envelope"></i>
                        <label>KKfoodanddrink@gmail.com</label>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Head;