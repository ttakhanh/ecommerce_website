import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid2'>
                    <div className='box'>
                        <p>
                        Thanh toán hóa đơn với thẻ tín dụng hoặc ví điện tử sẽ nhận được ưu đãi miễn phí giao hàng.
                            Dịch vụ giao hàng tận nơi với cước phí vô cùng rẻ và giảm đến 90% khi giao trong bán kính 4km.
                        </p>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <i class='fa-solid fa-truck-fast'></i>
                                <span>Giao hàng tận nơi</span>
                            </div>
                            <div className='img d_flex'>
                                <i class='fa-regular fa-credit-card'></i>
                                <span>Thanh toán nhanh</span>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h2>Về chúng tôi</h2>
                        <ul>
                            <li>Tuyển dụng</li>
                            <li>Cửa hàng</li>
                            <li>Dịch vụ khách hàng</li>
                            <li>Điều khoản</li>
                            <li>Chính sách bảo mật thông tin khách hàng</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Dịch vụ chăm sóc khách hàng</h2>
                        <ul>
                            <li>Trung tâm CSKH </li>
                            <li>Hướng dẫn mua sắm </li>
                            <li>Theo dõi đơn hàng </li>
                            <li>Đổi trả sản phẩm </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Liên hệ</h2>
                        <ul>
                            <li>123 Võ Văn Kiệt, phường An Hòa, quận Ninh Kiều, thành phố Cần Thơ. </li>
                            <li>Email: KKfoodanddrink@gmail.com</li>
                            <li>Phone: +840 9011 7361</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer