import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import newsLetterImg from '../../assets/images/newsletter.png';
import Button from '@mui/material/Button';
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">Giảm 100k cho đơn hàng đầu tiên</p>
                            <h3 className="text-white">Tham gia nhận bảng tin nhận nhiều ưu đãi</h3>
                            <p className="text-light">Tham gia đăng ký email của chúng tôi ngay bây giờ<br />để nhận thông tin cập nhật về khuyến mãi.</p>


                            <form className="mt-4">
                                <IoMailOutline />
                                <input type="text" placeholder="Email" />
                                <Button>Đăng ký</Button>
                            </form>

                        </div>

                        <div className="col-md-6">
                            <img src={newsLetterImg} />
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="topInfo row">
                        <div className="col d-flex align-items-center">
                            <span><LuShirt /></span>
                            <span className="ml-2">Chất liệu có chất lượng hàng đầu</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <span><TbTruckDelivery /></span>
                            <span className="ml-2">Miễn phí giao hàng toàn quốc</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <span><TbDiscount2 /></span>
                            <span className="ml-2">Siêu giảm giá mỗi ngày</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <span><CiBadgeDollar /></span>
                            <span className="ml-2">Giá tốt nhất thị trường</span>
                        </div>
                    </div>



                    <div className="row mt-5 linksWrap">
                        <div className="col-md-3">
                            <h5>Dịch vụ khách hàng</h5>
                            <ul>
                                <li><Link to="#">Chính sách khách hàng thân thiết</Link></li>
                                <li><Link to="#">Chính sách đổi trả</Link></li>
                                <li><Link to="#">Chính sách bảo mật</Link></li>
                                <li><Link to="#">Chính sách sử dụng Cookies</Link></li>
                                <li><Link to="#">Chính sách thanh toán, giao nhận</Link></li>
                                <li><Link to="#">Chính sách đơn đồng phục</Link></li>
                                <li><Link to="#">Hướng dẫn chọn size</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5>Về KonoLife</h5>
                            <ul>
                                <li><Link to="#">Giới thiệu</Link></li>
                                <li><Link to="#">Liên hệ</Link></li>
                                <li><Link to="#">Tuyển dụng</Link></li>
                                <li><Link to="#">Tin tức</Link></li>
                                <li><Link to="#">Hệ thống cửa hàng</Link></li>
                                <li><Link to="#">Tin khuyến mãi</Link></li>
                            </ul>
                        </div>

                        <div className="colmd-6">
                            <h5>KONOLIFE luôn lắng nghe bạn</h5>
                            <ul>
                                <li><Link to="#">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng <br/> để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</Link></li>
                                <li><Link to="#">Liên hệ đặt hàng: 0989415263</Link></li>
                                <li><Link to="#">Góp ý khiếu nại: 18002086</Link></li>
                                <li><Link to="#">Địa chỉ liên hệ: 828 Sư Vạn Hạnh - Phường 14 - Quận 10, TPHCM</Link></li>
                                <li><Link to="#">Email: cskh@kono.vn</Link></li>
                            </ul>
                        </div>

                        
                    </div>



                    <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0">Copyright 2024. All rights reserved. Power by Minhi.</p>
                        <ul className="list list-inline ml-auto mb-0 socials">
                            <li className="list-inline-item">
                                <Link to="https://www.facebook.com/minhy.nguyen.1410/" target="_blank"><FaFacebookF /></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="https://x.com/blanatole" target="_blank"><FaTwitter /></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="https://www.instagram.com/_blanatole.it/?hl=en" target="_blank"><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer;