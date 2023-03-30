import React from "react";
import MProductCard from "./MProductCard.jsx";

const MProducts = ({ productItems, addToCart }) => {
    return (
        <>
            <section className='flash background'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Sản phẩm bán chạy</h1>
                    </div>
                    <MProductCard productItems={productItems} addToCart={addToCart} />
                </div>
            </section>
        </>
    )
}
export default MProducts;